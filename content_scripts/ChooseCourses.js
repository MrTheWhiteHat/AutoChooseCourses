
/**
*	@Description 弹出窗口请求执行的内容脚本
*	@Time 2017-06-25
*	@Author H4ck1ng.com
*   @Copyright Copyright©2017, H4ck1ng.com, All Rights  Reserved.
* 	
*/

/**Main Code**/

// 定义一个全局变量，因为click()函数内无法访问autoChooseCourses()的局部变量！！！

var html = $(".tjxk_list").html();			  	  			// .tjxk_list

function click() {							  				// 将函数大化小，解决setInterval连续点击问题！！！		

	var reg = /tr\_([0-9]|[A-Z]|[a-z]){32}/g;         		// 获取当前查询页面的课程唯一ID
	var result = html.match(reg); 							// 数值型变量无法调用.length方法！！！	字符型可以

	for (var i = 0; i < result.length; i++) {
		
		var jq = "#" + result[i] + " button";

		console.log(i);

		$(jq).click();
		
		if ($("#alertModal").length>0){  
			$("#btn_ok").click();
		}
	}
}

function autoChooseCourses() {             			  		//	自动刷课
	
	if (html !== undefined) {								// 若存在html,就进行正则表达式匹配
		
		var reg = /tr\_([0-9]|[A-Z]|[a-z]){32}/g;         	// 获取当前查询页面的课程唯一ID
		var result = html.match(reg); 						// 数值型变量无法调用.length方法！！！	字符型可以

		if (result !== null) {								// 若正则匹配的结果不为空，那么就进行下一步！！！
			
			createPopup();								  	// 先创建createPopup提示窗口，再执行自动循环点击！！！ 解决连续点击创建多个setInterval()的bug!!!

			click();		

			timer = window.setInterval(click, 3000);      	// 如果setInterval没有时间参数，将会只执行一次！！！ 将setInterval()更加具体到点击事件上，终于解决连续点击问题！！！

		} else {

			createModal();

		} 
	}
	else {

		createModal();

	}	
}

function createModal() {
	var div0 = document.createElement("div");
	var div1 = document.createElement("div");
	var div2 = document.createElement("div");
	var div3 = document.createElement("div");
	var div4 = document.createElement("div");
	var div5 = document.createElement("div");
	var button0 = document.createElement("button");
	var button1 = document.createElement("button");
	
	button0.innerHTML = "&times;"; 							// createTextNode() 将会自动将&times;转义成普通字符！！！
	var h4 = document.createElement("h4");
	var title = document.createTextNode("使用说明");
	div4.innerHTML = "<strong><p style='color: green;'>A、步骤</p></strong>一、先从信息门户进入到自主选课网址(http://122.204.187.6/xx/xx.html)；<br /> 二、按您的需求条件选好课程。 例如：想刷通核,就限制数学与自然科学等等搜索就可以了；<br /> 三、下拉到页面到最后，将所有课程加载出来； <br /> 四、点击“开始刷课”按钮即可。<br /><br /><strong><p style='color: #FF7F00;'>B、注意事项</p></strong>一、一定要有课程在列表中才行，否则插件将不会做出任何行为！ <br /> 二、 “休息一下”按钮作用是停止刷课。 例如，刷到课后确认是否退课，然后再继续刷； 减少刷课请求，以防产生不良后果； <br /> 三、 “重新加载”的作用是重新请求刷新页面，如出现bug，请重新加载一下； <br /> 四、如有任何问题请联系我。<br /><br /><strong><p style='color: red;'>C、作者声明</p></strong>本插件仅为技术交流，切勿进行任何非法活动，否则造成的一切后果及相应的责任由使用者自负！";
	var buttonText = document.createTextNode("我知道了");

	div0.setAttribute("class", "modal fade");
	div0.setAttribute("id", "myModal"); 
	div0.setAttribute("tabindex", "-1");
	div0.setAttribute("role", "dialog");
	div0.setAttribute("aria-labelledby", "myModalLabel");
	div0.setAttribute("aria-hidden", "true");
	div0.setAttribute("data-backdrop", "false");  			// 解决连续点击backdrop消不掉的问题
	
	div1.setAttribute("class", "modal-dialog");

	div2.setAttribute("class", "modal-content");

	div3.setAttribute("class", "modal-header");

	div4.setAttribute("class", "modal-body");

	div5.setAttribute("class", "modal-footer");

	button0.setAttribute("type", "button");
	button0.setAttribute("class", "close");
	button0.setAttribute("data-dismiss", "modal");
	button0.setAttribute("aria-hidden", "true");

	button1.setAttribute("type", "button");
	button1.setAttribute("class", "btn btn-block btn-success");
	button1.setAttribute("data-dismiss", "modal");

	h4.setAttribute("class", "modal-title");
	h4.setAttribute("id", "myModalLabel");

	h4.appendChild(title);
	div3.appendChild(button0);
	div3.appendChild(h4);
	div2.appendChild(div3);
	div2.appendChild(div4);
	button1.appendChild(buttonText);
	div5.appendChild(button1);
	div2.appendChild(div5);
	div1.appendChild(div2);
	div0.appendChild(div1);		 		

	document.body.appendChild(div0);

	$("#myModal").modal('toggle');
}

function createModal1() {
	var div0 = document.createElement("div");
	var div1 = document.createElement("div");
	var div2 = document.createElement("div");
	var div3 = document.createElement("div");
	var div4 = document.createElement("div");
	var div5 = document.createElement("div");
	var button0 = document.createElement("button");
	var button1 = document.createElement("button");
	
	button0.innerHTML = "&times;"; 							// createTextNode() 将会自动将&times;转义成普通字符！！！
	var h4 = document.createElement("h4");
	var title = document.createTextNode("关于作者");
	div4.innerHTML = "<strong>1. @Author: Mr. Yang <br /> 2. @Time: 2017-06-27 <br /> 3. @Email: 2013653089@qq.com <br /> 4. @Website: www.h4ck1ng.com <br /> 5. @Description: Useful and Enjoying It! </strong>";
	var buttonText = document.createTextNode("我知道了");

	div0.setAttribute("class", "modal fade");
	div0.setAttribute("id", "myModal1"); 
	div0.setAttribute("tabindex", "-1");
	div0.setAttribute("role", "dialog");
	div0.setAttribute("aria-labelledby", "myModalLabel");
	div0.setAttribute("aria-hidden", "true");
	div0.setAttribute("data-backdrop", "false");  			// 解决连续点击backdrop消不掉的问题
	
	div1.setAttribute("class", "modal-dialog");

	div2.setAttribute("class", "modal-content");

	div3.setAttribute("class", "modal-header");

	div4.setAttribute("class", "modal-body");

	div5.setAttribute("class", "modal-footer");

	button0.setAttribute("type", "button");
	button0.setAttribute("class", "close");
	button0.setAttribute("data-dismiss", "modal");
	button0.setAttribute("aria-hidden", "true");

	button1.setAttribute("type", "button");
	button1.setAttribute("class", "btn btn-block btn-danger");
	button1.setAttribute("data-dismiss", "modal");

	h4.setAttribute("class", "modal-title");
	h4.setAttribute("id", "myModalLabel");

	h4.appendChild(title);
	div3.appendChild(button0);
	div3.appendChild(h4);
	div2.appendChild(div3);
	div2.appendChild(div4);
	button1.appendChild(buttonText);
	div5.appendChild(button1);
	div2.appendChild(div5);
	div1.appendChild(div2);
	div0.appendChild(div1);		 		

	document.body.appendChild(div0);

	$("#myModal1").modal('toggle');
}

function createPopup() {

	var button = document.createElement("button");
	var text = document.createTextNode("正在刷课中......");
	var header = document.getElementById("navbar_container"); // 只能使用ById查找元素后使用appendChild()！！！

	button.setAttribute("type", "button");
	button.setAttribute("id", "choosing");
	button.setAttribute("class", "btn btn-block btn-success");

	button.appendChild(text);
	header.appendChild(button);

}

var timer;													

var myPort = browser.runtime.connect({name:"connected"}); 	// 建立连接

myPort.postMessage({greeting: "success"}); 					// 发送数据

myPort.onMessage.addListener(function(m) {					// 监听已连接的Port
	
	console.log("在内容脚本中, 接受到的后台脚本数据具体是： "); // 浏览器必须选择日志才能显示console.log的信息！！！
    console.log(m.greeting);
    
    var greeting = m.greeting;
    var choosing = document.getElementById("choosing");		// 如果此处不再定义一次就会出现choosing未定义的错误！！！

    if (greeting == "start" && choosing == undefined) {

    	autoChooseCourses();								// 终于解决了连续点击会创建多个setInterval函数的问题，解决方式是先创建提示窗口Popup()！在执行setInterval函数！！！

    }

	else if (greeting == "stop") {

  		window.clearInterval(timer);
  		var choosing = document.getElementById("choosing"); // 如果此处不再定义一次就会出现button未定义的错误！！！
		document.getElementById("navbar_container").removeChild(choosing);

  	}

  	else if (greeting == "readme") {

  		createModal();		

  	}

  	else if (greeting == "aboutme") {

  		createModal1();

  	}
});


