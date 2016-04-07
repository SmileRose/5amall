/** 
 * ajax数据请求和渲染范例
 * @uthor	_We.
 * @time	201504270802
 * @desc	每个页面对应一个js文件，强依赖mui.min.js、zepto.min.js、template.js
 * */
$(function() {
	var key = getcookie('key'); //Login控制器在登陆成功后会将服务器返回的令牌写到Cookie中，此处获取令牌
	if (key == '') {//如果令牌为空，则跳转到登陆页面
		window.location.href = 'login.html';//注意路径
	}
	var param = GetQueryString('param');//依据指定的名称来获取当前网址中的对应参数的值
	function initPage(参数) {
			//该ajax方法在移动设备上可以直接支持跨域，PC浏览器上不支持
			mui.ajax(ApiUrl + '/index.php?act=login', {
				data: {
					class_id: data1,
					data2: data2,
					data2: data3
				},
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 6000, //超时时间设置为10秒；
				success: function(result) {
					checklogin(result.login); //检测是否登录了
					if (!result.datas.error) //被output_data格式化后的代码包含若干状态码，除去正常数据外，其他全部是error，如登陆接口的'密码错误'状态
					{
						var data = result.datas; //将ajax请求回来的数据中的实际数据部分赋值
						//alert(JSON.stringify(data));
						var html = template('tplScript', data); //模板引擎寻找页面中的ID为tplScript的script标签，并以此段落内的代码作为模板，替换其中的模板语法，并将生成的数据赋值
						document.getElementById('content').innerHTML = html; //将上一步得到的HTML代码innerHTML给ID为content的DOM元素,完成模板机制
					} else {
						console.log(result.datas.error);//抛出异常到控制台
					}
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);//抛出IO异常到控制台；
				}
				$("DOM元素ID或class").click(方法名);//为元素的点击事件绑定操作
			});
		}
		//初始化页面
	initPage(参数);

	function 方法名() {
		//
	}
});