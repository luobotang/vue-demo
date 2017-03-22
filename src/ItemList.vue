<template>
<div class="item-list-container page">
    <ul class="item-list" v-show="items.length">
        <li v-for="item in items" :class="{selected: item.selected}" :key="item.name">
            <label><input type="checkbox" :checked="item.selected" @change="item.selected=!item.selected"> {{ item.name }}</label>
            <div class="cmds">
                <a :href="'#/item/' + item.name">detail</a>
                <a class="cmd-icon" @click="deleteItem(item)">×</a>
            </div>
        </li>
    </ul>
    <footer>
        <label><input type="checkbox" :checked="allSelected" @change="toggleAllSelected" :disabled="items.length === 0"> select all</label>
        <div class="summary">{{ selectedCount }} / {{ items.length }}</div>
        <div class="new-item" @click="addNewItem">add</div>
    </footer>
</div>
</template>

<style lang="less">
.item-list-container {
    padding-bottom: 65px;
    overflow-y: auto;
}
.item-list {
    list-style: none;

    li {
        padding: 20px 30px;
        border-bottom: 1px solid #dedede;
    
        &:nth-child(even) {
            background: #f8f8ff;
        }
        &.selected label {
            font-weight: bold;
        }
    }

    .cmds {
        float: right;
        color: #999;
    }
    a {
        margin-left: 10px;
        color: inherit;
    }
    .cmd-icon {
        display: inline-block;
        transform: scale(1.5);
    }
}

footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px 130px 20px 30px;
    box-sizing: border-box;
    color: #fff;
    background: #666;
    box-shadow: 0 0 10px #999;

    .summary {
        float: right;
    }
    .new-item {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 20px 0;
        width: 100px;
        text-align: center;
        color: #333;
        background: #fff;
        box-sizing: border-box;

        &:active {
            background: #f0f0f0;
            user-select: none;
        }
    }
}
</style>

<script>
import store from './store'

export default {
    store: store,
    computed: Vuex.mapGetters([
        'items',
        'selectedCount',
        'allSelected'
    ]),
    methods: Vuex.mapMutations([
        'toggleAllSelected',
        'addNewItem',
        'deleteItem'
    ])
}
</script>