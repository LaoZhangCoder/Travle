<template>
  <div>
   <el-row :gutter="20">
   <el-col :span="5" :offset="2"><img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" class="grid-content bg-purple"> </el-col>
  <el-col :span="6"><img src="http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png" class="grid-content bg-purple">
  </el-col>
    <el-col :span="5"><img src="http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png" class="grid-content bg-purple"> 
    </el-col>
    <el-col :span="6"><img src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png" class="grid-content bg-purple"> 
    </el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="5" :offset="2"><div class="grid-content bg-purple">景点门票</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple a"> 本地游玩</div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple a">自然风管</div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple a">一日游</div></el-col>
</el-row>
<el-row :gutter="20">
    <el-col :span="5" :offset="2"><img src="http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png" class="grid-content bg-purple"> </el-col>
  <el-col :span="6"><img src="http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png" class="grid-content bg-purple"> </el-col>
    <el-col :span="5"><img src="http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png" class="grid-content bg-purple"> </el-col>
    <el-col :span="6"><img src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" class="grid-content bg-purple"> </el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="5" :offset="2"><div class="grid-content bg-purple">本地游玩</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple a"> 本地游玩</div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple a">自然风管</div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple a">一日游</div></el-col>
</el-row>
<div style="height:13.6px; with:100%;"><i class="iconfont" style="margin-left:40%">&#xe601;</i></div>
  </div>
</template>

<script>

export default {
  name:'Homeinco',
  data(){
    return{
      inconimg:{
        '经典梦票':'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      }
    }
  }
  
 
}
</script>

<style scoped>
@font-face {
  font-family: 'iconfont';  
  src: url('//at.alicdn.com/t/font_855433_fuyzu7ouims.eot');
  src: url('//at.alicdn.com/t/font_855433_fuyzu7ouims.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_855433_fuyzu7ouims.woff') format('woff'),
  url('//at.alicdn.com/t/font_855433_fuyzu7ouims.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_855433_fuyzu7ouims.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    color:#bfbfbf;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.el-row {

     margin-bottom: 10px;
     &:last-child {
      margin-bottom: 0;}
   
  }
  .el-col {
    border-radius: 1px;

  }
  .bg-purple-dark {
    
  }
  .bg-purple {
   
  }

  .bg-purple-light {
   
  }
  .grid-content {
    border-radius: 4px;
   
    width:65px;

  }
  
</style>
