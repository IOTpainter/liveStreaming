<template>
    <div>
        <i class="iconfont icon-maijiagouwuche"></i>
        <div>
            <video ref="video" class="video1" autoplay mutedposter="../../assets/img/videoback1.png">
                Your browser is too
                old which doesn't support HTML5 video.</video>
        </div>
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
        }
    },
    mounted() {
        this.hls = new Hls();
        this.hls.autoplay = true;
        this.hls.isLive = true;
        this.hls.controls = false;
        this.hls.preload = 'auto';
        this.hls.attachMedia(this.$refs.video);
        this.hls.loadSource("http://wshls.live.migucloud.com/live/0VGANCXY_C0/playlist.m3u8");
        this.hls.on(Hls.Events.MANIFEST_PARSED, function () {
            this.$refs.video.play();
        });
    },
}
</script>

<style type="less" scoped>
.video1 {
    width: 100%;
    /* height: 100%; */
}
</style>
