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