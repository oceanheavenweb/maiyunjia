// JavaScript Document
$(function(){
	elementHeight();
	clickli();
	select2();
	datarange();
	datatable();
	querydata();
});


function elementHeight(){
	$(".all").css("height",$(window).height());
	$(".left_c").css("height",$(window).height());
	$(".right_c").css("height",$(window).height());
	}
function clickli(){
	$(".right_c_top ul li").removeClass("active").each(function(index, element) {
		$(".right_c_top ul li:first-child").addClass("active");
        $(this).click(function(){
				$(this).siblings("li").removeClass("active");
				$(this).removeClass("active").addClass("active");
			});
    });
}
function select2(){
  		$(".js-example-basic-single").select2();
	}
function datarange(){
  		$('#reservation').daterangepicker();
	}
function datatable(){
  		$('#table_id_example').DataTable();
	}
	
	
	
function querydata(){
	$.ajax({
		url :'',
		type : "post",
		dataType: "jsonp",
		jsonp: "callbackparam",
		jsonpCallback: "success_jsonpCallback", 
		success : function(json) {
			if($("#bianhao").val() == ""){
					alert("请输入编号！")
				}else{
			for(var i=0;i<json.data.data.length;i++){
				var wish=json.data.wishes[i];
				$("#tb").append("<tr><td>"+data.id+"</td><td>"+data.name+"</td><td>"+data.state+"</td><td>"+data.startTime+"</td><td>"+data.logoTime+"</td><td>"+data.style+"</td><td><input class='ii i1' type='button' value='删除'/><input class='ii i2' type='button' value='隐藏'/></td></tr>");
			}
			$(".content_left_top img").attr('src',json.data.url);
			$(".totalPage").val(json.data.totalPage);
			}
		},
		
		error : function(json) {
			alert("后台没有给接口！");
		}
	});
}
