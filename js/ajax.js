/**
 * Created by gueson on 2016/7/13.
 */

/**
 *
 * @param method 传输方式,GET或POST
 * @param url 请求访问的服务器地址
 * @param success 请求并响应成功时的处理结果
 * @param fail 请求失败时的处理结果
 */

var $ = {
	'ajax':function (options) {
		xhr = this.createRequest();
		xhr.open(options.method,options.url,true); //采用GET方式,向服务器发出请求,以异步方式打开url文件
		xhr.onreadystatechange = function() { //onreadystatechange必须小写
			if(xhr.readyState == 4 && xhr.status == 200) {
				if(options.success) {
					options.success(xhr.responseText);
				}
			}
			else {
				if(options.fail) {
					options.fail(xhr.readyState + '---->' + xhr.status + ':' + xhr.statusText);
				}
			}
		}
		xhr.send(null); //正式向服务器发出请求,null不可省
	},

	'getJson':function (options) {
		xhr = this.createRequest();
		xhr.open('GET',options.url,true); //采用GET方式,向服务器发出请求,以异步方式打开url文件
		xhr.onreadystatechange = function() { //onreadystatechange必须小写
			if(xhr.readyState == 4 && xhr.status == 200) {
				if(options.success) {
					options.success(JSON.parse(xhr.responseText));
				}
			}
			else {
				if(options.fail) {
					options.fail(xhr.readyState + '---->' + xhr.status + ':' + xhr.statusText);
				}
			}
		}
		xhr.send(null); //正式向服务器发出请求,null不可省
	},

	createRequest:function() {
		var xhr = null;
		try {
			xhr = new XMLHttpRequest();  // code for IE7+, Firefox, Chrome, Opera, Safari
		}
		catch(e) {
			try {
				xhr = new activeXObject("Msxm12.XMLHTTP"); //约IE6.5
			}
			catch(e) {
				try {
					xhr = new activeXObject("Microsoft.XMLHTTP"); // code for IE6, IE5
				}
				catch(e) {
					console.log("您的浏览器版本过低,请及时升级(please upgrade your browser)");
				}
			}
		}
		return xhr;
	}
























}