import axios from 'axios';
import getAge from '../../functions/getAgeFunction';

export default {
  actions: {
    async axiosInfoUser(ctx){
      await axios.get('https://random-data-api.com/api/users/random_user')
        .then(randomUserInfo => {
          axios.get(randomUserInfo.data.avatar)
            .then(() => {
              ctx.commit('updateUserInfo', randomUserInfo.data);
              ctx.commit('updateUserInfoAge', getAge(this.state.info.userInfo.date_of_birth))
            }).catch(error => {
              this._actions.axiosInfoUser[0]();
              throw new Error('Ошибка загрузки аватарки')
            })
        })
    },
    async axiosInfoBeerRecomended(ctx){
      await axios.get('https://random-data-api.com/api/beer/random_beer')
        .then(randomBeerInfo => {
          ctx.commit('updateBeerRecomendedInfo', randomBeerInfo.data)
      })
    },
    async axiosInfoBeerRandom(ctx){
      await axios.get('https://random-data-api.com/api/beer/random_beer')
        .then(randomBeerInfo => {
          ctx.commit('updateBeerRandomInfo', randomBeerInfo.data)
      })
    }
  },
  mutations: {
    resetToZeroUserInfo(state){
      state.userInfo = null
    },
    updateUserInfo(state, userInfo){
      state.userInfo = userInfo
    },
    updateUserInfoAge(state, age){
      state.userInfo.age = age
    },
    updateBeerRecomendedInfo(state, beerRecomendedInfo){
      state.beerInfo.recomended = beerRecomendedInfo
    },
    updateBeerRandomInfo(state, beerRandomInfo){
      state.beerInfo.random = beerRandomInfo
    }
  },
  state: {
    userInfo: null,
    beerInfo: {
      recomended: null,
      random: null
    }
  },
  getters: {
    getAllInfo(state){
      return state
    },
    getInfoUser(state){
      const userInfo = {
        Имя: state.userInfo.first_name,
        Фамилия: state.userInfo.last_name,
        Возраст: state.userInfo.age,
        Должность: state.userInfo.employment.title,
        Ник: state.userInfo.username
      }
      return userInfo
    },
    getUserAge(state){
      return state.userInfo.age
    },
    getUserAvatar(state){
      return state.userInfo.avatar
    },
    getInfoBeerRecomended(state){
      const recomendedBeerInfo = {
        Бренд: state.beerInfo.recomended.brand,
        Название: state.beerInfo.recomended.name,
        Стиль: state.beerInfo.recomended.style,
        Хмель: state.beerInfo.recomended.hop,
        Алкоголь: state.beerInfo.recomended.alcohol
      }
      return recomendedBeerInfo
    },
    getInfoBeerRandom(state){
      const randomBeerInfo = {
        Бренд: state.beerInfo.random.brand,
        Название: state.beerInfo.random.name,
        Стиль: state.beerInfo.random.style,
        Хмель: state.beerInfo.random.hop,
        Алкоголь: state.beerInfo.random.alcohol
      }
      return randomBeerInfo
    }
  },
}