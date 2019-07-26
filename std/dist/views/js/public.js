$(function(){
	
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	
	$(".system-body").width($(window).width());
	$(".system-body").height($(window).height());
	
	var headHeight = $(".layui-header").height();
	var titleHeight = $(".layui-tab-title").height();
	var foorHeight = $(".layui-footer").height()
	var heightTotal = headHeight + titleHeight + foorHeight;
	var iframeHeight = winHeight - heightTotal;
	
	$("#iframe").css({'width':'100%','height': iframeHeight - 8});

	function autosize(){
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		
		$(document.body).width(winWidth);
		$(document.body).height(winHeight);
		
		$(".system-body").width(winWidth);
		$(".system-body").height(winHeight);
		
		var headHeight = $(".layui-header").height();
		
		var headHeight = $(".layui-header").height();
		var titleHeight = $(".layui-tab-title").height();
		var foorHeight = $(".layui-footer").height()
		var heightTotal = headHeight + titleHeight + foorHeight;
		var iframeHeight = winHeight - heightTotal;
		
		$("#iframe").css({'width':'100%','height': iframeHeight - 8});
		
	}
	
	window.onload = function(){
		autosize()
	}
	
	window.onresize = function(){
		autosize()
	}
	
	function autoOpen(src){
		
	}
})
