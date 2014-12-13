var Menu_html = "";
function _clear_menu(){Menu_html = "";}
function _add_menu_tile(newTile){
	Menu_html += newTile.getbox();
	document.getElementById('menu_slide').innerHTML = Menu_html;
}

function _print_menu(){return Menu_html;}

function _box(myid){
	this.id 		= myid;
	this.content 		= "";
	this.menu_id 		= this.id +"_menu";
	this.menu_item 		= new Array();
	this.menu_item_link	= new Array();
	this.onclick 		= false;
	this.onclickcode	= "";
	this.onmousedown	= false;
	this.onmousedowncode	= "";
	this.onmousedownInterval;
	this.onblur		= false;
	this.onblurcode		= "";
	this.onmouseup		= false;
	this.onmouseupcode	= " mouseFocus = ''; mouseFunction = NO_ACTION; ";
	this.onmousemove	= false;
	this.onmousemovecode	= "";
	this.moveable   	= false;
	this.position		= "";
	this.width		= 0;
	this.height		= 0;
	this.x			= 0;
	this.y			= 0;
	this.z			= 0;
	this.Unit		= 0;
	this.width		= 0;
	this.height		= 0;
}

var PX = 0,
	PT = 1,
	PERCENT = 3;
function _get_Unit(newUnit){
	switch(newUnit){
	case PX:
		return 'px';
		break;
	case PT:
		return 'pt';
		break;
	case PERCENT:
		return '%';
		break;
	default:
		alert('_box_setXY: Must delcare a proper unit');
		break;
	}
}

function _box_setXY(thisbox, newX,newY,newUnit){
	this.unit 					 = parseInt(newUnit);
	this_unit 					 = String(_get_Unit(newUnit));
	this.y						 = parseInt(newY);
	document.getElementById(thisbox.id).style.top	 = String(this.y)+this_unit;
	this.x						 = parseInt(newX);
	document.getElementById(thisbox.id).style.left	 = String(this.x)+this_unit;
}
function _box_setZ(thisbox, newZ){
	this.z						 = parseInt(newZ);
	document.getElementById(thisbox.id).style.zIndex = this.z;
}
function _box_setHeight(thisbox, newHeight, newUnit){
	this.unit 					 = parseInt(newUnit);
	this_unit 					 = String(_get_Unit(newUnit));
	this.height					 = parseInt(newHeight);
	document.getElementById(thisbox.id).style.height = String(newHeight)+this_unit;
}
function _box_setWidth(thisbox, newWidth, newUnit){
	this.unit					= parseInt(newUnit);
	this_unit 					= String(_get_Unit(newUnit));
	this.width					= parseInt(newWidth);
	document.getElementById(thisbox.id).style.width = String(newWidth)+this_unit;
}
function _box_moveX(thisbox,distance,unit){
	this.x = parseInt(this.x) + parseInt(distance);
	document.getElementById(thisbox.id).style.left = String(this.x) + String(_get_Unit(unit));
}
function _box_moveY(thisbox,distance,unit){
	this.y = parseInt(this.y) + parseInt(distance);
	document.getElementById(thisbox.id).style.top = String(this.y) + String(_get_unit(unit));
}

function add_menu_item(thisbox,item,link){/*thisbox is from the class _box*/
	thisbox.menu_item.push(item);
	thisbox.menu_item_link.push(link);
	if(thisbox.menu_item.length == thisbox.menu_item_link.length){return thisbox.menu_item.length;}
	return -1;
}

_box.prototype.getbox = function(){
	var b_string = "";
	b_string += b_string += "<div class=\"_box\" id=\"" + this.id + "\" style=\"";
	if(this.position != ""){b_string += "position:"+this.position+";";}
	b_string += "\"";
	if(this.onclick == true){
		b_string += " onclick=\" "+this.onclickcode+" \" ";
	}
	if(this.onmousedown == true){
		b_string += " onmousedown=\" "+this.onmousedowncode+" \" ";
	}
	if(this.onmouseup == true){
		b_string += " onmouseup=\" "+this.onmouseupcode+" \" ";
	}
	if(this.onblur == true){
		b_string += " onblur=\" "+this.onblurcode+" \" ";
	}	
	if(this.onmousemove == true){
		b_string += " onmousemove=\" "+this.onmousemovecode+" \" ";
	}
	b_string += ">";
	b_string +=	"<div id=\"" + this.menu_id + "\">";
	b_string +=	"<ul>";
	for(i=0;i<this.menu_item.length;i++){
		b_string +=		"<li><a href=\""+this.menu_item_link[i]+"\">" + this.menu_item[i] + "</a></li>";
	}
	b_string +=	"</ul>";
	b_string +=	"</div>";
	b_string +=	"<div id=\""+this.id+"\">"+this.content+"</div>";
	b_string += "</div>";
	return b_string;

};
