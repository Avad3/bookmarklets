# bookmarklets
a colletion of bookmarklets that i made or found (will update if i get new ideas or find new bookmarklets)

# IFrame
Loads most sites of your choice, adding proxy features soon.
This bookmarklet is simple, it alrady has https:// protocol so all you have to do is enter url.
```js
javascript:(function(){var url=prompt("Enter URL Here (example: google.com)");if(url==null){alert('No URL Entered!')}else{document.body.innerHTML='<iframe src="https://' + url + '" style="position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;margin:0;padding:0;z-index:999999;">Your browser does not support iframes</iframe>';alert('URL Loaded!');}}())
```
