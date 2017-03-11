var ItemList = {
    template: '#tpl-item-list',
    data: function () {
        return {
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
        }
    },
    computed: {
        selectedCount: function () {
            return this.items.filter(item => !!item.selected).length
        },
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
            this.items.push({
                selected: false,
                name: '[' + (+new Date).toString().slice(5) + ']'
            })
        },
        deleteItem: function (item) {
            var i = this.items.findIndex(_item => _item === item)
            if (i !== -1) {
                this.items.splice(i, 1)
            }
        },
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
    router: router
}).$mount('#app')