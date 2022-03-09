var url = prompt("Enter URL Here (example: google.com)");
if (url==null) {
    alert("No URL Entered!");
} else {
    var bar = document.createElement('div');
    bar.className = 'iframebar';
    bar.innerText = 'IFrame';
    bar.style.width = '10%';
    document.body.appendChild(bar);
    var closeiframe = document.createElement('a');
    closeiframe.className = 'close';
    closeiframe.innerText = 'close';
    closeiframe.setAttribute("onclick", "javascript:document.getElementById('iframe').remove();");
    document.getElementsByClassName('close').innerHTML = 'iframebar';
    document.body.appendChild(closeiframe);
    document.body.innerHTML('<iframe id="iframe" src="https://' + (url) + '" style="position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:90%;border:none;margin:0;padding:0;z-index:999999;">Your browser does not support iframes</iframe>');alert("URL Loaded!");
}
