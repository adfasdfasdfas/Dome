# geektime-vue

## 安装依赖

```
npm install
```

### 启动环境

```
npm run serve
```

### Node.js OpenSSL 兼容性问题解决方案 （多种方法中的一种）

```
# 升级 Vue CLI 全局和本地版本
npm install -g @vue/cli
npm update @vue/cli-service

# 升级 Webpack 和相关插件
npm install webpack@5 webpack-cli@4 webpack-dev-server@4 --save-dev

# 清理缓存并重新安装依赖
rm -rf node_modules package-lock.json
npm install
```
