window.onload = complete;
var maincontainter = null;
var images = null;
var x = null;
var y = null;
var offset_data;
function complete()
{
	//maincontainter = document.getElementById('contentDrop');
	contentDrop = document.getElementById('content');
	images = contentDrop.getElementsByClassName ('resize-content');
	for(var i = 0; i < images.length ; i++)
	{
		images[i].ondragstart = dragStart;
		images[i].ondrag = dragging;
		images[i].ondragend = dragEnd;
	}
	content.ondragover = allowDrop;
	contentDrop.addEventListener('drop',droped,false); 
}
function dragStart(event)
{
	var style = window.getComputedStyle(event.target, null);
	offset_data = (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY);
	event.dataTransfer.setData("text/plain",offset_data);
	event.target.style.cursor = 'move';
}
function dragging(event)
{
	console.log("eco");
	event.target.style.cursor = 'move'; 
}
function droped(event)
{
	console.log(event);
	var offset;
	try 
	{
		console.log(event.dataTransfer.getData("text/plain"));
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
