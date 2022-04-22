<template>
  <div>
    <div class="containerBeer">
      <h1>Пивная рулетка</h1>
      <Cardinfo :elemInfo='getInfoBeerRandom' :isBeerCard='true'/>
      <button class="closing-button" v-on:click="changeBeer">Хочу другое</button>
    </div>
  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Cardinfo from './Cardinfo.vue'

export default {
  components: {
    Cardinfo
  },
  computed: mapGetters(['getInfoBeerRandom', 'getInfoUserAge']),
  methods: {
    ...mapActions(['axiosInfoBeerRandom']),
    changeBeer(){
      this.axiosInfoBeerRandom()
    }
  },
}
</script>

<style scoped>
  .containerBeer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-image: url('@/assets/1620698639_8-phonoteka_org-p-razlivnoe-pivo-fon-8.jpg');
    background-size: 40rem 22.5rem;
    width: 30rem;
    height: 22.5rem;
    border-radius: 1.5rem;
    border: 0.1rem solid black;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .closing-button {
    border-radius: 0.5rem;
    text-decoration: none;
    display: inline-block;
    margin: 10px;
    color: black;
    box-shadow: 0 0 0 2px grey;
    padding: 20px 0;
    width: 80%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    position: relative;
    overflow: hidden;
  }
  .closing-button span {
    font-family: 'Montserrat', sans-serif;
    position: relative;
    z-index: 5;
  }
  .closing-button:before, .closing-button:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .closing-button:hover:before, .closing-button:hover:after {
    transform: translateX(0);
  }

@media (max-width:1499px){
  .containerBeer{
    height: 17.5rem;
    background-size: 40rem 17.5rem;
  }
}

@media (max-width:1170px){
  .containerBeer{
    width: 15rem;
    height: 15rem
  }

  .closing-button {
    width: 80%;
    padding: 10px
  }
}

</style>