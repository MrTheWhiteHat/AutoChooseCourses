
/**
*	@Description 弹出窗口的后台脚本
*	@Time 2017-06-25
*	@Author H4ck1ng.com
*   @Copyright Copyright©2017, H4ck1ng.com, All Rights  Reserved.
* 	
*/

browser.tabs.insertCSS(null, {
	file: "/content_scripts/bootstrap.min.css"
});

browser.tabs.executeScript(null, {
	file: "/content_scripts/jquery.min.1.10.2.js"
});

browser.tabs.executeScript(null, {
	file: "/content_scripts/bootstrap.min.js"
});

browser.tabs.executeScript(null, {
	file: "/content_scripts/ChooseCourses.js"
});

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({greeting: "我是后台脚本数据！"});
  portFromCS.onMessage.addListener(function(m) {
    
    console.log("在后台脚本中, 接收到来自内容脚本的数据如下： ");
    console.log(m.greeting);

    document.getElementById("start").addEventListener("click", (e) => {

		var start = "start";
			
		var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
		gettingActiveTab.then((tabs) => {
			portFromCS.postMessage({greeting: "start"});
		});

	});
	
	document.getElementById("stop").addEventListener("click", (e) => {

		var stop = "stop";
			
		var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
		gettingActiveTab.then((tabs) => {
			portFromCS.postMessage({greeting: "stop"});
		});
	});

	document.getElementById("reload").addEventListener("click", (e) => {

		browser.tabs.reload();
		window.close();

	});

	document.getElementById("readme").addEventListener("click", (e) => {

		var readme = "readme";
			
		var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
		gettingActiveTab.then((tabs) => {
			portFromCS.postMessage({greeting: "readme"});
		});
	});

	document.getElementById("aboutme").addEventListener("click", (e) => {

		var aboutme = "aboutme";
			
		var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
		gettingActiveTab.then((tabs) => {
			portFromCS.postMessage({greeting: "aboutme"});
		});
	});

  });
}

browser.runtime.onConnect.addListener(connected);
