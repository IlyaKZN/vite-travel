/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    'parser': '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'quotes': ['error', 'single'],
    'semi': [2, 'always'],
    'vue/attribute-hyphenation': ['error', 'always',],
    'vue/first-attribute-linebreak': ['error', {
      'singleline': 'beside',
      'multiline': 'below'
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },      
      'multiline': {
        'max': 1
      }
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'never',
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 0,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'allowEmptyLines': false,
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/no-irregular-whitespace': ['error', {
      'skipStrings': true,
      'skipComments': false,
      'skipRegExps': false,
      'skipTemplates': false,
      'skipHTMLAttributeValues': false,
      'skipHTMLTextContents': false
     }],
  }
};