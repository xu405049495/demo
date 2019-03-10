<template>
  <div>
    <div class="mb">
      <div class="list" v-for="item in items" :key="index">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{item.title}}</h5>
          <small>{{moment(item.created_at)}}</small>
        </div>
        <p class="mb-1">{{item.content}}</p>
        <footer class="text-right">
          <small>赞{{item.like_count}}</small>
          <small>回复{{item.comment_count}}</small>
          <a href>我要回复</a>
        </footer>
      </div>
    </div>
    <ul class="pagination mb">
      <li class="page-item disabled">
        <span class="page-link" :class="{disabled:page==1}" @click="getdata(page-1)">&lt;</span>
      </li>
      <li
        class="page-item"
        v-for="(item, index) in pages"
        :class="{'active':item==page}"
        :key="index"
        @click="getdata(item)"
      >
        <span class="page-link" href="#">{{item}}</span>
      </li>

      <li class="page-item">
        <span class="page-link" :class="{disabled:page==pages}" href="#" @click="getdata(page+1)">&gt;</span>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import bus from "../assets/eventBus";

export default {
  data() {
    return {
      page: 1, //当前页
      prepage: 2, //每页显示多少条
      pages: 1, //总页数
      count: 0,
      items: []
      // pagecount: 1
    };
  },
  methods: {
    moment: function(date) {
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    getdata(p) {
      console.log(p);
      if(p==this.page) return;
      this.page = p || this.page;
      // 控制this.page 在 1- this.pages 之间 
      this.page=Math.max(1,this.page);
      this.page=Math.min(this.pages,this.page);

      axios({
        method: "get",
        url: "http://localhost:8088/",
        params:{
          page:this.page
        }
      }).then(rs => {
        if (rs.data.code === 0) {
          this.count = rs.data.count;
          this.items = rs.data.data;
          //this.addTodo(rs.data.count);
          this.pages = Math.ceil(rs.data.count / this.prepage);
        }
      });
    }
  },
  created() {
    this.getdata();
  }
};
</script>
<style>
</style>

