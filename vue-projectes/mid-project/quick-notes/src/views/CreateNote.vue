<template>
  <div class="create-note-container">
    <el-card class="note-card">
      <h2 class="note-title">📝 新建便签</h2>

      <el-form
        :model="form"
        :rules="rules"
        ref="formRef"
        label-width="100px"
        class="note-form"
      >
        <!-- 标题 -->
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" placeholder="请输入标题" />
        </el-form-item>

        <!-- 内容 -->
        <el-form-item label="内容" prop="content" class="editor-item">
          <div class="editor-container">
            <QuillEditor
              v-model="form.content"
              theme="snow"
              placeholder="请输入内容..."
              class="quill-editor"
              style="min-height: 450px"
            />
          </div>
        </el-form-item>

        <!-- 按钮 -->
        <el-form-item class="button-group">
          <el-button type="primary" @click="submit" class="btn-main"
            >保存</el-button
          >
          <el-button @click="cancel" class="btn-cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNoteStore } from '@/stores/notesStore';
import type { FormInstance, FormRules } from 'element-plus';

const router = useRouter();
const noteStore = useNoteStore();

const formRef = ref<FormInstance>();
const form = reactive({
  title: '',
  content: '',
});

const rules: FormRules = {
  title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
  content: [{ required: true, message: '请输入内容', trigger: 'blur' }],
};

function submit() {
  formRef.value?.validate((valid) => {
    if (valid) {
      noteStore.addNote(form.title, form.content);
      router.push({ name: 'NotesList' });
    }
  });
}

function cancel() {
  router.push({ name: 'NotesList' });
}
</script>

<style scoped>
.create-note-container {
  display: flex;
  justify-content: center;
  padding: 40px 16px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.note-card {
  width: 100%;
  max-width: 900px; /* 🧩 调宽一点，整体更大气 */
  padding: 32px 40px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.note-title {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  color: #409eff;
  margin-bottom: 28px;
}

/* 表单整体 */
.note-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* el-form-item label 对齐 */
.el-form-item__label {
  font-weight: 500;
  color: #333;
  padding-right: 12px;
}

/* 标题输入框 */
.el-input {
  width: 100%;
  font-size: 15px;
}

/* 富文本编辑器部分 */
.editor-item {
  display: flex;
  align-items: flex-start;
}

.editor-item .el-form-item__label {
  padding-top: 12px;
}

/* 让内容输入区宽度与标题输入框一致 */
.editor-item .el-form-item__content {
  flex: 1;
}

/* 🧩 编辑器容器整体 */
.quill-editor {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

/* Quill 工具栏 */
.quill-editor .ql-toolbar {
  border: 1px solid #dcdfe6;
  border-bottom: none;
  background: #fafafa;
}

/* Quill 容器 */
.quill-editor .ql-container {
  border: 1px solid #dcdfe6;
  border-radius: 0 0 8px 8px;
  min-height: 550px !important; /* !important 保证覆盖内联样式 */

  background-color: #fff;
}
/* Vue 3 scoped 样式写法 */
::v-deep(.quill-editor .ql-container) {
  min-height: 550px !important; /* !important 保证覆盖内联样式 */
}
/* Quill 编辑区本身 */
.quill-editor .ql-editor {
  padding: 18px 20px;
  font-size: 15px;
  line-height: 1.7;
  width: 100%;
  box-sizing: border-box;
}

/* 移除 Quill 默认的 max-width 限制 */
.quill-editor .ql-editor p {
  max-width: none;
}

/* 按钮区域 */
.button-group {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
}

.btn-main,
.btn-cancel {
  padding: 10px 28px;
  font-size: 15px;
  border-radius: 8px;
}

/* 响应式优化 */
@media (max-width: 768px) {
  .note-card {
    padding: 20px;
  }

  .editor-item {
    flex-direction: column;
  }

  .editor-item .el-form-item__label {
    padding-top: 0;
  }

  .quill-editor .ql-container {
    min-height: 400px;
  }
}
</style>
