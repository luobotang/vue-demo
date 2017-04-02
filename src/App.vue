<template>
<transition :name="transitionName">
    <router-view></router-view>
</transition>
</template>

<style>
.slide-left-enter {
    transform: translateX(100%);
}
.slide-right-leave-active {
    transform: translateX(100%);
    z-index: 1;
}
</style>

<script>
import VueRouter from 'vue-router'
import store from './store'
import ItemList from './ItemList.vue'
import ItemDetail from './ItemDetail.vue'

var router = new VueRouter({
    routes: [{
        path: '',
        component: ItemList,
        beforeEnter: function (to, from, next) {
            document.title = 'Item List - VueJS DEMO'
            next()
        }
    }, {
        path: '/item/:name',
        component: ItemDetail,
        beforeEnter: function (to, from, next) {
            document.title = to.params.name + ' - VueJS DEMO'
            next()
        }
    }]
})

export default Vue.extend({
    store: store,
    data: function () {
        return {
            transitionName: 'slide'
        }
    },
    router: router,
    watch: {
        $route: function (to, from) {
            var toDepth = to.path.split('/').length
            var fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
})
</script>