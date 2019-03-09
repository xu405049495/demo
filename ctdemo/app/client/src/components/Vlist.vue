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
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import bus from "../assets/eventBus";

export default {
  data() {
    return {
      count: 0,
      items: []
      // pagecount: 1
    };
  },
  methods: {
    moment: function(date) {
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    addTodo(count) {
      bus.$emit("add-todo", { text: count });
    },
    getdata(p) {
      console.log(p);
      axios({
        method: "get",
        url: "http://localhost:8088/"
      }).then(rs => {
        if (rs.data.code === 0) {
          this.count = rs.data.count;
          this.items = rs.data.data;
          this.addTodo(rs.data.count);
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

