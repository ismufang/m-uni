<template>
    <view class="loading" v-show="show">
        <view class="loading-body" :style="{backgroundColor: title?'rgba(0,0,0,.7)':'transparent'}">
            <!-- <image :src="img" class="loading-body-img" mode="widthFix" v-if="!title"></image> -->
            <view class="loading-body-anim"></view>
            <view class="loading-body-text">{{title}}</view>
        </view>
    </view>
</template>

<script>
    export default {
        name: 'loading',
        data(){
            return {
                title: '',
                img: '',
                show: false,
            }
        },
        methods: {
        },
    }
</script>

<style lang="scss" scoped>
    .loading{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: transparent;
        font-size: 14px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        &-body{
            // background: rgba(0,0,0,.5);
            // height: 90rpx;
            // line-height: 90rpx;
            border-radius: 10rpx;
            padding: 10px 15px;
            display: inline-block;
            overflow: hidden;
            // max-width: 60vw;
            max-width: 300px;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &-text{
                // margin-top: 10rpx;
            }
            &-img{
                width: 150rpx;
            }
            &-anim {
                width: 50rpx;
                height: 50rpx;
                display: inline-block;
                border: 8rpx solid rgba(189,189,189 ,0.25);
                border-left-color: rgba(189,189,189 ,0.7);
                border-top-color: rgba(189,189,189 ,0.7);
                animation: rotate 600ms infinite linear;
                border-radius: 50%;
                margin-bottom: 10rpx;
            }

            @keyframes rotate {
                to {
                    transform: rotate(1turn)
                }
            }
        }
    }
</style>