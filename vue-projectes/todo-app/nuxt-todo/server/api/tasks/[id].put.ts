export default defineEventHandler(async (event: any) => {
  const id = Number(event.context.params.id);
  const body = await readBody(event);

  // 模拟后端更新逻辑
  return {
    ok: true,
    task: {
      id,
      title: `任务 #${id}`,
      status: body.status || 'pending',
    },
  };
});
