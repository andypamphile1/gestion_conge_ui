<template>
    <div>
        <form action="">
            <input type="text" v-model="username" placeholder="username">
            <input type="password" v-model="password" placeholder="password">
            <button type="submit" @click="calculer">login</button>
        </form>
        <p>username = {{ username }} </p>
        <p>password = {{ password }} </p>
        <div>vos identifiant sont : <strong></strong></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: ""
        password: ""
        }
    },
    methods:{
        login(){

        },
        perform login 
    }
}
</script>
<style scoped></style>