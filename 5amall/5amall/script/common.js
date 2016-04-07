//获取设备当前经纬度
function getLocation() {
	var baiduLocation = api.require('baiduLocation');
	baiduLocation.startLocation({
		accuracy : '10m',
		filter : 1,
		autoStop : true
	}, function(ret, err) {
		var sta = ret.status;
		var lat = ret.latitude;//经度
		var lon = ret.longitude;//纬度
		var t = ret.timestamp;//时间戳
		if (sta) {
			//写本地存储
			$api.setStorage('lon', lon);
			$api.setStorage('lat', lat);
			$api.setStorage('t', t);
		} else {
			api.alert({
				msg : err.msg
			});
		}
	});
}

