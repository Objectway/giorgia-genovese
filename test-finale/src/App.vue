<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <div id="nav">
      
      <router-link to="/">Lista Utenti</router-link> | 
      <router-link to="/newUser">Nuovo Utente</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif; 
  width: 750px;
  margin: auto;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

