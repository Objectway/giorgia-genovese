<template>
    <div class="Prospect__typeButtom">
        <button class="bottone">ANNULLA</button>
        <button class="Agree__button" @click="addUser">AVANTI</button> 
      </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class FooterComponent extends Vue {} 
</script>

<style scoped lang="scss">
$gutter: 8px;
$color_conectus:#005dad;
.Prospect__typeButtom{
        display: flex;
        flex-direction: row;
        width: 750px;
        margin : auto;
        background-color:white;
        margin-top: $gutter*2;
        margin-bottom: $gutter*2;
        padding: $gutter*2;
        border-radius: $gutter/2;
        justify-content: space-between;
        .bottone{
            background-color:#d4cececc;
            border-radius: $gutter/2;
            padding: $gutter;
            border-width: inherit;
            width:78px;
            height: 31px;
            color:white;
        }
        .Agree__button{
            background-color:$color_conectus;
            border-radius: $gutter/2;
            padding: $gutter;
            border-width: inherit;
            width:78px;
            height: 31px;
            color:white;
        }
    }
</style>