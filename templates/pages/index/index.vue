<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="time">{{time}}</view>
		<Imgs :list="imgs" />
	</view>
</template>

<script>
import { getWallPaper } from '@/service/api/home'
import { getFormatTime } from '@/utils/common'
import Imgs from './imgList'
	export default {
		name: 'Index',
		components: {
			Imgs
		},
		data() {
			return {
				title: 'Welcome <%= name %>',
				time: getFormatTime().date,
				imgs: []
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			init(){
				this.getData()
			},
			async getData(){
				try{
					const { images } = await getWallPaper()
					this.imgs = images.map(item=>item.url = `https://www.bing.com${item.url}`)
				}catch(err){
					console.log(err)
				}
				
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
