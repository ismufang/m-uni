import request from '../request.js'

// 获取壁纸
export const getWallPaper = data => request({url:`http://localhost:8080/HPImageArchive.aspx?format=js&n=5`, data, method: 'GET' });

export default {
    getWallPaper
}