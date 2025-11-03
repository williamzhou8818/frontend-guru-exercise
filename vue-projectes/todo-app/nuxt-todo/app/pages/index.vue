<template>
  <div class="p-8 flex flex-col items-center bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold text-blue-600 mb-6">📝 我的 ToDo List</h1>

    <!-- 加载中 -->
    <div
      v-if="loading"
      class="flex justify-center items-center h-40 text-gray-500"
    >
      <svg
        class="animate-spin h-6 w-6 text-blue-500 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      加载中...
    </div>

    <!-- 列表 -->
    <div
      v-else
      class="w-full max-w-2xl bg-white rounded-2xl shadow-md overflow-hidden"
    >
      <table class="min-w-full">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-3 px-4 text-left text-sm font-semibold text-gray-700">
              任务 ID
            </th>
            <th class="py-3 px-4 text-left text-sm font-semibold text-gray-700">
              标题
            </th>
            <th class="py-3 px-4 text-left text-sm font-semibold text-gray-700">
              状态
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="task in tasks"
            :key="task.id"
            class="border-t hover:bg-gray-50 transition"
          >
            <td class="py-2 px-4">{{ task.id }}</td>
            <td class="py-2 px-4">{{ task.title }}</td>
            <td class="py-2 px-4">
              <select
                v-model="task.status"
                class="border rounded px-2 py-1 text-sm"
                @change="() => handleStatusChange(task)"
              >
                <option value="pending">待办</option>
                <option value="done">完成</option>
                <option value="failed">失败</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="!tasks.length" class="text-gray-400 text-center py-6 border-t">
        暂无任务～
      </div>
    </div>

    <!-- 按钮 -->
    <el-button
      class="mt-6"
      type="primary"
      size="large"
      @click="navigateTo('/create')"
    >
      ➕ 添加任务
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useTodoStore } from '~/stores/todo';

const todo = useTodoStore();
const { tasks, loading } = storeToRefs(todo);

const handleStatusChange = async (task: any) => {
  await todo.updateTaskStatus(task.id, task.status);
};

onMounted(() => {
  if (!tasks.value.length) todo.load();
});
</script>
