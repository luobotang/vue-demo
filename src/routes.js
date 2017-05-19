import ItemList from './ItemList.vue'
import ItemDetail from './ItemDetail.vue'
import ItemHistory from './ItemHistory.vue'

export default [{
    name: 'itemList',
    path: '/',
    component: ItemList,
    meta: {
        index: 0,
        title: 'Item List - VueJS DEMO'
    }
}, {
    name: 'itemDetail',
    path: '/item/:name',
    component: ItemDetail,
    meta: {
        index: 1,
        title: function (route) {
            return route.params.name + ' - VueJS DEMO'
        }
    }
}, {
    name: 'itemHistory',
    path: '/itemHistory/:name',
    component: ItemHistory,
    meta: {
        index: 2,
        title: function (route) {
            return route.params.name + ' history - VueJS DEMO'
        }
    }
}]