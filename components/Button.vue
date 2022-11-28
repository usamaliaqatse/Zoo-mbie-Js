<template>
  <div class="flex flex-col" :class="containerClassesComputed">
    <button @click="onClick" :class="classes" :disabled="disabled" :type="type">
      <span v-if="!loading" class="uppercase" :class="spanClasses">{{
        text
      }}</span>
      <component
        v-if="!loading && icon"
        :is="icon"
        v-bind="{ class: iconClass }"
      ></component>
      <CircleLoader :fillColor="'#FFFFFF'" :width="40" v-if="loading" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "button",
      validator: function (value) {
        return ["button", "submit"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: null,
    },
    additionalClasses: {
      type: Array,
      default: function () {
        return [];
      },
    },
    containerClasses: {
      type: Object,
      default: function () {
        return {};
      },
    },
    textClasses: {
      type: Array,
      default: function () {
        return [];
      },
    },
    height: {
      type: String,
      default: "h-14",
    },
    reversedIcon: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes: function () {
      return [
        "pl-3",
        "pr-3",
        "bg-blueRibbon",
        "hover:bg-blueRibbonDark",
        "focus:outline-none",
        "focus:opacity-80",
        "disabled:opacity-70",
        "disabled:cursor-not-allowed",
        "transition-colors",
        "rounded",
        "text-white",
        "text-sm",
        "font-bold",
        `${this.height}`,
        `xl:${this.height}`,
        this.margin ? "mt-1" : "mt-0",
        this.margin ? "mb-1" : "mb-0",
        "flex",
        "justify-center",
        "items-center",
        "border",
        "border-blueRibbon",
        this.reversedIcon ? "flex-row-reverse" : "",
        ...this.additionalClasses,
      ];
    },
    spanClasses: function () {
      return [...this.textClasses];
    },
    containerClassesComputed: function () {
      let classesTemp = {
        "w-full": this.fullWidth,
        "mb-2": this.margin,
        ...this.containerClasses,
      };

      return classesTemp;
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
