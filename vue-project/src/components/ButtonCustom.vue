<template>
    <div>
        <button v-foo-directive:color="[buttonBack]" @click="clickEventBusCustomEvent" :style="{'color': buttonColor}">
            {{buttonName}}jnfbuigvuify
            </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {EventBus} from '../main';

@Component({
    directives:{
      'foo-directive':{
        bind:(el, binding, vnode)=>{
          el.style.backgroundColor= 'orange';
          if(binding.arg==='color'){
            el.style.backgroundColor= binding.value;
          }
        }
      }
}
})
export default class ButtonCustom extends Vue {
  @Prop() private buttonName!: string;
  @Prop() private buttonColor!: string;
  @Prop() private buttonBack!: string;

clickEventBusCustomEvent(){
    EventBus.$emit('eventBusCustomEvent', ' sei qua');
}
  clickMe(){
      this.$emit('customButtonEvent', 'pippo');
  }
}
</script>

<style scoped lang="scss">
</style>
