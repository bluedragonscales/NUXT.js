<template>
    <div>
        
        <NCard class="card">
            <div v-if="!showConfirmEmailMessage">
                <h3>{{authState}}</h3>

                <div class="input-container">
                    <input type="text" placeholder="Email" v-model="input.email">
                    <input type="password" placeholder="Password" v-model="input.password">
                </div>

                <NButton @click="handleSubmit">{{authState}}</NButton>
                <!-- <NButton @click="logOut">Log Out</NButton> -->

                <p class="error-message" v-if="authError">{{authError}}</p>

                <p class="create-account-p" @click="toggleAuthState">{{authState === "Log In" ? "Don't have an account? Create one now." : "Already have an account? Log in here."}}</p>
            </div>

            <div v-else>
                <h3 class="confirmation-check">Check your email for confirmation message.</h3>
            </div>
        </NCard>

    </div>
</template>



<script setup lang="ts">

    const authState = ref<"Log In" | "Sign Up">("Log In");
    const {signUp, logIn, logOut, user} = useAuth();
    const authError = ref("");
    const input = reactive({
        email: "",
        password: ""
    });
    const showConfirmEmailMessage = ref(false);
    const router = useRouter();

    const toggleAuthState = () => {
        if(authState.value === "Log In") authState.value = "Sign Up";
        else authState.value = "Log In";
        authError.value = "";
    };


    const handleSubmit = async () => {
        try {
            if(authState.value === "Log In"){
                await logIn({email: input.email, password: input.password});
                router.push("/profile");
            } else {
                await signUp({email: input.email, password: input.password});
                showConfirmEmailMessage.value = true;
            }

            input.email = "";
            input.password = "";
            authError.value = "";
        } catch(err) {
            authError.value = err.message;
        }
    };

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

    .error-message {
        color: red;
        padding: 1rem;
        font-size: 1.2rem;
    }

    .confirmation-check {
        text-align: center;
    }

</style>