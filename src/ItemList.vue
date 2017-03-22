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

<style>
.item-list-container {
    padding-bottom: 65px;
    overflow-y: auto;
}
.item-list {
    list-style: none;
}
.item-list li {
    padding: 20px 30px;
    border-bottom: 1px solid #dedede;
}
.item-list li:nth-child(even) {
    background: #f8f8ff;
}
.item-list li.selected label {
    font-weight: bold;
}

.item-list .cmds {
    float: right;
    color: #999;
}
.item-list a {
    margin-left: 10px;
    color: inherit;
}
.item-list .cmd-icon {
    display: inline-block;
    transform: scale(1.5);
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
}
footer .summary {
    float: right;
}
footer .new-item {
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
}
footer .new-item:active {
    background: #f0f0f0;
    user-select: none;
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