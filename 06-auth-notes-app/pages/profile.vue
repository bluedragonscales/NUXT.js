<template>
    <div>

        <div class="container">
            <h2>My Notes</h2>
            <NotesForm></NotesForm>
        </div>

        <div v-if="notesResponse.data" class="notes-container">
            <NCard v-for="note in notesResponse.data" :key="note.id" class="note-card">
                <h4>{{note.title}}</h4>
                <p>{{note.note}}</p>
            </NCard>
        </div>

    </div>
</template>


<script setup lang="ts">

    const {supabase} = useSupabase();
    const {user} = useAuth();

    const notesResponse = ref();

    definePageMeta({
        middleware: "auth"
    });


    if(process.client){
        notesResponse.value = await supabase.from("notes").select().eq("user_id", user.value.id);
    }

</script>



<style scoped>

    .container {
        max-width: 60%;
        margin: 0 auto;
        padding: 3rem;
        height: 90vh;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .notes-container {
        max-width: 70%;
        margin: auto;
        margin-top: -10rem;
        display: flex;
        flex-flow: row wrap;
        text-align: center;
        justify-content: space-around;
    }

    .note-card {
        margin: 1rem;
        padding: 1rem;
        cursor: default;
        width: 15rem;
        height: 10rem;
    }

    .note-card h4 {
        font-size: 1.2rem;
        text-decoration: underline;
    }

</style>