<template>
  <main class="page">
    <SignInForm/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignInForm from '@/components/forms/SignInForm.vue';

export default defineComponent({
  name: 'SignInScreen',
  components: {
    SignInForm,
  },
});
</script>

<style lang="scss">
  @import '@/styles/variables.scss';

  .page {
    padding: 60px 0;
    background-color: $primaryColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
