var Vuex = require('vuex')

module.exports = new Vuex.Store({
    state: {
        items: []
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
        addNewItem: function (state, item) {
            state.items.push(item)
        },
        deleteItem: function (state, item) {
            var i = state.items.findIndex(function (_item) { return _item === item })
            if (i !== -1) {
                state.items.splice(i, 1)
            }
        },
        setItems: function(state, items) {
            state.items = items
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
    },
    actions: {
        fetchItems: function(context) {
            fetch('/itemList').then(function(res) {
                return res.json()
            }).then(function(items) {
                context.commit('setItems', items.map(function(item) {
                    item.selected = false
                    return item
                }))
            })
        },
        deleteItem: function (context, item) {
            fetch('/item/' + item.name, {
                method: 'delete'
            }).then(res => {
                if (res.status === 200) {
                    context.commit('deleteItem', item)
                }
            }).catch(function() {
                alert('can not delete item: ' + JSON.stringify(item))
            })
        },
        addNewItem: function(context) {
            var itemName = (+new Date).toString().slice(5)
            fetch('/item/' + itemName, {
                method: 'put',
                body: JSON.stringify({name: itemName})
            }).then(res => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    throw new Error('error')
                }
            }).then(item => {
                context.commit('addNewItem', item)
            }).catch(function( ) {
                alert('add new item faild!')
            })
        }
    }
})

function isAllSelected(items) {
    return items && items.length > 0 && items.findIndex(function (item) {
        return !item.selected
    }) === -1
}