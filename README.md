created at 2021-08-05 

### 环境搭建

```sh
npm i create-react-app -g
create-react-app react-admin --template typescript
```

目录树

```
react-admin               
├─ public                 
│  ├─ favicon.ico         
│  ├─ index.html          
│  ├─ logo192.png         
│  ├─ logo512.png         
│  ├─ manifest.json       
│  └─ robots.txt          
├─ src                    
│  ├─ App.css             
│  ├─ App.test.tsx        
│  ├─ App.tsx             
│  ├─ index.css           
│  ├─ index.tsx           
│  ├─ logo.svg            
│  ├─ react-app-env.d.ts  
│  ├─ reportWebVitals.ts  
│  └─ setupTests.ts       
├─ README.md              
├─ package.json           
├─ tsconfig.json          
└─ yarn.lock              

```



文件命名: 

.js / .jsx / .ts / .tsx 

如果代码中用到了JSX变量,文件名用.jsx或.tsx

- TypeScript

    它是JS的超集,在TS环境可以兼容JS代码

    在脚手架环境中(mode+ webpack),还做不到实时对TS进行类型检测,但是重启项目可以每次做到检测

    所以在工作共,TS项目几乎都用的是VSCode来做开发

    TS报错不影响程序运行

进行暴露操作2222

```
npm run eject 
然后提示需要先将代码进行提交,创建本地仓库,命令如下: 
git init
git add .
git commit -m 'eject'
```

