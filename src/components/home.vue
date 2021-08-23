<template>
    <div class="main">
        <div class="wrapper">
            <div class="text">
                <h1>alt:V - GTA5多人联机平台</h1>
                <p>
                    GTA5 的免费多人游戏客户端（GTA5私服模式）
                    <br />[单服务器]最大支持（4000名）玩家同时在线
                    <br />游戏模式多样化：角色扮演（RP）,战争模拟（DM），赛车，聚会，地盘争夺....
                    <br />
                    <br />-----------与 [fiveM] [RegeMp] 相比---------------
                    <br />优点：(低延迟,最大玩家数,开发文档齐全,更新活跃...)
                    <br />缺点：(中文服务器相对较少，持续开发中...)
                    <br />服务器开发：支持使用 JS、C# 等编程语言免费创建
                </p>
                <router-link class="stats" to="/servers" v-on:click.native="closeMenuButton">
                <!-- <a class="stats" href="https://altstats.net/" target="_blank"> -->
                    <span class="players">
                        在线玩家数: <i>{{ playerCount }}</i>
                    </span>
                    <span class="servers">
                        服务器数量: <i>{{ serverCount }}</i>
                    </span>
                </router-link>
                <div class="sep"></div>
                <router-link class="btn" to="/downloads">客户端下载</router-link>
                <span class="launch">
                    =========安装教程===========<br />
                    1.下载客户端文件<br />
                    2.新建一个空文件夹(名字任意)<br />
                    3.将下载后文件放入文件夹<br />
                    4.右键 > <i>altv.exe > </i>以管理员身份运行.<br />
                    5.等待客户端自动更新完成 > 进入游戏<br />
                    6.选择服务器 > 即可进入游戏
                </span>
            </div>
            <div class="vid">
                <iframe src="https://www.youtube-nocookie.com/embed/tcNfEzQamfs" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
        <div class="copyright">
            <p>
                Grand Theft Auto 和 Grand Theft Auto: V 是 Take-Two Interactive Software 的注册商标.
                <br />使用的任何商标均属于其各自所有者。 alt:V Multiplayer 和 altMP  不隶属于 Take-Two Interactive Software，也不受其认可.
                <br />alt:V 在线联机平台 和 altMP Project 不托管任何用户制作的服务器，也不对用户制作的内容负责。 所有用户制作的内容均为其各自所有者的财产.
                <br />
            </p>
        </div>
        <div class="socialMobile">
            <a target="_blank" href="https://discord.altv.mp">
                <i class="fab fa-discord"></i>
            </a>
            <a target="_blank" href="https://twitter.com/altVMP">
                <i class="fab fa-twitter"></i>
            </a>
            <a target="_blank" href="https://github.com/altmp">
                <i class="fab fa-github"></i>
            </a>
            <a target="_blank" href="https://instagram.com/altvmp/">
                <i class="fab fa-instagram"></i>
            </a>
            <a target="_blank" href="https://vk.com/altvmp">
                <i class="fab fa-vk"></i>
            </a>
            <a target="_blank" href="https://www.youtube.com/c/altVMP">
                <i class="fab fa-youtube"></i>
            </a>
            <a target="_blank" href="https://facebook.com/altvmp/">
                <i class="fab fa-facebook"></i>
            </a>
            <a target="_blank" href="https://www.patreon.com/altVMP">
                <i class="fab fa-patreon"></i>
            </a>
        </div>
    </div>
</template>

<script>
    import {
        getRequest
    } from '@/utility/fetch'

    export default {
        data() {
            return {
                playerCount: 0,
                serverCount: 0
            }
        },
        beforeCreate() {
            document.body.className = 'home';
        },
        methods: {
            async fetchPlayers() {
                const data = await getRequest('https://api.altv.mp/servers/');

                if (!data) {
                    return;
                }

                this.playerCount = data.playersCount;
                this.serverCount = data.serversCount;
            }
        },
        mounted() {
            this.fetchPlayers()
        }
    };
</script>

<style scoped>
    .main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .wrapper {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        max-width: 1800px;
    }

    .text h1 {
        font-size: 48px;
        margin: 0;
        font-weight: 700;
    }

    .text p {
        font-size: 15px;
        margin: 30px 0;
        margin-bottom: 15px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 25px;
        opacity: 0.7;
    }

    .text .stats {
        margin-bottom: 30px;
        display: inline-block;
        text-decoration: none;
    }

    .text .stats span {
        display: inline-block;
        margin-right: 15px;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 13px;
        color: rgba(255, 255, 255, .35);
        transition: color .2s;
    }

    .text .stats:hover span {
        color: rgba(255, 255, 255, .5);
    }

    .text .stats span i {
        color: rgba(255, 255, 255, .6);
        margin-left: 3px;
        font-weight: 600;
        transition: color .2s;
    }

    .text .stats:hover span i {
        color: rgba(255, 255, 255, .75);
    }

    .text .stats span i {
        font-style: normal;
    }

    .text .sep {
        display: block;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.075), rgba(0, 0, 0, 0));
        margin-bottom: 30px;
    }

    .text .launch {
        display: inline-block;
        vertical-align: middle;
        margin-left: 30px;
        font-weight: 500;
        letter-spacing: 0.5px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.3);
        line-height: 17px;
    }

    .text .launch i {
        font-style: normal;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.5);
    }

    .vid {
        width: calc(250px + 17vw);
        height: 320px;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.7);
    }

    .vid iframe {
        width: 100%;
        height: 100%;
    }

    .copyright {
        text-align: center;
        font-size: 11px;
        letter-spacing: 0.5px;
        line-height: 20px;
        opacity: 0.2;
    }

    .socialMobile {
        opacity: 0.5;
        font-size: 18px;
        display: none;
        padding: 30px;
    }

    .socialMobile a {
        color: #eee;
        text-decoration: none;
        transition: all 0.2s;
        margin-left: 15px;
    }

    @media screen and (max-width: 1440px) {
        .text h1 {
            font-size: 38px;
        }

        .text p {
            font-size: 14px;
            margin: 25px 0;
            line-height: 23px;
        }

        .text .sep {
            margin-bottom: 25px;
        }

        .text .launch {
            margin-left: 20px;
            width: 40%;
            line-height: 20px;
            vertical-align: middle;
        }
    }

    @media screen and (max-width: 1024px) {
        .text {
            padding-right: 30px;
        }

        .text h1 {
            font-size: 36px;
        }

        .text p {
            font-size: 13px;
            margin: 20px 0;
            line-height: 20px;
        }

        .text .sep {
            margin-bottom: 20px;
        }

        .text .launch {
            display: block;
            margin-left: 0;
            margin-top: 20px;
            width: 100%;
        }

        .vid {
            height: 250px;
        }

        .copyright {
            line-height: 18px;
            letter-spacing: 0.2px;
            zoom: 80%;
        }
    }

    @media screen and (max-width: 768px) {
        .wrapper {
            flex-direction: column;
        }

        .text p {
            font-size: 12px;
            margin: 20px 0;
            line-height: 20px;
        }

        .text p br {
            display: none;
        }

        .vid {
            display: none;
        }

        .copyright {
            display: none;
        }

        .socialMobile {
            display: block;
        }
    }
</style>
