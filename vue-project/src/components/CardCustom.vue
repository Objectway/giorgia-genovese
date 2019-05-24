<template>
    <div class="cardClass" v-foo-directive:color="[color]">
        <img :src="cardImg"/>
        <div class="cardClass__Single">
            <p>{{cardName}}</p>
            <p>{{cardSurname}}</p>
          
        </div>
         <badge-custom></badge-custom>
        <button-custom  v-for="button in buttons" :button-name="button.name" :button-color="button.color" @customButtonEvent="childEvent"></button-custom>  
           
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ButtonCustom from './ButtonCustom.vue';
import BadgeCustom from './BadgeCustom.vue';


@Component({
    directives:{
      'foo-directive':{
        bind:(el, binding, vnode)=>{
          el.style.backgroundColor= 'orange';
          if(binding.arg==='color'){
            el.style.color= binding.value;
          }
        }
      }
},
    components:{
      ButtonCustom,
      BadgeCustom
    }
  })
export default class CardCustom extends Vue {
  @Prop() private cardImg!: string;
  @Prop() private cardName!: string;
  @Prop() private cardSurname!: string;
  @Prop() private color!: string;
  
  public buttons: {[key:string]:string}[]=[
                         {
                           name: 'Clicca qua',
                           color: 'red'
                         }
                       ];
 
                         
public childEvent(){
    }
}
</script>

<style scoped lang="scss">
.cardClass{
    background-color: rgb(60, 60, 212);
    display: flex;
    flex-direction: row;    
    justify-content: left;
    margin: 40px;
    .cardClass__Single{
        display: flex;
        flex-direction: column;
       
    }
     img{
            width: 225px;
            height: 225px;
        }
}
</style>
