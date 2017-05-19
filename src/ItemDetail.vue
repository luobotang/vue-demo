<template>
<div class="item-detail-container page">
    <div class="head">{{ item.name }}</div>
    <div class="body">
        <strong>{{ item.name }}</strong> is {{ item.selected ? 'selected' : 'not selected' }}.<br>
        <router-link :to="{name: 'itemHistory', param: {name: item.name}}">history</router-link>
    </div>
    <div class="foot">
        <button @click="goBack">Go Back</button>
    </div>
</div>
</template>

<style lang="less">
.item-detail-container{
    .head {
        padding: 20px 30px;
        color: #fff;
        font-size: 36px;
        text-align: center;
        background: #333;
    }
    .body {
        padding: 20px 30px;
    }
    .foot {
        border-top: 1px solid #dedede;
        border-bottom: 1px solid #dedede;

        button {
            display: block;
            padding: 20px 30px;
            width: 100%;
            height: 100%;
            text-align: center;
            color: inherit;
            background: #f0f0f0;
            border: 0 none;
            box-sizing: border-box;
            transition: background 0.2s;
        }
        button:active {
            background: #ddd;
        }
    }
}
</style>

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