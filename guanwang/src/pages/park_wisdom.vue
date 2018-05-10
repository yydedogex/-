<template>
	<div>
	<el-carousel height="584px">
      <el-carousel-item v-for="item in imagesList.list" :key="item.src">
        <h3><img :src="item.src" alt=""></h3>
        <div class="introduce_details">
			<h3>{{item.title}}</h3>
			<span class="every" v-for="list in item.span">{{list}}</span>
			<p>{{item.p}}</p>
			<a class="know">{{item.a}}</a>
		</div>
      </el-carousel-item>
    </el-carousel>
		<div class="section bg-white" style="background: #e0e9f1" >
			<div class="contain">
				<div class="title">行业痛点</div>
				<ul class="bd-intro-list1">
	            <li v-for="(item,index) in detailList1.list" v-bind:class="{active:item.isActive}" v-on:mouseover="changeActive(index)">
	                <div class="head">
	                    <div class="head-inner">
	                        <i :class="'icon' + (index+1)"></i>
	                        <p class="index-head">{{item.name}}</p>
	                    </div>
	                </div>
	                <div class="body">
	                    <ul class="bd-intro-detail-list1">
	                        <li>
	                            <div class="index-head" v-html="item.p">
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	            </li>
	        </ul>
		</div>
	</div>
	<div class="section bg-white">
		<div class="contain wow fadeIn">
			<div class="title">解决思路
				<div class="details">就位网利用大数据技术，整合全国8000多万家企业的合法公开数据维度，搭建全息产业数据引擎，建立最全企业画像</div>
			</div>
			<div class="thinking"></div>
			<div class="describe"></div>
			<div class="book"></div>
		</div>
	</div>
	<div class="section bg-black" :style="note2">
		<div class="contain">
		<div class="title">
			<div class="parkBi">园区BI（Business Intelligence）商务智能产品，<br>利用数据分析帮助园区方做出明智的运营决策。</div>
		</div>
		</div>
	</div>
	<Lab :wisdomData="wisdomList1"></Lab>
	<!--把父组件自己的数据绑定给子组件定义的lianxiDataChild，@child-to-parent子组件传过来的自定义事件，触发事件能查数据情况-->
	<Case :lianxiDataChild="intList" @child-to-parent="isParent"></Case>
	<div class="section bg-white" style="background: #e0e9f1">
		<div class="contain wow fadeIn">
			<div class="title">更多功能</div>
			<div class="group"></div>
		</div>
	</div>
	</div>
</template>
<script>
import Case from '../components/case'
import Lab from '../components/lab'
	export default ({
 	data(){
			return {
				imagesList:{
					list:[
						{
							src:require('../assets/background2.png'),
							title:'园区智囊',
							span:['云招商','云管理','云服务','云风控'],
							p:'让园区运营更智能',
							a:'申请试用'
	            		}
					]
				},
				note2:{
					backgroundImage:"url(" + require("../assets/park_wisdom.png") + ")",
					backgroundRepeat:'no-repeat',
					height:'322px',
					boxSizing:'border-box',
					backgroundPosition:'top center'
				},
				detailList1:{
					list:[
						{	
							name:'园区竞争加剧',
							p:'<p>政策收紧：地产行业的转型升级带来了产业地产的风口，但产业地产的政策不断收紧、管理越发严格；</p><p>新企业减少：资本寒冬、创业冷静期、创业成本提升导致新注册企业数量下降，进一步加剧了园区的竞争。</p>',
							isActive:true
						},
						{
							name:'传统运营模式',
							p:'<p>被动式招商、盲目式跟进、基础型服务、放任式管理是目前较为传统园区运营模式，已无法满足新一代园区发展的需求。</p>',
							isActive:false
						},
						{
							name:'对企业不了解',
							p:'<p>简单的租赁关系、基础服务已经很难满足企业需求，园区要想提供精准、有效的服务，加深合作关系，如果对入园企业一无所知又怎么实现？</p>',
							isActive:false
						},
						{
							name:'不够“智慧”',
							p:'<p>目前大部分“智慧园区” 方案只是解决企业吃住行的“物管智能”，对企业发展并没有实质性的帮助。</p><p>真正的“智慧园区”要对园区企业发展动态、服务需求做到了如指掌，根据有效数据分析服务好企业，提升园区平台属性。</p>',
							isActive:false
						}
					]
				},
				/*父组件向子组件传的数据*/
				intList:{
 				list:[
	 				{
	 					p1:'某园区有客户退租，招商人员随后在系统发布招商需求，输入面积、租金、行业要求等参数，',
	 					p2:'园区智囊自动匹配三个月内将到期且符合要求的企业名单，<span class="blue">实现高效率、主动精准招商。</span>',
	 					isCurrent: true
	 				},
	 				{
	 					p1:'某园区工业设计企业在招聘平台上发布java程序员职位，疑似新项目开展，系统判断其为投融资<span class="blue">需求线索</span>，',
	 					p2:'推送给园区投融资部门，工作人员迅速展开沟通，促成了对该企业新项目的投资。',
	 					isCurrent: false
	 				},
	 				{
	 					p1:'某区政府新发布政策，园区智囊智能筛选初步符合申报条件的企业，服务机构第一时间对接企业，',
	 					p2:'完成政策宣讲和<span class="blue">申报服务</span>，助力企业发展。',
	 					isCurrent: false
	 				},
	 				{
	 					p1:'某园区签约企业仅有140家，园区智囊发现注册地址在园内的企业有330多家，通过地址分析算法判断企业的关联性，',
	 					p2:'工作人员据此做<span class="blue">风控排查，消除园区管理风险。</span>',
	 					isCurrent: false
	 				},
 				]
 			},
 				wisdomList1:{
 					title:'就位园区智囊',
 					list:[
	 					{
	 						top:'云招商',
	 						bottom:['招聘模式做招商','智能匹配/猎头模式','准入驻企业智能尽调'],
	 						isActive:true,
	 						num:5
	 					},
	 					{
	 						top:'云管理',
	 						bottom:['企业全维度动态掌握','智能发现管理线索','企业成长档案','产业链分析','园区指数'],
	 						isActive:false,
	 						num:6
	 					},
	 					{
	 						top:'云服务',
	 						bottom:['企业服务智能识别','政策智能解读匹配','企业商情挖掘'],
	 						isActive:false,
	 						num:7
	 					},
	 					{
	 						top:'云风控',
	 						bottom:['企业风险提醒','园区风险提醒','品牌风险提醒'],
	 						isActive:false,
	 						num:8
	 					}
 					]
 				}
			}
		},
		components:{
			Case,
			Lab
		},
		/*父组件接收子组件的方法*/
		methods:{
			isParent:function(zichuanfuData){
				console.log(zichuanfuData);
			},
	        changeActive:function(index){  
	            for(var i = 0; i < 4; i++) { 
            		this.detailList1.list[i].isActive = false;  
            	} 
	            this.detailList1.list[index].isActive = true;
	        }
		} 

})
</script>
<style>
.bd-intro-list1 {
    height: 350px;
    margin: 20px 0;
}
.bd-intro-list1>li {
    position: relative;
    height: 100%;
    float: left;
    width: 24%;
    transition: all .5s cubic-bezier(.6,.4,.2,1),z-index 0s .12s;
}
.bd-intro-list1 .active {
    z-index: 1;
    width: 28%;
    box-shadow: 0 0 15px rgba(0,0,0,.25);
}
.bd-intro-list1 .head {
    top: 0;
    position: relative;
    background: #f0f4f8;
    text-align: center;
}
.bd-intro-list1 .active .head {
    background: #2fa8e6;
    top: -15px;
    height: 133px;
}
.bd-intro-list1 .head-inner {
    position: absolute;
    bottom: 20px;
    width: 100%;
}
.bd-intro-list1 .body {
    position: absolute;
    top: 118px;
    width: 100%;
    background: #fff;
    border: 1px solid #fff;
    border-top: 0;
    box-sizing: border-box;
}
.bd-intro-list1 .active .body {
    height: 247px;
    border-color: #2fa8e6;
}
.bd-intro-list1 .head {
    transition: all .5s cubic-bezier(.6,.4,.2,1);
    height: 118px;
}
.bd-intro-list1 .body {
    transition: all .5s cubic-bezier(.6,.4,.2,1);
    height: 232px;
}
.bd-intro-detail-list1 {
    width: 215px;
    margin: 0 auto;
    padding-top: 15px;
}
.bd-intro-detail-list1>li {
    margin-bottom: 20px;
}
.bd-intro-list1 .head-inner i {display: inline-block;width: 46px;height: 46px;margin-top: 20px;}
.bd-intro-list1 .head-inner .icon1 {background: url(../assets/icon1.png) no-repeat;background-position-y: 9px;}
.bd-intro-list1 .head-inner .icon2 {background: url(../assets/icon1.png) no-repeat;background-position-y: bottom;}
.bd-intro-list1 .head-inner .icon3 {background: url(../assets/icon3.png) no-repeat;background-position-y: 9px;}
.bd-intro-list1 .head-inner .icon4 {background: url(../assets/icon3.png) no-repeat;background-position-y: bottom;}
.bd-intro-list1 .active .head-inner .icon1 {background-image: url(../assets/icon2.png);}
.bd-intro-list1 .active .head-inner .icon2 {background-image: url(../assets/icon2.png);background-position-y: bottom;}
.bd-intro-list1 .active .head-inner .icon3 {background-image: url(../assets/icon4.png);background-position-y: 9px;}
.bd-intro-list1 .active .head-inner .icon4 {background-image: url(../assets/icon4.png);background-position-y: bottom;}
.bd-intro-list1 .index-head {font-size: 18px;color:#2a3139;}
.bd-intro-list1 .index-head p {font-size: 14px;color: #8c93a0;line-height: 26px;}
.bd-intro-list1 .active .index-head {color: #fff;}
.section .thinking {height: 870px;background: url(../assets/circle_bg.png) no-repeat;}
.section .describe {width:556px;height: 144px;  position: absolute;bottom: 100px;left: 0;background: url(../assets/details.png) no-repeat;}
.section .book {width: 616px;height: 355px; position: absolute; background: url(../assets/book.png) no-repeat;bottom: 0;right: 0;}
.section .parkBi {font-size: 16px;color: #00aaee;margin-top: 70px;}
.section .group {height: 540px;background: url(../assets/group.png) no-repeat;}
.el-carousel__item>h3 {color: #475669;font-size: 14px;opacity: 0.75;line-height: 150px;margin: 0;}
.el-carousel__item:nth-child(2n) { background-color: #99a9bf;}  
.el-carousel__item:nth-child(2n+1) {background-color: #d3dce6;}
.el-carousel {max-width: 1920px;min-width: 1200px;margin: 0 auto;}
.el-carousel__arrow {background-color: rgba(31,45,61,.51);}
.el-carousel__arrow:hover {background-color: rgba(31,45,61,0.83);}
.introduce_details {display: inline-block;position: absolute;left: 20.8%;top: 29%;color: #fff;}
.introduce_details h3 {font-size: 35px;font-weight: 100;}
.introduce_details .every {display: inline-block; width: 80px;height: 30px;line-height: 30px;text-align: center;color: #00aaee;border:1px solid #00aaee;border-radius: 4px;margin-right: 3px;margin-top: 10px; font-size: 18px;}
.introduce_details p {margin-top:10px;font-size: 20px; }
.firstPage {width: 200px!important;font-weight: bold;}
.know {display: inline-block; width: 140px;height: 40px;line-height: 40px; background: #009cff;color: #fff;text-align: center;border-radius: 4px;margin-top: 15px;}
.know:hover {opacity: 0.8;}
</style>