<template>
    <view class="mask" v-show="isShow" :style="{backgroundColor:bg}">

    </view>
</template>

<script>
    export default {
        name: 'mymask',
        data(){
            return{
                bg: '#fff',
                isShow: false,
            }
        },
        methods: {
            showFn(key){
                this.isShow = key
            },

            show(){
                this.showFn(true)
            },

            hide(){
                this.showFn(false);

                setTimeout(()=>{
                    this.$el.remove();
                },0)
            }
        },
    }
</script>

<style lang="scss" scoped>
.mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 10011;
    background: #fff;
}
</style>