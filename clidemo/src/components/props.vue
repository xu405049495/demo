<template>
<div>
  name: {{ name }}
    <br />
    type: {{ type }}
    <br />
    list: {{ list }}
    <br />
    isVisible: {{ isVisible }}
    <br />
    <button @click="handleClick">change type</button>



</div>


</template>


<script>
export default {
  name: "PropsDemo",
 /*  inheritAttrs: false, */
  props: {
    name: String,
    type: {
      validator(value) {
        return ["success", "warning", "danger"].includes(value);
      }
    },
    list:{
      type:Array,
      default:()=>[]
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  methods:{
    handleClick() {
      // 不要这么做、不要这么做、不要这么做
      // this.type = "warning";

      // 可以，还可以更好
      this.onChange(this.type === "success" ? "warning" : "success");
    }
  }
};
</script>


