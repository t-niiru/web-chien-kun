<template>
  <div class="get-json">
    現在遅延している電車
    <ul>
      <li v-for="(data, index) in datas" :key="index">
        {{ data.name }}/{{data.company}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

const ENDPOINT = 'https://tetsudo.rti-giken.jp/free/delay.json'

export default {
  data () {
    return {
      datas: null
    }
  },
  mounted () {
    axios({
      method: 'GET',
      url: ENDPOINT,
      data: {}
    })
      .then(res => {
        (this.datas = res.data)
      })
      .catch(err => {
        console.log('err')
        console.log('err.config', err.config)
      })
  }
}
</script>

<style>

</style>
