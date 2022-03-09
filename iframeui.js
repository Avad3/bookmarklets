  var bar = document.createElement('div');
  bar.className = 'iframebar';
  bar.id = 'iframebar';
  bar.innerText = 'IFrame';
  bar.appendChild(bar);

  var closeiframe = document.createElement('a');
  closeiframe.className = 'close';
  closeiframe.id = 'close';
  closeiframe.innerText = 'Close';
  closeiframe.setAttribute("onclick", "javascript:document.getElementById('iframe').remove();");
  document.getElementById('close').innerHTML = 'iframebar';
  document.appendChild(closeiframe);
  var style = document.createElement('style');
