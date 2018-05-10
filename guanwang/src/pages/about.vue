<template>
	<div>
		<div>
			<div class="slider" id="slider"></div>
		</div>
		<div class="section bg-white" style="background: #e0e9f1;">
			<div class="contain">
				<div class="title">关于我们</div>
				<div class="aboutus"></div>
			</div>
		</div>
		<div class="section bg-black">
			<div class="contain">
				<div class="title">我们的优势</div>
				<div class="goodness"></div>
			</div>
		</div>
		<!--百度地图容器-->
		<div class="section bg-white" style="background: #e0e9f1;">
			<div class="cont">
				<div class="boxleft">
					<h3 class="h3">联系我们</h3>
					<div class="text">
						Email：info@jiuweiwang.com<br />
						地址：深圳市宝安区宝源路F518时尚创意园创展中心一楼
					</div>
				</div>
				<div class="Map">
					<div style="width:500px;height:400px;" id="dituContent"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default ({
 	data(){
			return {
			}
		},
	mounted() {
		//创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        var marker = new BMap.Marker(new BMap.Point(113.868100,22.572150));
        map.addOverlay(marker);//向地图中添加marker
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(113.869116,22.572797);//定义一个中心点坐标
        map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
        
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    initMap();//创建和初始化地图
	}
})

</script>
<style>
html,body{margin:0;padding:0;}
.anchorBL {bottom: 0!important;}
.BMap_cpyCtrl span{display:none!important;}
.iw_poi_title {color:#CC5522;font-size:14px;font-weight:bold;overflow:hidden;padding-right:13px;white-space:nowrap}
.iw_poi_content {font:12px arial,sans-serif;overflow:visible;padding-top:4px;white-space:-moz-pre-wrap;word-wrap:break-word}
.section .cont {width: 970px;padding-top: 20px;margin: auto;overflow: hidden;}
.section .cont .boxleft {float: left;padding-right: 30px;width: 440px;}
.section .cont .h3 {font-size: 30px;padding-top: 10px;font-weight: normal;line-height: 70px;}
.section .cont .text {font-size: 16px;line-height: 40px;color: #666;}
.section .cont .Map {float: left;}
.section {padding: 30px 0 36px 0;min-width: 1200px;}
.bg-white {background: #fff;}
.bg-black {background: #2a3139;color: #fff;}
.section .contain {width:1200px;margin: 0 auto;position: relative;}
.bg-white .contain .title {margin-bottom: 30px; color: #31363c;font-size: 30px;text-align: center;}
.bg-black .contain .title {margin-bottom: 30px; color: #ffffff;font-size: 30px;text-align: center;}
.section .aboutus {height: 380px;background: url(../assets/aboutus.png) no-repeat center;}
.section .goodness {height: 445px;background: url(../assets/goodness.png) no-repeat center;}
.slider {min-width: 1200px;max-width: 1920px;background: url(../assets/background4.png) no-repeat top center;height: 584px;margin: 0 auto;}
</style>