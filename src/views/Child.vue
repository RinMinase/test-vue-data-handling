<template>
  <div>
    <span class="pr-2">Value:</span>
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: ["evt"],

  data() {
    return {
      value: 1,
    };
  },

  methods: {
    changeValue(value) {
      this.value = value ? value : 10;
    },
  },

  mounted() {
    this.evt.$on("change-value", (val) => this.changeValue(val));
  },
};
</script>
