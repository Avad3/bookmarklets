# Bookmarklets
A collection of bookmarklets that I made or found (will update if I get new ideas or find new bookmarklets)

# IFrame
## THIS IS GETTING A HUGE UPDATE SOON, STICK AROUND
Loads most sites of your choice, adding proxy features soon.
This bookmarklet is simple, it already has https:// protocol so all you have to do is enter url.
```js
javascript:(function(){var url=prompt("Enter URL Here (example: google.com)");if(url==null){alert('No URL Entered!')}else{document.body.innerHTML='<iframe src="https://' + url + '" style="position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;margin:0;padding:0;z-index:999999;">Your browser does not support iframes</iframe>';alert('URL Loaded!');}}())
```
# Utopia History Flooder
A history flooder that allows you to choose how much you want to flood, most others are predetermined amounts but this is totally unique.
```js
javascript:var num=prompt("History flood amount:");done=false;x=window.location.href;for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert("History flood successful! "+window.location.href+" now appears in your history "+num+(num==1?" time.":" times. (Made by Utopia Unblocker)"))}
```
