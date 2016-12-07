/**
 * Created by gueson 2016/7/16.
 */

	var oBtn = document.getElementsByClassName('cityBtn')[0];
	var oSel = document.getElementsByClassName('city')[0];
	var oWeaCity = document.getElementsByClassName('weaCity')[0];
	var oWeaTime = document.getElementsByClassName('weaTime')[0];
	var oTemp = document.getElementsByClassName('temperature')[0];
	var oWeaType = document.getElementsByClassName('weatherType')[0];
	var oHumidity = document.getElementsByClassName('humidity')[0];
	var oWeaType = document.getElementsByClassName('weatherType')[0];
	var oWeaDate = document.getElementsByClassName('weaDate');
	var oWeaPic = document.getElementsByClassName('weaPic');
	var oDegree = document.getElementsByClassName('degree');
	var oWind = document.getElementsByClassName('wind');
	var time = new Date();
	var count = time.getDate();

	if(oWeaCity.innerHTML == '上海') { //默认城市为上海时,传输数据
		$.getJson({
			url: 'http://wthrcdn.etouch.cn/weather_mini?city=上海',
			success: success
		});
	}

	oBtn.onclick = function() { //切换城市时更新数据
		$.getJson({
			url: 'http://wthrcdn.etouch.cn/weather_mini?city=' + oSel.value,
			success: success
		});
	}
		//请求并响应成功时,需要处理的数据
	function success(data) {
		var weather = data.data.forecast;
		oWeaCity.innerHTML = oSel.value;
		oWeaTime.innerHTML = time.getHours() + ':00' + '发布';
		oHumidity.innerHTML = ' ' + data.data.aqi;
		oTemp.innerHTML = weather[0].high;
		oWeaType.innerHTML = weather[0].type;

		for(var i=0; i<oWeaDate.length; i++) {
			if(count==time.getDate()) {
				oWeaDate[i].innerHTML = weather[i].date;
				oWeaPic[i].innerHTML = weather[i].type;
				oDegree[i].innerHTML = weather[i].low + ' ';
				oWind[i].innerHTML = weather[i].fengli;
			}

			var type = weather[i].type;

			switch(type){ //根据天气类型匹配背景图片
				case '晴':
					oWeaPic[i].style.background = 'url(images/sunny.png)' + 'no-repeat';
					oWeaPic[i].style.backgroundPosition = 'center 50px';
					break;
				case '阵雨':
					oWeaPic[i].style.background = 'url(images/rain-shower.png)' + 'no-repeat';
					oWeaPic[i].style.backgroundPosition = 'center 50px';
					break;
				case '多云':
					oWeaPic[i].style.background = 'url(images/cloudy.png)' + 'no-repeat';
					oWeaPic[i].style.backgroundPosition = 'center 50px';
					break;
				case '中雨':i
					oWeaPic[i].style.background = 'url(images/moderate-rain.png)' + 'no-repeat';
					oWeaPic[i].style.backgroundPosition = 'center 50px';
					break;
				case '雷阵雨':
					oWeaPic[i].style.background = 'url(images/thound-storms.png)' + 'no-repeat';
					oWeaPic[i].style.backgroundPosition = 'center 50px';
					break;
				case '小雨':
					oWeaPic[i].style.background = 'url(images/light-rain.png)' + 'no-repeat';
					oWeaPic[i].style.backgroundPosition = 'center 50px';
					break;
				case '小到中雨':
					oWeaPic[i].style.background = 'url(images/light-and-moderate.png)' + 'no-repeat';
					oWeaPic[i].style.backgroundPosition = 'center 50px';
					break;
				case '中到大雨':
					oWeaPic[i].style.background = 'url(images/moderate-heavy-rain.png)' + 'no-repeat';
					oWeaPic[i].style.backgroundPosition = 'center 50px';
					break;
				case '阴':
					oWeaPic[i].style.background = 'url(images/overcast.png)' + 'no-repeat';
					oWeaPic[i].style.backgroundPosition = 'center 50px';
					break;
				default: //天气类型都不满足时,背景图片的处理
					oWeaPic[i].style.background = 'url(images/error.png)' + 'no-repeat';
					oWeaPic[i].style.backgroundPosition = 'center 50px';
			}
		}
	}
