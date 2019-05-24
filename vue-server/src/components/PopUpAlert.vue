<template>

    <div v-pop-up:display="[display]" class="popUp">
      <p>Qualcosa è andato male </p>
      <colore></colore>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Colore from './Colore.vue'
@Component({
  components:{
    Colore
  },
    directives:{
      'pop-up':{
        componentUpdated:(el, binding, vnode, oldVnode)=>{
          el.style.backgroundColor= 'orange';
          if(binding.arg==='Error'){
            el.style.display= 'block';
          }else
           el.style.display= 'none';
        }
      }
}
})
export default class PopUpAlert extends Vue {
  @Prop() private display!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
