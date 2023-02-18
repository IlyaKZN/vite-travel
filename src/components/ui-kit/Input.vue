<template>
  <label
  class="label"
  :for="id">
    {{ placeholder }}
  </label>

  <input
  @input="updateInput"
  class="input"
  :name="name"
  :placeholder="placeholder"
  :type="type"
  :value="modelValue"
  :id="id">
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'BaseInput',
    props: {
      placeholder: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String as PropType<'text' | 'password' | 'email' | 'date'>,
        default: 'text',
      },
      modelValue: {
        type: [String, Number],
        default: '',
      },
    },
    emits: ['update:modelValue'],
    mounted() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.id = this.componentId;
    },
    methods: {
      updateInput(e: Event) {
        if (e.target) {
          this.$emit('update:modelValue', (e.target as HTMLInputElement).value);
        }
      },
    },
    data() {
      return {
        id: '',
      };
    },
  });
</script>

<style lang="scss">
.label {
  display: none;
}

.input {
  font-family: 'Inter';
  font-size: 18px;

  box-sizing: border-box;

  width: 100%;
  height: 56px;
  padding: 10px 20px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  outline: none;
}
</style>
