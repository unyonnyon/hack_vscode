<template>
  <div>
    <h1>hello-world</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    a: 'abab',
    b: 100,
  }),
  methods: {
    sayHello() {
      console.log(`${this.a}`);
    },
  },
  created() {},
};
</script>

<style></style>
