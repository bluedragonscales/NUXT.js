<template>
    <div>
        
        <NCard class="card">
            <h3>{{authState}}</h3>

            <div class="input-container">
                <input type="text" placeholder="Email">
                <input type="text" placeholder="Password">
            </div>

            <NButton>{{authState}}</NButton>

            <p class="create-account-p" @click="toggleAuthState">{{authState === "Log In" ? "Don't have an account? Create one now." : "Already have an account? Log in here."}}</p>
        </NCard>

    </div>
</template>



<script setup lang="ts">

    const authState = ref<"Log In" | "Sign Up">("Log In");

    const toggleAuthState = () => {
        if(authState.value === "Log In") authState.value = "Sign Up";
        else authState.value = "Log In";
    }

</script>



<style scoped>

    .card {
        padding: 2rem;
        width: 30rem;
    }

    .card h3 {
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }

    .input-container {
        display: flex;
        flex-direction: column;
    }

    .input-container input {
        margin-bottom: 1.5rem;
        padding: 10px;
        outline: none;
        border: 1px solid #EBEDEF;
        border-radius: 3px;
    }

    .create-account-p {
        margin-top: 1.5rem;
        color: blue;
        font-size: 0.9rem;
        cursor: pointer;
    }

</style>