<template>
<div class="Card" v-foo-directive:display="[display]">
    prof cartd comp
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({
    directives:{
      'foo-directive':{
        componentUpdated:(el, binding, vnode)=>{
          el.style.backgroundColor= 'orange';
          if(binding.arg==='color'){
            el.style.color= binding.value;
          }
        }
      }
}
})
export default class ProfileCard extends Vue {
@Prop() private color!: string;
}
</script>

<style scoped lang="scss">
    .Card{
        width: 200px;
        height: 200px;
        box-shadow: 0 0 0 0 #000;
        background-color: black;
    }
</style>
