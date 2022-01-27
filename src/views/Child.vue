<template>
  <div>
    <div>
      <span class="pr-2">Value:</span>
      <span>{{ value }}</span>
    </div>
    <button @click="changeValue">Change Value</button>  
  </div>
</template>

<script>
export default {
  props: ["value"],

  methods: {
    changeValue() {
      const randomNumber = +(Math.random() * 10) + 1;
      this.$emit("update-value", randomNumber)
    },
  },
};
</script>
