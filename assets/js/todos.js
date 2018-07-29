// Either we can write like below or make a class in css and use toggle effect to add or remove

//$("li").click(function(){
//	// We use $(this) instead of $(li) because we want to change those who click not all.....

//	if($(this).css("color") === "rgb(128, 128, 128)"){
//		$(this).css("color","black");
//		$(this).css("text-decoration","none");
//	}

//	else{
//		// we also write like below and also to make object
//		//$(this).css("color","grey");
//		//$(this).css("text-decoration","line-through");

//		$(this).css({
//			color: "gray",
//		});
//	}

//});
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todo
// the below line means when span is clicked which is inside of ul ....
// using click instead of on we cannot add effects on fiture thats why we use on instead of click
// $("span").click(function(event){-----this the way we can write in click but this is not working when we add somenhing..... 
$("ul").on("click","span",function(event){
	//basically $(this)-span .parent()-li which we want to remove
	$(this).parent().fadeOut(500,function(){
		// here $(this)-refer to parent elemt which is li here......
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13){

		// grabbing a value from input
		var todoText = $(this).val();

		// setting a empty value basically its work as a setter
		$(this).val("");

		// create a new li and add to ul...
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"); 

	}

});
// fade out here only works one beacuse when we click again it already in a position but we want to toggle
// it so we used fadeToggle() instead of fadeOut()
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();

});