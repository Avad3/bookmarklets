var title = document.createElement("div")
title.className = "nightmareiframe"
title.innerText = "IFrame UI"
appid.appendChild(title)

var items = document.createElement("center")

var iframe = document.createElement("button")
iframe.className = "iframebuttons"
iframe.innerText = "IFrame"
iframe.setAttribute("onclick", 'javascript:(function(){var url=prompt("Enter URL Here (example: google.com)");if(url==null){alert("No URL Entered!");}else{document.body.innerHTML = "<iframe src="https://' + (url) + '" style="position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;margin:0;padding:0;z-index:999999;">Your browser does not support iframes</iframe>";alert("URL Loaded!");}}())')
items.appendChild(iframe)

var proxyiframe = document.createElement("button")
proxyiframe.className = "iframebuttons"
proxyiframe.innerText = "Proxy IFrame"
proxyiframe.setAttribute("onclick", 'javascript:(function(){var url=prompt("Enter URL Here (example: google.com)");if(url==null){alert("No URL Entered!");}else{document.body.innerHTML = "<iframe src="https://' + (url) + '" style="position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;margin:0;padding:0;z-index:999999;">Your browser does not support iframes</iframe>";alert("URL Loaded!");}}())')
items.appendChild(proxyiframe)

appid.appendChild(items)

var iframestyle = document.createElement("style")
iframestyle.innerText = ".nightmareiframe {font-size: 60px; text-align: center; color: white; user-select: none; margin-top: 10px;}.iframebuttons{cursor: pointer;background: #303134;border-radius: 45px;height: 50px;text-align: center;line-height: 50px;color: white; border: none; font-size: 18px;user-select: none; margin: 5px;} .iframebuttons:hover {transition: 0.5s all ease;transform: scale(1.15);background-color: white;color: black;}"
document.getElementsByTagName("html")[0].appendChild(iframestyle)
