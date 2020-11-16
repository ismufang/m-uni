/**
 * weixin api 接口调用
 */
import jweixin from 'jweixin-module';
import store from "../store";


//判断是否在微信中    
export const isWechat = () => {
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/micromessenger/i) == 'micromessenger') {
        console.log('是微信客户端')
        return true;
    } else {
        console.log('不是微信客户端')
        return false;
    }
}

export const initJssdk = callback => {
    let serveUrl = store.state.url;
    let url = window.location.href;

    uni.request({
        url: `${serveUrl}/api`,
        method: 'POST',
        data: {
            url
        },
        header: {
            // "Content-Type": 'application/x-www-form-urlencoded',
            // token: store.state.token
        },
        success(res) {
            // console.log(res.data);
            //返回需要的参数appId,timestamp,noncestr,signature等  
            //注入config权限配置  
            jweixin.config({
                debug: false,
                appId: res.data.data.appId,
                timestamp: res.data.data.timestamp,
                nonceStr: res.data.data.nonceStr,
                signature: res.data.data.signature,
                jsApiList: [ //这里是需要用到的接口名称  
                    'checkJsApi', //判断当前客户端版本是否支持指定JS接口   
                    'getLocation', //获取位置  
                    'openLocation', //打开位置  
                    'scanQRCode', //扫一扫接口  
                    'chooseWXPay', //微信支付  
                    'chooseImage', //拍照或从手机相册中选图接口  
                    'previewImage', //预览图片接口  
                    'uploadImage', //上传图片  
                    'onMenuShareTimeline', // 分享到朋友圈接口
                    'onMenuShareAppMessage', //  分享到朋友接口
                    'onMenuShareQQ', // 分享到QQ接口
                    'onMenuShareWeibo', // 分享到微博接口
                    'hideAllNonBaseMenuItem', //隐藏所有非基础按钮接口
                    'showAllNonBaseMenuItem', // 显示所有功能按钮接口
                    'updateTimelineShareData', //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
                    'updateAppMessageShareData' //自定义“分享给朋友”及“分享到QQ”按钮的分享内容
                ]
            });
            if (callback && typeof callback === 'function') {
                callback(res.data);
            }

        }
    })
}

/** 
 * 自定义分享接口调用
 * @param {object} data {title, desc, link, imgUrl}
 * @param {function} callback 
 */
export const shareFn = (data, callback) => {
    if (!isWechat()) {
        return;
    }

    initJssdk(function (res) {
        jweixin.ready(function () {

            // jweixin.hideAllNonBaseMenuItem(); //隐藏所有非基础按钮接口

            // 微信分享的数据
            let shareData = {
                title: data.title, // 分享标题
                desc: data.desc, // 分享描述
                link: data.link, // 分享地址
                imgUrl: data.imgUrl, // 分享显示的缩略图地址

                trigger: function (res) { //监听右上角Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    // console.log('监听Menu中的按钮点击');
                    // alert('监听Menu中的按钮点击')
                },
                success: function (res) {
                    jweixin.showAllNonBaseMenuItem(); // 显示所有功能按钮接口
                    callback(res)
                    // alert('设置分享成功');

                },
                fail: function () {
                    // callback(res)
                    // alert('调用失败')
                },
                complete: function () {
                    // alert('调用结束')
                }
            }

            jweixin.updateTimelineShareData(shareData); //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
            jweixin.updateAppMessageShareData(shareData); //自定义“分享给朋友”及“分享到QQ”按钮的分享内容
        });
    });
}