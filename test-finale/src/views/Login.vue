<template>
  <div class="Home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <login-component></login-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginComponent from '@/components/LoginComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    LoginComponent,
  },
})
export default class Login extends Vue {
  // public infoLista{
  //   username: string='',
  //   password: string=''
  // } ;
  
}
</script>
