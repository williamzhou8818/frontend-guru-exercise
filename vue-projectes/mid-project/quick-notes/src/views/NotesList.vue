<template>
  <div class="container">
    <h1>我的便签</h1>
    <el-button type="primary" @click="goCreate">创建新笔记</el-button>
    <el-card v-for="note in notes" :key="note.id" class="mb-2">
      <h3>{{ note.title }}</h3>
      <p>{{ note.content }}</p>
      <el-button type="danger" size="small"> 删除 </el-button>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { useNoteStore } from '@/stores/notesStore';
import { useRouter } from 'vue-router';

const noteStore = useNoteStore();
const { notes } = noteStore;

const router = useRouter();

function goCreate() {
  router.push({ name: 'CreateNote' });
}
</script>
<style scoped>
.mb-2 {
  margin-bottom: 12px;
}
.container {
  max-width: 600;
}
</style>
