<template>
  <div :class="getBgColorClass" class="min-h-screen w-auto p-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div class="p-5">
        <div>
          <img v-if="!play" :src="imageStaticURL" alt="Image" width="80%" />
          <img v-else :src="imageGifURL" :alt="title" width="80%" />
        </div>
      </div>
      <div class="mb-5">
        <div v-if="isCustom" class="my-5 w-full">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="searchText"
            v-model="searchQuery"
            placeholder="Search Animal"
          />
          <Button
            :text="'Search'"
            @onClick="searchHandler()"
            :additionalClasses="['bg-blue-500 w-4/12']"
            :loading="loading"
          />
        </div>
        <div class="h1 text-5xl">Title: {{ title }}</div>
        <h1 class="h1 text-2xl my-5">Actions:</h1>
        <Button
          :text="play ? 'Stop' : 'Play'"
          @onClick="playGif()"
          :additionalClasses="play ? ['bg-red-500 my-3'] : ['bg-blue-500 my-3']"
        />
      </div>
    </div>
    <div class="p-5">
      <h2 class="h2 text-3xl">Color Options</h2>
      <div
        class="my-5 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-6 gap-3"
      >
        <Button
          v-for="color in colors"
          :text="color.replace('-', ' ')"
          v-bind:key="color"
          :additionalClasses="[`inline ${color}`]"
          @onClick="colorClickHandler(color)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    searchQuery: {
      type: String,
      default: "Animals",
    },
    isCustom: {
      type: Boolean,
      default: false,
    },
    sound: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      loading: false,
      soundPlayer: null,
      title: "",
      imageStaticURL: "",
      imageGifURL: "",
      play: false,
      colors: [
        "bg-red-500",
        "bg-blue-500",
        "bg-orange-500",
        "bg-lime-500",
        "bg-purple-500",
        "bg-fuchsia-500",
        "bg-green-500",
        "bg-slate-500",
        "clear",
      ],
    };
  },
  computed: {
    ...mapGetters("zoo", ["getBgColorClass"]),
  },
  beforeMount() {
    this.fetchAnimalHandler();
  },
  methods: {
    ...mapActions({
      storeBgColor: "zoo/storeBgColor",
      storeBgColorOpacity: "zoo/storeBgColorOpacity",
    }),

    async playGif() {
      this.play = !this.play;

      if (this.sound !== "" && this.play) {
        this.soundPlayer = await new Audio(
          require(`~/static/sounds/${this.sound}`)
        );
        this.soundPlayer.play();
      }
    },

    searchHandler() {
      this.fetchAnimalHandler();
    },

    colorClickHandler(color) {
      this.storeBgColor(color);
    },

    colorOpacityClickHandler(opacity) {
      this.storeBgColorOpacity(opacity);
    },

    async fetchAnimalHandler() {
      this.loading = true;

      const options = {
        params: {
          q: this.searchQuery,
          api_key: "CH1hVuWEoFethCLBIR7ySzGXAxcybqGh",
          limit: "1",
          offset: "0",
          rating: "g",
          lang: "en",
        },
      };

      await this.$axios
        .get("/search", options)
        .then((response) => {
          this.loading = false;
          this.searchText = "";
          this.title = response.data.data[0].title;
          this.imageStaticURL = response.data.data[0].images.original_still.url;
          this.imageGifURL = response.data.data[0].images.original.url;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
  },
};
</script>
