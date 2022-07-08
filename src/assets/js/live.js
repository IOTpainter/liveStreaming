/* eslint-disable */ 
layui.use(['tree'], function () {
    var tree = layui.tree;
    var obtainUrl = '';
    var obtainType = '';
    var obtainName = '';
    console.clear();
    const flipping = new Flipping();
    let state = {
        photo: 0
    };
    new Vue({
        el: '#app',
        data: function () {
            return {
                videoids: ["videoElement1", 'videoElement2', 'videoElement3', 'videoElement4', 'videoElement5', 'videoElement6', 'videoElement7', 'videoElement8', 'videoElement9'],
                videosContainerClass: 'videosContainer',
                videoShowNum: 4,
                carouselItemNum: 3,
                switchIconFlag: false,
                videoNames: ["", "", "", "", "", "", "", "", ""],
                videoUrls: ["", "", "", "", "", "", "", "", ""],
                videoTypes: ["", "", "", "", "", "", "", "", ""],
                urls: [],
                players: [],
                urlIndex: -1,
                liveDatas: [
                    {
                        title: '北京冬奥会',
                        id: 101,
                        children: [{
                            title: '北京卫视',
                            id: 1011,
                            url: 'https://hsplay-360.v.btime.com/live_btime/btv_sn_20170706_s1/index.m3u8?time=1645673765&sign=c1ea470b5021ba3666e1d43d58b69021',
                            type: 'hls'
                        }, {
                            title: '三沙卫视',
                            id: 1017,
                            url: 'http://stream3.hnntv.cn/ssws/sd/live.m3u8?_upt=7e0b3b721645681263',
                            type: 'hls'
                        }, {
                            title: '东方卫视',
                            id: 1018,
                            url: 'https://aliyun-stream.kksmg.com/live/dfws.m3u8?auth_key=1645680311-71860424-0-0d92eb2135dafe7e094bef7459b244e9&se=kankan&ct=7&_mode=1&_cp=1&_fk=14302D7735D11ECEE9F42F30771A50A1FBEF8BF78B2158175BCEAA1321243EE2&ts=1645673107&rand=695c358753bffd32c27f32bf1106d016',
                            type: 'hls'
                        }, {
                            title: '我国自主研发潮流能发电机组舟山下海',
                            id: 1012,
                            url: 'https://bililive.kksmg.com/hls/2018linshi009/playlist.m3u8?wsSession=d3493b47f3661f270847c4aa-164567348252446&wsIPSercert=c216e7954bad9ec021988bc59dab1e63&wsMonitor=0',
                            type: 'hls'
                        }, {
                            title: '上海陆家嘴',
                            id: 1013,
                            url: 'https://bililive.kksmg.com/hls/sdi70/playlist.m3u8?wsSession=d3493b47f3661f270847c4aa-164567357726606&wsIPSercert=c216e7954bad9ec021988bc59dab1e63&wsMonitor=0',
                            type: 'hls'
                        }, {
                            title: '上海魔都眼',
                            id: 1014,
                            url: 'https://bililive.kksmg.com/hls/sdi80/playlist.m3u8?wsSession=d3493b47f3661f270847c4aa-164567361867562&wsIPSercert=c216e7954bad9ec021988bc59dab1e63&wsMonitor=0',
                            type: 'hls'
                        }, {
                            title: '上海外滩',
                            id: 1015,
                            url: 'https://bililive.kksmg.com/hls/sdi30/playlist.m3u8?wsSession=d3493b47f3661f270847c4aa-164567365341586&wsIPSercert=c216e7954bad9ec021988bc59dab1e63&wsMonitor=0',
                            type: 'hls'
                        }, {
                            title: '乌克兰',
                            id: 1016,
                            url: 'https://bililive.kksmg.com/hls/vmix/playlist.m3u8?wsSession=d29148756882426ca41a0b5d-164567369722828&wsIPSercert=c216e7954bad9ec021988bc59dab1e63&wsMonitor=0',
                            type: 'hls'
                        }]
                    },
                    {
                        title: '湖北',
                        id: 1,
                        children: [{
                            title: '武汉',
                            id: 11,
                            children: [{
                                title: '湖北武汉两江四岸',
                                id: 112,
                                url: 'https://gcksc.v.kcdnvip.com/gc/emspxps_1/index.m3u8?BR=md&amp;region=beijing',
                                type: 'hls'
                            }, {
                                title: '湖北武汉江汉关',
                                id: 113,
                                url: 'https://gcksc.v.kcdnvip.com/gc/nywbwg01_1/index.m3u8?BR=md&amp;region=beijing',
                                type: 'hls'
                            }, {
                                title: '湖北武汉光谷广场',
                                id: 114,
                                url: 'http://wshls.live.migucloud.com/live/0VGANCXY_C0/playlist.m3u8',
                                type: 'hls'
                            }, {
                                title: '湖北武汉江汉关(无水印版)',
                                id: 115,
                                url: 'http://play-a11.quklive.com/live/1617857941682917.m3u8',
                                type: 'hls'
                            }, {
                                title: '武汉新洲邾城街',
                                id: 116,
                                url: 'https://gcksc.v.kcdnvip.com/gc/hsptgz_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }]
                        }, {
                            title: '宜昌',
                            id: 12,
                            children: [{
                                title: '湖北宜昌三峡大坝',
                                id: 121,
                                url: 'https://gcksc.v.kcdnvip.com/gc/jhs01_1/index.m3u8?BR=md&amp;region=beijing',
                                type: 'hls'
                            }, {
                                title: '湖北宜昌许家冲村',
                                id: 122,
                                url: 'https://gcalic.v.myalicdn.com/gc/ytsxzg_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '宜昌王家岭村柑橘园',
                                id: 123,
                                url: 'https://gcalic.v.myalicdn.com/gc/hkts06_1/index.m3u8?contentid=2820180516001',
                                type: 'hls',
                                info: '湖北省宜昌市秭归县王家岭村，总面积11.34平方公里，以“生态绿茶名村、优质柑橘富村、水陆码头兴村”为总体目标，柑橘、茶叶为主导产业。王家岭贡茶历史悠久，柑橘年产量2.6万吨，经济总收入过亿元。王家岭村党总支曾获得“宜昌市委先进基层组织”“宜昌市法治示范村”“湖北省绿色生态示范村”等荣誉。'
                            }, {
                                title: '湖北宜昌水竹园村',
                                id: 124,
                                url: 'https://gcalic.v.myalicdn.com/gc/ljgcwglytylxs_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '宜昌枝江百里洲',
                                id: 125,
                                url: 'https://gcksc.v.kcdnvip.com/gc/blg05_1/index.m3u8?BR=md&region=beijing',
                                type: 'hls'
                            }, {
                                title: '五峰县柴埠溪大峡谷',
                                id: 126,
                                url: 'https://gcbdc.a.bdydns.com/gc/hkylxs01_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '兴山高铁站',
                                id: 126,
                                url: 'https://gcksc.v.kcdnvip.com/gc/cntv393-zbzg_1/index.m3u8?BR=md&region=beijing',
                                type: 'hls'
                            }, {
                                title: '湖北远安县桃花岛',
                                id: 127,
                                url: 'https://gcalic.v.myalicdn.com/gc/cntv403-zbzg_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }, {
                            title: '十堰',
                            id: 13,
                            children: [{
                                title: '湖北十堰武当山',
                                id: 131,
                                url: 'https://gcksc.v.kcdnvip.com/gc/hswlf_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '十堰竹山县城区',
                                id: 132,
                                url: 'https://gcbdc.a.bdydns.com/gc/hkylxs03_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '湖北十堰竹溪桃花岛',
                                id: 133,
                                url: 'https://gcksc.v.kcdnvip.com/gc/jhs05_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '湖北十堰郧西县五龙河',
                                id: 134,
                                url: 'https://gcksc.v.kcdnvip.com/gc/mdjxxdsb_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }]
                        }, {
                            title: '恩施',
                            id: 14,
                            children: [{
                                title: '湖北恩施鹿院坪',
                                id: 141,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/hkylxs03_1_md.m3u8',
                                type: 'hls'
                            }, {
                                title: '湖北恩施佛宝山景区',
                                id: 142,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/tyhjntyz_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '湖北建始县高坪镇花硒谷',
                                id: 143,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/drs01_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '湖北恩施野三关',
                                id: 144,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/tms04_1_md.m3u8',
                                type: 'hls'
                            }]
                        }, {
                            title: '神农架',
                            id: 15,
                            children: [{
                                title: '湖北神农架国际滑雪场',
                                id: 151,
                                url: 'https://gcbdc.a.bdydns.com/gc/zh03_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }, {
                            title: '天门',
                            id: 16,
                            children: [{
                                title: '湖北天门陆羽故园',
                                id: 161,
                                url: 'https://gcksc.v.kcdnvip.com/gc/zh02_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            },
                            {
                                title: '湖北多祥镇天门工业园',
                                id: 162,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/hkylxs07_1/index.m3u8?contentid=2820180516001',
                                type: 'hls',
                                info: '天门工业园位于天门、仙桃、汉川三市交界处，紧临汉江，与仙桃市区一桥相连，拥有高速公路、高速铁路、河道运输三位一体的黄金交通优势。天门工业园以环保新能源、通信电子、农林产品深加工、盐化工、非纺产品、食品及仓储物流为主导发展产业，充分利用“武汉‘1+8城市圈”建设“两型社会”的重大历史机遇，着力建设“三区一中心”，发挥独特区位优势积极承接武汉城市圈及东部沿海发达地区的产业转移，建设现代工业加工区。'
                            }]
                        }, {
                            title: '黄冈',
                            id: 17,
                            children: [{
                                title: '湖北黄冈蕲春县古镇',
                                id: 171,
                                url: 'https://gcksc.v.kcdnvip.com/gc/hkylxs09_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '湖北黄冈牛车河风景区',
                                id: 172,
                                url: 'https://gcalic.v.myalicdn.com/gc/zsslsgc_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }, {
                            title: '随州',
                            id: 18,
                            children: [{
                                title: '随州云峰山茶园',
                                id: 181,
                                url: 'https://gcalic.v.myalicdn.com/gc/hkts02_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }, {
                            title: '黄石',
                            id: 19,
                            children: [{
                                title: '湖北黄石大冶青龙山景区',
                                id: 191,
                                url: 'https://gcbdc.a.bdydns.com/gc/qdls02_1/index.m3u8?contentid=2820180516001',
                                type: 'hls',
                                info: '大冶全国百强县市之一，全国森林和文明城市，是华夏青铜文化发祥地，矿产丰富，是武汉城市圈冶金建材走廊的重要支点。大冶面积1566平方公里，交通四通八达，位于湖北省东南部，长江中游南岸，地处武汉、鄂州、黄石、九江城市带之间和湖北“冶金走廊”腹地。境内有大冶湖、保安湖、三山湖三大湖泊，风景名胜达10处，其中大冶铜绿山古矿遗址世界闻名。'
                            }, {
                                title: '黄石莲花湖湿地公园',
                                id: 192,
                                url: 'https://gcbdc.a.bdydns.com/gc/xjtcdgs_1/index.m3u8?contentid=2820180516001',
                                type: 'hls',
                                info: '莲花湖湿地公园位于湖北省黄石市阳新县，规划总面积1047.49公顷，其中湿地面积为892.21公顷，由莲花湖、大泉湖、卢家坝湖等自然湖畔组成，分为湿地保育区、恢复重建区、宣教展示区、合理利用区、管理服务区等区域，是小天鹅、白琵鹭等珍稀水禽的重要觅食区。'
                            }, {
                                title: '大冶市保安镇',
                                id: 193,
                                url: '',
                                type: 'hls'
                            }]
                        }, {
                            title: '襄阳',
                            id: 101,
                            children: [{
                                title: '湖北保康县尧帝神峡',
                                id: 1011,
                                url: 'https://gcksc.v.kcdnvip.com/gc/tjhh02_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '湖北襄阳丁湾村',
                                id: 1012,
                                url: 'https://gcbdc.a.bdydns.com/gc/sgns02_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }, {
                            title: '咸宁',
                            id: 102,
                            children: [{
                                title: '湖北通城县雁塔公园',
                                id: 1021,
                                url: 'https://gcbdc.a.bdydns.com/gc/ytsbjy_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '咸宁刘家桥景区',
                                id: 1022,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/zh03_1_md.m3u8',
                                type: 'hls'
                            }, {
                                title: '湖北襄阳南漳县春秋寨景区',
                                id: 1023,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/hssxf_1_md.m3u8',
                                type: 'hls'
                            }, {
                                title: '湖北咸宁龙隐山景区',
                                id: 1024,
                                url: 'https://gcalic.v.myalicdn.com/gc/ylh04_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }, {
                            title: '荆门',
                            id: 103,
                            children: [{
                                title: '荆门东桥镇高潮水库风景区',
                                id: 1031,
                                url: 'https://gcksc.v.kcdnvip.com/gc/hkylxs04_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '湖北荆门京山绿林寨',
                                id: 1032,
                                url: 'https://gccncc.v.wscdns.com/gc/ljgcdsc_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }, {
                            title: '仙桃',
                            id: 104,
                            children: [{
                                title: '湖北仙桃杨林尾油菜花',
                                id: 1041,
                                url: 'https://gcalic.v.myalicdn.com/gc/cntv397-zbzg_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }, {
                            title: '荆州',
                            id: 105,
                            children: [{
                                title: '湖北荆州宾阳楼',
                                id: 1051,
                                url: 'https://gcalic.v.myalicdn.com/gc/hkts06_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '湖北荆州长江江豚保护区',
                                id: 1052,
                                url: 'https://gcksc.v.kcdnvip.com/gc/hkhs01_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '湖北荆州洈水风景区',
                                id: 1053,
                                url: 'https://gcbdc.a.bdydns.com/gc/dlst02_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '湖北荆州南闸风景区',
                                id: 1054,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/sjzc01_1_md.m3u8',
                                type: 'hls'
                            }]
                        }]
                    },
                    {
                        title: '河南',
                        id: 8,
                        children: [{
                            title: '河南郑州东站',
                            id: 82,
                            url: 'https://gcksc.v.kcdnvip.com/gc/xywfl_1/index.m3u8?BR=md&region=shanghai',
                            type: 'hls'
                        }, {
                            title: '河南焦作云台山',
                            id: 81,
                            children: [{
                                title: '河南焦作云台山红石峡',
                                id: 811,
                                url: 'https://gcksc.v.kcdnvip.com/gc/ytshsx_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '河南焦作云台山小寨沟',
                                id: 812,
                                url: 'https://gcksc.v.kcdnvip.com/gc/lsdfgfl_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }]
                        }, {
                            title: '河南郑州千玺广场',
                            id: 83,
                            children: [{
                                title: '河南郑州千玺广场',
                                id: 831,
                                url: 'https://gcksc.v.kcdnvip.com/gc/zdxq01_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '河南郑州千玺广场空间站观测点',
                                id: 832,
                                url: 'https://gcalic.v.myalicdn.com/gc/hhdxg01_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }]
                    }, {
                        title: '广东',
                        id: 1,
                        children: [{
                            title: '广州',
                            id: 11,
                            children: [{
                                title: '港珠澳大桥',
                                id: 111,
                                url: 'https://gcbdc.a.bdydns.com/gc/qdls04_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }, {
                            title: '深圳',
                            id: 12,
                            children: [{
                                title: '深圳红树林观鸟',
                                id: 121,
                                url: 'https://gcbdc.a.bdydns.com/gc/pts01_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }]
                    },
                    {
                        title: '湖南',
                        id: 7,
                        children: [{
                            title: '湖南卫视',
                            id: 76,
                            url: 'http://shbu.live.bestvcdn.com.cn:8080/live/program/live/hnwshd/2300000/mnf.m3u8',
                            type: 'hls'
                        },
                        {
                            title: '湖南湘西凤凰古城',
                            id: 71,
                            children: [{
                                title: '湖南湘西凤凰古城-南华山',
                                id: 711,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/fhgcdnhs_1_md.m3u8',
                                type: 'hls'
                            },
                            {
                                title: '湖南湘西凤凰古城-东关门',
                                id: 712,
                                url: 'https://gcalic.v.myalicdn.com/gc/fhgcdgm_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }]
                        }, {
                            title: '湖南岳阳岳阳楼',
                            id: 72,
                            url: 'https://gctxyc.liveplay.myqcloud.com/gc/pts01_1_md.m3u8',
                            type: 'hls'
                        },
                        {
                            title: '湖南长沙橘子洲',
                            id: 73,
                            url: 'https://gcalic.v.myalicdn.com/gc/qdls03_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        },
                        {
                            title: '湖南张家界',
                            id: 74,
                            children: [{
                                title: '湖南张家界-西线玻璃栈道',
                                id: 741,
                                url: 'https://gcksc.v.kcdnvip.com/gc/fcw01_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            },
                            {
                                title: '湖南张家界-天门洞',
                                id: 742,
                                url: 'https://gcksc.v.kcdnvip.com/gc/tmstmd01_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            },
                            {
                                title: '湖南张家界-天空步道',
                                id: 743,
                                url: 'https://gcksc.v.kcdnvip.com/gc/hkylxs04_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            },
                            {
                                title: '湖南张家界-大峡谷景区玻璃桥',
                                id: 744,
                                url: 'https://gcksc.v.kcdnvip.com/gc/hsxkssqdzrqj_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }]
                        },
                        {
                            title: '湖南张家界武陵源景区',
                            id: 75,
                            children: [{
                                title: '湖南张家界武陵源景区-黄石寨六奇阁',
                                id: 751,
                                url: 'https://gcksc.v.kcdnvip.com/gc/szgk01_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            },
                            {
                                title: '湖南张家界武陵源景区-将军列队',
                                id: 752,
                                url: 'https://gcalic.v.myalicdn.com/gc/zjjjjdl_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            },
                            {
                                title: '湖南张家界武陵源景区-阿凡达悬浮山',
                                id: 753,
                                url: 'https://gcalic.v.myalicdn.com/gc/zjjafdxfs_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            },
                            {
                                title: '湖南张家界武陵源景区-迷魂台',
                                id: 754,
                                url: 'https://gcbdc.a.bdydns.com/gc/zjjmht_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            },
                            {
                                title: '湖南张家界武陵源景区-宝峰湖',
                                id: 755,
                                url: 'https://gcalic.v.myalicdn.com/gc/zjjbfh_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            },
                            {
                                title: '湖南张家界武陵源景区-御笔峰',
                                id: 756,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/zjjybf_1_md.m3u8',
                                type: 'hls'
                            },
                            ]
                        }]
                    }, {
                        title: '重庆',
                        id: 17,
                        children: [{
                            title: '重庆李子坝站轻轨',
                            id: '0171',
                            url: 'https://gcalic.v.myalicdn.com/gc/gccntv240-lzb01_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '重庆开州区',
                            id: '0172',
                            url: 'https://gcksc.v.kcdnvip.com/gc/zsslsgc_1/index.m3u8?BR=md&region=shanghai',
                            type: 'hls'
                        }]
                    }, {
                        title: '山东',
                        id: 15,
                        children: [{
                            title: '山东青岛五四广场',
                            id: 151,
                            url: 'https://gcalic.v.myalicdn.com/gc/hkhs01_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '济南千佛山望泉城',
                            id: 152,
                            url: 'https://gcalic.v.myalicdn.com/gc/taishan05_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '山东华东野战军纪念馆',
                            id: 153,
                            url: 'https://gctxyc.liveplay.myqcloud.com/gc/jsh06_1_md.m3u8',
                            type: 'hls'
                        }, {
                            title: '青岛奥帆中心',
                            id: 154,
                            url: 'https://gcksc.v.kcdnvip.com/gc/bgws7_1/index.m3u8?BR=md&region=shanghai',
                            type: 'hls'
                        }, {
                            title: '山东蓬莱海洋极地世界：江豚',
                            id: 154,
                            url: 'https://gcbdc.a.bdydns.com/gc/sbd01_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '山东泰山',
                            id: 155,
                            children: [{
                                title: '玉皇顶',
                                id: 1551,
                                url: 'https://gcalic.v.myalicdn.com/gc/taishan06_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '泰山拱北石',
                                id: 1552,
                                url: 'https://gcksc.v.kcdnvip.com/gc/taishan04_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '大观峰',
                                id: 1553,
                                url: 'https://gcksc.v.kcdnvip.com/gc/taishan03_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '泰山主峰',
                                id: 1554,
                                url: 'https://gcalic.v.myalicdn.com/gc/taishan01_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '望人松',
                                id: 1555,
                                url: 'https://gcksc.v.kcdnvip.com/gc/taishan02_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '泰山天街',
                                id: 1556,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/taishan07_1_md.m3u8',
                                type: 'hls'
                            }]
                        }]
                    },
                    {
                        title: '北京',
                        id: 2,
                        children: [{
                            title: '北京广场直播',
                            id: 21,
                            url: 'https://gcksc.v.kcdnvip.com/gc/tyhjtys_1/index.m3u8?BR=md&amp;region=beijing',
                            type: 'hls'
                        }, {
                            title: '北京黄花城长城',
                            id: 22,
                            url: 'https://gcalic.v.myalicdn.com/gc/wgw01_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        },
                        {
                            title: '北京黄花城长城2',
                            id: 23,
                            url: 'https://gctxyc.liveplay.myqcloud.com/gc/wgw04_1_md.m3u8',
                            type: 'hls'
                        },
                        {
                            title: '北京海洋馆直播',
                            id: 24,
                            url: 'https://gcbsc.v.live.baishancdnx.cn/gc/hkts03_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }]
                    }, {
                        title: '陕西',
                        id: 12,
                        children: [{
                            title: '西安浐灞生态区广运大桥',
                            id: 121,
                            url: 'https://gcalic.v.myalicdn.com/gc/qdls01_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '陕西洋县国宝朱鹮',
                            id: 122,
                            children: [{
                                title: '朱鹮01',
                                id: 1221,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/zh02_1_md.m3u8',
                                type: 'hls'
                            }, {
                                title: '朱鹮02',
                                id: 1222,
                                url: 'https://gcksc.v.kcdnvip.com/gc/zh03_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '朱鹮03',
                                id: 1223,
                                url: 'https://gcbdc.a.bdydns.com/gc/zhhd01_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '朱鹮04',
                                id: 1224,
                                url: 'https://gcksc.v.kcdnvip.com/gc/zh04_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            },]
                        }]
                    }, {
                        title: '贵州',
                        id: 13,
                        children: [{
                            title: '贵州铜仁梵净山',
                            id: 131,
                            url: 'https://gcbdc.a.bdydns.com/gc/qdls02_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '贵州贵阳甲秀楼',
                            id: 132,
                            url: 'https://gcalic.v.myalicdn.com/gc/nxsptdmgychlr_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '贵州雷山县白岩村',
                            id: 133,
                            url: 'https://gcksc.v.kcdnvip.com/gc/hkts07_1/index.m3u8?BR=md&region=shanghai',
                            type: 'hls'
                        }, {
                            title: '贵州西江千户苗寨',
                            id: 134,
                            url: 'https://gcksc.v.kcdnvip.com/gc/jyg02_1/index.m3u8?BR=md&region=beijing',
                            type: 'hls'
                        }, {
                            title: '贵州织金洞',
                            id: 135,
                            children: [{
                                title: '织金洞掌上明珠',
                                id: 1351,
                                url: 'https://gcksc.v.kcdnvip.com/gc/jsh02_1/index.m3u8?BR=md&region=shanghai',
                                type: 'hls'
                            }, {
                                title: '织金洞万寿山',
                                id: 1352,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/hkts02_1_md.m3u8',
                                type: 'hls'
                            }]
                        }]
                    }, {
                        title: '安徽',
                        id: 3,
                        children: [{
                            title: '安徽黄山宏村月沼直播',
                            id: 31,
                            url: 'https://gcksc.v.kcdnvip.com/gc/tms05_1/index.m3u8?BR=md&amp;region=beijing',
                            type: 'hls'
                        }, {
                            title: '安徽黟县西递牌坊',
                            id: 32,
                            url: 'https://gcalic.v.myalicdn.com/gc/yxxdpf_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }]
                    },
                    {
                        title: '浙江',
                        id: 4,
                        children: [{
                            title: '浙江舟山沈家门渔港直播',
                            id: 41,
                            url: 'https://gcksc.v.kcdnvip.com/gc/qdls04_1/index.m3u8?BR=md&amp;region=beijing',
                            type: 'hls'
                        },
                        {
                            title: '浙江横店影视城直播',
                            id: 42,
                            url: 'https://gcksc.v.kcdnvip.com/gc/mdjxxmhjygjt_1/index.m3u8?BR=md&amp;region=beijing',
                            type: 'hls'
                        }]
                    },
                    {
                        title: '新疆',
                        id: 5,
                        children: [{
                            title: '新疆乌鲁木齐西大桥直播',
                            id: 51,
                            url: 'https://gcksc.v.kcdnvip.com/gc/hkts01_1/index.m3u8?BR=md&amp;region=beijing',
                            type: 'hls'
                        }, {
                            title: '新疆江布拉克景区直播',
                            id: 52,
                            url: 'https://gctxyc.liveplay.myqcloud.com/gc/hnttbdjd_1_md.m3u8',
                            type: 'hls'
                        }, {
                            title: '新疆伊犁特克斯八卦城',
                            id: 53,
                            url: 'https://gcalic.v.myalicdn.com/gc/bsszxer_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }]
                    },
                    {
                        title: '福建',
                        id: 6,
                        children: [{
                            title: '福建武夷山',
                            id: 61,
                            url: 'https://gcksc.v.kcdnvip.com/gc/wysynf_1/index.m3u8?BR=md&amp;region=beijing',
                            type: 'hls'
                        }]
                    }, {
                        title: '江苏',
                        id: 20,
                        children: [{
                            title: '333米高空慢看常州',
                            id: 201,
                            url: 'https://gcalic.v.myalicdn.com/gc/wysyxdhp_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '江苏南京鼓楼广场',
                            id: 202,
                            url: 'https://gcalic.v.myalicdn.com/gc/hkylxs01_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '江苏无锡惠山二茅峰望锡城',
                            id: 203,
                            url: 'https://gctxyc.liveplay.myqcloud.com/gc/wysdhpcy_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '江苏无锡惠山二茅东北角',
                            id: 203,
                            url: 'http://m.m3u8.wifiwx.com/live/wifiwx-498.m3u8',
                            type: 'hls'
                        }, {
                            title: '江苏无锡惠山二茅峰西南角',
                            id: 203,
                            url: 'http://m.m3u8.wifiwx.com/live/wifiwx-496.m3u8',
                            type: 'hls'
                        }, {
                            title: '江苏无锡京杭运河',
                            id: 204,
                            url: 'https://gcksc.v.kcdnvip.com/gc/jsh04_1/index.m3u8?BR=md&region=shanghai',
                            type: 'hls'
                        }, {
                            title: '江苏南京玄武湖公园',
                            id: 205,
                            url: 'https://gcksc.v.kcdnvip.com/gc/xwh01_1/index.m3u8?BR=md&region=shanghai',
                            type: 'hls'
                        }, {
                            title: '江苏广电大厦',
                            id: 206,
                            url: 'http://m.m3u8.wifiwx.com/live/wifiwx-495.m3u8',
                            type: 'hls'
                        }]
                    }, {
                        title: '海南',
                        id: 14,
                        children: [{
                            title: '海南文昌冯家湾',
                            id: 141,
                            url: 'https://gcksc.v.kcdnvip.com/gc/hgsylztpb_1/index.m3u8?BR=md&region=shanghai',
                            type: 'hls'
                        }, {
                            title: '海南万宁石梅湾',
                            id: 142,
                            url: 'https://gctxyc.liveplay.myqcloud.com/gc/nxsptdmgy_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '海南棋子湾',
                            id: 143,
                            url: 'https://gcbdc.a.bdydns.com/gc/ytszyf_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '海南三亚湾',
                            id: 144,
                            url: 'https://gcksc.v.kcdnvip.com/gc/hnttdysjd_1/index.m3u8?BR=md&region=shanghai',
                            type: 'hls'
                        }]
                    }, {
                        title: '西藏',
                        id: 9,
                        children: [{
                            title: '西藏林芝巴松措湖心岛',
                            id: 91,
                            url: 'https://gcbdc.a.bdydns.com/gc/jyg01_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '西藏林芝工布公园',
                            id: 92,
                            url: 'https://gctxyc.liveplay.myqcloud.com/gc/bsszbcs_1_md.m3u8',
                            type: 'hls'
                        }, {
                            title: '西藏林芝米林拉林铁路',
                            id: 93,
                            url: 'https://gcbdc.a.bdydns.com/gc/zyqcdx01_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }]
                    }, {
                        title: '云南',
                        id: 11,
                        children: [{
                            title: '云南建水古城双龙桥',
                            id: 111,
                            url: 'https://gcbdc.a.bdydns.com/gc/pshdxg01_1/index.m3u8?contentid=2820180516001',
                            type: 'hls'
                        }, {
                            title: '云南玉龙雪山',
                            id: 112,
                            children: [{
                                title: '白沙远眺玉龙雪山',
                                id: 1121,
                                url: 'https://gcbdc.a.bdydns.com/gc/hkylxs03_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '云南玉龙雪山玉液湖',
                                id: 1121,
                                url: 'https://gcalic.v.myalicdn.com/gc/hkylxs02_1/index.m3u8?contentid=2820180516001',
                                type: 'hls'
                            }, {
                                title: '云南玉龙雪山蓝月谷中游湖面',
                                id: 1121,
                                url: 'https://gctxyc.liveplay.myqcloud.com/gc/hkylxs08_1_md.m3u8',
                                type: 'hls'
                            }]
                        }]
                    }, {
                        title: '电视台',
                        id: 0,
                        children: [{
                            title: '电影',
                            id: 1,
                            children: [{
                                title: '周星馳',
                                id: 11,
                                url: 'https://hw.flv.huya.com/src/1394575534-1394575534-5989656310331736064-2789274524-10057-A-0-1-imgplus.m3u8',
                                type: 'hls'
                            }, {
                                title: '林正英',
                                id: 12,
                                url: 'https://hw.flv.huya.com/src/1394575543-1394575543-5989656348986441728-2789274542-10057-A-0-1.m3u8',
                                type: 'hls'
                            }, {
                                title: '成龍',
                                id: 13,
                                url: 'https://hw.flv.huya.com/src/1394565191-1394565191-5989611887484993536-2789253838-10057-A-0-1-imgplus.m3u8',
                                type: 'hls'
                            }, {
                                title: '甄子丹',
                                id: 14,
                                url: 'https://hw.flv.huya.com/src/1423787820-1423787820-6115122123343134720-2847699096-10057-A-0-1-imgplus.m3u8',
                                type: 'hls'
                            }, {
                                title: '吳京',
                                id: 15,
                                url: 'https://hw.flv.huya.com/src/1524434090-1524434090-6547394561457520640-3048991636-10057-A-0-1.m3u8',
                                type: 'hls'
                            }, {
                                title: '高分系列',
                                id: 16,
                                url: 'https://hw.flv.huya.com/src/1388451591-1388451591-5963354175424167936-2777026638-10057-A-0-1-imgplus.m3u8',
                                type: 'hls'
                            }]
                        }, {
                            title: '电视',
                            id: 12,
                            children: [{
                                title: '香港C+',
                                id: 21,
                                url: 'http://gslbmeiah.cdn.hk.chinamobile.com/livehls/MOB-U1-NO/03.m3u8',
                                type: 'hls'
                            }, {
                                title: 'HOBOC音乐台',
                                id: 22,
                                url: 'http://hls-video01.cdnvideo.ru/video01/smil:video01.smil/chunklist_b4128000.m3u8',
                                type: 'hls'
                            }, {
                                title: 'Music TV',
                                id: 23,
                                url: 'http://1hdru-hls-otcnet.cdnvideo.ru/onehdmusic/tracks-v1a1/index.m3u8',
                                type: 'hls'
                            }, {
                                title: '法国时尚',
                                id: 240,
                                url: 'http://lb.streaming.sk/fashiontv/stream/chunklist.m3u8',
                                type: 'hls'
                            }]
                        }]
                    }, {
                        title: '其它',
                        id: 7,
                        children: [
                            {
                                title: '测试',
                                id: 72,
                                url: '',
                                type: 'flv'
                            }
                        ]
                    }
                ]
            }
        },
        //在实例创建完成后被立即同步调用
        created() {

        },
        //HTML渲染完成后调用
        mounted() {
            this.send(0);
            tree.render({
                elem: '#tree'
                , data: this.liveDatas
                , showLine: true  //是否开启连接线
                , click: function (obj) {
                    if (!obj.data.url) { return; }
                    obtainUrl = JSON.stringify(obj.data.url).replace(/\"/g, "");
                    obtainType = JSON.stringify(obj.data.type).replace(/\"/g, "");
                    obtainName = JSON.stringify(obj.data.title).replace(/\"/g, "");
                    $("#app").css("cursor", 'Crosshair');
                }
            });
        },
        methods: {
            changeURL: function (id) {
                this.urlIndex = id;
            },
            changeURLs: function (url, type) {
                this.obtainUrl = url;
                this.obtainType = type;
            },
            switchShow: function () {
                this.switchIconFlag = !this.switchIconFlag;
            },
            videoNumberChange: function (num) {
                switch (num) {
                    case 1:
                        this.videosContainerClass = 'videosContainer1';
                        break;
                    case 4:
                        this.videosContainerClass = 'videosContainer';
                        break;
                    case 6:
                        this.videosContainerClass = 'videosContainer6';
                        break;
                    case 9:
                        this.videosContainerClass = 'videosContainer9';
                        break;
                }
                this.videoShowNum = num;
                this.carouselItemNum = Math.ceil(9 / this.videoShowNum);
                this.send(0);
                var videoNames = this.videoNames;
                //切换视图后重新设置播放源
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    for (var item in videoNames) {
                        if (videoNames[item] != "") {
                            obtainUrl = this.videoUrls[item];
                            obtainType = this.videoTypes[item];
                            obtainName = this.videoNames[item];
                            this.videoPlay(item);
                        }
                    }
                    return;
                }, 100);
            },
            videoPlay: function (index) {
                if (obtainType == "") {
                    var player = document.getElementById(this.videoids[index]);
                    if (player.readyState == 4) {
                        !player.paused ? player.pause() : player.play();
                    }
                    return;
                }
                $("#app").css("cursor", 'wait');
                if (obtainType == 'flv') {
                    var player = document.getElementById(this.videoids[index]);
                    if (flvjs.isSupported()) {
                        if (typeof flvPlayer !== "undefined") {
                            if (flvPlayer != null) {
                                flvPlayer.unload();
                                flvPlayer.detachMediaElement();
                                flvPlayer.destroy();
                                flvPlayer = null;
                            }
                        }
                        var flvPlayer = flvjs.createPlayer({
                            type: 'flv',
                            isLive: true,
                            url: obtainUrl,
                            enableWorker: true,
                            enableStashBuffer: false,
                            stashInitialSize: 128,
                            preload: true
                        });
                        flvPlayer.attachMediaElement(player);
                        flvPlayer.load();
                        flvPlayer.play();

                        clearTimeout(this.timer);
                        this.timer = setTimeout(() => {
                            $("#app").css("cursor", 'default');
                        }, 3000);
                    }
                }
                if (obtainType == 'hls') {
                    if (Hls.isSupported()) {
                        var video = document.getElementById(this.videoids[index]);
                        var hls = new Hls();
                        hls.loadSource(obtainUrl);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, function () {
                            video.play();
                            clearTimeout(this.timer);
                            this.timer = setTimeout(() => {
                                $("#app").css("cursor", 'default');
                            }, 3000);
                        })
                    }
                }
                Vue.set(this.videoNames, index, obtainName);
                Vue.set(this.videoUrls, index, obtainUrl);
                Vue.set(this.videoTypes, index, obtainType);
                obtainType = "";
            },
            videoShow: function (index) {
                var player = document.getElementById(this.videoids[index]);
                if (!(player.readyState == 4)) {
                    return;
                }
                player.controls = true;
            },
            videoHide: function (index) {
                var player = document.getElementById(this.videoids[index]);
                player.controls = false;
            },
            send: function (event) {
                flipping.read();
                const elActives = document.querySelectorAll('[data-active]');
                Array.from(elActives)
                    .forEach(el => el.removeAttribute('data-active'));
                switch (event) {
                    case 'PREV':
                        state.photo--;
                        break;
                    case 'NEXT':
                        state.photo++;
                        break;
                    default:
                        state.photo = +event;
                        break;
                }
                var len = this.carouselItemNum;
                state.photo = ((state.photo % len) + len) % len;
                Array.from(document.querySelectorAll(`[data-key="${state.photo}"]`))
                    .forEach(el => {
                        el.setAttribute('data-active', true);
                    });
                flipping.flip();
            }
        }
    });
});