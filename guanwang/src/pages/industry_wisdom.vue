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
			<div class="contain wow fadeIn">
				<div class="title">痛点分析
					<div class="details">政府和行业主管部门的使命在于行业<span class="blue">指导、管理、扶持、监督、执法。</span></div>
				</div>
				<ul class="bd-intro-list">
	            <li v-for="(item,index) in detailList.list" v-bind:class="{active:item.isActive}" v-on:mouseover="changeActive(index)">
	                <div class="head">
	                    <div class="head-inner">
	                        <i :class="'icon' + (index+1)"></i>
	                        <p class="index-head">{{item.name}}</p>
	                    </div>
	                </div>
	                <div class="body">
	                    <ul class="bd-intro-detail-list">
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
		<div class="section train"></div>
		<Lab :wisdomData="wisdomList1"></Lab>
		<div class="section bg-white" style="background: #e0e9f1" >
			<div class="contain">
				<div class="title">就位园区多维评定标准<div class="introduce" style="color: #8c93a0;line-height: 30px;">为客观展现园区的运营情况及提升之处，<span class="blue">就位网独创性推出园区多维评定标准，</span>4大模块，共66个细项，以雷达图全方位展现园区综合实力。</div></div>
				<div class="duowei">
					<div v-for="(item,index) in duoweiList.list" :class="'duowei'+(index+1)"><div class="allduowei" v-html="item.int" :class="{active:item.isActive}" v-on:mouseover="duoweiActive(index)"></div></div>
				</div>
			</div>
		</div>
	<!--把父组件自己的数据绑定给子组件定义的lianxiDataChild，@child-to-parent子组件传过来的自定义事件，触发事件能查数据情况-->
		<Case :lianxiDataChild="intList" @child-to-parent="isParent"></Case>
		<div class="section bg-white" style="background: #e0e9f1" >
			<div class="contain">
				<div class="title">更多服务
					<div class="details">作为产业管理者，您可能还需要产业分析报告，我们都可以满足</div>
				</div>
				<div class="report"></div>
			</div>
		</div>
		<ApplyForm></ApplyForm>
	</div>
</template>
<script>
import Case from '../components/case'
import Lab from '../components/lab'
import ApplyForm from '../components/applyForm'
	export default ({
 	data(){
			return {
				imagesList:{
				list:[ 
	                {
						src:require('../assets/background3.png'),
						title:'产业智囊',
						span:['管园区','管企业','管政策','管标准'],
						p:'实现产业动态管理',
						a:'申请试用'
					}
                ]
            },
				duoweiList:{
					list:[
						{
							int:'园区硬实力',
							isActive:false
						},
						{
							int:'园区软实力',
							isActive:false
						},
						{
							int:'<span>集聚园区</span><br><span>多维评定标准</span>',
							isActive:true
						},
						{
							int:'园区产业聚力',
							isActive:false
						},
						{
							int:'园区创新力',
							isActive:false
						}
					]
				},
				detailList:{
					list:[
						{	
							name:'信息不对称',
							p:'<p>各类信息的不对称导致主管部门缺乏动态产业数据，<span class="blue">在行业监管、产业发展预判、有效政策对接、行业标准建立等方面存在一定问题。</span></p>',
							isActive:true
						},
						{
							name:'静态数据',
							p:'<p>近年，政府主张将各部门数据打通，<span class="blue">搭建企业信用体系，但实施效果仍不够理想，数据维度也不够完善，缺乏更多企业运营数据，如产品、招聘等数据。</span></p><p>不少行业主管部门对数据来源仍依赖于统计局，而那些是<span class="blue">相对静态的数据。</span>我国企业以小微企业为主，生命周期平均只有2.5年，行业发展和更新迭代非常快，目前主管部门获得的数据已不能满足行业管理的实际需求。</p>',
							isActive:false
						},
						{
							name:'传统的管理模式',
							p:'<p>有限的人员编制、传统的沟通方式、跨部门的有限静态数据，使得行业监管工作不便开展，<span class="blue">抓大放小式的管理</span>不利于行业持续发展。</p>',
							isActive:false
						}
					]
				},
				/*父组件向子组件传的数据*/
				intList:{
 				list:[
		 				{
		 					p1:'某政府部门管辖范围过大，无法有效管理辖区园区及企业发展动态，产业智囊',
		 					p2:'<span class="blue">智能识别辖区园区数量、发展情况以及园内企业动态，智能生成各类数据报表。</span>',
		 					isCurrent: true
		 				},
		 				{
		 					p1:'某政府部门管理企业数量太多，但人员有限，无法有效管理。',
		 					p2:'产业智囊<span class="blue">对风险企业进行智能预警，对潜力企业智能挖掘，</span>降低管理风险、提升管理效率。',
		 					isCurrent: false
		 				},
		 				{
		 					p1:'某政府部门做政策审核时由于缺乏足够的数据和工作精力，无法有效推进，',
		 					p2:'产业智囊智能分析企业的匹配度和潜在风险，大大<span class="blue">提升审核效率。</span>',
		 					isCurrent: false
		 				},
		 				{
		 					p1:'某政府部门发布了园区评定标准，虽然有准入准出标准，但无法对园区进行有效监管。产业智囊可以定制标准，根据园区企业流动、',
		 					p2:'企业行业变更、知识产权变化等数据变化<span class="blue">实现园区动态评分，对偏离标准要求的园区进行预警，实现了园区的标准化管理。</span>',
		 					isCurrent: false
		 				}
 				    ]
 				},
 				wisdomList1:{
 					title:'就位产业智囊',
 					list:[
	 					{
	 						top:'管园区',
	 						bottom:['园区企业流动监测','园区发展动态','产业地图','园区活动统计','产业聚力统计','园企创新力统计'],
	 						isActive:true,
	 						num:1
	 					},
	 					{
	 						top:'管企业',
	 						bottom:['企业全维度数据变化','重点企业批量监测','企业区域分布','趋势变化','行业统计','趋势变化','企业动态跟进'],
	 						isActive:false,
	 						num:2
	 					},
	 					{
	 						top:'管政策',
	 						bottom:['政策落实情况统计','政策智能解读','政策智能审批','政策分析'],
	 						isActive:false,
	 						num:3
	 					},
	 					{
	 						top:'管标准',
	 						bottom:['园区认定标准','园区星级评定标准','行业准入标准','重点企业判断标准'],
	 						isActive:false,
	 						num:4
	 					}
 					]
 				}
			}
		},
		components:{
			Case,
			Lab,
			ApplyForm
		},
		/*父组件接收子组件的方法*/
	methods:{
		isParent:function(zichuanfuData){
			console.log(zichuanfuData);
		},
        changeActive:function(index){  
            for(var i = 0; i < 3; i++) { 
        		this.detailList.list[i].isActive = false;  
        	} 
            this.detailList.list[index].isActive = true;
        },
        duoweiActive:function(index){  
            for(var i = 0; i < 5; i++) { 
        		this.duoweiList.list[i].isActive = false;  
        	} 
            this.duoweiList.list[index].isActive = true;
        }
	}
})

</script>
<style>

.bd-intro-list {
    height: 350px;
    margin: 20px 0;
}
.bd-intro-list>li {
    position: relative;
    height: 100%;
    float: left;
    width: 32%;
    transition: all .5s cubic-bezier(.6,.4,.2,1),z-index 0s .12s;
}
.bd-intro-list .active {
    z-index: 1;
    width: 36%;
    box-shadow: 0 0 15px rgba(0,0,0,.25);
}
.bd-intro-list .head {
    top: 0;
    position: relative;
    background: #f0f4f8;
    text-align: center;
}
.bd-intro-list .active .head {
    background: #2fa8e6;
    top: -15px;
    height: 133px;
}
.bd-intro-list .head-inner {
    position: absolute;
    bottom: 20px;
    width: 100%;
}
.bd-intro-list .body {
    position: absolute;
    top: 118px;
    width: 100%;
    background: #fff;
    border: 1px solid #fff;
    border-top: 0;
    box-sizing: border-box;
}
.bd-intro-list .active .body {
    height: 247px;
    border-color: #2fa8e6;
}
.bd-intro-list .head {
    transition: all .5s cubic-bezier(.6,.4,.2,1);
    height: 118px;
}
.bd-intro-list .body {
    transition: all .5s cubic-bezier(.6,.4,.2,1);
    height: 232px;
}
.bd-intro-detail-list {
    width: 328px;
    margin: 0 auto;
    padding-top: 15px;
}
.bd-intro-detail-list>li {
    margin-bottom: 20px;
}
.bd-intro-list .head-inner i {display: inline-block;width: 49px;height: 46px;margin-top: 20px;}
.bd-intro-list .head-inner .icon1 {background: url(../assets/icon10.png) no-repeat;background-position-y: bottom;}
.bd-intro-list .head-inner .icon2 {background: url(../assets/icon1.png) no-repeat;background-position-y: bottom;}
.bd-intro-list .head-inner .icon3 {background: url(../assets/icon10.png) no-repeat;}
.bd-intro-list .head-inner .icon4 {background: url(../assets/icon1.png) no-repeat;background-position-y: 9px;}
.bd-intro-list .active .head-inner .icon1 {background-image: url(../assets/icon2.png);}
.bd-intro-list .active .head-inner .icon2 {background-image: url(../assets/icon2.png);background-position-y: bottom;}
.bd-intro-list .active .head-inner .icon3 {background-image: url(../assets/icon9.png);}
.bd-intro-list .active .head-inner .icon4 {background-image: url(../assets/icon9.png);background-position-y: bottom;}
.bd-intro-list .index-head {font-size: 18px;color:#2a3139;}
.bd-intro-list .index-head p {font-size: 14px;color: #8c93a0;line-height: 26px;}
.bd-intro-list .active .index-head {color: #fff;}
.train {background: url(../assets/train.png) no-repeat;height: 260px;box-sizing:border-box;background-position: top center}
.section .report {height: 286px;background: url(../assets/report.png) no-repeat center;}
.section .duowei {height: 500px; text-align: center;  border-collapse:separate;border-spacing: 10px;margin: 0 auto;position: relative;}
.section .duowei>div {position: absolute;}
.section .duowei .allduowei {display: table-cell;vertical-align: middle; width: 189px;height: 211px;font-size: 18px;color: #fff;} 
.section .duowei .duowei1 {left: 16%;top: 0}
.section .duowei .duowei2 {right: 16%;top: 0}
.section .duowei .duowei3 {left: 50%;top: 60px;margin-left:-123px; }
.section .duowei .duowei4 {left: 24%;bottom: 0}
.section .duowei .duowei5 {right: 24%;bottom: 0}
.section .duowei .duowei1 div {background: url(../assets/duowei1.png) no-repeat;}
.section .duowei .duowei2 div {background: url(../assets/duowei2.png) no-repeat;}
.section .duowei .duowei3 div {background: url(../assets/duowei3.png) no-repeat;width: 226px;height: 252px;}
.section .duowei .duowei4 div {background: url(../assets/duowei4.png) no-repeat;}
.section .duowei .duowei5 div {background: url(../assets/duowei5.png) no-repeat;padding: 0;}
.section .duowei .active {background: url(../assets/duowei7.png) no-repeat!important;transition: all .5s;
    -webkit-transition: all .5s;-ms-transition: all .5s;-moz-transition: all .5s;}
.section .duowei .duowei3>div.active {background: url(../assets/duowei6.png) no-repeat!important;transition: all .5s;
    -webkit-transition: all .5s;-ms-transition: all .5s;-moz-transition: all .5s;}
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