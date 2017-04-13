window.onload = complete;
var x = null;
var y = null;
var startX = null;
var startY = null;
var contentDrop = null;
var resizableContent = null;
var offset_data = null;
var lastYMove = 0;
var currentResizeSquare = null;
function complete()
{
	resizableContent = document.getElementsByClassName("resize-content")[0];	
	contentDrop = document.getElementById('content');
	//resizableContent.ondragstart = dragStart;
	//resizableContent.addEventListener("dragstart",dragStart);
	//resizableContent.ondrag = dragging;
	//resizableContent.addEventListener("drag",dragging);
	//resizableContent.ondragend = dragEnd;
	//resizableContent.addEventListener("dragend",dragEnd);
	//contentDrop.ondragover = allowDrop;
	//contentDrop.addEventListener("dragover",allowDrop);
	//contentDrop.ondrop = droped;
	//contentDrop.addEventListener("drop",droped);
	document.getElementsByClassName('square-resize-n')[0].addEventListener('mousedown', resizeContent);
	document.getElementsByClassName('square-resize-e')[0].addEventListener('mousedown', resizeContent);
	document.getElementsByClassName('square-resize-w')[0].addEventListener('mousedown', resizeContent);
	document.getElementsByClassName('square-resize-s')[0].addEventListener('mousedown', resizeContent);
	document.getElementsByClassName('square-resize-ne')[0].addEventListener('mousedown', resizeContent);
	document.getElementsByClassName('square-resize-nw')[0].addEventListener('mousedown', resizeContent);
	document.getElementsByClassName('square-resize-se')[0].addEventListener('mousedown', resizeContent);
	document.getElementsByClassName('square-resize-sw')[0].addEventListener('mousedown', resizeContent);

}
function resizeContent(e)
{
	currentResizeSquare = e.target.classList;
	startX = e.clientX;
	startY = e.clientY;
	lastYMove = 0;
	startWidth = parseInt(document.defaultView.getComputedStyle(resizableContent,null).width, 10);
	startHeight = parseInt(document.defaultView.getComputedStyle(resizableContent,null).height, 10);
	document.documentElement.addEventListener('mousemove', resizeObject,false);
	document.documentElement.addEventListener('mouseup', stopResizingObject,false);
	//resizableContent.removeEventListener("dragstart",dragStart);
	//resizableContent.removeEventListener("drag",dragging);
	//resizableContent.removeEventListener("dragend",dragEnd);
	//contentDrop.removeEventListener("dragover",allowDrop);
	//contentDrop.removeEventListener("drop",droped);
	//console.log(document.documentElement);
}
function resizeObject(e)
{
	//parseInt(window.getComputedStyle(e.target, null).getPropertyValue("top"),10) - event.clientY;
	//parseInt(window.getComputedStyle(e.target, null).getPropertyValue("left"),10) - event.clientY;
	
	if(currentResizeSquare.contains("square-resize-n") ||  currentResizeSquare.contains("square-resize-s") || currentResizeSquare.contains("square-resize-w") || currentResizeSquare.contains("square-resize-e"))
	{
		if(currentResizeSquare.contains("square-resize-n"))
		{
			resizableContent.style.top = (parseInt(window.getComputedStyle(e.target, null).getPropertyValue("top"),10) + e.clientY) + 'px';
			resizableContent.style.height = (startHeight - e.clientY - startY) + 'px';
		}
		else if(currentResizeSquare.contains("square-resize-e"))
			resizableContent.style.width = (startWidth + e.clientX - startX) + 'px';
		else if(currentResizeSquare.contains("square-resize-w"))
		{
			console.log((parseInt(window.getComputedStyle(e.target, null).getPropertyValue("left"),10)));
			console.log(e.clientX);
			resizableContent.style.left = (parseInt(window.getComputedStyle(e.target, null).getPropertyValue("left"),10)) + 'px';
			resizableContent.style.width = (startWidth - e.clientX - startX) + 'px';
		}
		else if(currentResizeSquare.contains("square-resize-s"))
			resizableContent.style.height = (startHeight + e.clientY - startY) + 'px';
	}
	else if(currentResizeSquare.contains("square-resize-ne") ||  currentResizeSquare.contains("square-resize-nw") || currentResizeSquare.contains("square-resize-se") || currentResizeSquare.contains("square-resize-sw"))
	{
		console.log("Do complex Resize");
	}
	//lastYMove  = startHeight + e.clientY - startY;
	//resizableContent.style.width = (startWidth + e.clientX - startX) + 'px';
	//resizableContent.style.height = (startHeight + e.clientY - startY) + 'px';
	console.log("2");
}
function stopResizingObject(e)
{
	document.documentElement.removeEventListener('mousemove', resizeObject,false);    
	document.documentElement.removeEventListener('mouseup', stopResizingObject,false);
	currentResizeSquare = null;
	//resizableContent.addEventListener("dragstart",dragStart);
	//resizableContent.addEventListener("drag",dragging);
	//resizableContent.addEventListener("dragend",dragEnd);
	//contentDrop.addEventListener("dragover",allowDrop);
	//contentDrop.addEventListener("drop",droped);
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
