console.log(window.location.hostname);
if (window.location.hostname=="127.0.0.1") {
    console.log("...");
};
if (window.location.hostname=="www.douyin.com") {
    console.log("sb");
};
if (window.location.protocol=="file://") {
    console.log("ohh");
};
// 向页面注入JS
function injectCustomJs(jsPath){
	jsPath = jsPath || '/script/content.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function()
	{
		// 放在页面不好看，执行完后移除掉
		this.parentNode.removeChild(this);
	};
	document.head.appendChild(temp);
};