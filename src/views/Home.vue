<template>
    <div class="home">
        <div class="link">
            <router-link to="/page01">跳转到Page01</router-link>
        </div>
        <ul class="bottom">
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/about">关于</router-link>
            </li>
            <li>
                <router-link to="/setting">设置</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {getLogo} from '@/libs/js/api'

    export default {
        name: 'home',
        created() {
            this._getLogo()
        },
        methods: {
            _getLogo: async function () {
                let result = await getLogo()
                console.log(result)
            }
        }
    }
</script>

<style lang="less">
    .home{
        width: 100%;
        height: calc(100vh);
        background: bisque;
        .link{
            text-align: center;
            padding-top: 5rem;
            font-size: .45rem;
        }
        .bottom{
            position: fixed;
            bottom: 0;
            height: 1.5rem;
            border-top: 1px solid #e6e6e6;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1rem;
            box-sizing: border-box;
            background: #fff;
            li{
                font-size: .45rem
            }
        }
    }
</style>
