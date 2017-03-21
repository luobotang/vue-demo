<template>
<div class="item-detail-container page">
    <div class="head">{{ item.name }}</div>
    <div class="body"><strong>{{ item.name }}</strong> is {{ item.selected ? 'selected' : 'not selected' }}.</div>
    <div class="foot">
        <button @click="goBack">Go Back</button>
    </div>
</div>
</template>

<script>
import store from './store'

export default {
    store: store,
    computed: {
        item: function () {
            var name = this.$route.params.name
            return store.state.items.find(function (item) {
                return item.name === name
            })
        }
    },
    methods: {
        goBack: function () {
            history.back()
        }
    }
}
</script>