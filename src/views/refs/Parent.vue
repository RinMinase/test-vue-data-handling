<template>
  <div>
    <h2>Refs</h2>

    <Child ref="child" class="mb-3" />
    <button @click="update">Update Value</button>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: { Child },

  methods: {
    update() {
      if (this.$refs.child.changeValue) {
        const number = Math.floor(Math.random() * 10) + 1;

        this.$refs.child.changeValue(number);
      }
    },
  },
};
</script>
