<template>
    <div class="live-m">
        <p>在线监控平台<i class="iconfont icon-kuaisugaoxiao"></i></p>
        <div class="content-m">
            <p>{{ liveTitleM }}</p>
            <video ref="video" class="video1" muted="true" controls autoplay
                mutedposter="../../assets/img/videoback1.png">
                Your browser is too
                old which doesn't support HTML5 video.</video>
        </div>
        <el-tree :data="liveData" :props="defaultProps" accordion @node-click="liveChooseClick" empty-text="监控源暂无数据"
            boolean="true" />
    </div>
</template>
<script>
// import Flv from 'flv.js';
import Hls from 'hls.js';

export default {
    name: 'LiveStreaming',
    data: function () {
        return {
            hls: null,
            liveTitleM: "暂无直播源",
            defaultProps: {
                children: 'children',
                label: 'title',
            }
        }
    },
    computed: {
        liveData: {
            get() {
                return this.$store.state.liveDatas;
            }
        }
    },
    mounted() {
        let player = this.$refs.video;
        this.hls = new Hls();
        this.hls.autoplay = true;
        // this.hls.isLive = true;
        // this.hls.controls = false;
        // this.hls.preload = 'auto';
        // this.hls.attachMedia(this.$refs.video);
        this.hls.attachMedia(player);
        this.hls.loadSource("http://wshls.live.migucloud.com/live/0VGANCXY_C0/playlist.m3u8");
        this.liveTitleM = "武汉光谷广场";
        this.hls.on(Hls.Events.MANIFEST_PARSED, function () {
            if (player.readyState == 4) {
                !player.paused ? player.pause() : player.play();
            }

            // this.$refs.video.play();
        });
        this.hls.on(Hls.Events.ERROR, function (event, data) {
            if (data.fatal) {
                switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        // try to recover network error
                        console.log('fatal network error encountered, try to recover');
                        this.hls.startLoad();
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.log('fatal media error encountered, try to recover');
                        this.hls.recoverMediaError();
                        break;
                    default:
                        // cannot recover
                        this.hls.destroy();
                        break;
                }
            }
        });
    },
    methods: {
        liveChooseClick(data) {
            if (data?.type == 'hls') {
                this.hls.loadSource(data.url);
                this.liveTitleM = data.title;
            }
        },
    }
}
</script>

<style type="less" scoped>
.live-m {
    /* display: flex; */
    flex-direction: column;
}

.live-m>p {
    /* height: 21px; */
    color: cornflowerblue;
}

.content-m>p {
    position: absolute;
    color:white;
    font-size: 12px;
    top: 40px;
    z-index: 999;
}

.video1 {
    width: 100%;
    height: 210.38px;
}

.el-tree {
    /* flex: 1; */
}
</style>
