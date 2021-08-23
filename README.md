# alt:V Website 汉化版

Alt:V 多人联机官网汉化版

## 项目设置

```sh
npm install -g @vue/cli
npm install
```

### 运行开发环境

```sh
npm run serve
```

### 部署生产环境

```sh
npm run build
```

### 为 Github 部署

如果有任何改变。您可以通过在本地运行以下命令来重新部署。`deploy.sh`如果您使用的是基于 Linux 的机器，则运行该程序。

```sh
npm run build

# Copy CNAME to dist directory.

cd dist

git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:altmp/altv-hub-client.git master:gh-pages
```

Don't forget to go into settings and set the domain to https://hub.altv.mp/

### 自定义配置

See [Configuration Reference](https://cli.vuejs.org/config/).
