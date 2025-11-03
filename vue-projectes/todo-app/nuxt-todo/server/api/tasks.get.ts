// server/api/tasks.get.ts
let tasks = [
  { id: 1, title: '学习 Nuxt 4', status: 'pending' },
  { id: 2, title: '写一个待办应用', status: 'done' },
];

export default defineEventHandler(() => {
  return tasks;
});
