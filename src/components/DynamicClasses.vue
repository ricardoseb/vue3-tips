<template>
<!--  If I just need one class on an element, I use the logical AND to trigger it:-->
  <div :class="disabled && 'disabled-component'">
    Sometimes this component is disabled. Other times it isn't.
  </div>
  <div
      :class="disabled ? 'disabled-component' : 'not-yet-disabled'"
  >Sometimes it's a decision between two classes, so I'll use a ternary</div>
  <div :class="[
  isPrimary && 'bg-primary',
  isCapitalized && 'capitalize',
  isWhiteText && 'text-white',
  ]"
  >Sometimes I need to apply multiple classes, so I'll use an array</div>
  <div
      :class="{
'bg-primary': isPrimary,
'capitalize': isCapitalized,
'text-white': isWhiteText,
}">Sometimes I need to apply multiple classes, so I'll use an object</div>
  <div :class="computedClasses" >
    Sometimes I need to apply multiple classes, so I'll use a computed property
  </div>
  <div class="reactive-css">
    Reactive CSS classes are a great way to make your components more dynamic.
  </div>
</template>

<script setup>
const computedClasses = computed(() => {
  return {
    'bg-primary': isPrimary,
    'capitalize': isCapitalized,
    'text-white': isWhiteText,
  }
})
const isWhiteText = computed(() => true);
const isCapitalized = computed(() => true);
const isPrimary = ref(true);
const isDisabled = ref(true);
const isLoading = ref(false);
const disabled = computed(() => isDisabled.value || isLoading.value);
const bgColor = ref('red');
</script>

<style scoped>
.disabled-component {
  background-color: gray;
  color: darkgray;
  cursor: not-allowed;
}
.reactive-css {
  background-color: v-bind(bgColor);
}
</style>
