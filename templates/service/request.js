import store from '../store'

const alertFn = (content, callback) => {
    return uni.showModal({
        title: '提示',
        content,
        showCancel: false,
        success(res){
            if(res.confirm && callback){
                callback()
            }
        }
    })
}

const http = ({
    method = 'POST',
    url,
    data = {},
    hideLoading
}) => {
    if(!hideLoading){
        uni.showLoading({
            title: '加载中',
            mask: true
        })
    }

    if(!/^http/.test(url)){
        url = `${store.state.url}/${store.state.controller}url`
    }

    return new Promise((resolve, reject) => {
        uni.request({
            method,
            url,
            data,
            header: {
                // "Content-Type": 'application/x-www-form-urlencoded',
				// token: store.state.token
            },
            success: res => {
                if(res.statusCode === 200){
                    if(res.data.code === 401 || res.data.code === 403){
                        return alertFn(res.data.msg, ()=>{
                            // ...
                        })
                    }

                    if(res.data.code > 0){
                        alertFn(res.data.msg)
                        reject(res.data.msg)
                    }

                    resolve(res.data)
                }else {
                    switch (res.statusCode) {
                        case 404:
                            alertFn('找不到请求资源')
                            break;
                        case 500:
                            alertFn('服务器错误')
                            break;
                        default:
                            alertFn(`error code ${res.statusCode}`)
                    }
                }
            },
            fail: err => {
                alertFn('网络不给力请稍后重试')
            },
            complete: () => {
                uni.hideLoading()
            }
        })
    })
}

export default http