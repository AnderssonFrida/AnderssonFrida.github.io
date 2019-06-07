/*==============================================================================================*/
/*===== Hamburgermenu - Navbar on small device =====*/
/*==============================================================================================*/
//When the user clicks on the button, toggle between hiding and showing the dropdown content.
function burgerFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn_burger')) {
        var dropdowns = document.getElementsByClassName("dropdown_content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// When document is loaded
$(document).ready(function(){

/*==============================================================================================*/
/*===== Images on About site =====*/
/*==============================================================================================*/

    $('#photoGallery img:gt(0)').hide();

    // Fade to next image in gallery on "about-images" view with set interval
    setInterval(fadeToNext, 7000);

	function fadeToNext() {
		if(document.hasFocus()){
			$("#photoGallery > img:first")
	    	.fadeOut(1500)
	    	.next()
	    	.fadeIn(1500)
	    	.end()
	    	.appendTo('#photoGallery');
		}
	}

    

/*==============================================================================================*/
/*===== Contact Me =====*/
/*==============================================================================================*/
    var projActive = 0;
    
    // Hover on links
    $("#facebook_logga").hover(
        function(){
            $(this).animate({opacity: "0.7"}, 200);
        }, function() {
            if(projActive != 1){
                $(this).animate({opacity: "1.0"}, 200);
            }
        }
    );
    $("#insta_logga").hover(
        function(){
            $(this).animate({opacity: "0.7"}, 200);
        }, function() {
            if(projActive != 2){
                $(this).animate({opacity: "1.0"}, 200);
            }
        }
    );
    $("#linkedin_logga").hover(
        function(){
            $(this).animate({opacity: "0.7"}, 200);
        }, function() {
            if(projActive != 3){
                $(this).animate({opacity: "1.0"}, 200);
            }
        }
    );

/*==============================================================================================*/
/*===== Java ANN Face Recognition =====*/
/*==============================================================================================*/
    //Faces that are draggable
    $( function() {
        $( "#draggable_happy" ).draggable();
    } );

    $( function() {
        $( "#draggable_sad" ).draggable();
    } );
    
    $( function() {
        $( "#draggable_mischievous" ).draggable();
    } );

    $( function() {
        $( "#draggable_angry" ).draggable();
    } );

});

//Canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.rotate(20 * Math.PI / 180);
ctx.fillRect(50, 20, 100, 50);


