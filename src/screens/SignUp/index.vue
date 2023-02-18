<template>
  <main class="page">
    <SignUpForm/>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SignUpForm from '@/components/forms/SignUpForm.vue';

  export default defineComponent({
    name: 'SignUpScreen',
    components: {
      SignUpForm,
    },
  });

</script>

<style lang="scss">
  @import '@/styles/variables';

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 60px 0;

    background-color: $primaryColor;
  }
</style>
