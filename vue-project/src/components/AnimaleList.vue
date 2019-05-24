<template>
<div class="Animale">
    animale
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class AnimaleList extends Vue {

}
</script>

<style scoped lang="scss">
    .Animale{
        width: 100px;
        height: 50px;
        box-shadow: 0 0 0 0 #000;
        background-color: blanchedalmond;
        margin-bottom: 10px;
    }
</style>
