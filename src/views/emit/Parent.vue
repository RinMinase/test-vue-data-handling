<template>
  <div>
    <h2>Emit</h2>

    <Child class="mb-3" />
    <button @click="update">Update Value</button>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: { Child },

  methods: {
    update() {
      const number = Math.floor(Math.random() * 10) + 1;

      this.$root.$emit("update-value", number)
    },
  },
};
</script>
