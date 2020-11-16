<template>
    <view class="imgs-wrap">
        <view class="item" v-for="(item, index) in list" :key="index">
            <image :src="item" mode="widthFix"/>
        </view>
    </view>
</template>
<script>
export default {
    name: 'ImgList',
    props: {
        list: {
            type: Array,
            required: true,
            default(){
                return []
            }
        }
    }
}
</script>