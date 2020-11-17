<template>
<view class="toast-wrapper">
    <view class="toast">
        <view :class="{'toast-body':true,'fadein':fadeIn,'fadeout':fadeOut,'center':position=='center','top':position=='top','bottom':position=='bottom'}" :style="{backgroundColor:bg,color:color}">{{title}}</view>
    </view>
</view>
</template>

<script>
export default {
    name: 'MyToast',
    data() {
        return {
            fadeIn: false,
            fadeOut: false,
            title: '提示', // 内容
            duration: 1500, // 延迟时间
            bg: 'rgba(0,0,0,.7)', // 背景
            color: '#fff', // 文本颜色
            position: 'center', // 文本位置 top, center, bottom
            success: res => {},
            fail: res => {}
        }
    },

    created() {
        this.fadeIn = true;
    },

    mounted() {
        this.setTimer();
    },
    methods: {
        setTimer() {
            let self = this;

            setTimeout(() => {
                self.fadeIn = false;
                self.fadeOut = true;

                setTimeout(() => {
                    self.$el.remove(); // 移除DOM
                    // console.log('实例关闭');
                    self.success('success');
                }, 500)

            }, self.duration);
        }
    },
}
</script>

<style lang="scss" scoped>
.toast-wrapper {
    height: 100vh;
    overflow: hidden;

    .toast {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        padding: 30rpx;
        box-sizing: border-box;
        z-index: 10011;

        &-body {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: inline-block;
            background: rgba(0, 0, 0, .5);
            color: #fff;
            font-size: 30rpx;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 20rpx 30rpx;
            border-radius: 15rpx;
            box-sizing: border-box;
            max-width: 300px;
        }

        .top {
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
        }

        .center {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .bottom {
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);
        }

        .fadein {
            animation: fadein 0.5s;
        }

        .fadeout {
            animation: fadeout 0.5s;
            opacity: 0;
        }

        @keyframes fadein {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        @keyframes fadeout {
            from {
                opacity: 1;
            }

            to {
                opacity: 0;
            }
        }
    }
}
</style>
