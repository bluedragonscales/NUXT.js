<template>
    <nav>

        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/profile">My Profile</NuxtLink></li>
            <li class="log-out" @click="logOut" v-if="isLoggedIn()">Log Out</li>
        </ul>

    </nav>
</template>



<script setup lang="ts">

    const {logOut, isLoggedIn} = useAuth();

</script>



<style scoped>

    nav {
        background-color: black;
    }

    ul {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 4vh 4rem;
    }

    li {
        color: white;
        margin-right: 2rem;
    }

    .log-out {
        margin-left: auto;
        cursor: pointer;
    }

</style>