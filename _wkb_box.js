var Menu_html = "";
function _clear_menu(){Menu_html = "";}
var MENU_TILES = new Array();
function _add_menu_tile(newTile){
	MENU_TILES.push(newTile);

}
function find_tile(s_tile_id){for(j=0;j<MENU_TILES.length;j++){if(MENU_TILES[j].id == s_tile_id){return MENU_TILES[j];}}}

function _print_menu_tiles(){
	for(i=0;i<MENU_TILES.length;i++){
		/*alert(MENU_TILES[i].id);*/
	}
	Menu_html = "";
	for(j=0;j<MENU_TILES.length;j++){/*There is an scope error that is not allowing the normal i index varble name.  This is something that should be looked into to prevent further confusion 01/03/2015*/
		var a_string = MENU_TILES[j].getbox();
		Menu_html+= a_string;
		alert(j);
	}document.getElementById('menu_slide').innerHTML = Menu_html;
	
	for(i=0;i<MENU_TILES.length;i++){
		document.getElementById("menu_slide").style.width = "100%";
		document.getElementById(MENU_TILES[i].id).style.width = String(96)+"px";
		document.getElementById(MENU_TILES[i].id).style.height = String(96)+"px";
		document.getElementById(MENU_TILES[i].id).style.position = "absolute";
		document.getElementById(MENU_TILES[i].id).style.left = String(parseInt(i*96,10)+"px");
		
	}
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
	this.collide		= false;
	this.x, this.y, this.z, this.unit, this.width, this.height, this.value;
}

function _box_transfer(box1,box2){
	document.getElementById(box2.id).innerHTML = document.getElementById(box1.id).innerHTML;
	box2.value = box1.value;
}

function _array_collide(){
	for(i = 0; i< BOX_ARRAY.length;i++){
		for(j=0;j<BOX_ARRAY.length;j++){
			if(i!=j){
				if(_collide(BOX_ARRAY[i],BOX_ARRAY[j])==true)return true;	
			}
		}
	}return false;
}

function _box_collide(box1,box2){
	if(box1.x <= box2.x+box2.width && box1.x+box1.width >= box2.x && box2.collide == true && box1.collide == true){
		if(box1.y <= box2.y+box2.height && box1.y+box1.height >= box2.y && box2.collide == true && box1.collide == true){
			return true;
		}
	}return false;
}

function _box_drop(box1,box2){
	if(_box_collide(box1,box2)==true){
		_box_transfer(box1,box2);
		return true;
	}return false;
}

var PX = 0,
	PT = 1,
	PERCENT = 3;
function _get_Unit(newUnit){
	switch(parseInt(newUnit,10)){
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
	thisbox.unit 					 = parseInt(newUnit,10);
	this_unit 					 = String(_get_Unit(thisbox.unit));
	thisbox.y					 = parseInt(newY,10);
	document.getElementById(thisbox.id).style.top	 = String(thisbox.y)+this_unit;
	thisbox.x					 = parseInt(newX);
	document.getElementById(thisbox.id).style.left	 = String(thisbox.x)+this_unit;
}


function _box_setZ(thisbox, newZ){
	thisbox.z					 = parseInt(newZ,10);
	document.getElementById(thisbox.id).style.zIndex = thisbox.z;
}
function _box_setHeight(thisbox, newHeight, newUnit){
	thisbox.unit 					 = parseInt(newUnit,10);
	this_unit 					 = String(_get_Unit(newUnit));
	thisbox.height					 = parseInt(newHeight,10);
	document.getElementById(thisbox.id).style.height = String(newHeight)+this_unit;
}
function _box_setWidth(thisbox, newWidth, newUnit){
	thisbox.unit					= parseInt(newUnit,10);
	this_unit 					= String(_get_Unit(thisbox.unit));
	thisbox.width					= parseInt(newWidth,10);
	document.getElementById(thisbox.id).style.width = String(newWidth)+this_unit;
}
function _box_moveX(thisbox,distance,unit){
	thisbox.x = parseInt(thisbox.x,10) + parseInt(distance,10);
	document.getElementById(thisbox.id).style.left = String(thisbox.x) + String(_get_Unit(unit));
}
function _box_moveY(thisbox,distance,unit){
	thisbox.y = parseInt(thisbox.y,10) + parseInt(distance,10);
	document.getElementById(thisbox.id).style.top = String(thisbox.y) + String(_get_unit(unit));
}

function add_menu_item(thisbox,item,link){/*thisbox is from the class _box*/
	thisbox.menu_item.push(item);
	thisbox.menu_item_link.push(link);
	if(thisbox.menu_item.length == thisbox.menu_item_link.length){return thisbox.menu_item.length;}
	return -1;
}

_box.prototype.pop_menu = function(){
	alert("I POP");
};


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
	b_string +=	"	<div id=\""+this.id+"_menu\" onclick=\"find_tile('"+this.id+"').pop_menu();\">Menu(Working on)</div>";
/*	b_string +=	"<ul>";
	for(i=0;i<this.menu_item.length;i++){
		b_string +=		"<li><a href=\""+this.menu_item_link[i]+"\">" + this.menu_item[i] + "</a></li>";
	}
	b_string +=	"</ul>";
*/
	b_string +=	"</div>";
	b_string +=	"<div id=\""+this.id+"\">"+this.content+"</div>";
	b_string += "</div>";
	return b_string;

};
