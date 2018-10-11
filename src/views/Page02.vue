<template>
    <div class="page02">
        <p class="back" @click="back">返回</p>
        <div class="link">
            <router-link to="/page01">跳转到Page01</router-link>
            <router-link to="/">返回首页</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page02",
        methods:{
            back(){
                this.$router.back(-1)
            }
        }
    }
</script>

<style scoped lang="less">
    .page02{
        width: 100%;
        height: calc(100vh);
        background: rgba(242,81,155,.56);
        .back{
            color: #fff;
            padding: .3rem;
            font-size: .4rem;
        }
        .link{
            text-align: center;
            padding-top: 5rem;
            font-size: .45rem;
            a{
                color: #fff;
                display: block;
                margin-top: .2rem;
            }
        }
    }
</style>