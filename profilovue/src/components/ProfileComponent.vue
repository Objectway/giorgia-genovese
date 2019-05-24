<template>
    <div class="profileComponent">
        <img src="../assets/logo.png">
        <div class="profileComponent__general">
            <p >{{$store.state.name}}</p>
            <p>{{$store.state.cognome}}</p>
        </div>
        <router-link to="/FormComponent"> EDIT PROFILE </router-link>
        <router-view/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProfileComponent extends Vue{
    public name!: string;
    public cognome!: string;

    
}
</script>

<style lang="scss" scoped>
    .profileComponent{
        background-color: green;
        display:flex;
        flex-direction: row;
    }
</style>
