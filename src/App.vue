<template>
    <transition :name="transitionName">
        <router-view></router-view>
    </transition>
</template>

<style>
    .slide-left-enter,
    .slide-left-leave,
    .slide-right-enter,
    .slide-right-leave {
        transition: transform 0.5s linear;
    }
    .slide-left-enter-active,
    .slide-right-leave-active {
        z-index: 1;
    }
    .slide-left-enter,
    .slide-right-leave-active {
        transform: translateX(100%);
    }
    .slide-left-leave-active,
    .slide-right-enter {
        transform: translateX(-100%);
    }
</style>

<script>
    import VueRouter from 'vue-router'
    import store from './store'
    import routes from './routes'

    var router = new VueRouter({
        routes: routes
    })

    router.beforeEach(function (to, from, next) {
        var title = to.meta.title
        document.title = (typeof title === 'function' ? title(to) : title) || 'DEMO'
        router.app.transitionName = to.meta.index > from.meta.index ? 'slide-left' : 'slide-right'
        next()
    })

    export default Vue.extend({
        store: store,
        data: function () {
            return {
                transitionName: 'slide'
            }
        },
        router: router,
        created: function() {
            this.$store.dispatch('fetchItems')
        }
    })
</script>