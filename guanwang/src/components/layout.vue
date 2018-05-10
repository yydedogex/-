<template>
	<div>
		<div class="app-header">
			<div class="contain">
			<a class="logo"></a>
			<div class="nav">
				<ul>
					<li v-for='(item,index) in nameList.list'><router-link :to="{path: item.path}">{{item.name}}</router-link></li>
				</ul>
			</div>
		</div>
		</div>
		<div class="app-content">
			<router-view></router-view>
		</div>
		<div class="app-footer">
			<div class="app-footer-contain">
			<ul>
				<li v-for='(item,index) in nameList.list'><router-link v-bind:class="{ active: item.isActive }" :to="{path: item.path}">{{item.name}}</router-link></li>
			</ul>
			</div>
			<div class="app-footer-contain">©2018 深圳就位网科技有限公司 ALL Rights Reserved 中国·深圳 粤ICP备15072351号-1</div>
		</div>
	</div>
</template>
<script>
	export default ({
		data () {
			return {
				nameList:{
					list:[
    				{
    					name:'首页',
    					path:'/index'
    				},
    				{
    					name:'园区智囊',
    					path:'/park'
    				},
    				{
    					name:'产业智囊',
    					path:'/industry'
    				},
    				{
    					name:'关于我们',
    					path:'/about'
    				}
    			]
				}

			}
		}
		// methods:{ addClass:function(index){ 
		// 	this.current=index; 
		// }
	// }
})

</script>
<style>
@charset "utf-8";
/*1 重定义浏览器默认样式
	Name:			style_reset
	Level:			Global
	Explain:		重定义浏览器默认样式
	Last Modify:	jackying
*/
*{word-wrap:break-word}
html,body,h1,h2,h3,h4,h5,h6,hr,p,iframe,dl,dt,dd,ul,ol,li,pre,form,button,input,textarea,th,td,fieldset{margin:0;padding:0}
ul,ol,dl{list-style-type:none}
html,body{*position:static;color: #333;}
html{font-family: sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:400}
input,button,textarea,select,optgroup,option{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit}
input,button{overflow: visible;vertical-align:middle;outline:none}
body,th,td,button,input,select,textarea{font-family:"Microsoft Yahei","Hiragino Sans GB","Helvetica Neue",Helvetica,tahoma,arial,Verdana,sans-serif,"WenQuanYi Micro Hei","\5B8B\4F53";font-size:14px;
-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing:grayscale}
body{line-height:1.6;}
h1,h2,h3,h4,h5,h6{font-size:100%}
a,area{outline:none;blr:expression(this.onFocus=this.blur())}
a{cursor: pointer;text-decoration: none;}
a:hover{text-decoration:none;outline:none}
a.ie6:hover{zoom:1}
a:focus{outline:none}
a:hover,a:active{outline:none}:focus{outline:none}
sub,sup{vertical-align:baseline}
button,input[type="button"], input[type="submit"] {line-height:normal !important;}
/*img*/
img{border:0;vertical-align:middle}
a img,img{-ms-interpolation-mode:bicubic}
.img-responsive{max-width: 100%;height: auto}

/*IE下a:hover 背景闪烁*/
*html{overflow:-moz-scrollbars-vertical;zoom:expression(function(ele){ele.style.zoom = "1";document.execCommand("BackgroundImageCache",false,true)}(this))}

/*HTML5 reset*/
header,footer,section,aside,details,menu,article,section,nav,address,hgroup,figure,figcaption,legend{display:block;margin:0;padding:0}time{display:inline}
audio,canvas,video{display:inline-block;*display:inline;*zoom:1}
audio:not([controls]){display:none}
legend{width:100%;margin-bottom:20px;font-size:21px;line-height:40px;border:0;border-bottom:1px solid #e5e5e5}
legend small{font-size:15px;color:#999}
svg:not(:root) {overflow: hidden}
fieldset {border-width:0;padding: 0.35em 0.625em 0.75em;margin: 0 2px;border: 1px solid #c0c0c0}
input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button {height: auto}
input[type="search"] {-webkit-appearance: textfield; /* 1 */-moz-box-sizing: content-box;-webkit-box-sizing: content-box; /* 2 */box-sizing: content-box}
input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration {-webkit-appearance: none}
.left {float: left;}
.right {float: right;}
.center {text-align: center;}
.blue {color: #00aaee;}
.clearfix:after {content: " ";display: block;clear: both;height: 0;}
/*首页*/
.app-header {background: #2a3139;height: 65px;min-width: 1200px;}
.app-header .contain {width: 1200px; margin: 0 auto;overflow:hidden;}
.app-header .contain .logo {background: url(../assets/logo.png) no-repeat center;display: block;float: left;width: 238px;height: 65px;}
.app-header .contain .nav {float: right;margin-right: 126px;font-size: 0;}
.app-header .contain .nav li {display: inline-block;}
.app-header .contain .nav li a {display: inline-block;width: 100px;height: 65px;line-height: 65px;color: #fff;text-align: center;font-size: 14px;}
.app-header .contain .nav li .active {background: #2277da;}
.app-footer {text-align: center;background: #2a3139;color: #abadaf;padding: 43px 0px;min-width: 1200px;}
.app-footer .app-footer-contain {text-align: center;box-sizing: border-box;}
.app-footer li {display: inline-block;border-right: 1px solid #abadaf;margin: 6px 0;}
.app-footer li:last-child {border-right: 0;}
.app-footer li a {display: block;height: 18px;line-height: 18px;padding: 0px 20px;color: #abadaf;}
.app-footer li a:visited {color: #abadaf;}
</style>