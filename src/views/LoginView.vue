<template>
    <div class="content">
      <div class="aside">
        <h1><strong>GESTION</strong> <p><strong>CONGE</strong></p></h1>
      </div>
      <div class="main">
        <div class="enter">
          <h3>Se Connecter</h3>
          <p>Nom D'utilisateur</p>
          <input type="tech" placeholder="tech">
          <p>Mot De Pass</p>
          <input type="...." placeholder="....">
          <p><button class="connexion">connexion</button></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // your component logic here
  }
  </script>
<style scoped>
h3{
  margin-top: 20px;
}
 body {
    min-height: 100vh;
    min-width: auto;
 }
 .content {
            display: flex;
            width: 100vh;
            height: 100vh;
        }

        .aside {
            background-color: rgb(4, 4, 83);
            height: 100%;
            padding-right: 150px;
            position: absolute;
            left: 0px;
        }

        body {
            background-color: white;
        }

        h1 {
            position: relative;
            top: 40%;
            color: aliceblue;
        }

        .enter {
            height: 300px;
            width: 250px;
            padding: 10px;
            background-color: white;
            position: absolute;
            top: 100px;
            right: 400px;
            box-shadow: 0 0 15px grey;
        }

        .connexion {
          margin-top: 20px;
            background-color: rgb(69, 69, 220);
            border: 0cap;
            padding: 5px;
            border-radius: 5px;
        } 
        p{
          padding: 10px 0px;
        }
        input{
          width: 90%;
        }
</style>