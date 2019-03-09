<template>
  <div>
    <ul class="pagination mb">
      <li class="page-item disabled">
        <span class="page-link">&lt;</span>
      </li>
      <li class="page-item" 
      v-for="(item, index) in pages" 
      :class="{'active':item==page}" 
      :key="index" @click="getdata(item)">
        <span class="page-link" href="#">{{item}}</span>
      </li>
      
      <li class="page-item">
        <span class="page-link" href="#">&gt;</span>
      </li>
    </ul>
  </div>
</template>
<script>
import bus from '../assets/eventBus'
export default {
  data () {
    return {
      page:1, //当前页
      prepage:2, //每页显示多少条
      pages:0   //总页数
    }
  },
 mounted() {
     bus.$on("add-todo",(aa)=>{
         //console.log(aa);
         this.pages=Math.ceil(aa.text/this.prepage);
     })
 },
};
</script>
<style>
</style>
