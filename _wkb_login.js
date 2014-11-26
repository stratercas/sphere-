function j_wkb_validate_forget_password_form(){
	if(_validate_email(document.forms['forgotForm']['email'].value) == 0){return false;
	}else{return true;}
}

function j_wkb_p_forget_password(){
	var b_string = "";
	b_string += "<nav style= \"float:left;background-color:lightgrey;\">";
	b_string += "	<div>";
	b_string += "		<form name=\"forgotForm\" action=\"_wkb_forgotpassword.php\" method=\"post\" onsubmit=\"return j_wkb_validate_forget_password_form();\"  autocomplete=\"on\">";
	b_string += "			<table>";
	b_string += "				<tr>";
	b_string += "					<td>";
	b_string += "						<input type=\"text\" name=\"email\" value=\"\" />";
	b_string += "					</td>";
	b_string += "					<td>";
	b_string += "						&nbsp;";
	b_string += "					</td>";
	b_string += "				</tr>";
	b_string += "				<tr>";
	b_string += "					<td>&nbsp;</td>";
	b_string += "					<td><input type=\"submit\" />";
	b_string += "				</tr>";
	b_string += "			</table>";
	b_string += "		</form>";
	b_string += "	</div>";
	b_string += "</nav>";
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
			b_string += "	<div><a class=\"close_button\" onclick=\"alert(event.clientX);document.getElementById('menu_slide').innerHTML = _print_login(1);\">X</a></div>";
			b_string += "	<div class=\"action_menu\">";
			b_string += "		<form action=\"_login.php\" method=\"post\" autocomplete=\"on\">";
			b_string += "			<table>";
			b_string += "				<tr>";
			b_string += "					<td>";
			b_string += "						<input type=\"text\" name=\"user_name\" value=\"\" />";
			b_string += "					</td>";
			b_string += "					<td>";
			b_string += "						<input type=\"password\" name=\"password\" value=\"\" />";
			b_string += "					</td>";	
			b_string += "				</tr>";
			b_string += "				<tr>";
			b_string += "					<td><a href=\"#\" onclick=\"document.getElementById('menu_side').innerHTML = j_wkb_p_forget_password();\">Forget your password?</a></td>";
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

function _box(id){
	this.shell = "<div id=\"" + id + "\"></div>";
	this.inside = "";
	this.menu = "";
}
_box.prototype.get = function(){alert(this.shell);};
