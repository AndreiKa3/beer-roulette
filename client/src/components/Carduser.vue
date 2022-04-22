<template>
    <div class='containerUser'>
      <div class='userphoto'>
          <img :src="getUserAvatar" alt="avatar">
      </div>
      <div class='userinfo_recomendedbeer'>
        <div class='userinfo'>
          <h1>Общая информация</h1>
          <Cardinfo :elemInfo='getInfoUser' :isBeerCard='false'/>
        </div>
        <div class='recomendedbeer'>
          <h1>Рекомендуем</h1>
          <Cardinfo :elemInfo='getInfoBeerRecomended' :isBeerCard='true'/>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Cardinfo from './Cardinfo.vue'

export default {
  components: {
    Cardinfo
  },
  computed: mapGetters(['getInfoUser', 'getInfoBeerRecomended', 'getUserAge', 'getUserAvatar']),
}
</script>

<style scoped>

.containerUser{
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url('https://wallpaperbat.com/img/136843-country-road-at-sunset-ultra-hd-desktop-background-wallpaper.jpg');
  background-size: 100% auto;
  background-position: 100%;
  background-repeat: no-repeat;
  width: 89.375rem;
  height: 20rem;
  border-radius: 1.5rem;
  border: 0.1rem solid black;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.userphoto{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100%;
}

.userphoto img {
  transform: scale(-1, 1);
  width: 15rem;
  border-radius: 100%;
  background-color: white;
}

.userinfo_recomendedbeer{
  display: flex;
  justify-content: space-between;
  width: 67%;
  height: 100%;
}

.userinfo, .recomendedbeer{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
}

@media (max-width:1499px){
  .containerUser{
    flex-direction: column;
    width: 60rem;
    height: 22.5rem;
    background-size: cover;
    background-position: 50%;
  }

  .userphoto {
    height: 45%;
  }

  .userphoto img {
    width: 7.5rem;
  }

  .userinfo_recomendedbeer{
    width: 95%
  }
}

@media (max-width:1170px){
  .containerUser{
    flex-direction: column;
    width: 15rem;
    height: 25rem;
    background-size: cover;
    background-position: 50%;
  }

  .userphoto{
    height: 30%;
  }

  .userphoto img {
    width: 5rem;
  }

  .userinfo_recomendedbeer{
    flex-direction: column;
    align-items: center;
    width: 95%;
  }

  .userinfo, .recomendedbeer{
    width: 95%;
    height: 100%;
  }
}

@media (max-width:1170px) and (max-height: 600px){
  .containerUser{
    margin-right: 3rem;
    margin-bottom: 0px;
    flex-direction: row;
    width: 25rem;
    height: 15rem
  }

  .userphoto{
    width: 50%;
  }

  .userphoto img {
    width: 7.5rem;
  }

  .userinfo_recomendedbeer{
    flex-direction: row;
  }

  .recomendedbeer h1{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}

</style>