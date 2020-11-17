#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ejs = require('ejs')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Project name?'
    }
])
.then(answers=>{
    // console.log(answers)

    const tmplDir = path.join(__dirname, 'templates')

    const destDir = process.cwd() + `/${answers.name}`;

    const files = [
        'App.vue',
        'index.html',
        'main.js',
        'manifest.json',
        'package.json',
        'pages.json',
        'README.md',
        'uni.scss',
        'version.md',
        'vue.config.js',
        'assets/style/base.scss',
        'components/public/loading/index.js',
        'components/public/loading/loading.vue',
        'components/public/mask/index.js',
        'components/public/mask/mask.vue',
        'components/public/modal/index.js',
        'components/public/modal/modal.vue',
        'components/public/toast/index.js',
        'components/public/toast/toast.vue',
        'components/index.js',
        'config/h5/pc.js',
        'config/h5/config.js',
        'config/miniapp/config.js',
        'config/env.js',
        'config/index.js',
        'pages/index/index.vue',
        'pages/index/imgList.vue',
        'service/api/home.js',
        'service/api/index.js',
        'service/request.js',
        'static/favicon.ico',
        'store/index.js',
        'utils/common.js',
        'utils/h5/jwx.js',
    ]

    files.forEach(file=>{
        ejs.renderFile(path.join(tmplDir, file), answers, (err, result) => {
            if(err) throw err

            // console.log(result)
            // return

            // 创建文件
            if(file.lastIndexOf('/')){
                let filedir = file.substring(0, file.lastIndexOf('/'))
                // console.log(filedir)
                // console.log(path.join(destDir, filedir))

                fs.mkdirSync(path.join(destDir, filedir), { recursive: true });
            }

            fs.writeFileSync(path.join(destDir, file), result)
            
        })
    })
})