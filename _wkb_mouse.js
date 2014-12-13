var mouseDown = [0,0,0,0,0,0,0,0,0],
    mouseDownCount = 0,
    mouseFocus = "",
    z   = 4;

var ALERT_MESSAGE = "";
var NO_ACTION = 0,
	ALERT = 1;
	MOVE_BOX = 2,
	CHANGE_COLOR = 3,
	DOUBLE_SIZE = 4;
var mouseFunction = NO_ACTION;

window.onmousedown = function(evt){
	++mouseDown[evt.button];
	++mouseDownCount;

	switch(mouseFunction){
	case NO_ACTION:
		break;
	case ALERT:
		alert(ALERT_MESSAGE);
		mouseFocus = "";
		mouseFunction = NO_ACTION;
		ALERT_MESSAGE = "";
		break;
	case MOVE_BOX:
		document.getElementById(mouseFocus).style.zIndex = z++;
		document.getElementById('mouse_value').innerHTML = document.getElementById(mouseFocus).style.zIndex;
		break;
	case CHANGE_COLOR:
		document.getElementById(mouseFocus).style.backgroundColor = "red";
		break;
	case DOUBLE_SIZE:
		document.getElementById(mouseFocus).style.height = "700px";
		document.getElementById(mouseFocus).style.width = "1700px";
		break;
	default:
		break;
	}
}

var mouse_timeout;


window.onmouseup = function(evt){
	mouseDown = [0,0,0,0,0,0,0,0,0];
	mouseDownCount = 0;
	mouseFunction = NO_ACTION;
	mouseFocus= "";
}

function _get_focused_box(){	
	for(i=0;i<BOX_ARRAY.length;i++){
		if(BOX_ARRAY[i].id == String(mouseFocus)){
			return (BOX_ARRAY[i].id);
		}
	}
}
window.onmousemove = function(evt){
	for(i=0;i<9;i++){
		if(mouseDown[i] > 1 || mouseDown[i] < 0){
			mouseDown = [0,0,0,0,0,0,0,0,0];
    			mouseDownCount = 0;
			mouseFunction = NO_ACTION;
		}
	}
	if(mouseDownCount > 1||mouseDownCount < 0){
		mouseDown = [0,0,0,0,0,0,0,0,0],
    		mouseDownCount = 0;
		mouseFunction = NO_ACTION;
	}

	switch(mouseFunction){
	case NO_ACTION:
		break;
	case ALERT:
		mouseFocus = "";
		mouseFunction = NO_ACTION;
		ALERT_MESSAGE = "";
		break;
	case MOVE_BOX:
		if(mouseDownCount > 0 && mouseDown[0]>0){
			document.getElementById(mouseFocus).innerHTML = parseInt(100000* Math.random());
			/*document.getElementById(mouseFocus).style.left = String(event.clientX-document.getElementById('content_shell').offsetLeft)+"px";
			document.getElementById(mouseFocus).style.top  = String(event.clientY-document.getElementById('content_shell').offsetTop)+"px";*/
		}
		break;
	default:
		break;
	}
	
}



