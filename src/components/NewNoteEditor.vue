<template>
    <div class="note-editor">
        <ColorSelection />
        <div class="note-text-input-container">
            <textarea v-model="newNoteText" class="note-text-input" placeholder="Enter some text for your note!"></textarea>
        </div>
        <div>
            <button class="note-editor-btn add-new-note-btn" @click="addNewNote">Add</button>
        </div>
        <div>
            <button class="note-editor-btn clear-btn" @click="clearNewNoteText">Clear</button>
        </div>
    </div>
</template>

<script>
    import ColorSelection from './ColorSelection.vue';
    export default {
        name: "NewNoteEditor",
        components: {ColorSelection},
        computed: {
            newNoteText: {
                get() {
                    return this.$store.state.newNoteText;
                },
                set(value) {
                    this.$store.dispatch('updateNewNoteText', value);
                }
            }
        },
        methods: {
            addNewNote() {
                if(this.newNoteText.trim()) {
                    this.$store.dispatch('addNewNote');
                }
            },
            clearNewNoteText() {
                this.$store.dispatch('updateNewNoteText', '');
            }
        }
    }
</script>

<style scoped>
    .note-editor {
        margin-top: 10px;
    }
    .note-text-input {
        padding: 10px;
        width: 450px;
        height: 100px;
        border-radius: 10px;
    }
    .note-editor-btn {
        width: 474px;
        padding: 10px;
        margin-bottom: 5px;
    }
</style>