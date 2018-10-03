<template>
  <div>
  <div class="hotshow">周末去哪儿</div>
  <div>
    <ul>
      <li v-for="item of weekdaylistall"><img :src="item.imgUrl" />
         <p class="title">{{item.title}}</p>
           <p class="detile">{{item.desc}}</p>
      </li>
        
     
    </ul>
  </div>
  </div>
</template>

<script>

export default {
	name:'HomeWeekday',
  props:{
    weekdaylistall:Array
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
  padding:1px 18px;

}
img{
  height:170px;
  width:100%;
}
.title{
 margin:10px 10px;
}
.detile{

      color: #616161;
      font-size:12px;
      margin-left:10px;
      margin-bottom:10px
     
}
</style>
