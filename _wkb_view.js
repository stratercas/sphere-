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

function _print_login(select){
	switch(select){
	case 0:
		if(logged_in()==false){
			document.getElementById('menu_slide').style.height = "95px";
			var b_string = "";
			b_string += "<nav class=\"main_nav\">";
			b_string += "	<div><a class=\"close_button\" onclick=\"document.getElementById('menu_slide').innerHTML = _print_login(1);\">X</a></div>";
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