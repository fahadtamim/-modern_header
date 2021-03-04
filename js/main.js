var nav =document.getElementById('navbar');
window.onscroll= function(){
	if(window.pageYOffset>100){
		navbar.style.background="#262626";
	}
	else{
		navbar.style.background= "transparent"
	}

}