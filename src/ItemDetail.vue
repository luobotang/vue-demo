<template>
<div class="item-detail-container page" v-if="item">
    <div class="head">{{ item.name }}</div>
    <div class="body">
        {{item.desc || 'no desc'}}<br>
        <router-link :to="{name: 'itemHistory', param: {name: item.name}}">history</router-link>
    </div>
    <div class="foot">
        <button @click="goBack">Go Back</button>
    </div>
</div>
<div class="item-detail-container page" v-else>
loading...
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
export default {
    data: function() {
        return {
            item: null
        }
    },
    methods: {
        goBack: function () {
            history.back()
        }
    },
    beforeRouteEnter: function(to, from, next) {
        var vm
        var item
        fetch('/item/' + to.params.name).then(function(res) {
            return res.json()
        }).then(function(data) {
            if (vm) {
                vm.item = data
            } else {
                item = data
            }
        }).catch(function() {
            alert('get item failed')
        })
        next(function(_vm) {
            if (item) {
                _vm.item = item
            } else {
                vm = _vm
            }
        })
    }
}
</script>