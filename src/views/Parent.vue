<template>
  <div>
    <Child :value="value" class="mb-3" />
    <Child @update-value="update" :value="value" class="mb-3" />
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: { Child },

  data() {
    return {
      value: 1
    };
  },

  methods: {
    update(value) {
      this.value = value
    },
  },
};
</script>
