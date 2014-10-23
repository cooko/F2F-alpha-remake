function checkChecked(checkbox)
{
	e = document.getElementById("newsletter_container");
    if (checkbox.checked)
    {
		e.style.display = 'block';
    }else{
		e.style.display = 'none';
    }
}
function checkCountry(select){
	var e = document.getElementById("select_country");
	var e2 = document.getElementById("subdivision_container");

	var value = e.options[e.selectedIndex].value;
	if(value == "CA"){
		e2.style.display = 'block';
	}else{
		e2.style.display = 'none';
	}
}
function checkSubdivision(select){
	var e = document.getElementById("select_subdivision");
	var e2 = document.getElementById("location_container");

	var value = e.options[e.selectedIndex].value;
	if(value == "CA"){
		e2.style.display = 'block';
	}else{
		e2.style.display = 'none';
	}
}