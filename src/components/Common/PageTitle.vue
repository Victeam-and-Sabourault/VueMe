<template>
  <div class="pageTitle">
    <div class="icon">
      <img :src="titleImage"></img>
    </div>
    <h1 class="title"><slot></slot></h1>
  </div>
</template>

<script>
export default {
  props: ['titleImage']
}
</script>

<style scoped>
h1 {
  text-transform: uppercase;
}
.pageTitle {
  background-color: #465565;
  display: flex;
  align-items: center;
  height: 90px;
  overflow: hidden;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .2);
  cursor: pointer;
  transition: all .3s ease-in-out;
}

.title {
  color: #FFFFFF;
  margin: 0;
  padding: 0 10px;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
}

.icon {
  border-bottom: 90px solid #6FB485;
  border-right: 50px solid transparent;
  height: 0px;
  width: 100px;   
  -webkit-filter: drop-shadow(12px 10px 10px rgba(0, 0, 0, 0.4));
  filter: drop-shadow(12px 10px 10px rgba(0, 0, 0, 0.4));
  box-sizing: border-box;
}

img {
  width: 24px;
  position: relative;
  left: 20px;
  bottom: -30px;
}

</style>