window.onload = complete;
var x = null;
var y = null;
var startX = null;
var startY = null;
var contentDrop = null;
var resizableContent = null;
var offset_data = null;
function complete()
{
	resizableContent = document.getElementsByClassName("resize-content")[0];	
	contentDrop = document.getElementById('content');
	//resizableContent.ondragstart = dragStart;
	resizableContent.addEventListener("dragstart",dragStart);
	//resizableContent.ondrag = dragging;
	resizableContent.addEventListener("drag",dragging);
	//resizableContent.ondragend = dragEnd;
	resizableContent.addEventListener("dragend",dragEnd);
	//contentDrop.ondragover = allowDrop;
	contentDrop.addEventListener("dragover",allowDrop);
	//contentDrop.ondrop = droped;
	contentDrop.addEventListener("drop",droped);
	document.getElementsByClassName('square-resize-se')[0].addEventListener('mousedown', southeastresize);
}
function southeastresize(e)
{
	startX = e.clientX;
	startY = e.clientY;
	startWidth = parseInt(document.defaultView.getComputedStyle(resizableContent,null).width, 10);
	startHeight = parseInt(document.defaultView.getComputedStyle(resizableContent,null).height, 10);
	document.documentElement.addEventListener('mousemove', resizeObject);
	document.documentElement.addEventListener('mouseup', stopResizingObject);
	resizableContent.removeEventListener("dragstart",dragStart);
	resizableContent.removeEventListener("drag",dragging);
	resizableContent.removeEventListener("dragend",dragEnd);
	contentDrop.removeEventListener("dragover",allowDrop);
	contentDrop.removeEventListener("drop",droped);
	//console.log(document.documentElement);
	console.log("1");
}
function resizeObject(e)
{
	resizableContent.style.width = (startWidth + e.clientX - startX) + 'px';
	resizableContent.style.height = (startHeight + e.clientY - startY) + 'px';
	console.log("2");
}
function stopResizingObject(e)
{
	document.documentElement.removeEventListener('mousemove', resizeObject);    
	document.documentElement.removeEventListener('mouseup', stopResizingObject);
	resizableContent.addEventListener("dragstart",dragStart);
	resizableContent.addEventListener("drag",dragging);
	resizableContent.addEventListener("dragend",dragEnd);
	contentDrop.addEventListener("dragover",allowDrop);
	contentDrop.addEventListener("drop",droped);
	console.log("3");
}
function dragStart(event)
{
	var style = window.getComputedStyle(event.target, null);
	offset_data = (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY);
	event.dataTransfer.setData("text/plain",offset_data);
}
function dragging(event)
{
	event.preventDefault();
}
function droped(event)
{
	var offset;
	try 
	{
		offset = event.dataTransfer.getData("text/plain").split(',');
	} 
	catch(e) 
	{
		offset = offset_data.split(',');
	}
	x = parseInt(offset[0],10);
	y = parseInt(offset[1],10);
	event.preventDefault();
	return false;
}
function dragEnd(e)
{
	var dm = e.target;
    dm.style.left = (event.clientX + x) + 'px';
    dm.style.top = (event.clientY + y) + 'px';
    e.preventDefault();
}
function allowDrop(e)
{
	e.preventDefault();
}
