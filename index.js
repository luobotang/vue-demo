var vm = new Vue({
    el: '#container',
    template: '#template',
    data: {
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
        }
    }
})