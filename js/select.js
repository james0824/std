// JavaScript Document
$(document).ready(function() {
    $(".selectI p").click(function(){
		$(".selectI p").remove(".text");
		$(".selectI").append("<div class='block'></div>");
		$(".selectI").append("<p class='opt'>常委</p>","<p class='opt'>部长</p>","<p class='opt'>主管</p>","<p class='opt'>干事</p>");
	});
	$(".selectI").on("click",".opt",function(){
		$(".selectI").append("<p class='text'>adasdasd</p>");
		$(".selectI .text").text($(this).text());
        $("p").remove(".opt");
		$("div").remove(".block");
    });
});
$(document).ready(function() {
    $(".selectD p").click(function(){
		$(".selectD p").remove(".text");
		$(".selectD").append("<div class='block'></div>");
		$(".selectD").append("<p class='opt'>策划推广部</p>","<p class='opt'>综合管理部</p>","<p class='opt'>视觉设计部</p>","<p class='opt'>综合新闻部</p>","<p class='opt'>人力资源部</p>","<p class='opt'>外联部</p>","<p class='opt'>视频部</p>","<p class='opt'>技术部</p>","<p class='opt'>节目部</p>","<p class='opt'>编辑部</p>");
	});
	$(".selectD").on("click",".opt",function(){
		$(".selectD").append("<p class='text'>adasdasd</p>");
		$(".selectD .text").text($(this).text());
        $("p").remove(".opt");
		$("div").remove(".block");
    });
});
$(document).ready(function() {
    $(".selectC p").click(function(){
		$(".selectC p").remove(".text");
		$(".selectC").append("<div class='block'></div>");
		$(".selectC").append("<p class='opt'>策划推广部</p>","<p class='opt'>综合管理部</p>","<p class='opt'>视觉设计部</p>","<p class='opt'>综合新闻部</p>","<p class='opt'>人力资源部</p>","<p class='opt'>外联部</p>","<p class='opt'>视频部</p>","<p class='opt'>技术部</p>","<p class='opt'>节目部</p>","<p class='opt'>编辑部</p>");
	});
	$(".selectC").on("click",".opt",function(){
		$(".selectC").append("<p class='text'>adasdasd</p>");
		$(".selectC .text").text($(this).text());
        $("p").remove(".opt");
		$("div").remove(".block");
    });
});