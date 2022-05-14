const projectName = 'product-landing-page';

function myFunction() {
	 let x = document.getElementById("myTopnav");
	 if (x.className === "topnav") {
		 x.className += " responsive";
	 } else {
		 x.className = "topnav";
	 }
}
