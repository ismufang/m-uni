#!/usr/bin/env node
// console.log('fang')

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

    const destDir = process.cwd();

    const files = [
        '.gitignore',
        'App.vue',
        'index.html',
        'main.js',
        'manifest.json',
        'package.json',
        'pages.json',
        'README.md',
        'uni.scss',
        'components/loading/index.js',
        'components/loading/loading.vue',
        'components/mask/index.js',
        'components/mask/mask.vue',
        'components/modal/index.js',
        'components/modal/modal.vue',
        'components/toast/index.js',
        'components/toast/toast.vue',
        'pages/index/index.vue',
        'static/favicon.ico',
        'store/index.js',
        'utils/common.js',
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

                fs.mkdirSync(path.join(destDir, filedir), { recursive: true });
            }

            fs.writeFileSync(path.join(destDir, file), result)
            
        })
    })
})