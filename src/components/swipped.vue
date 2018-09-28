 <template>
 	<div>
    <el-carousel :interval="2000" type="card" height="200px">
    <el-carousel-item v-for="item in list" :key="item" label="">
    		<img :src='item'>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  name: 'Homeswipped',
  data(){
  	return {
list:['http://img1.qunarzz.com/piao/fusion/1708/99/5e16abe93aabea02.jpg_750x200_9da79046.jpg','http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg','http://img1.qunarzz.com/piao/fusion/1809/86/deb33800de224c02.jpg_750x200_74fb795e.jpg','http://img1.qunarzz.com/piao/fusion/1809/e4/f1766bbfe0b79802.jpg_750x200_0159cea3.jpg']
  	}
  }
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
