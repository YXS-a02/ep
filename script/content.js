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
function injectCustomJs(jsPath)
{
	jsPath = jsPath || '';
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
function ygfdp_f() {
var ytfdp_w = document.createElement("div");
ytfdp_w.id = "ygfdp";
pic = chrome.runtime.getURL('pic/xr.png');
ytfdp_w.innerHTML = "<img src='" + pic + "' style='width:100%;height:100%;object-fit:cover;'>";
//ytfdp_w.style.height = "100px";
ytfdp_w.style.width = "180px";
ytfdp_w.style.position = "fixed";
ytfdp_w.style.top = "25px";
ytfdp_w.style.right = "25px";
ytfdp_w.style.backgroundSize = "cover";
ytfdp_w.style.backgroundPosition = "center";
ytfdp_w.style.backgroundRepeat = "no-repeat";
//ytfdp_w.style.borderWidth = "5px";
//ytfdp_w.style.borderColor = "black";
//ytfdp_w.style.borderStyle = "solid";
ytfdp_w.style.zIndex = "99";

document.getElementsByTagName("body")[0].appendChild(ytfdp_w);
};
ygfdp_f();