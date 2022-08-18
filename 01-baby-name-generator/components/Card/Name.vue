<template>

    <div class="card">
        <p>{{name}}<span @click="removeName">X</span></p>
    </div>

</template>



<script setup lang="ts">

    interface NameProps {
        name: string;
        index: number;
    }

    const props = defineProps<NameProps>();

    const emit = defineEmits(['remove']);

    const removeName = () => {
        emit("remove", props.index);
    }

</script>



<style scoped>

    .card {
        background-color: rgb(27, 60, 138);
        margin: 0.7rem;
        width: 28%;
        color: white;
        border-radius: 1rem;
        position: relative;
    }

    span {
        position: absolute;
        top: 5%;
        left: 90%;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.178);
    }

</style>