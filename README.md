## 简介

使用 vite 搭建的 vue3 + ts 项目，css 使用 scss，ui 框架 element-plus，ajax 使用 axios，代码规范使用 eslint + prettier，store 使用 pinia。

依赖截止 2022.5.6 全为最新版本

其他插件：
mitt：组件通信器；
vite-plugin-compression：vite 插件压缩；
vite-plugin-eslint：vite 的 ESLint 插件；
tinymce：富文本编辑器；
vue-cropper：图片裁剪插件

指令说明：
"dev": 启动开发服务器,
"build": 打包,
"preview": 本地预览生产构建产物,
"lint": lint 规则代码检查及自动格式化，配置详见.eslintrc.js,
"prettier": prettier 规则代码检查及自动格式化，配置详见.prettierrc.js

增加的自定义指令： v-error = "boolean" errorRedo="emitName" errorRedo 为重试事件名 使用 emiter.on('emitName', function...) 监听点击重试事件

commit 之前请运行指令格式化

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
