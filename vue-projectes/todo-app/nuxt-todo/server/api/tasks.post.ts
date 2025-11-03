// server/api/tasks.post.ts
let tasks = [
  { id: 1, title: '学习 Nuxt 4', status: 'pending' },
  { id: 2, title: '写一个待办应用', status: 'done' },
];

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newTask = {
    id: Date.now(),
    title: body.title || '未命名任务',
    status: 'pending',
  };
  tasks.push(newTask);
  return { ok: true, task: newTask };
});
