<template>
  <div class="bdc">
    <Header msg="BDC Report"/>
    <button v-on:click="rend">REND</button>
    <ul>
      <li v-for="(bdc, key) in bdcs" v-bind:key="key" class="bdcs">
        {{bdc.name}}
        <ul>
          <li v-for="(job, key) in bdc.list" v-bind:key="key">
            <p>{{job.name}}</p>
            <a v-bind:href="job.url">{{job.url}}</a>
          </li>
        </ul>
      </li>
    </ul>
    {{message}}
    {{bdcs}}
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BDC_CXPS from '@/definitions/BDC_CXPS.js'
import axios from 'axios'

export default {
  name: 'Bdc',
  components: {
    Header
  },
  data: function() {
    return  {
      message: 'Empty',
      definitions: BDC_CXPS,
      bdcs: []
    }
  },
  created: function() {
    var objectList = this.mapPropertyList(this.definitions);
    console.log(objectList)
    this.bdcs = this.mapPropertyList(this.definitions);
    /*
    axios({
      method: 'post',
      url: 'http://localhost:8081/get',
      data: {
        url: url + 'api/json/'
      }
    }).then(job => console.log(job)).catch(e => callback(e))

    */
    // console.log('On create')
    // this.message = 'World!'
    // axios.get('symbols.json').then(response => this.symbols = response.data);
  },
  methods: {
    rend: function() {
      this.message = 'Two'
      console.log('Calling Method!')
    },
    mapPropertyList: function(list) {
      return Object.keys(list).map(x => {
        return {
          name:x,
          list:Object.keys(list[x]).map(y => {
            return {
              name:y,
              url:list[x][y]
            }
          })
        }
      })
    }
  },
  beforeMount() {
    console.log('Before mount')
  }
}
</script>

<style>

ul, li {
  list-style-type: none;
  margin:0;
  padding:0;
}

.bdcs {
  border:2px solid #333;
  padding:20px;
}

</style>