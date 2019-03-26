<template>
   <div>
   
    <slot name="title" />
    <slot name="item" v-bind="{ value: 'vue' }" />
     <slot />
  </div>
</template>

<script>
export default {
   name:'SlotDemo'
}
</script>

<style>

</style>
