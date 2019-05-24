<template>
    <div  class="colore">
      <p>qua funziona il componente </p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
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
export default class colore extends Vue {;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.colore{
    background-color: maroon;
}
</style>
