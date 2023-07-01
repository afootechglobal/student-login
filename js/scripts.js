

function _next_page(next_id,divid) {
	$('#view_login,#reset_password_info,#confirm_password_info').hide();
	 $('#'+next_id).fadeIn(1000);
	$('#page-title').html($('#'+ divid).html());
 }

 function _alert_close(){
	$('#get-more-div').fadeOut(300);
 }

 function myFunction() {
	var x = document.getElementById("password");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	  $('#hide').addClass("bi bi-eye-slash-fill");
  
	}
}

// function _get_active_link(divid){
// 	$('#signup, #login').removeClass('active-li');
// 	$('#fsignup, #flogin').removeClass('active-li');
// 	$('#'+divid).addClass('active-li');
// 	$('#f'+divid).addClass('active-li');
// }

function _get_page(page){
	   $('#get-more-div').html('<div class="ajax-loader"><img src="'+website_url+'/all-images/images/ajax-loader.gif"/></div>').fadeIn('fast');
	   var action='get_page';
	   var dataString = 'action='+action+'&page='+page;
		  $.ajax({
		  type: "POST",
		  url: index_local_url,
		  data: dataString,
		  cache: false,
		  success: function(html){
			 $('#get-more-div').html(html);   
		  }
	});
 }






