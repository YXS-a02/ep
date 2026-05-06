/*
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
*/
// 创建 UI 元素
function createUI() {
    // 创建元素
    const ui = {
        ytfdp_window: document.createElement("div"),
        ytfdp_ioBar: document.createElement("div"),
        ytfdp_msg: document.createElement("div"),
        ytfdp_BG: document.createElement("div"),
        ytfdp_LBG: document.createElement("div"),
        ytfdp_RBG: document.createElement("div"),
        ytfdp_TBG: document.createElement("div"),
        ytfdp_wp: document.createElement("div"),
        ytfdp_close: document.createElement("div"),
        ytfdp_move: document.createElement("div"),
        ytfdp_other: document.createElement("div"),
        ytfdp_wp: document.createElement("div"),
        img: document.createElement("img")
    };
    ui.ytfdp_window.id = "ytfdp_window";
    ui.ytfdp_ioBar.id = "ytfdp_ioBar";
    ui.ytfdp_msg.id = "ytfdp_msg";
    ui.ytfdp_BG.id = "ytfdp_BG";
    ui.ytfdp_LBG.id = "ytfdp_LBG";
    ui.ytfdp_RBG.id = "ytfdp_RBG";
    ui.ytfdp_TBG.id = "ytfdp_TBG";
    ui.ytfdp_close.id = "ytfdp_close";
    ui.ytfdp_move.id = "ytfdp_move";
    ui.ytfdp_other.id = "ytfdp_other";
    ui.ytfdp_wp.id = "ytfdp_wp";
    // 构建层级关系
    ui.ytfdp_window.appendChild(ui.ytfdp_ioBar);
    ui.ytfdp_ioBar.appendChild(ui.ytfdp_msg);
    ui.ytfdp_ioBar.appendChild(ui.ytfdp_BG);
    ui.ytfdp_BG.appendChild(ui.ytfdp_LBG);
    ui.ytfdp_BG.appendChild(ui.ytfdp_RBG);
    ui.ytfdp_BG.appendChild(ui.ytfdp_TBG);
    ui.ytfdp_TBG.appendChild(ui.ytfdp_close);
    ui.ytfdp_TBG.appendChild(ui.ytfdp_move);
    ui.ytfdp_TBG.appendChild(ui.ytfdp_other);
    ui.ytfdp_window.appendChild(ui.ytfdp_wp);
    ui.ytfdp_wp.appendChild(ui.img);
    return ui;
}
function createBtn(name) {
    btn = document.createElement("div");
    btn.className = "ytfdp_btn";
    btn.innerText = name;
    return btn;
}

var va = createUI();
va.img.src = chrome.runtime.getURL('pic/xr.png');
document.getElementsByTagName("body")[0].appendChild(va.ytfdp_window);
