<template>
  <ul>
    <li v-for='(elem, key) in elemInfo' :key='elem.key'><b>{{key}}:</b> {{elem}}</li>
  </ul>
</template>

<script>

export default {
  props: ['elemInfo'],
  mounted(){
    console.log(this.elemInfo);
  }
}
</script>

<style scoped>
  ul{
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 60%;
    background-color: white;
    border-radius: 1rem;
  }

  li {
    font-size: 1.35rem;
  }

@media (max-width:1499px){
  li {
    font-size: 1rem;
    text-align: center;
  }
}

@media (max-width:1170px){
  li {
    font-size: 0.8rem;
  }
}
</style>