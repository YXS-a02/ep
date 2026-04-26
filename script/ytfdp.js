
var ytfdp_w = document.createElement("div");
ytfdp_w.id = "ygfdp_window";
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
ytfdp_w.style.pointerEvents = "none";
//ytfdp_w.style.borderWidth = "5px";
//ytfdp_w.style.borderColor = "black";
//ytfdp_w.style.borderStyle = "solid";
ytfdp_w.style.zIndex = "99";

document.getElementsByTagName("body")[0].appendChild(ytfdp_w);