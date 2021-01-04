<template>
  <div>
    <h1>hello-world</h1>
    <h2>welcome vue</h2>
  </div>
</template>

<script>
export default {
  // TODO need fix
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
