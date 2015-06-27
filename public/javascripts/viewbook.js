$(function(){

	$("#booksample").hide();
	$("#btn-hidebooksample").hide();

	$("#btn-viewbooksample").click(function(e){
		e.preventDefault();
		$("#booksample").slideDown();
		$(this).hide();
		$("#btn-hidebooksample").show();
	});

	$("#btn-hidebooksample").click(function(e){
		e.preventDefault();
		$("#booksample").slideUp();
		$(this).hide();
		$("#btn-viewbooksample").show();
	})

	$("#review-submit").click(function(e){
		e.preventDefault();
	});

})