<template>
<view class="mask-wrapper" v-show="isShow">
    <view class="mask" :style="{backgroundColor:bg}"></view>
</view>
</template>

<script>
export default {
    name: 'MyMask',
    data() {
        return {
            bg: '#fff',
            isShow: false,
        }
    },
    methods: {
        showFn(key) {
            this.isShow = key
        },

        show() {
            this.showFn(true)
        },

        hide() {
            this.showFn(false);

            setTimeout(() => {
                this.$el.remove();
            }, 0)
        }
    },
}
</script>

<style lang="scss" scoped>
.mask-wrapper {
    height: 100vh;
    overflow: hidden;

    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        z-index: 9999;
        background: #fff;
    }
}
</style>
