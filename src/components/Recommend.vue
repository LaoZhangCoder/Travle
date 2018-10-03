<template>
  <div>
   <div class="hotshow">热销推荐</div>
  <div>
  	<ul>
  		<li v-for="item of hotshowall">
  			<img :src="item.imgUrl">
  			<div class="info">
           <p class="title">{{item.title}}</p>
           <p class="detile">{{item.desc}}</p>
           </div>
  		</li>
  		


  	</ul>

  </div>
  </div>
</template>

<script>

export default {
	name:'Homerecommend',
	props:{
		hotshowall:Array
	}
	
	
	
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hotshow{
	background:#eee;
	width:100%;
	height:46px;
	line-height:46px;

}
.title{
	color:#212121;
	margin:10px 10px;
}
.detile{
	color: #ccc;
	margin-left:10px;
}
li{
	display:flex;

}
.info{
	flex:1
}
li img {
	
	display:inline-block;
	width:100px;
	height:100px;
	margin:10px 10px;

}
p{

}

</style>
