$("ul").on("click","li",function(){
$(this).toggleClass("todocomplete");
});

$("ul").on("click","span",function(event){
$(this).parent().fadeOut(1000, function()
	{
		$(this).remove();
	});
	event.stopPropagation(); //stop parent element action on child 
});

$("input[type ='text']").on("keypress",function(event){
	var inputValue = $(this).val();

 if(event.which === 13)
 {
 	$(this).val(" ");
 	$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+inputValue+"</li>");
 }

});


$(".fa-plus").on("click",function(){
 $("input[type ='text']").fadeToggle();
});

