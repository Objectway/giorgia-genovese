<template>
  <div class="profile">
    <h1>This is a profile page</h1>
    <profile-component></profile-component>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import ProfileComponent from '../components/ProfileComponent.vue'

@Component({
  components: {
    ProfileComponent
  },
})
export default class Profile extends Vue {}
</script>




