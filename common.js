

$(document).ready(function(){
	
	
	$("select").not("#site_list, .default").each(function(){
		var stext ="";
		$(this).wrap(function() {  return '<div class="selectbox ' + $(this).prop('class') + '" />';});

		if ( $(this).is(":disabled") ){ stext = "selecttext_d"; }
		else{ stext = "selecttext"; }

		$(this).after("<span class='"+stext+"'></span><span class='select-arrow'></span>");
		var val = $(this).children("option:selected").text();
		$(this).next("."+stext).text(val);
		$(this).change(function(){
			var val = $(this).children("option:selected").text();
			$(this).next("."+stext).text(val);
		});
	});

	$("#site_list").each(function(){
		var stext ="selecttext2";
		$(this).wrap(function() {  return '<div class="selectbox2 ' + $(this).prop('class') + '" />';});

		$(this).after("<span class='"+stext+"'></span><span class='select-arrow2'></span>");
		var val = $(this).children("option:selected").text();
		$(this).next("."+stext).text(val);
		$(this).change(function(){
			var val = $(this).children("option:selected").text();
			$(this).next("."+stext).text(val);
		});
	});
	

	$("#site_go").click(function(){
		var val = $("#site_list").children("option:selected").val();
		if(val) window.open(val);
		else {
			alert("사이트를 선택해주세요.");
			return false;
		}
	});
	
	
});