# HTML 语义化与结构

# 语义化 HTML 与可访问性总结

## 一、语义化 HTML 原则

语义化 HTML 的核心是 **用正确的标签表达内容的意义，而不仅仅是外观**。

### 1. 基础原则

| 原则                   | 说明                                                                   | 示例                                                 |
| ---------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| 语义标签替代无语义标签 | 用`<header>`、`<main>`、`<footer>` 替代 `<div>` 来表示页面结构         | `<header>网站头部</header>`                          |
| 正确使用标题层级       | `<h1>`~`<h6>` 按逻辑顺序使用，不跳级                                   | `<h1>首页</h1><h2>新闻</h2>`                         |
| 列表表达列表           | 有序列表`<ol>`、无序列表 `<ul>`，列表项 `<li>`                         | `<ul><li>苹果</li><li>橘子</li></ul>`                |
| 链接和按钮明确用途     | `<a>` 用于导航，`<button>` 用于动作                                    | `<a href="/about">关于我们</a>`                      |
| 表单控件语义           | 每个`<input>` 配 `<label>`，用 `<fieldset>` 和 `<legend>` 组织相关控件 | `<label for="email">Email</label><input id="email">` |

### 2. HTML5 语义标签推荐

| 标签                        | 用途                                 |
| --------------------------- | ------------------------------------ |
| `<header>`                  | 页面或文章的头部内容                 |
| `<nav>`                     | 导航菜单                             |
| `<main>`                    | 页面主要内容                         |
| `<section>`                 | 页面中有主题的区域                   |
| `<article>`                 | 独立内容块，例如博客、新闻、简历条目 |
| `<aside>`                   | 侧边栏、补充信息                     |
| `<footer>`                  | 页脚或文章尾部                       |
| `<figure>` + `<figcaption>` | 图像及说明文字                       |
| `<time>`                    | 时间或日期                           |

---

## 二、语义化 HTML 的常见错误

1. **滥用 `<div>` 或 `<span>`**

   - 不用语义标签时，屏幕阅读器无法理解结构。
   - **改进**：把文章内容用 `<article>`，导航用 `<nav>`。

2. **标题层级错误**

   - `<h1>` 后直接跳到 `<h3>`。
   - **改进**：保持连续层级，便于逻辑和 SEO。

3. **表单缺少 `<label>` 或 placeholder 代替 label**

   - 屏幕阅读器无法识别输入目的。
   - **改进**：使用 `<label>` 并关联 `for` 属性，必要时补充 `aria-label`。

4. **点击元素用 `<div>` 或 `<span>` 而不是 `<button>` 或 `<a>`**

   - 键盘用户无法操作。
   - **改进**：使用语义按钮或链接，或加上 `role="button"` + `tabindex="0"` 并绑定键盘事件。

5. **纯视觉装饰的图像没有 `alt`**

   - 屏幕阅读器会忽略或误读。
   - **改进**：装饰图加 `alt=""`，有意义图像加上描述。

6. **表格用于布局而非数据**

   - `<table>` 应该表示表格数据，而不是页面布局。

---

## 三、用 ARIA 优化可访问性

ARIA (Accessible Rich Internet Applications) 用于增强 HTML 可访问性，但不能替代语义标签。原则是 **优先语义标签，必要时用 ARIA 补充**。

### 1. 常用 ARIA 属性

| 属性                 | 作用                       | 示例                                              |
| -------------------- | -------------------------- | ------------------------------------------------- |
| `aria-label`         | 给元素添加文本标签         | `<button aria-label="关闭菜单">×</button>`        |
| `aria-labelledby`    | 元素通过 ID 关联可访问文本 | `<div aria-labelledby="heading1">...</div>`       |
| `aria-hidden="true"` | 隐藏装饰元素               | `<span aria-hidden="true">★</span>`               |
| `role`               | 明确元素角色               | `<div role="button">点击</div>`                   |
| `aria-expanded`      | 状态指示折叠/展开          | `<button aria-expanded="false">菜单</button>`     |
| `aria-controls`      | 说明按钮控制的元素         | `<button aria-controls="menu1">打开菜单</button>` |
| `aria-describedby`   | 关联额外描述               | `<input id="email" aria-describedby="emailHelp">` |

### 2. ARIA 使用注意事项

- **不要滥用**：有语义标签的地方不要加 role。
- **动态内容**：使用 `aria-live="polite"` 或 `assertive` 提示屏幕阅读器更新。
- **键盘可操作**：确保带 role 的元素可以被 `Tab` 选中（加 `tabindex="0"`）。

---

## 四、总结原则

1. **语义优先**：能用语义 HTML 的地方不要用 ARIA 替代。
2. **保持结构清晰**：标题、列表、文章块层级分明。
3. **可访问性增强**：为屏幕阅读器提供 `aria-label`、`aria-labelledby` 等辅助。
4. **键盘友好**：确保所有交互元素可用 Tab + 回车操作。
5. **视觉+语义一致**：视觉布局不能破坏语义，表格和 `<div>` 的使用要合理。

- [ ] 学：常用语义标签（header/nav/main/section/article/footer）、表单控件、无障碍（aria）、基础 SEO。
- [ ] 做：纯 HTML 做一个简历或产品页，不写 CSS。

  出：总结语义化原则与常见错误，用 aria-label 优化可访问性。

  ##

#### REF

https://www.w3schools.com/accessibility/accessibility_landmarks.php

搜索结果标题，最关键的 SEO 元素之一
