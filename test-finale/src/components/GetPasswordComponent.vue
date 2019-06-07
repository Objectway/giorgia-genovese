<template>
    <div class="Form">
        <div class="Form__element">
            <p>Reimposta la password</p>
            <p class="Form__label">USERNAME</p>
            <input v-model="username" placeholder="username">
            <p class="Form__label">EMAIL</p>
            <input v-model="email" placeholder="email">
        </div>
        <div class="Form__button">
            <button class="bottone" @click="checkUser" >CONFERMA</button>
            <button class="Login__button" @click="backLogin">INDIETRO</button>
        </div>
        <div class="Form__password" v-if="this.checkV==true">
            <p>La tua password è: {{this.zipcode}}</p>
            <button class="Login__button" @click="backLogin">LOGIN</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue , Prop} from 'vue-property-decorator';

@Component
export default class GetPasswordComponent extends Vue {

    public username: string='';
    public email:string='';
    public zipcode:string='';
    public checkV:boolean= false;

    // created(){
    //   this.axios.get('http://jsonplaceholder.typicode.com/users')
    //   .then((response)=>{
    //     this.$store.commit('setLista',response.data)
    //   })
    // }

    /** checkUser() è un metodo che con il getters presente nello store.ts
     * si scarica la lista degli utenti e controlla che l'username e la email
     * siano presenti nella lista. Se si verifica la condizione il metodo
     * restituisce la password dell'utente.
     */

    public checkUser(){
        let newLista=this.$store.getters.getLista;
        //console.log(newLista)
        newLista.map((item, index) => {
            if(item.username==this.username){
                if(item.email==this.email){
                    this.checkV=true;
                    this.zipcode=item.address.zipcode;
                }
            }
        });
    }

    /** backLogin() è un metodo che grazie alle rotte ti reindirizza
     * nella pagina di login.
     */

    public backLogin(){
        this.$router.push('/')
    }
}
</script>

<style scoped lang="scss">
    $color_conectus:#005dad;
    $color_grey: #ecebebcc;
    $gutter: 8px;
    
    .Form{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: auto;
        align-items: center;
        width: 750px;
        &__element{
            width: 750px;
            input{
                width: 774px;
                padding: 8px;
                padding-right: 0;
                height: 40px;
                border-style: hidden;
            }
        }
    }
    .Form__button{
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
            height: 31px;
            color:white;
        }
        .Login__button{
            background-color:$color_conectus;
            border-radius: $gutter/2;
            padding: $gutter;
            border-width: inherit;
            width:78px;
            height: 31px;
            color:white;
        }
    }
    .Form__password{
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
        align-items: center;
        .Login__button{
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