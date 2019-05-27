<template>
  <insert-form></insert-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InsertForm from '../components/InsertForm.vue'
@Component({
  components: {
    InsertForm
  },
})
export default class Home extends Vue {}
</script>
