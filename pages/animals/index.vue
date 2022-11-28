<template>
  <div class="min-h-screen m-auto">
    <div class="my-5">
      <h2 class="h2 text-4xl mb-5">All Animals</h2>
      <div class="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-4 sm:grid-cols-6 gap-3 ">
        <Nuxt-Link to="animals/dog">
          <Card :text="'Dog 🐶'" />
        </Nuxt-Link>
        <Nuxt-Link to="animals/cat">
          <Card :text="'Cat 😺'" />
        </Nuxt-Link>
        <Nuxt-Link to="animals/lion">
          <Card :text="'Lion 🦁'" />
        </Nuxt-Link>
        <Nuxt-Link to="animals/horse">
          <Card :text="'Horse 🐴'" />
        </Nuxt-Link>
        <Nuxt-Link to="animals/zombie">
          <Card :text="'Zombie 🧟'" />
        </Nuxt-Link>
        <Nuxt-Link to="animals/custom">
          <Card :text="'Custom 🔍'" />
        </Nuxt-Link>
      </div>
    </div>
  </div>
</template>

<script>
