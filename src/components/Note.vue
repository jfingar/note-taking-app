<template>
    <div :class="[note.color, 'note-container']">
        <div v-if="!editing">{{ note.description }}</div>
        <div @click="removeNote(id)" class="note-action-icon delete-icon"><i class="fas fa-trash-alt fa-lg"></i></div>
        <div v-if="!editing" @click="editing = !editing" class="note-action-icon edit-icon"><i class="fas fa-edit fa-lg"></i></div>
        <div v-if="editing" @click="editing = !editing" class="note-action-icon confirm-icon"><i class="fas fa-check-square fa-lg"></i></div>
        <div v-if="editing"><textarea class="edit-description-input" v-model="note.description" /></div>
    </div>
</template>

<script>
    import autosize from 'autosize';
    export default {
        name: "Note",
        props: ['note', 'id'],
        data() {
            return {
                editing: false
            }
        },
        methods: {
            removeNote(index) {
                this.$store.dispatch('removeNote', index);
            }
        },
        updated: function() {
            autosize(document.querySelectorAll('textarea'));
        }
    }
</script>

<style scoped>
    .note-container {
        padding: 5px;
        margin-bottom: 10px;
        text-align: left;
        color: #FFF;
        position: relative;
    }
    .red {
        background-color: red;
    }
    .blue {
        background-color: blue;
    }
    .green {
        background-color: green;
    }
    .note-action-icon {
        position: absolute;
        cursor: pointer;
        top: 7px;
        color: #777;
    }
    .delete-icon {
        right: -26px;
    }
    .edit-icon {
        right: -58px;
    }
    .confirm-icon {
        right: -54px;
    }
    .edit-description-input {
        width: 98%;
    }
</style>