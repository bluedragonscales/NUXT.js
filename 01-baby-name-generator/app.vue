<template>
<!-- The main app file. -->
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below.</p>

    <div class="options-container">

      <Option v-for="option in optionsArray" 
        :key="option.title"
        :option="option"
        :options="options"></Option>

      <button class="primary" @click="computeSelectedNames">Find Names</button>
    </div>

    <div class="cards-container">
      <CardName v-for="(name, index) in selectedNames" 
        :key="name" 
        :name="name"
        @remove="() => removeName(index)"
        :index="index"></CardName>
    </div>
  </div>

</template>



<script setup lang="ts">
  import {Gender, Popularity, Length, names} from '@/data'


  interface OptionsState {
    gender: Gender;
    popularity: Popularity;
    length: Length;
  }

  const options = reactive<OptionsState>({
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.ALL
  });


  const computeSelectedNames = () => {
    const filteredNames = names.filter((name) => name.gender === options.gender).filter((name) => name.popularity === options.popularity).filter((name) => {
      if(options.length === Length.ALL){
        return true;
      } else {
        return name.length === options.length;
      }
    });

    selectedNames.value = filteredNames.map(name => name.name);
  }


  const selectedNames = ref<string[]>([]);


  const optionsArray = [
    {
      title: "1) Choose a gender:",
      category: 'gender',
      buttons: [Gender.BOY, Gender.GIRL, Gender.UNISEX]
    },
    {
      title: '2) Choose a popularity:',
      category: 'popularity',
      buttons: [Popularity.TRENDY, Popularity.UNIQUE]
    },
    {
      title: "3) Choose the name's length:",
      category: 'length',
      buttons: [Length.ALL, Length.LONG, Length.SHORT]
    }
  ]


  const removeName = (index: number) => {
    const filterNames = [...selectedNames.value];
    filterNames.splice(index, 1);
    selectedNames.value = filterNames;
  }

</script>



<style scoped>

  .container {
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(27, 60, 138);
    text-align: center;
    max-width: 50rem;
    margin: 0 auto;
  }

  h1 {
    font-size: 3rem;
  }

  .options-container {
    background-color: rgb(255, 238, 236);
    border-radius: 2rem;
    padding: 1rem;
    width: 95%;
    margin: 0 auto;
    margin-top: 3rem;
    position: relative;
  }

  .primary {
    background-color: rgb(249, 87, 89);
    color: white;
    border-radius: 6.5rem;
    border: none;
    padding: 0.75rem 4rem;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }

  .cards-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
  }

</style>