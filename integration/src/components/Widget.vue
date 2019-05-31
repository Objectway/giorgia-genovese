<template>
  <div>
    <button @click="addToCount"> + </button>
    <p>{{count}}</p>
    <button @click="minToCount"> - </button>
  </div>
</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator';
import {WidgetStateMixin} from '@owui-commons/vue-widget-state-manager';

@Component
export default class Widget extends Mixins(WidgetStateMixin) {
  public count: number = 0;

  public created() {
    this.setWidgetReady();
  }
  public addToCount() {
    this.count = this.count + 1;
  }
  public minToCount() {

    this.count = this.count - 1;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
