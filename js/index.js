window.onload = complete;
var maincontainter = null;
var images = null;
function complete()
{
	console.log("gola");
	maincontainter = document.getElementById('contentDrop');
	//maincontainter.ondragover = allowDrop;
	contentDrop = document.getElementById('contentPadding');
	images = contentDrop.getElementsByTagName('div');
	for(var i = 0; i < images.length ; i++)
	{
		images[i].ondrag = moveImages;
		images[i].ondragstart = dragStart;
		images[i].ondragend = dragEnd;
	}
}
function moveImages(e)
{
	//console.log(e)
	console.log(e.pageY+"px");
	e.target.style.left = e.pageX+"px";
	e.target.style.top = e.pageY+"px";
}
function dragEnd(e)
{
	console.log(e);
	e.target.style.left = e.pageX+"px";
	e.target.style.top = e.pageY+"px";
}
function dragStart()
{
	console.log(this);
}
function allowDrop()
{
	console.log("Deja");
}
