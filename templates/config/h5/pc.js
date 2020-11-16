/**
 * 适配pc端 rpx
 */
;(function (){
	const u = navigator.userAgent,
		w = window.innerWidth;

	const systemInfo = uni.getSystemInfoSync();
	const platform = systemInfo.platform;

	if (platform === 'other' || u.indexOf('iPad') > -1) {
		window.innerWidth = 750*(w / 1920);
		// window.innerWidth = 480;
		window.onload = function() {
			window.innerWidth = w;
			document.documentElement.style.fontSize = '16px';

			document.oncontextmenu = function(event){
                // return fasle
                if(process.env.NODE_ENV !== 'development'){
                    event.returnValue = false;
                }
			}
		}
	}
})();