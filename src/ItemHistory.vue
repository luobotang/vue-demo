<template>
    <div class="item-history-container">
        <ul>
            <li v-for="node in nodes">{{ node.name }}: {{ node.desc }}</li>
        </ul>
    </div>
</template>

<style>
    .item-history-container ul {
        padding-left: 2em;
    }
</style>

<script>
    export default {
        data: function() {
            return {
                nodes: []
            };
        },
        created: function() {
            if (dice()) this.nodes.push({name: '1990', desc: 'aaa'})
            if (dice()) this.nodes.push({name: '1991', desc: 'bbb'})
            if (dice()) this.nodes.push({name: '1992', desc: 'ccc'})
            if (dice()) this.nodes.push({name: '1993', desc: 'ddd'})
            if (dice()) this.nodes.push({name: '1994', desc: 'eee'})
            if (dice()) this.nodes.push({name: '1995', desc: 'fff'})
            if (dice()) this.nodes.push({name: '1996', desc: 'ggg'})
            if (dice()) this.nodes.push({name: '1997', desc: 'hhh'})
            if (dice()) this.nodes.push({name: '1998', desc: 'jjj'})
            if (dice()) this.nodes.push({name: '1999', desc: 'kkk'})
            if (dice()) this.nodes.push({name: '2000', desc: 'lll'})
        }
    }

    function dice() {
        return Math.random() > 0.5
    }
</script>