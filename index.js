var ItemList = {
    template: '#tpl-item-list',
    data: function () {
        return {
            allSelected: false
        }
    },
    props: ['items'],
    computed: {
        selectedCount: function () {
            return this.items.filter(item => !!item.selected).length
        },
        allSelected: {
            get: function () {
                return this.items.findIndex(item => !item.selected) === -1
            },
            set: function (val) {
                val = !!val
                this.$emit('selectAll', val)
            }
        }
    },
    methods: {
        itemDetailUrl: function (name) {
            return '#/item/' + name
        }
    }
}

var ItemDetail = {
    template: '#tpl-item-detail'
}

var router = new VueRouter({
    routes: [
        {path: '', component: ItemList, beforeEnter: function (to, from, next) {
            document.title = 'Item List - VueJS DEMO'
            next()
        }},
        {path: '/item/:name', component: ItemDetail, beforeEnter: function (to, from, next) {
            document.title = to.params.name + ' - VueJS DEMO'
            next()
        }}
    ]
})

var app = new Vue({
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
    computed: {
        allSelected: {
            get: function () {
                return this.items.findIndex(item => !item.selected) === -1
            },
            set: function (val) {
                val = !!val;
                this.items.forEach(item => item.selected = val)
            }
        }
    },
    methods: {
        addItem: function () {
            this.items.push(this.newItem())
        },
        deleteItem: function (item) {
            var i = this.items.findIndex(_item => _item === item)
            if (i !== -1) {
                this.items.splice(i, 1)
            }
        },
        newItem: function () {
            return {
                selected: false,
                name: (+new Date).toString().slice(5)
            }
        }
    }
}).$mount('#app')