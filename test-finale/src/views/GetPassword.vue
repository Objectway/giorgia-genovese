<template>
  <div class="Home">
    <header-component></header-component>
    <get-password-component></get-password-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginComponent from '@/components/LoginComponent.vue'; 
import GetPasswordComponent from '../components/GetPasswordComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue'

@Component({
  components: {
    LoginComponent,
    GetPasswordComponent,
    HeaderComponent
  },
})
export default class GetPassword extends Vue {}
</script>

<style scoped lang="scss">
$color_conectus:#005dad;
$color_grey: #ecebebcc;
$gutter: 8px;
.Home{
    background-color: $color_grey;
    width: 100%;
    height: 100%;
    text-decoration:none;
    margin-bottom: $gutter;
    display:flex;
    flex-direction:column;
      a:-webkit-any-link {
      color: white;
      cursor: pointer;
      text-decoration: none;
      }
} 
</style>
