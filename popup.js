var s = document.getElementById("say");
s.id = "say-element";
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
document.getElementById("sc").addEventListener("click", () => {
    var v_cook = document.cookie;
    setCookie("yt","iii")
    //var v_cook = getCookie("yt");
    s.innerHTML=v_cook;
    //alert(cook);
});