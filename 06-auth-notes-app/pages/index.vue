<template>
    <div>

        <div class="container">
            <AuthCard></AuthCard>
        </div>
        
    </div>
</template>



<script setup lang="ts">

    const {supabase} = useSupabase();

</script>



<style scoped>

    .container {
        max-width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

</style>