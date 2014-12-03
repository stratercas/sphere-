function j_wkb_validate_forget_password_form(){
	if(_validate_email(document.forms['forgotForm']['email'].value) == 0){return false;
	}else{return true;}
}

function j_wkb_p_forget_password(){
	var b_string = "";
	b_string += "	<div class=\"single_task\">";

	b_string += "	<div><a class=\"close_button\" onclick=\"document.getElementById('menu_slide').innerHTML = _print_login(0);\">X</a></div>";

	b_string += "		<form name=\"forgotForm\" action=\"_wkb_forgotpassword.php\" method=\"post\" onsubmit=\"return j_wkb_validate_forget_password_form();\"  autocomplete=\"on\">";
	b_string += "			<table class=\"truecenter\">";
	b_string += "				<tr>";
	b_string += "					<td class=\"truecenter\">";
	b_string += "						Please submit your account email:<br />";
	b_string += "						<input type=\"text\" name=\"email\" value=\"Email:\" onclick=\"if(this.value=='Email:')this.value= '';\" onblur=\"if(this.value == '')this.value = 'Email';\"/>";
	b_string += "					</td>";
	b_string += "				</tr>";
	b_string += "				<tr>";
	b_string += "					<td class=\"truecenter\"><input type=\"submit\" />";
	b_string += "				</tr>";
	b_string += "			</table>";
	b_string += "		</form>";
	b_string += "	</div>";
	return b_string;
}

var logged = false;
var screen_name = "";
function log_in(_screen_name){
	logged = true;
	screen_name = _screen_name;
}
function log_out(){
	logged = false;
	screen_name = "";
}
function logged_in(){return logged;}
function set_screen_name(s_name){screen_name = s_name;}
function get_screen_name(){return screen_name;}


function _print_start_menu(_m_name){
	var b_string = "";
	document.getElementById('menu_slide').style.height = "95px";
	if(logged_in()==false){
		b_string += "  <table style=\"width:100%;height:100%;\">";	
		b_string += "		<tr>";
		b_string += "			<td id=\"menu_button\" onclick=\"document.getElementById('menu_slide').innerHTML = _print_login(0);\">";
		b_string += "				<span id=\"menu_start_txt\">START HERE</span>";
		b_string += "			</td>";
		b_string += "		</tr>";
		b_string += "	</table>";
	}else{
		b_string += "  <table style=\"width:100%;height:100%;\">";	
		b_string += "		<tr>";
		b_string += "			<td id=\"menu_button\" onclick=\"document.getElementById('menu_slide').innerHTML = _print_login(1);\">";
		b_string += "				<span id=\"start_message\" style=\"color:WHITE;\">Welcome back";
		if(_m_name){
			b_string += " "+ _m_name;
		}b_string += "!<br />Come on in!</span>";
		b_string += "			</td>";
		b_string += "		</tr>";
		b_string += "	</table>";
	}
	return b_string;
}

var A_menu_top_link_address = new Array();
var A_menu_top_link_caption = new Array();
function _menu_top_chk(){
	if(A_menu_top_link_address.length == A_menu_top_link_caption.length)return true;
	return false;
}
function _menu_top_count(){	if(_menu_top_chk()==true)return A_menu_top_link_address.length;}

function _menu_top_add_link(address,caption){
	if(_menu_top_chk()==true){
		A_menu_top_link_address.push(address);
		A_menu_top_link_caption.push(caption);
	}
	if(_menu_top_chk()==true){return _menu_top_count();}
}

function _menu_top_remove_link(index){
	if(_menu_top_chk()==true){
		A_menu_top_link_address.splice(index,1);
		A_menu_top_link_address.splice(index,1);
	}
	if(_menu_top_chk()==true)return _menu_top_count();
}

function _menu_top_pop(){
	if(_menu_top_chk()==true){
		A_menu_top_link_address.pop();
		A_menu_top_link_caption.pop();
	}
	if(_menu_top_chk()==true)return _menu_top_count();
}

function _menu_top_clear(){

}

function _print_login(select){
	switch(select){
	case 0:
		if(logged_in()==false){
			document.getElementById('menu_slide').style.height = "95px";
			var b_string = "";
			b_string += "<nav class=\"main_nav\">";
			b_string += "	<div><a class=\"close_button\" onclick=\"alert(event.clientX-this.offsetLeft);alert(this.offsetLeft);document.getElementById('menu_slide').innerHTML = _print_login(1);\">X</a></div>";
			b_string += "	<div class=\"action_menu\">";
			b_string += "		<form action=\"_login.php\" method=\"post\" autocomplete=\"on\">";
			b_string += "			<table>";
			b_string += "				<tr>";
			b_string += "					<td>";
			b_string += "						<input type=\"text\" name=\"user_name\" value=\"Username:\" onclick=\"this.value= '';\" onblur=\"if(this.value == '')this.value = 'Username:';\"/>";
			b_string += "					</td>";
			b_string += "					<td>";
			b_string += "						<input type=\"password\" name=\"password\" value=\"Password\" onclick=\"this.value = '';\" onblur=\"if(this.value == '')this.value = 'Password';\"/>";
			b_string += "					</td>";	
			b_string += "				</tr>";
			b_string += "				<tr>";
			b_string += "					<td><a href=\"#\" onclick=\"document.getElementById('menu_slide').innerHTML = j_wkb_p_forget_password();\">Forget your password?</a></td>";
			b_string += "					<td><input type=\"submit\" />";
			b_string += "				</tr>";
			b_string += "			</table>";
			b_string += "		</form>";
			b_string += "	</div>";
			b_string += "</nav>";
			return b_string;
		}else{
			return _print_start_menu(get_screen_name());
		}
		break;
	case 1:
		document.getElementById('menu_slide').style.height = "95%";
		var b_string = "";
		b_string += "<nav class=\"main_nav\">";
		b_string += "	<div><a class=\"close_button\" onclick=\"document.getElementById('menu_slide').innerHTML = _print_login(0);\">X</a></div>";
		b_string += "	<div class=\"action_menu\">";
		b_string += "		<ul>";
		for(i=0;i<_menu_top_count();i++){
			b_string += "<li>";
			b_string += "<a href=\""+A_menu_top_link_address[i]+"\">"+A_menu_top_link_caption[i]+"</a>";
			b_string += "</li>";
		}
		b_string += "	</div>";
		b_string += "</nav>";
		return b_string;
		break;
	case 2:
		return "You the man";
	}
}

function _start_menu_text(txt){document.getElementById('start_message').innerHTML = txt;}

var A_message_heading = new Array();
var A_message_content = new Array();
function _message_add(head,content){
	if(_message_chk()==true){
		A_message_heading.push(head);
		A_message_content.push(content);
		return _message_count();
	}
}
function _message_pop(){
	if(_message_chk()==true){
		A_message_heading.pop();
		A_message_content.pop();
		return _message_count();
	}
}
function _message_chk(){	if(A_message_heading.length == A_message_content.length)return true;_add_message("ERROR","Heading and content do not match");return false;}
function _message_count(){	if(_message_chk()==true){return A_message_heading.length;}}
function _message_remove(index){
	if(_message_chk()==true){
		A_message_heading.splice(index,1);
		A_message_content.splice(index,1);
	}
}

function _message_clear(){
	while(_message_pop()>0){
		return _message_count();
	}
}

function _message_print(){
	var b_string = "";
	b_string += "<!--LIST OF MESSAGES-->";
	b_string += "	<div id=\"lbl_error_list\" class=\"desc_label\"><div id=\"lbl_messages\">Messages</div></div>";
	b_string += "	<div id=\"error_list\">";	
	b_string += "		<table id=\"tbl_error_list\">";
	for(i=0;i<A_message_heading.length;i++){
		b_string += "			<tr>";
		b_string += "				<td class=\"top_message_heading\">";
		b_string += A_message_heading[i];
		b_string += "				</td>";
		b_string += "				<td class=\"top_message_desc\">";
		b_string += A_message_content[i];
		b_string += "				</td>";
		b_string += "			</tr>";
	}
	b_string += "		</table>";
	b_string += "	</div>";
	return b_string;
}

var mouseDown = [0,0,0,0,0,0,0,0,0],
    mouseDownCount = 0,
    mouseFocus = "",
    z   = 4;

window.onmousedown = function(evt){
	++mouseDown[evt.button];
	++mouseDownCount;
	if(mouseDownCount > 1||mouseDownCount < 0){
		mouseDown = [0,0,0,0,0,0,0,0,0],
    		mouseDownCount = 0;
	}
	document.getElementById('mouse_value').innerHTML = evt.button;
	document.getElementById(mouseFocus).style.zIndex = z++;
	document.getElementById(mouseFocus).style.userSelect = "none";
	document.getElementById('mouse_value').innerHTML = document.getElementById(mouseFocus).style.zIndex;
}

window.onmouseup = function(evt){
	--mouseDown[evt.button];
	--mouseDownCount;
	if(mouseDownCount > 1||mouseDownCount < 0){
		mouseDown = [0,0,0,0,0,0,0,0,0],
    		mouseDownCount = 0;
	}
	mouseFocus= "";
	document.cookie = "menu1=This_will_be_telling; expires=Fri, 3 Aug 2001 20:47:11 UTC; path=/";
}


window.onmousemove = function(evt){
	if(mouseDownCount > 0 && mouseDown[0]>0){
		document.getElementById(mouseFocus).style.left = String(event.clientX-document.getElementById('content_shell').offsetLeft)+"px";
		document.getElementById(mouseFocus).style.top  = String(event.clientY-document.getElementById('content_shell').offsetTop)+"px";
		/*document.getElementById(mouseFocus).innerHTML = "X: "+ event.clientX + "Y: " + event.clientY;*/
	}
	
}

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
	this.onmouseupcode	= "";
	this.onmousemove	= false;
	this.onmousemovecode	= "";
	this.moveable   	= false;
	this.position		= "";
}

function _box_setZ(thisbox, newZ){
	document.getElementById(thisbox.id).style.zIndex = newZ;
}


_box.prototype.get_rel_posX = function(){
	return (event.clientX - document.getElementById(this.id).parentNode.offsetLeft);/*explicitly declair element*/
};
_box.prototype.move_rel_posX = function(){
	var current = document.getElementById(this.id).parentNode.offsetLeft;
	current += event.clientX - document.getElementById(this.id).parentNode.offsetLeft;
	var cur_left = document.getElementById(this.id).offsetLeft;
	var n_left = String(cur_left + this.get_rel_posX())+"px";
	document.getElementById(this.id).style.left = String(n_left);
};

_box.prototype.start_mouse_down = function(){
	mouseDownFocus = this.id;
	this.onmousedownInterval = setInterval(function(){/*this.onmousedowncode;*/alert('');},13);
};

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
	alert(b_string);
	return b_string;

};
