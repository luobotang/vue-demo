<template>
<div class="item-list-container page">
    <ul class="item-list" v-show="items.length">
        <li v-for="item in items" :class="{selected: item.selected}" :key="item.name">
            <label><input type="checkbox" :checked="item.selected" @change="item.selected=!item.selected"> {{ item.name }}</label>
            <div class="cmds">
                <a :href="itemDetailUrl(item.name)">detail</a>
                <a class="cmd-icon" v-on:click="$emit('delete-item', item)">×</a>
            </div>
        </li>
    </ul>
    <footer>
        <label><input type="checkbox" :checked="allSelected" @change="toggleAllSelected" :disabled="items.length === 0"> select all</label>
        <div class="summary">{{ selectedCount }} / {{ items.length }}</div>
        <div class="new-item" v-on:click="$emit('add-item')">add</div>
    </footer>
</div>
</template>

<script>
export default {
    props: ['items'],
    computed: {
        selectedCount: function () {
            return this.items.filter(function (item) {
                return !!item.selected
            }).length
        },
        allSelected: function () {
            return (
                this.items.length > 0 && this.selectedItemIndex === -1
            )
        },
        selectedItemIndex: function () {
            return this.items.findIndex(function (item) {
                return !item.selected
            })
        }
    },
    methods: {
        itemDetailUrl: function (name) {
            return '#/item/' + name
        },
        toggleAllSelected: function () {
            this.$emit('select-all', !this.allSelected)
        }
    }
}
</script>