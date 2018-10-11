<template>
    <div class="page01">
        <p class="back" @click="back">返回</p>
        <div class="link">
            <router-link to="/page02">跳转到Page02</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page01",
        methods:{
            back(){
                this.$router.back(-1)
            }
        }
    }
</script>

<style scoped lang="less">
    .page01 {
        width: 100%;
        height: calc(100vh);
        background: gray;
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
            }
        }
    }
</style>