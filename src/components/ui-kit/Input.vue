<template>
  <div class="base-input-container">
    <label
    v-if="label"
    class="base-input__label"
    :for="id">
      {{ label }}
    </label>

    <input
    @input="updateInput"
    class="base-input"
    :min="min"
    :name="name"
    :type="type"
    :value="modelValue"
    :id="id">
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'BaseInput',
    props: {
      label: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String as PropType<'text' | 'password' | 'email' | 'date' | 'number' | 'range'>,
        default: 'text',
      },
      modelValue: {
        type: [String, Number, Date],
        default: '',
      },
      min: {
        type: Number,
        default: 0,
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
  .base-input-container {
    width: 100%;
    height: 56px;

    position: relative;
  }

  .base-input__label {
    display: block;

    padding: 0 6px;
    width: max-content;

    position: absolute;
    top: -10px;
    left: 16px;
    z-index: 1;

    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .base-input {
    font-family: 'Inter';
    font-size: 18px;

    box-sizing: border-box;

    height: 100%;
    width: 100%;
    padding: 10px 20px;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    outline: none;
  }
</style>
