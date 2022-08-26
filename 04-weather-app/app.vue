<template>
    <div class="h-screen relative overflow-hidden">
      
        <img :src="background" alt="">

        <div class="absolute w-full h-full top-0 overlay"></div>

        <div class="absolute w-full h-full top-0 p-28">
            <div class="flex justify-between">
                <div>
                    <h1 class="text-7xl text-white">{{city.name}}</h1>
                    <p class="font-extralight text-2xl mt-2 text-white">Thursday August 25th</p>
                    <img :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`" alt="" class="w-56 icon">
                </div>

                <div>
                    <p class="text-9xl text-white font-extralight">{{city.main.temp}}°</p>
                </div>
            </div>

            <div class="mt-20">
                <input type="text" class="w-1/2 h-10" placeholder="Search for a city..." v-model="input">
                <button class="bg-sky-400 w-20 text-white h-10" @click="handleClick">Search</button>
            </div>
        </div>

    </div>
</template>



<script setup lang="ts">
    // https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=b28aeb3786325cf19ae1dcda977fa5bf

    const cookie = useCookie("city");

    if(!cookie.value) cookie.value = "Toronto";

    const search = ref(cookie.value);
    const input = ref("");
    const background = ref("");

    // const {data: city, error} = useFetch(() => `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=b28aeb3786325cf19ae1dcda977fa5bf`);

    const {data: city, error} = useAsyncData("cityKey", async () => {
        let response;
        
        try {
            response = await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=b28aeb3786325cf19ae1dcda977fa5bf`);

            cookie.value = search.value;

            const temperature = response.main.temp;

            if(temperature <= -10){
                background.value = "https://img.rasset.ie/0015d72f-1600.jpg";
            } else if(temperature > -10 && temperature <= 0){
                background.value = "https://govbooktalk.files.wordpress.com/2019/09/fall.jpg";
            } else if(temperature > 0 && temperature <=10){
                background.value = "https://cdn.mos.cms.futurecdn.net/tXr5UjKDsDBrYBQM9znb2c.jpg";
            } else {
                background.value = "https://media.cntraveler.com/photos/5ca2606227413200230736ae/master/pass/Summer-Travel_GettyImages-1028278382.jpg";
            }
        } catch(e) {}

        return response;
    }, {
        watch: [search]
    });

    const handleClick = () => {
        const formattedSearch = input.value.trim().split(" ").join("+");
        search.value = formattedSearch;
        input.value = "";
    }

</script>



<style>

    .overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .icon {
        margin-left: -2rem;
        margin-top: -2rem;
    }

</style>