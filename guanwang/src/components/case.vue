<template>
	<div>
		<div class="section bg-black" style="background: #4d5762">
			<div class="contain clearfix">
				<div class="title">经典案例
				</div>
				<ul class="tab-nav"> 
				<li class="tab-card" v-for="(item,index) in tabList" @click="tabsSwitch(index)" :class="{current:item.isCurrent}">{{item.tab}}</li>
				</ul>
				<div class="tab-content">
					<div v-bind:class="{current:item.isCurrent}" v-for="(item,index) in lianxiDataChild.list">
						<div class="neirong">
							<h4 class="">案例介绍</h4>
							<p v-html="item.p1"></p>
							<p v-html="item.p2"></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default ({
 	data(){
 		return {
 			zichuanfuData:'子传父',
 			ceshis:"哈哈哈",
 			tabList:[
	 			{
	 				tab:'案例1',
	 				isCurrent: true
	 			},
	 			{
	 				tab:'案例2',
	 				isCurrent: false
	 			},
	 			{
	 				tab:'案例3',
	 				isCurrent: false
	 			},
	 			{
	 				tab:'案例4',
	 				isCurrent: false
	 			},
 			]
 		}
	},
	//父组件传子组件数据时候用props，
	props:{
		//父组件传在子组件时候，命名一个子组件用来获取数据的lianxiDataChild
		lianxiDataChild:Object
	},
	//页面加载之后查看数据
	// created:function(){
	// 	console.log(this.lianxiDataChild);
	// },
	methods:{
		//定义个方法，当div被点击时候执行方法
		childToParentCsae:function(){
			//child-to-parent子组件自定义事件（一定要用连字符，不能使用驼峰），this.$emit用于父组件调用数据
			this.$emit("child-to-parent",this.ceshis);
		},
		//选项卡实现
		tabsSwitch: function(tabIndex) {  

            var tabCardCollection = document.querySelectorAll(".tab-card"),  
                len = tabCardCollection.length; 

            for(var i = 0; i < len; i++) { 
            	this.lianxiDataChild.list[i].isCurrent = false; 
                this.tabList[i].isCurrent = false;  
            }  
            this.lianxiDataChild.list[tabIndex].isCurrent = true; 
            this.tabList[tabIndex].isCurrent = true;
        }  
	}
})

</script>
<style>
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
.section .tab-nav {float: left;width: 280px;}
.section .tab-nav li {
    color: #fff;
    width: 280px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    text-align: center;
    position: relative;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
}
.section .tab-nav li:nth-child(1) {background: #445c7c;}
.section .tab-nav li:nth-child(2) {background: #354760;}
.section .tab-nav li:nth-child(3) {background: #2d3b4d;}
.section .tab-nav li:nth-child(4) {background: #1e2331;}

.section .tab-nav li p {margin: 0;line-height: 60px;}


.section .tab-nav li:hover {
    background-image: -webkit-linear-gradient(left, rgba(1, 194, 230, 0.4) 0%, rgba(17, 96, 255, 0.4) 100%);
    background-image: -moz-linear-gradient(left, rgba(1, 194, 230, 0.4) 0%, rgba(17, 96, 255, 0.4) 100%);
    background-image: -moz-linear-gradient(to right, rgba(1, 194, 230, 0.4) 0%, rgba(17, 96, 255, 0.4) 100%);
    background-image: -o-linear-gradient(to right, rgba(1, 194, 230, 0.4) 0%, rgba(17, 96, 255, 0.4) 100%);
    background-image: linear-gradient(to right, rgba(1, 194, 230, 0.4) 0%, rgba(17, 96, 255, 0.4) 100%);
    background-repeat: repeat;
}
.section .tab-nav li.current {
    opacity: 1;
    height: 100px;
    line-height: 100px;
    background-image: -webkit-linear-gradient(left, #01c2e6 0%, #1160ff 100%);
    background-image: -moz-linear-gradient(left, #01c2e6 0%, #1160ff 100%);
    background-image: -moz-linear-gradient(to right, #01c2e6 0%, #1160ff 100%);
    background-image: -o-linear-gradient(to right, #01c2e6 0%, #1160ff 100%);
    background-image: linear-gradient(to right, #01c2e6 0%, #1160ff 100%);
    background-repeat: repeat;
}

.section .tab-content {float: right;
    width: 840px;
    height: 200px;
    background: #fff;
    padding: 40px;
    overflow: hidden;
    position: relative;}
.section .tab-content>div {
    width: 840px;
    opacity: 0;
    z-index: 0;
    -webkit-transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -ms-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    transition: opacity 0.5s;
    position: absolute;
}
.section .tab-content>div.current {
    z-index: 1;
    opacity: 1;
}
.section .tab-content .neirong h4 {color: #31363c;margin-bottom: 10px;}
.section .tab-content .neirong p {color: #8c93a0;padding: 6px 11px;}

.section .tab-content h4:before {
    content: " ";
    display: inline-block;
    width: 3px;
    height: 16px;
    background: #108cee;
    margin-bottom: -2px;
    margin-right: 8px;
}
</style>