<template>
	<div class='container' v-if="!getAllInfo.userInfo || !getAllInfo.beerInfo.recomended || !getAllInfo.beerInfo.random">
		<Loader />
	</div>
  <div class='container' v-else>
		<div class='carduser'>
			<Carduser />
		</div>
		<div class="cardbeer">
			<Cardbeer />
		</div>
  </div>
</template>

<script>
import {mapGetters, mapActions } from 'vuex'
import Carduser from './components/Carduser.vue';
import Cardbeer from './components/Cardbeer.vue';
import Loader from './components/Loader.vue';

export default {
  name: 'App',
  components: {
		Loader,
    Carduser,
		Cardbeer,
  },
	computed: mapGetters(['getAllInfo']),
	methods: mapActions(['axiosInfoUser', 'axiosInfoBeerRecomended', 'axiosInfoBeerRandom']),
	created(){
		this.axiosInfoUser()
		this.axiosInfoBeerRecomended()
		this.axiosInfoBeerRandom()
	}
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
	border: 0;
}
*,*:before,*:after{
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}

nav,footer,header,aside{display: block;}

html,body{
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1;
	font-size: 14px;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}
input,button,textarea{font-family:inherit;}

input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}

/* h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;} */

body {
	background-image: url('https://lookw.ru/1/209/1380317716-pivo--50.jpg');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center;
}

body > div {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
}

.container{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

.carduser, .cardbeer{
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

h1 {
	color: black;
	background-color: white;
	border-radius: 1rem;
	padding: 0.15rem
}

@media (max-width:1499px) {
	body {
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: bottom;
	}

	.container{
		justify-content: space-between;
	}

	h1 {
		border-radius: 0.7rem;
		padding: 0.3rem
	}
}

@media (max-width:1170px){
	h1 {
		text-align: center;
		font-size: 1rem;
	}
}

@media (max-width:1170px) and (max-height: 600px){
	.container{
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
}

</style>
