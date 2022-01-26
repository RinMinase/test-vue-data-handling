<template>
  <div>
    <Child :evt="evt" class="mb-3" />

    <button class="mb-3" @click="changeChildValue">
      Change Value
    </button>
  </div>
</template>

<script>
import Vue from "vue";
import Child from "./Child.vue";

export default {
  components: {
    Child,
  },

  data() {
    return {
      evt: new Vue(),
    };
  },

  methods: {
    changeChildValue() {
      this.evt.$emit("change-value", 50);
    },
  },
};
</script>
