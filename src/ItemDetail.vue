<template>
<div v-if="loading">loading...</div>
<div v-else-if="error">{{error}}</div>
<div v-else>
    <div class="item-detail-container page">
        <div class="head">{{ data.name }}</div>
        <div class="body">
            {{data.desc || 'no desc'}}<br>
            <router-link :to="{name: 'itemHistory', param: {name: data.name}}">history</router-link>
        </div>
        <div class="foot">
            <button @click="goBack">Go Back</button>
        </div>
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
export default {
    data: function() {
        return {
            loading: true,
            error: null,
            data: null
        }
    },
    methods: {
        goBack: function () {
            history.back()
        },
        getData: function(resolve, reject) {
            var vm = this

            vm.loading = true
            vm.error = vm.data = null
            fetch('/item/' + this.$route.params.name).then(function (res) {
                return res.json()
            }).then(function(data) {
                vm.loading = false
                vm.data = data
            }).catch(function() {
                vm.loading = false
                vm.error = 'get data failed'
            })
        }
    },
    created: function() {
        this.getData()
    }
}
</script>