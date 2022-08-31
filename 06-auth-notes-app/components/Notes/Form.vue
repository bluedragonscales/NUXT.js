<template>
    <NCard class="card">

        <input type="text" placeholder="My note title" v-model="notesInput.title">
        <textarea name="" id="" cols="30" rows="3" placeholder="My note..." v-model="notesInput.note"></textarea>
        <NButton class="submit-note-btn" @click="handleSubmitNote">Save Note</NButton>

    </NCard>
</template>



<script setup lang="ts">

    const {supabase} = useSupabase();
    const {user} = useAuth();

    const notesInput = reactive({
        title: "",
        note: ""
    });

    const handleSubmitNote = async () => {
        if(!notesInput.title || !notesInput.note) return;
        else {
            await supabase.from("notes").insert({
                title: notesInput.title,
                note: notesInput.note,
                user_id: user.value.id
            })

            notesInput.title = "";
            notesInput.note = "";
        }
    }

</script>



<style scoped>

    .card {
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    input, textarea {
        outline: none;
        border: 2px solid #EBEDEF;
        border-radius: 3px;
        margin: 0.5rem 0;
        padding: 10px;
    }

    .submit-note-btn {
        margin-top: 0.6rem;
        width: 50%;
        display: flex;
        justify-content: center;
        margin: auto;
        background-color: black;
        color: white;
    }

</style>