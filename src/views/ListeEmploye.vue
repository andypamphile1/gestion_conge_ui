<template>
  <div class="hejuru">
    <div class="1">
      <p><strong>liste des utilisateurs</strong></p>
    </div>
    <div class="tubiri">
      <input type="text" placeholder="chercher...">
      <button class="thead">Ajouter Employe</button>
    </div>
    <table>
      <thead class="head">
        <th>NOM</th>
        <th>PRENOM</th>
        <th>AGE</th>
        <th>GENRE</th>
        <th>STATUS</th>
        <th>ACTIONS</th>
      </thead>
      <tbody class="body">
        <tr>
          <td>Artcal'o</td>
          <td>Lone Wolf</td>
          <td>45</td>
          <td>F</td>
          <td>pas en conge</td>
          <td class="button1">
            <button class="blue">Ajouter Conge</button>
            <button class="blue">Modifier</button>
            <button class="red">Supprimer</button>
          </td>
        </tr>
        <tr>
          <td>TLW</td>
          <td>Wolverine</td>
          <td>45</td>
          <td>F</td>
          <td>Pas en conge</td>
          <td class="button2">
            <button class="blue">Ajouter Conge</button>
            <button class="blue">Modifier</button>
            <button class="red">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>

</script>
  
<style scoped>
button {
  gap: 5px;
}

.head {
  background-color: rgb(5, 5, 54);
  color: white;
  position: relative;
  left: 2px;
  font-size: 15px;
}

body {
  min-width: 100vw;
  min-height: 100vh;
}

th {
  text-align: left;
}

tbody td {
  border-bottom: 1px solid black;
  height: 40px;
}

.body {
  border-bottom: 1px;
}

table {
  position: absolute;
  left: 0px;
  top: 40px;
  width: 100%;
}

.hejuru {
  display: flex;
  align-content: center;
}

.tubiri {
  position: absolute;
  top: 10px;
  right: 10px;
}

.red {
  background-color: red;
  border: 0cap;
  color: white;
}

.blue {
  background-color: blue;
  border: 0cap;
  color: white;
}

.thead {
  background-color: rgb(5, 5, 54);
  color: white;
}

.blue .red {
  margin: 10px 0px;
}

th {
  font-family: sans-serif;
}

p {
  position: absolute;
  left: 5px;
  top: 10px;
}</style>