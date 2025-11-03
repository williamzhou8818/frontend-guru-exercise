// stores/todo.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  const tasks = ref<{ id: number; title: string; status: string }[]>([]);
  const loading = ref(false);

  /** 加载任务列表 */
  const load = async () => {
    loading.value = true;
    try {
      tasks.value = await $fetch('/api/tasks');
    } catch (e) {
      console.error('加载任务失败:', e);
    } finally {
      loading.value = false;
    }
  };

  /** 添加新任务 */
  const addTask = async (title: string) => {
    if (!title.trim()) return;
    const res = await $fetch('/api/tasks', {
      method: 'POST',
      body: { title },
    });
    if (res?.task) tasks.value.push(res.task);
  };

  // ✅ 更新任务状态
  async function updateTaskStatus(id: number, newStatus: string) {
    const res = await $fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      body: { status: newStatus },
    });
    // 本地同步
    const task = tasks.value.find((t) => t.id === id);
    if (task && res?.task) task.status = res.task.status;
  }

  return { tasks, loading, load, addTask, updateTaskStatus };
});
