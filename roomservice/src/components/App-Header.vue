<template>
  <div class="menu">
  <a href="" v-for="menu in menus" :key="menu">{{menu}}</a>
    </div>
</template>

<script>
export default {
    props:["menus"]
}
</script>

<style>

</style>