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

function _print_login(){
	alert("menu button's z-index is causing the form to trigger the button visually behind it: going to bed");
	var b_string = "";
	b_string += "<nav style= \"float:left;background-color:lightgrey;\">";
	b_string += "	<div>";
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
}