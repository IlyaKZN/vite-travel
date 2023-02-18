<template>
  <section class="more-info-accordion-container">
    <h2 class="more-info-accordion__title">
      Узнайте больше
    </h2>

    <div class="more-info-accordion">
      <button
      @click="toggleStatePanel"
      class="more-info-accordion__button">
        О проекте
      </button>

      <div class="more-info-accordion__panel">
        <p class="more-info-accordion__panel-text">
          Я в своем познании настолько преисполнился, что я как будто бы уже
          сто триллионов миллиардов лет проживаю на триллионах и
          триллионах таких же планет, как эта Земля, мне этот мир абсолютно
          понятен, и я здесь ищу только одного - покоя, умиротворения и
          вот этой гармонии, от слияния с бесконечно вечным, от созерцания
          великого фрактального подобия и от вот этого замечательного всеединства
          существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно
          малое, хоть ввысь - бесконечное большое, понимаешь?
        </p>
      </div>
    </div>

    <div class="more-info-accordion">
      <button
      @click="toggleStatePanel"
      class="more-info-accordion__button">
        Как найти группу?
      </button>

      <div class="more-info-accordion__panel">
        <p class="more-info-accordion__panel-text">
          Хочу, бля, сказать этому ёбаному Обэме нахуй, блять:
          ебомбаный... Ёбаный ты козёл нахуй, черножопый, блять,
          был бы ты человек нахуй. Твою дочку ебут нахуй, где-нибудь, нахуй, блять, она, наверно,
          учится хуй знает где нахуй, бля,
          а дети гибнут на Украине нахуй, почему так нахуй?
          Почему дети должны... Они даже дети... Вечные дети нахуй,
          это наше будущее нахуй, и хули ты пиздишь ц-сука
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'MoreInfoAccordion',
    methods: {
      toggleStatePanel(e: MouseEvent) {
        const targetNode: Node = e.target as Node;
        const panel: HTMLElement = targetNode.nextSibling as HTMLElement;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = '';
        } else {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
      },
    },
    data() {
      return {
        show: false,
      };
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables';

  .more-info-accordion-container {
    width: 100%;
    margin-bottom: 20px;
  }

  .more-info-accordion {
    margin-bottom: 47px;

    filter: drop-shadow(0 1px 20px rgba(0, 0, 0, 0.1));

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .more-info-accordion__title {
    font-size: 50px;
    font-weight: 700;
    line-height: 62px;
    color: $primaryColor;

    margin: 0 0 35px;
  }

  .more-info-accordion__button {
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
    color: #fff;

    box-sizing: border-box;

    width: 100%;
    padding: 31px 0;

    cursor: pointer;

    background-color: $primaryColor;
    border: 0;
    border-radius: 18px;
    outline: none;
  }

  .more-info-accordion__panel {
    max-height: 0;
    margin-top: -20px;
    overflow: hidden;

    background-color: #fff;
    border-bottom-right-radius: 18px;
    border-bottom-left-radius: 18px;

    transition: max-height 0.2s ease-out;
  }

  .more-info-accordion__panel-text {
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;

    margin: 100px 120px 75px;
  }
</style>
