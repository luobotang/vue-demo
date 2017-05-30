<template>
    <div class="item-history-container" v-if="!error">
        <ul>
            <li v-for="node in nodes" :key="node.name">{{ node.name }}: {{ node.desc }}</li>
        </ul>
    </div>
    <div class="error" v-else>{{ error }}</div>
</template>

<style>
    .item-history-container ul {
        padding-left: 2em;
    }
    .error {
        padding: 100px 0;
        text-align: center;
        color: red;
    }
</style>

<script>
    export default {
        data: function() {
            return {
                error: null,
                nodes: []
            };
        },
        created: function() {
            if (process.env.NODE_ENV === 'production') {
                this.fetchData()
            } else {
                // do nothing!
                // let test code to set data!
            }
        },
        methods: {
            fetchData: function() {
                var vm = this
                vm.error = null
                fetch('/item/' + this.$route.params.name).then(function(res) {
                    return res.json()
                }).then(function(data) {
                    vm.nodes = data.history
                }).catch(function() {
                    vm.error = 'get history failed!'
                })
            }
        }
    }
</script>