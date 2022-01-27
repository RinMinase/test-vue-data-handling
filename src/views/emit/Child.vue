<template>
  <div>
    <span class="pr-2">Value:</span>
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1
    }
  },

  mounted() {
    this.$root.$on("update-value", (value) => {
      this.value = value;
    });
  },
};
</script>
