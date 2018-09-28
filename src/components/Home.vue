<template>
  <div>
   <HomeHeader></HomeHeader>
   <Homeswipped></Homeswipped>
  
  </div>
</template>

<script>
import HomeHeader from './Header'
import Homeswipped from './swipped'
export default {
	name:'Home',
	components:{
   'HomeHeader':HomeHeader,
  'Homeswipped':Homeswipped

	}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
