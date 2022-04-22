<template>
  <ul v-if='isBeerCard && getUserAge < 21'>
    <h1>Пиво возраст не позволяет, а вот чай - да, можно покрепче)</h1>
  </ul>
  <ul v-else>
    <li v-for='(elem, key) in elemInfo' :key='elem.key'><b>{{key}}:</b> {{elem}}</li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  props: ['elemInfo', 'isBeerCard'],
  mounted(){
    console.log(this.elemInfo);
  },
  computed: mapGetters(['getUserAge']),
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
    height: 57.5%;
    background-color: white;
    border-radius: 1rem;
  }

  li {
    font-size: 1.35rem;
    text-align: center;
  }

@media (max-width:1499px){
  li {
    font-size: 1rem;
  }
}

@media (max-width:1170px){
  li {
    font-size: 0.8rem;
  }
}
</style>