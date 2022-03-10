# Bookmarklets
A collection of bookmarklets that I made or found (will update if I get new ideas or find new bookmarklets)
### JOIN THE [DISCORD](https://discord.gg/Msmmgf3TET) FOR UPDATES

# IFrame
Loads most sites that don't have Same-origin policy enabled.
This bookmarklet is simple, it already has https:// protocol so all you have to do is enter url.
```js
javascript:(function(){var url=prompt("Enter URL Here (example: google.com)");if(url==null){alert('No URL Entered!')}else{document.body.innerHTML='<iframe src="https://' + url + '" style="position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;margin:0;padding:0;z-index:999999;">Your browser does not support iframes</iframe>';alert('URL Loaded!');}}())
```
Made by Avad3 (Yours Truly)

Getting a well-deserved update soon :)
### Update Plans
- [ ] Make a UI that lets the user choose between regular iframe or proxied iframe
- [ ] Add a bar on the top that shows when user loads iframe, has multiple features
- [ ] Make the script auto-update (load from raw github url)

[File](/iframe.js)

# Utopia History Flooder
A history flooder that allows you to choose how much you want to flood, compared to other predetermined amount history flooders.
```js
javascript:var num=prompt("History flood amount:");done=false;x=window.location.href;for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert("History flood successful! "+window.location.href+" now appears in your history "+num+(num==1?" time.":" times. (Made by Utopia Unblocker)"))}
```
Made by Veracity, owner of Utopia Unblocker. Join his discord server [here](https://discord.gg/qy4nXgUcn9).

[File](/utopiaflooder.js)

# Eruda
Dev Tools for Mobile Devices, but in our case for Unblocked Dev Tools
```js
javascript:(function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();
```
Made by liriliri, GitHub link [here](https://github.com/liriliri/eruda).

[File](/eruda.js)
