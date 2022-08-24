<template>

    <div>
        <slot name="header"></slot>

        <div>
            <img src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png" alt="Sad face emoji">
        </div>

        <button class="btn btn-primary btn-lg mt-5" @click="$router.push('/')">Go Back</button>
    </div>

</template>


<style scoped>

     img {
        width: 8rem;
        margin-top: 2rem;
    }

</style>