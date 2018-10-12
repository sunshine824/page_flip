<template>
    <div id="app">
        <transition :name="'vux-pop-'+(direction==='next' ? 'in' : direction==='prev' ? 'out' : '')">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'App',
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'direction'
            ])
        }
    }
</script>

<style lang="less">
    @import "./libs/css/base.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
        will-change: transform;
        transition: all 250ms;
        height: 100%;
        top: 0;
        position: absolute;
        backface-visibility: hidden;
        perspective: 1000;
    }

    .vux-pop-out-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .vux-pop-out-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .vux-pop-in-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .vux-pop-in-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
</style>
