var div = document.createElement('div')
div.className = 'div'
document.body.appendChild(div)

var items = document.createElement('center')

var iframe = document.createElement('button')
iframe.className = 'iframe'
iframe.innerText = 'IFrame'
iframe.setAttribute('onclick', 'javascript: var url = prompt("Enter URL Here (Example: google.com"); document.body.innerHTML = "<iframe src="https://' + url + '" style="position: fixed; top:0; bottom:0; left:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; z-index:999999;">Your Browser Does Not Support</iframe>')
items.appendChild(iframe)

var proxy = document.createElement('button')
proxy.className = 'proxy'
proxy.innerText = 'Proxy'
iframe.setAttribute('onclick', 'javascript: var url = prompt("Enter URL Here (Example: google.com"); document.body.innerHTML = "<iframe src="https://r.einsteinhelp.cf/https://' + url + '" style="position: fixed; top:0; bottom:0; left:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; z-index:999999;">Your Browser Does Not Support</iframe>')
items.appendChild(proxy)

document.body.appendChild(items)

var style = document.createElement('style')
style.innerText = '.div{background: darkgray; width: 400px; height: 275px; border-radius: 60px;}.button{cursor: pointer; transition: 0.5s all ease; color: white; background: gray; border-radius: 50px; width: 50px; height: 25px; margin: 5px; text-align: center;}.button:hover{transform: scale(1.15); color: black; background: white;}'
document.body.appendChild(style)
