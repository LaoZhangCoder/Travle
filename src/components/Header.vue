 <template>
   <div class="header">
   <div class="left"><span class="iconfont">&#xe632;</span></div>
   <div class="seach"><span class="iconfont icon" >&#xe662;</span>请输入城市/看点/游玩主题</div>
   <div class="left">城市<span class="iconfont">&#xe600;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style>
.header{
	line-height:50px;
	display:flex;
	background-color: #00bcd4;
	
	font-weight:normal;
	font-style:none;
	color:white ;

}

.left{
	line-height:50px;
	padding:0 5px;


}
.icon{

}
.seach{
	background-color:white;
	height:37px;
	line-height:37px;
	flex-grow:1;
	margin:8px 8px;
	border-radius:10px;
	color: #ccc;
	


}

</style>
