<template>
  <div>
    <NewNoteEditor />
    <div class="separator"></div>
    <div class="notes-container">
      <Note v-for="(note, i) in this.$store.state.notes" :note="note" :id="i" />
    </div>
  </div>
</template>

<script>
import Note from "./Note";
import NewNoteEditor from "./NewNoteEditor";
import autosize from 'autosize';
export default {
  name: 'TakeNotes',
  components: { NewNoteEditor, Note },
  mounted: function() {
      autosize(document.querySelectorAll('textarea'));
  }
};
</script>

<style scoped lang="scss" scoped>
  .notes-container {
    margin: 10px auto 0px;
    width: 477px;
  }
  .separator {
    border-bottom: 3px solid #666;
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>
