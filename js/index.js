window.onload = complete;
var maincontainter = null;
var images = null;
var x = null;
var y = null;
function complete()
{
	maincontainter = document.getElementById('contentDrop');
	//maincontainter.ondragover = allowDrop;
	contentDrop = document.getElementById('content');
	images = contentDrop.getElementsByClassName ('resize-content');
	for(var i = 0; i < images.length ; i++)
	{
		images[i].ondrag = moveImages;
		images[i].ondragstart = dragStart;
		images[i].ondragend = dragEnd;
	}
	contentDrop.ondrop = droped;
}
function moveImages(e)
{
	//console.log(e)
	//y = e.pageX;
	//x = e.pageY;
}
function droped(e,ui)
{
	console.log("==============================");
	console.log(e);
	console.log(ui);
	console.log("==============================");
}
function dragEnd(e,ui)
{
	console.log(ui);
	console.log(e.position.left);
	console.log(e.position.top);
	//console.log(e);
	e.target.style.left = Math.round(e.pageX + (e.target.offsetWidth / 2)) + "px";
	e.target.style.top = Math.round(e.pageY + (e.target.offsetHeight / 2)) + "px";
	console.log(e.pageY);	
	console.log(e.pageX);
	console.log(Math.round(e.pageX + (e.target.offsetWidth / 2)) + "px");
	console.log(Math.round(e.pageY + (e.target.offsetHeight / 2)) + "px");
	console.log(e.target.offsetWidth);
	console.log(e.target.offsetHeight);	
}
function dragStart()
{
	console.log(this);
}
function allowDrop(event)
{
	event.preventDefault();
	//console.log("Deja");
}
