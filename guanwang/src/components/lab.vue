<template>
	<div>
		<div class="section bg-white">
			<div class="contain wow fadeIn">
				<div class="title">{{wisdomData.title}}</div>
				<div class="wisdom">
					<div class="contain" :class="{active:item.isActive,'wisdomHeight':item.num>4}" v-for="(item,index) in wisdomData.list" v-on:mouseover="changeActive(index)">
						<div class="top"><i :class="'icon'+(item.num)"></i><p>{{item.top}}</p></div>
						<div class="bottom" style="height: 212px;">
							<ul>
								<li v-for="list in item.bottom"><i></i>{{list}}</li>
							</ul>
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
			
 		}
 	},
 	props:{//父组件传在子组件时候，命名一个子组件用来获取数据的lianxiDataChild
		wisdomData:Object
	},//页面加载之后查看数据
	created:function(){
		console.log(this.wisdomData);
		},
	methods:{
		changeActive:function(index){  
            for(var i = 0; i < 4; i++) { 
        		this.wisdomData.list[i].isActive = false;  
        	} 
            this.wisdomData.list[index].isActive = true;
        }
	}
	})
</script>
<style>
.section .wisdom {text-align: center;}
.section .wisdom .contain {display: inline-block;width: 280px;height: 396px;margin: 0 8px;padding: 0 4px;background: -webkit-linear-gradient(#2e3d50, #191a27); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#2e3d50, #191a27); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#2e3d50, #191a27); /* Firefox 3.6 - 15 */
  background: linear-gradient(#2e3d50, #191a27);box-sizing: border-box;vertical-align: top;}
.section .wisdom .contain .top {height: 120px;border-bottom: 1px solid #009eff;}
.section .wisdom .contain .top i {display: inline-block;width: 49px;height: 57px;background: url(../assets/icon8.png) no-repeat;margin-top: 20px;}
.section .wisdom .active .top i {display: inline-block;width: 49px;height: 57px;background: url(../assets/icon8.png) no-repeat;margin-top: 20px;background-position-x:right; }
.section .wisdom .contain .top .icon1 {background-position-y: 0}
.section .wisdom .contain .top .icon2 {background-position-y: -60px;}
.section .wisdom .contain .top .icon3 {background-position-y: -120px;}
.section .wisdom .contain .top .icon4 {background-position-y: -180px;}
.section .wisdom .contain .top .icon5 {background-position-y: -240px;}
.section .wisdom .contain .top .icon6 {background-position-y: -300px;}
.section .wisdom .contain .top .icon7 {background-position-y: -360px;}
.section .wisdom .contain .top .icon8 {background-position-y: -420px;}
.section .wisdom .contain .top p {font-size: 18px;color: #fff;}
.section .wisdom .contain .bottom {height: 272px; color: #fff;font-size: 14px;padding: 28px;box-sizing: border-box;}
.section .wisdom .contain .bottom ul {margin-left: 40px;}
.section .wisdom .contain .bottom li {line-height: 30px;text-align: left;}
.section .wisdom .contain .bottom li i {display: inline-block;width: 6px;height: 6px;border-radius: 6px;background: #fff;vertical-align: middle;margin-right: 10px;}
.section .try {display: inline-block; width:630px;height: 530px; margin-right: 20px;background: #fff;}
.section .try h3 {text-align: center;height: 50px;line-height: 50px;font-size: 18px;color: #fff;background:#0b9efe;font-weight: 100; }
.section .try .form {height: 479px;overflow-y: scroll;}
.section .wisdom .active {background: #00aaee;transition: all .5s}
.section .wisdom .active .top {border-bottom: 1px solid #4ac0f0;}
.wisdomHeight {height: 333px!important;}
</style>