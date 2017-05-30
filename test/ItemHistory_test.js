var Vue = require('vue/dist/vue.common')
var ItemHistory = require('../src/ItemHistory.vue')

describe('ItemHistory.vue', function() {
    it('should render nodes correctly', function() {
        var Ctor = Vue.extend(ItemHistory)
        var vm = new Ctor().$mount()

        vm.nodes = [
            {name: '001', desc: 'desc_001'},
            {name: '002', desc: 'desc_002'},
            {name: '003', desc: 'desc_003'}
        ]

        Vue.nextTick(function() {
            var elUl = vm.$el.querySelector('ul')
            expect(elUl).not.toBe(null)

            var elLis = elUl.children
            expect(elLis.length).toBe(3)
            expect(elLis[0].textContent).toBe('001: desc_001')
            expect(elLis[1].textContent).toBe('002: desc_002')
            expect(elLis[2].textContent).toBe('003: desc_003')
        })
    })

    it('should render error message', function() {
        var Ctor = Vue.extend(ItemHistory)
        var vm = new Ctor().$mount()

        vm.error = 'no data!'

        Vue.nextTick(function () {
            expect(vm.$el.className).toBe('error')
            expect(vm.$el.textContent).toBe('no data!')
        })
    })
})