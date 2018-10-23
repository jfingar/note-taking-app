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
    loadState(state, persistedState) {
      this.replaceState(Object.assign(state, persistedState));
    },
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
  /** Normally we would perform some async operation in these actions like call an API backend, and commit state changes in successful promise resolution **/
  /** For this sample code we are simply writing to browser localStorage **/
  actions: {
    addNewNote({ commit }) {
      const newNote = {
        description: this.state.newNoteText,
        color: this.state.selectedColor
      };
      commit('addNewNote', newNote);
      persistState(this.state);
    },
    updateNewNoteText({ commit }, text ) {
      commit('updateNewNoteText', text);
      persistState(this.state);
    },
    selectColor({ commit }, color) {
      commit('selectColor', color);
      persistState(this.state);
    },
    removeNote({ commit }, index) {
      // add async code here, put commit in success callback
      commit('removeNote', index);
      persistState(this.state);
    }
  }
});

const persistState = state => {
  window.localStorage.setItem("state", JSON.stringify(state));
}