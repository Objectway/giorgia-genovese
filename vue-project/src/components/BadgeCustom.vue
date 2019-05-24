<template>
    <div>
      {{badgeCustom}}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BadgeCustom extends Vue {
   public badgeCustom:string=Math.random().toString(36).substring(7);
}
</script>

<style scoped lang="scss">
</style>
