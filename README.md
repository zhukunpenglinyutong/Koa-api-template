### 文件夹介绍

**基础版本，具有简易的MVC结构**

- app.js 启动文件（包括连接mongoose）
- app文件夹
    - model 制定mongoose Schema（模式类型）的地方
    - controller 书写业务逻辑的地方
    - routes 路由层（这里用了一个index.js来控制，这个方法可以批量导入路由）

---

### 启动

```js
npm i 

npm run dev
```