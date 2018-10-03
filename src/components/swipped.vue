 <template>
 	<div>
    <el-carousel :interval="2000" type="card" height="200px">
    <el-carousel-item v-for="item in swiptlist" :key="item.id" label="">
    		<img :src='item.imgUrl'>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  props:{
    swiptlist:Array
  },
  name: 'Homeswipped',

  
}
</script>

<style scoped>
 .el-carousel__item h3 {
 	
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
   
  }
  
  .el-carousel__item:nth-child(2n) {
   
  }
  
  .el-carousel__item:nth-child(2n+1) {
  
	
}
</style>
