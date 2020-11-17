<template>
<view class="modal-wrapper">
    <view :class="{'modal':true,'fadeout':fadeOut}">
        <view :class="{'modal-body':true,'fadein':fadeIn,'fadeout':fadeOut}">
            <view class="modal-body-title">{{title}}</view>
            <view class="modal-body-content" :style="{textAlign:textAlign}">{{content}}</view>
            <view class="modal-body-ft">
                <view class="modal-body-ft-btn cancel" v-if="showCancel" @click="clickFn('cancel')" :style="{color: cancelColor}">{{cancelText}}</view>
                <view class="modal-body-ft-btn confirm" @click="clickFn('confirm')" :style="{color: confirmColor}">{{confirmText}}</view>
            </view>
        </view>
    </view>
</view>
</template>

<script>
export default {
    name: 'MyModal',
    data() {
        return {
            fadeIn: false,
            fadeOut: false,
            title: '',
            content: '',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000',
            confirmText: '确定',
            confirmColor: '#007aff',
            textAlign: 'center',
            success: () => {},
            fail: () => {}
        }
    },
    created() {
        this.fadeIn = true;
    },
    methods: {
        clickFn(type) {
            // this.fadeIn = false;
            this.fadeOut = true;

            setTimeout(() => {
                this.$el.remove();
            }, 500)

            if (type === 'confirm') {
                this.success({
                    confirm: true
                });
            } else {
                this.success({
                    cancel: true
                });
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@mixin p-nowrap {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.modal-wrapper {
    height: 100vh;
    overflow: hidden;

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        overflow: hidden;
        background: rgba(0, 0, 0, .5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;

        &-body {
            position: absolute;
            width: 70%;
            max-width: 300px;
            background: #fff;
            border-radius: 30rpx;
            font-size: 28rpx;
            color: #333;
            overflow: hidden;

            &-title {
                padding: 30rpx 30rpx 10rpx;
                text-align: center;
                font-size: 32rpx;
                @include p-nowrap();
            }

            &-content {
                text-align: center;
                padding: 20rpx 30rpx;
                min-height: 80rpx;
                font-size: 28rpx;
                line-height: 1.4;
                color: #999;
                max-height: 400px;
                word-break: break-all;
                overflow-y: auto;
            }

            &-ft {
                border-top: 1px solid #dedede;
                display: flex;

                &-btn {
                    flex: 1;
                    height: 90rpx;
                    line-height: 90rpx;
                    padding: 0 30rpx;
                    box-sizing: border-box;
                    text-align: center;
                    border-right: 1px solid #dedede;
                    @include p-nowrap();

                    &:last-child {
                        border-right: none;
                    }

                    &:active {
                        background: #f1f1f1;
                    }
                }
            }
        }
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
            transform: scale(0.8)
        }

        to {
            transform: scale(1)
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
</style>
