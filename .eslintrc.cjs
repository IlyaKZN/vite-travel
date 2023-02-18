/* eslint-env node */
module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/vue3-strongly-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    tsConfigRootDir: __dirname,
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  plugins: [
    'vue',
    'html',
  ],
  root: true,
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-argument': 0,
    '@typescript-eslint/indent': 0,
    'color-named': 0,
    'no-undef': 0,
    'arrow-body-style': 0,
    camelcase: 0,
    'global-require': 0,
    indent: 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/order': 0,
    'import/extensions': 0,
    'import/first': 0,
    'linebreak-style': 0,
    'max-len': [2, {
      code: 180,
    }],
    'no-console': [0, {
      allow: [
        'warn',
        'error',
      ],
    },
    ],
    'no-debugger': 1,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxBOF: 3,
      maxEOF: 1,
    }],
    quotes: [2, 'single', {
      allowTemplateLiterals: true,
    }],
    'no-restricted-syntax': ['off'],
  
    'vue/attributes-order': [2, {
      order: [
        'DEFINITION', //  'is', 'v-is'
        'LIST_RENDERING', // 'v-for item in items'
        'CONDITIONALS', // 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
        'RENDER_MODIFIERS', // 'v-once', 'v-pre'
        'SLOT', // 'v-slot'
        'OTHER_DIRECTIVES', // 'v-custom-directive'
        'TWO_WAY_BINDING', // 'v-model'
        'EVENTS', // '@click="functionCall"', 'v-on="event"'
        'OTHER_ATTR', // 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
        'CONTENT', // 'v-text', 'v-html'
        'UNIQUE', //'ref', 'key'
        'GLOBAL', //  'id'
      ],
      alphabetical: true,
    }],
    'vue/attribute-hyphenation': [2, 'never', {
      ignore: [],
    }],
    'vue/html-indent': [2, 2, {
      attribute: 0,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'vue/html-closing-bracket-spacing': [2, {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'never',
    }],
    'vue/html-closing-bracket-newline': [2, {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/no-v-html': 0,
    'vue/order-in-components': [2, {
      order: [
        'name',
        'components',
        'mixins',
        ['props', 'propsData'],
        'ROUTER_GUARDS',
        'LIFECYCLE_HOOKS',
        'methods',
        'computed',
        'data',
        'filters',
        'watch',
      ],
    }],
    'vue/script-indent': [2, 2, {
      baseIndent: 1,
      switchCase: 0,
      ignores: [],
    }],
  }
};