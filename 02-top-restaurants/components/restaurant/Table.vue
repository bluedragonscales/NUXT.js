<template>

    <div class="table">
        <h1>TOP 50: THE RANKING</h1>

        <div class="table-container">
            <div class="table-col">
                <RestaurantRow :isHeader="true"></RestaurantRow>
                <RestaurantRow v-for="(restaurant, index) in restaurantsOrganized.first" 
                    :key="restaurant" 
                    :name="restaurant.name"
                    :rank="restaurant.rank"
                    :index="index"></RestaurantRow>
            </div>
            <div class="table-col">
                <RestaurantRow :isHeader="true"></RestaurantRow>
                <RestaurantRow v-for="(restaurant, index) in restaurantsOrganized.second"
                :key="restaurant"
                :name="restaurant.name"
                :rank="restaurant.rank"
                :index = "index"></RestaurantRow>
            </div>
        </div>
    </div>

</template>




<script setup lang="ts">
    import restaurants from '@/data.json';

    const restaurantsOrganized = {
        first: [...restaurants].splice(0, 25),
        second: [...restaurants].splice(25, 25)
    }

</script>




<style scoped>

    .table {
        margin: 3rem 0;
    }

    .table h1 {
        margin-bottom: 2rem;
    }

    .table-container {
        display: flex;
        justify-content: space-between;
    }

    .table-col {
        width: 48%;
    }

</style>