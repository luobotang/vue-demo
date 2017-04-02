var Vuex = require('vuex')

module.exports = new Vuex.Store({
    state: {
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
    mutations: {
        /**
         * @param {State} state
         * @param {Boolean} selected
         */
        toggleAllSelected: function (state) {
            var selected = !isAllSelected(state.items);
            if (state.items.length > 0) {
                state.items.forEach(function (item) {
                    return item.selected = selected
                })
            }
        },
        addNewItem: function (state) {
            state.items.push({
                selected: false,
                name: (+new Date).toString().slice(5)
            })
        },
        deleteItem: function (state, item) {
            var i = state.items.findIndex(function (_item) { return _item === item })
            if (i !== -1) {
                state.items.splice(i, 1)
            }
        }
    },
    getters: {
        items: function (state) {
            return state.items
        },
        selectedCount: function (state) {
            return state.items.filter(function (item) {
                return !!item.selected
            }).length
        },
        allSelected: function (state) {
            return isAllSelected(state.items)
        }
    }
})

function isAllSelected(items) {
    return items && items.length > 0 && items.findIndex(function (item) {
        return !item.selected
    }) === -1
}