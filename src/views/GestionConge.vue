<template>
    <body>
        <div class="first">
            <div class="black">
                <p class="paragraph">Ajouter conger</p>
                <div><span class="material-symbols-outlined">
                        close
                    </span></div>
            </div>
            <div class="white">
                <p class="p">id</p>
                <input type="text">
                <p class="p">Nom</p>
                <input type="text">
                <p class="p">Prenom</p>
                <input type="text">
                <p class="p">Age</p>
                <input type="text">
                <p class="p">Genre</p>
                <input type="text">
                <button>Ajouter</button>
            </div>
        </div>
    </body>
</template>
<script>
</script>
<style scoped>
.p{
    margin: 5px 10px;
}
.black {
    display: flex;
}

body {
    background-color: rgb(198, 189, 177);
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;

}

.first {
    height: 400px;
    width: 450px;
    position: relative;
    top: 30px;
    left: 450px;
    transform: translate(50%-50%);
    background-color: rgb(255, 255, 255);
}

.first .black {
    background-color: rgb(13, 13, 83);
    height: 10%;
}

.first .white {
    height: 90%;
}

.paragraph {
    color: white;
    position: relative;
    top: 0px;
}

input {
    width: 90%;
    position: relative;
    top: 0px;
    left: 10px;
}

button {
    background-color: blue;
    color: white;
    position: relative;
    top: 10px;
    left: 15px;
    border: 0cap;
    padding: 5px 10px;
    margin: 15px 0px;
}

input .this {
    text-align: center;
}

p {
    margin-left: 10px;
}

span {
    color: white;
    position: absolute;
    right: 20px;
    top: 10px;
}
</style>