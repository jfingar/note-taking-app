import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    newNoteText: '',
    colorOptions: ['red', 'green', 'blue'],
    selectedColor: 'red'
  },
  mutations: {
    addNewNote(state, note) {
      state.notes.push({description : note.description, color: note.color});
    },
    selectColor(state, selectedColor) {
      state.selectedColor = selectedColor;
    },
    updateNewNoteText(state, text) {
      state.newNoteText = text;
    },
    removeNote(state, noteIndex) {
      state.notes = state.notes.filter((note, index) => index !== noteIndex);
    }
  },
  actions: {
    addNewNote({ commit }) {
      // add async code here, put commit in the success callback
      const newNote = {
        description: this.state.newNoteText,
        color: this.state.selectedColor
      };
      commit('addNewNote', newNote);
    },
    selectColor({ commit }, color) {
      commit('selectColor', color);
    },
    removeNote({ commit }, index) {
      // add async code here, put commit in success callback
        commit('removeNote', index);
    }
  },
});
