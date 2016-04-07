$('#loginbtn').click(function() { //会员登陆
	var username = $('#username').val();
	var pwd = $('#password').val();
	var client = 'wap';
	mui.ajax(ApiUrl + '/index.php?act=login', {
		data: {
			username: username,
			password: pwd,
			client: client
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 6000, //超时时间设置为10秒；
		success: function(result) {
			if (!result.datas.error) {
				if (typeof(result.datas.key) == 'undefined') {
					return false;
				} else {
					//alert(JSON.stringify(result));
					addcookie('username', result.datas.username);
					addcookie('key', result.datas.key);
					//alert(getcookie('key'));//location.href = referurl;
				}
			} else {
				alert(result.datas.error);
			}
		},
		error: function(xhr, type, errorThrown) {
			//异常处理；
			console.log(type);
			//alert(type);
		}
	});
});