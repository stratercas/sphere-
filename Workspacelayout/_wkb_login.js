function j_wkb_validate_forget_password_form(){
	if(_validate_email(document.forms['forgotForm']['email'].value) == 0){return false;
	}else{return true;}
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


function _print_slide_menu(){document.getElementById('menu_slide').innerHTML = Menu_html;}
function _build_start_menu(_m_name){
	var b_string = "";
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
	Menu_html = b_string;	
}
function _get_start_menu(){return Menu_html;}

function _print_start_menu(_m_name){
	_build_start_menu(_m_name);
	document.getElementById('menu_slide').innerHTML = _print_menu();
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


