javascript:(function(){var url = prompt('Enter URL Here (Example: https://google.com)');var moveScript = `if(event.data["width"] && event.data["height"]){let width=event.data["width"];let height=event.data["height"];window.resizeTo(width + window.outerWidth - window.innerWidth, height + window.outerHeight - window.innerHeight);}`;var siteWindow = window.open(``,`Incognito`,`width=750,height=500`);siteWindow.document.write(`<style>body {margin: 0;}</style><title>Google</title><iframe width='100%' height='100%' src='` + (url) + `' frameborder='0'></iframe><script>window.addEventListener("message", (event) => {` + moveScript + `}, false);</scr`+`ipt>`);window.open(window.location);}())
