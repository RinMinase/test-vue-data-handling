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

  methods: {
    changeValue(value) {
      this.value = value;
    },
  },
};
</script>
