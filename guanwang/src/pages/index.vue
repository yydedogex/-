<template>
	<div>
	<el-carousel height="584px" :interval="15000">
      <el-carousel-item v-for="(item,index) in imagesList.list" :key="item.src">
        <h3><img :src="item.src" alt=""></h3>
        <div class="introduce_details">
			<h3>{{item.title}}</h3>
			<span class="every" v-for="list in item.span" :class="{firstPage:item.span.length==1}">{{list}}</span>
			<p>{{item.p}}</p>
			<router-link :to="{path:item.path}" v-show="item.span.length!=1" class="know">{{item.a}}</router-link>
		</div>
      </el-carousel-item>
    </el-carousel>
		<div class="section bg-white">
			<div class="contain">
				<div class="title">我们的特点</div>
				<div class="details">
					<div class="left" style="width: 800px;display: inline-block;">
						<p v-for="item in descList.list" v-bind:class="{ p_title :item.isTitle,p_content:item.isContent}">{{item.desc}}</p>
					</div>
					<img src="../assets/worth.png">
				</div>
			</div>
		</div>
		<div class="section bg-black">
			<div class="contain center">
				<div class="title">产品特点</div>
				<div class="introduce">专业数据挖掘技术</div>
				<div class="flow clearfix" v-for="(item,index) in circleList.list">
					<div class="circle">
						<span class="number">{{index+1}}</span>{{item.name}}
					</div>
					<div class="space" v-if="index<6">
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="introduce">成熟数据抓取技术，智能抓取海量企业信息，每日更新千万级企业数据。</div>
			</div>
		</div>
		<div class="section bg-white" :style="note">
			<div class="contain">
				<div class="title">最全企业画像</div>
				<div class="introduce">就位网拥有8000万+企业工商、法律、新闻、舆情、招聘、投融资、产品、知识产权等100+数据维度，外加行业企业专有数据，致力刻画最全的企业画像。</div>
				<div class="figurer_contain">
					<div class="figurer figurer1">
						<div class="content"><i></i><p>法律</p></div>
					</div>
					<div class="figurer figurer2">
						<div class="content"><i></i><p>知识产权</p></div>
					</div>
					<div class="figurer figurer3">
						<div class="content"><i></i><p>融资</p></div>
					</div>
					<div class="figurer figurer4">
						<div class="content"><i></i><p>招聘</p></div>
					</div>
				</div>
				<div class="figurer_contain" style="margin-top: -142px;">
					<div class="figurer figurer5">
						<div class="content"><i></i><p>工商</p></div>
					</div>
					<div class="figurer figurer6">
						<div class="content"><i></i><p>征信</p></div>
					</div>
					<div class="figurer figurer7">
						<div class="content"><i></i><p>舆情</p></div>
					</div>
				</div>
				<div class="figurer_contain" style="margin-top: -142px;">
					<div class="figurer figurer8">
						<div class="content"><i></i><p>产品</p></div>
					</div>
					<div class="figurer figurer9">
						<img src="../assets/earth.png" alt="">
					</div>
				</div>
				<div class="figurer_contain" style="margin-top: -142px;">
					<div class="figurer figurer10">
						<div class="content"><i></i><p>项目</p></div>
					</div>
					<div class="figurer figurer11">
						<img src="../assets/earth.png" alt="">
					</div>
					<div class="figurer figurer12">
						<div class="content"><i></i><p>行业</p></div>
					</div>
				</div>
				<img src="../assets/dandu.png" alt="" style="position: absolute;right: 0;top: 100px;">
			</div>
		</div>
		<div class="section bg-black" :style="note1">
			<div class="contain">
				<div class="title">专注产业应用服务</div>
				<div class="service">
					<ul>
						<li v-for="item in serviceList.list"><div><i></i><p>{{item.name}}</p></div></li>
					</ul>
				</div>
				<div class="introduce">我们围绕产业全环节应用场景，面向政府行业主管部门、园区运营商、企业、企业服务商、
	行业研究机构等用户提供专业的数据应用服务，解决产业全环节数据缺失和利用问题。</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default ({
 	data(){
			return {
				none:{display:'none'},
				imagesList:{
				list:[ 
					{
						src:require('../assets/background1.png'),
						title:'就位网｜产业商务智能（BI）服务商',
						span:['企业大数据的产业应用'],
						p:'解决产业全环节数据缺失和利用问题',
						a:'了解详情'
					},
	                {
						src:require('../assets/background2.png'),
						title:'园区智囊',
						span:['云招商','云管理','云服务','云风控'],
						p:'让园区运营更智能',
						a:'了解详情',
						path:'/park'
					},
	                {
						src:require('../assets/background3.png'),
						title:'产业智囊',
						span:['管园区','管企业','管政策','管标准'],
						p:'实现产业动态管理',
						a:'了解详情',
						path:'/industry'
					}
                ]
            },
				descList:{
					list:[
						{
							desc:'我们理解大数据的核心不在“大”，不在“数”，而在“据”，核心是应用场景。',
							isTitle:true
						},
						{
							desc:'就位网扎根产业、园区、企业等服务研究10多年，深知产业管理、园区运营、企业服务的痛点，利用大数据技术开发产业智囊、园区智囊等多个行之有效的解决方案，解决产业管理全环节数据缺失和利用问题，得到众多合作伙伴的一致认可。',
							isContent:true
						},
						{
							desc:'就位网内设产业BI研究院，深度挖掘产业链，重点研究大数据对行业的应用价值。我们有专业的技术、接地气的产品，并保持专注、耐心，努力为我们的合作伙伴创造最大的价值。',
							isContent:true
						}
					]
				},
				circleList:{
					list:[
						{
							name:'任务管理'
						},
						{
							name:'数据抓取'
						},
						{
							name:'数据存储'
						},
						{
							name:'数据解析'
						},
						{
							name:'数据清洗'
						},
						{
							name:'数据入库'
						},
						{
							name:'数据分析'
						}
					]
				},
				serviceList:{
					list:[
						{
							name:'产业监管'
						},
						{
							name:'产业运营'
						},
						{
							name:'产业发展'
						},
						{
							name:'产业服务'
						},
						{
							name:'产业研究'
						},
					]
				},
				//行内样式可以写在数据里，通过:style="note"引用
				note:{
					backgroundColor: '#e0e9f1',
					backgroundImage: "url(" + require("../assets/bg2.png") + ")",
		            backgroundRepeat: "no-repeat",
		            backgroundPosition: "top center",
				},
				note1:{
					backgroundImage: "url(" + require("../assets/bg1.png") + ")",
		            backgroundRepeat: "no-repeat",
		            backgroundPosition: "top center",
				}
			}
		},
		created:function(){
		    this.$http.get('api/getNewsList')
		    .then((res) =>{
		      this.newsList = res.data
		      console.log(this.newsList)
		    },(err) => {
		      console.log(err)
		    })
		}
})

</script>
<style scoped>
.section {padding: 30px 0 36px 0;min-width: 1200px;}
.bg-white {background: #fff;}
.bg-black {background: #2a3139;color: #fff;}
.section .contain {width:1200px;margin: 0 auto;position: relative;}
.bg-white .contain .title {margin-bottom: 30px; color: #31363c;font-size: 30px;text-align: center;}
.bg-black .contain .title {margin-bottom: 30px; color: #ffffff;font-size: 30px;text-align: center;}
.contain .title .details {text-align: center;font-size: 16px;color: #8c93a0;margin-top: 10px;}
.section .contain .details {overflow: hidden;}
.section .contain .details img {float: left;margin-left: 30px;}
.section .contain .details p {display: inline-block;}
.section .contain .details .p_title {font-size: 20px;font-weight: bold;color:#31363c;margin: 20px 0;}
.section .contain .details .p_content {color: #646f83;font-size: 14px;margin-bottom: 20px;}
.section .contain .introduce {text-align: center;font-size: 16px;max-width: 640px;margin: 0 auto;line-height: 36px;}
.section .contain .flow {padding: 60px 0 50px 0;margin: 0 auto;display: inline-block;}
.section .contain .flow .circle {display: inline-block;float: left; width:116px;height: 116px;line-height: 116px;text-align: center;font-size: 16px; border-radius: 100px;background: -webkit-linear-gradient(#00b3fe, #1971d5); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#00b3fe, #1971d5); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#00b3fe, #1971d5); /* Firefox 3.6 - 15 */
  background: linear-gradient(#00b3fe, #1971d5); /* 标准的语法 */position: relative;box-shadow: 0px 0px 2px 5px #222a33;}
.section .contain .flow .circle:hover {background: -webkit-linear-gradient(#00d2a8, #009a74); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#00d2a8, #009a74); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#00d2a8, #009a74); /* Firefox 3.6 - 15 */
  background: linear-gradient(#00d2a8, #009a74);}
.section .contain .flow .circle .number {position: absolute;line-height: normal;font-size: 22px;font-weight: bold;color: #b8dffc;top: 10px;left: 44%;}
.section .contain .flow .space {display: inline-block; height: 116px;line-height: 116px;margin: 0 16px;font-size: 0;float: left;}
.section .contain .flow .space span {display: inline-block; background: url(../assets/space.png) no-repeat;background-size: cover; width: 12px;height: 12px;}
.section .figurer_contain {margin: 58px auto;position: relative;height: 200px;}
.section .figurer_contain .figurer {position: absolute;display: inline-block; width: 164px;height: 164px;line-height: 164px; color: #fff;text-align: center;font-size: 16px;transform: rotate(45deg);
-ms-transform: rotate(45deg);		/* IE 9 */
-webkit-transform: rotate(45deg);	/* Safari and Chrome */
-o-transform: rotate(45deg);		/* Opera */
-moz-transform: rotate(45deg);		/* Firefox */}
.section .figurer_contain .figurer:hover {transform:rotate(45deg) scale(1.2);
-ms-transform: rotate(45deg) scale(1.2);		/* IE 9 */
-webkit-transform: rotate(45deg) scale(1.2);	/* Safari and Chrome */
-o-transform: rotate(45deg) scale(1.2);		/* Opera */
-moz-transform: rotate(45deg) scale(1.2);z-index: 100;box-shadow: 0px 0px 18px 2px #413f3f;transition: all .3s;
    -webkit-transition: all .3s;}
.section .figurer_contain .figurer .content {line-height: normal;margin-top: 40px;transform: rotate(-45deg);
-ms-transform: rotate(-45deg);		/* IE 9 */
-webkit-transform: rotate(-45deg);	/* Safari and Chrome */
-o-transform: rotate(-45deg);		/* Opera */
-moz-transform: rotate(-45deg);		/* Firefox */}
.section .figurer_contain .figurer .content i {display: inline-block;width: 52px;height: 52px;margin-bottom: 10px;}
.section .figurer_contain .figurer1 {top: 0;left: 168px;background: #0084ff;}
.section .figurer_contain .figurer2 {top: 0;left: 400px;background: #01c082;}
.section .figurer_contain .figurer3 {top: 0;right: 404px;background: #f2b644;}
.section .figurer_contain .figurer4 {top: 0;right: 172px;background: #cd4849;}
.section .figurer_contain .figurer5 {top: 0;left: 284px;background: #0084ff;}
.section .figurer_contain .figurer6 {top: 0;right: 520px;background: #02b2ee;}
.section .figurer_contain .figurer7 {top: 0;right: 288px;background: #cd4849;}
.section .figurer_contain .figurer8 {top: 0;left: 400px;background: #a843dd;}
.section .figurer_contain .figurer9 {top: 0;right: 404px;overflow: hidden;}
.section .figurer_contain .figurer10 {top: 0;left: 284px;background: #3b5ddb;}
.section .figurer_contain .figurer11 {top: 0;right: 520px;overflow: hidden;}
.section .figurer_contain .figurer12 {top: 0;right: 288px;background: #1f253d;}
.section .figurer_contain .figurer1 i {background: url(../assets/group_icon.png) no-repeat 0px 5px; }
.section .figurer_contain .figurer2 i {background: url(../assets/group_icon.png) no-repeat 0px -47px; }
.section .figurer_contain .figurer3 i {background: url(../assets/group_icon.png) no-repeat 0px -99px; }
.section .figurer_contain .figurer4 i {height:42px!important;background: url(../assets/group_icon.png) no-repeat 0px -148px; }
.section .figurer_contain .figurer5 i {background: url(../assets/group_icon.png) no-repeat 0px -193px; }
.section .figurer_contain .figurer6 i {background: url(../assets/group_icon.png) no-repeat 0px -249px; }
.section .figurer_contain .figurer7 i {background: url(../assets/group_icon.png) no-repeat 0px -303px; }
.section .figurer_contain .figurer8 i {background: url(../assets/group_icon.png) no-repeat 0px -356px; }
.section .figurer_contain .figurer9 img {position: absolute;
    top: -9px;
    right: -91px;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);}
.section .figurer_contain .figurer10 i {background: url(../assets/group_icon.png) no-repeat 0px -403px; }
.section .figurer_contain .figurer11 img {position: absolute;
    top: -172px;
    right: -91px;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);}
.section .figurer_contain .figurer12 i {background: url(../assets/group_icon.png) no-repeat 0px -452px; }
.section .figurer_contain .figurer9:hover,.section .figurer_contain .figurer11:hover {transform:rotate(45deg) scale(1);
-ms-transform: rotate(45deg) scale(1);		/* IE 9 */
-webkit-transform: rotate(45deg) scale(1);	/* Safari and Chrome */
-o-transform: rotate(45deg) scale(1);		/* Opera */
-moz-transform: rotate(45deg) scale(1);z-index: 100;box-shadow: 0px 0px 0px 0px #413f3f;-webkit-transition: all 0s;-ms-transition: all 0s;-moz-transition: all 0s;transition: all 0s;}

.section .contain .service {margin-bottom:50px;text-align: center;}
.section .contain .service li {margin: 0 2px;position: relative; display: inline-block;width: 234px;height: 208px;line-height: 208px;text-align: center;background: -webkit-linear-gradient(#2a3646, #1a1c29); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#2a3646, #1a1c29); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#2a3646, #1a1c29); /* Firefox 3.6 - 15 */
  background: linear-gradient(#2a3646, #1a1c29);opacity: 0.8}
.section .contain .service li:hover {background: #00aaee; transition: all .5s;
    -webkit-transition: all .5s;}
.section .contain .service li div {line-height: normal;margin-top: 70px;}
.section .contain .service li i {background: url(../assets/type_icon.png) no-repeat center;display: inline-block;width: 42px;height: 38px;margin-bottom: 10px;}
.section .contain .service li:nth-of-type(1) i{background-position: 4px 4px;}
.section .contain .service li:nth-of-type(2) i{background-position: 4px -38px;}
.section .contain .service li:nth-of-type(3) i{background-position: 3px -78px;}
.section .contain .service li:nth-of-type(4) i{background-position: 0px -124px;}
.section .contain .service li:nth-of-type(5) i{background-position: 2px -162px;}
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