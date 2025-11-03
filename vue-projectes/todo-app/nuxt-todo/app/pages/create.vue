<template>
  <div class="p-8 flex flex-col items-center bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold text-blue-600 mb-6">➕ 添加新任务</h1>

    <div class="w-full max-w-md bg-white rounded-2xl shadow-md p-6 space-y-4">
      <el-input
        v-model="title"
        placeholder="输入任务标题..."
        clearable
        @keyup.enter="handleAdd"
      />

      <el-button
        type="primary"
        class="w-full"
        :loading="adding"
        @click="handleAdd"
      >
        保存任务
      </el-button>

      <el-button class="w-full" type="default" @click="navigateTo('/')">
        返回列表
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '~/stores/todo';

const todo = useTodoStore();
const title = ref('');
const adding = ref(false);

const handleAdd = async () => {
  if (!title.value.trim()) return;
  adding.value = true;
  await todo.addTask(title.value);
  adding.value = false;
  title.value = '';
  navigateTo('/', { replace: true }); // ✅ 返回首页，Pinia 自动同步最新任务
};
</script>
