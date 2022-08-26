<template>
    <div :style="isDarkMode ? {backgroundColor: 'black'} : null">

      <Nav></Nav>
      <Heading></Heading>
      <Cards></Cards>

    </div>
</template>



<script setup lang="ts">

    const {isDarkMode} = useDarkMode();

</script>



<style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>