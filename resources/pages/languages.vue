<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Meet The Coders
      </h1>
      <h2 class="subtitle">
        Languages page
      </h2>
      <!-- <div class="links">
        <a
          href="#"
          target="_self"
          class="button--green"
        >
          Find Coders
        </a>
        <a
          href="#"
          target="_self"
          class="button--grey"
        >
          Find Coders by languages
        </a>
      </div> -->

      <h1 class="coder-list">
        All languages
      </h1>

      <div class="container is-fluid">
        <div class="columns is-multiline">
          <div v-for="(language, index) in languages" :key="language.id+'_'+index" class="column is-one-quarter">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="language.picture" :alt="language.title">
                </figure>
              </div>
              <div class="card-content has-background-light">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img :src="language.logo" :alt="language.title">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">
                      <a :href="language.link" target="_blank">{{ language.title }}</a>
                    </p>
                  </div>
                </div>

                <div class="content">
                  <div class="tags has-addons">
                    <span class="tag has-background-info has-text-white">Used by</span>
                    <span class="tag is-primary">{{ randomNumber() }}</span>
                    <span class="tag is-dark">coders</span>
                  </div>
                  {{ language.description | textTruncate }}
                  <br>
                  <small class="has-text-primary has-background-white-ter">Updated at {{ language.updated_at }}</small><br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'
export default {
  layout: 'main',
  components: {
    Logo
  },
  filters: {
    textTruncate (str, length, ending) {
      if (length == null) {
        length = 75
      }
      if (ending == null) {
        ending = '...'
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending
      } else {
        return str
      }
    }
  },
  async asyncData ({ req }) {
    const ApiURL = process.env.apiUrl
    const { data } = await axios.get(ApiURL + '/languages')
    //  console.log(data)
    return {
      languages: data
    }
  },
  methods: {
    randomNumber () {
      return Math.floor(Math.random() * (100)) + 1
    }
  }
}
</script>

<style>

.blank {
  width: 100px;
  height: 100px;
  border: 1px solid lightgray;
  border-radius: 5px;
}

.coder-list {
  margin-top: 1em;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  margin-bottom: 1em;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 48px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
