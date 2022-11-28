<template>
  <div class="h-screen flex flex-col justify-center">
    <div class="bg-yellow-500 p-10 rounded-md text-center">
      <h1 class="h1 text-7xl">Welcome to Zoo(mbie) ;)</h1>
      <NuxtLink to="animals">
        <Button
          :text="'Check out'"
          :additionalClasses="['bg-blue-500 m-auto rounded w-4/12 mt-5']"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
