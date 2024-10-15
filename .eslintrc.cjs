module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', "plugin:vue/vue3-recommended" ],
  rules: {
    // ESLint Plugin Vue Rules
    'no-undef': 0, // disables the rule for undefined vars
    'vue/multi-word-component-names': 0, // you told me not to do thys >:C
    "vue/no-unused-vars": 0, // disables the rule for unused vars
    "no-unused-vars": 0, // disables the rule for unused vars
    // Vue plugin overrides
    "vue/no-deprecated-filter": ["off"],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {"max": 5},
      "multiline": {"max": 1},
    }],
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "beside",
      "multiline": "below",
    }],
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "never",
    }],
    "vue/multiline-html-element-content-newline": ["error", {
      "ignoreWhenEmpty": false,
      "ignores": [],
      "allowEmptyLines": false,
    }],

    // ESLint Logic Rules
    "no-await-in-loop": ["warn"],
    "no-prototype-builtins": ["off"],
    // ESLint Layout & Formatting Rules
    "array-bracket-newline": ["error", "consistent"],
    "arrow-spacing": ["error", {
      "before": true,
      "after": true,
    }],
    "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", {
      "before": false,
      "after": true,
    }],
    "func-call-spacing": ["error", "never"],
    "function-call-argument-newline": ["error", "consistent"],
    "implicit-arrow-linebreak": ["error", "beside"],
    "indent": ["error", 2],

    "vue/require-prop-types": ["off"],
    "vue/no-v-html": ["off"],


    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error"],
    "no-trailing-spaces": ["error"],
    "space-in-parens": ["error", "never"],
    "space-before-blocks": ["error", {
      "functions": "never",
      "keywords": "never",
      "classes": "always",
    }],
    "space-before-function-paren": ["error", "never"],
    "object-curly-spacing": ["error", "never"],
    "object-property-newline": ["error", {allowAllPropertiesOnSameLine: true}],
  },

};