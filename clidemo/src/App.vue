<template>
  <div id="app">
    <!-- <button @click="$router.push('/')">title</button>
   <button @click="$router.push('/Title2')">title2</button>
    <button @click="$router.push('/Title3')">title3</button>-->
    <!-- <Props
      name="Hello Vue！"
      :type="type"
      :isVisible="Visible"
      :on-change="handlePropChange"
      title="属性Demo"
      value="123"
      class="test1"
      :class="['test2']"
      :style="{ marginTop: '20px' }"
      style="margin-top: 10px"
    />-->
    <!--  :class="test1" -->
    <!--    <Title></Title> -->
    <!--  <Event :name="name" @change="handleEventChange"/> -->
    <SlotDemo>
      <p>default slot11111111</p>
      <template v-slot:title>
        <p>title slot1</p>
        <p>title slot2</p>
      </template>
      
      <template v-slot:item="props">
        <p>item slot-scope {{ props }}</p>
      </template>
    </SlotDemo>
  </div>
</template>

<script>
/* import Props from "@/components/props.vue"; */
/* import Title from '@/components/title.vue' */
/* import Event from "@/components/Event.vue"; */
import Slot from "@/components/Slot.vue";
export default {
  name: "app",
  components: {
  SlotDemo:Slot
    /*  Event */
    /* Props */
    /*  Title */
  },
  data() {
    return {
      name: "",
      type: "success",
      Visible: true
    };
  },
  methods: {
    /*  handlePropChange(val) {
      this.type = val;
    }, */
    handleEventChange(val) {
      this.name = val;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
