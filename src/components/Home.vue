<template>
  <div>
   <HomeHeader></HomeHeader>
   <Homeswipped :swiptlist="swipt"></Homeswipped>
   <Homeinco></Homeinco>
   <recommend :hotshowall="hotshow"></recommend>
   <weekday :weekdaylistall="weekdaylist"></weekday>
  
  </div>
</template>

<script>
import HomeHeader from './Header'
import Homeswipped from './swipped'
import Homeinco from './Homeinco'
import recommend from './Recommend'
import weekday from './Weekday'
import axios from 'axios'
export default {
	name:'Home',
  data () {
    return {
      swipt:'',
      hotshow:'',
      weekdaylist:''
    }
  },

	components:{
   'HomeHeader':HomeHeader,
  'Homeswipped':Homeswipped,
  'Homeinco':Homeinco,
  'recommend':recommend,
  'weekday':weekday

	},
  methods:{
getHomeInfo:function(){
  axios.get('./static/index.json').then(this.getsuccjson)
},
  
  getsuccjson:function(res){
res=res.data
if(res.ret&&res.data){

  const data=res.data
this.swipt=data.swiperList
this.hotshow=data.recommendList
this.weekdaylist=data.weekendList


}
  }
},

  mounted(){
    this.getHomeInfo();
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
