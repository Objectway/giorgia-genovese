<template>
    <div class="formComponent">
        
        <div class="formComponent__general">
            <input v-model="name"/>
            <p >{{$store.state.name}}</p>
            <input v-model="cognome"/>
            <p>{{cognome}}</p>
        </div>
        <router-link to="/profile"> GO BACK </router-link>
        <button>SALVA</button>
        <router-view/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FormComponent extends Vue{
    public name!: string;
    public cognome!: string;
 created(){
     console.log(this.$store.getters.getName);
      this.$store.commit('changeName', ' name');
      this.$store.dispatch('setNameAndSurname', {
        name: ,
        surname: 'Di Vietri'
      })
 }
 
}
</script>

<style lang="scss" scoped>
    .profileComponent{
        background-color: green;
    }
</style>
