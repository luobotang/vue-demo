<template>
<div id="app">
    <transition :name="transitionName">
        <router-view
            :items="items"
            @add-item="addItem"
            @delete-item="deleteItem"
            @select-all="selectAll"
        ></router-view>
    </transition>
</div>
</template>

<script>
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

export default {
    data: {
        transitionName: 'slide',
        items: [{
            selected: true,
            name: 'C'
        }, {
            selected: true,
            name: 'Java'
        }, {
            selected: true,
            name: 'C#'
        }, {
            selected: false,
            name: 'JavaScript'
        }]
    },
    router: router,
    watch: {
        $route: function (to, from) {
            var toDepth = to.path.split('/').length
            var fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    },
    methods: {
        addItem: function () {
            this.items.push(this.newItem())
        },
        deleteItem: function (item) {
            var i = this.items.findIndex(function (_item) { return _item === item })
            if (i !== -1) {
                this.items.splice(i, 1)
            }
        },
        newItem: function () {
            return {
                selected: false,
                name: (+new Date).toString().slice(5)
            }
        },
        selectAll: function (val) {
            if (this.items.length > 0) {
                this.items.forEach(function (item) {
                    return item.selected = val
                })
            }
        }
    }
}
</script>