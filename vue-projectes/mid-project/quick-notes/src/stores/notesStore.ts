import { defineStore } from 'pinia';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

export interface Note {
  id: string;
  title: string;
  content: string;
}

export const useNoteStore = defineStore('note', () => {
  const notes = ref<Note[]>([]);

  // Add new notes
  function addNote(title: string, content: string) {
    const id = uuidv4(); // 或 Math.random()
    notes.value.push({ id, title, content });
  }

  return { notes, addNote };
});
