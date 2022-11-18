<template>
  <div class="form-control w-full max-w-xs ">
    <label class="label">
      <span class="label-text-alt">Street name</span>
    </label>
    <input
        type="text"
        :value="streetName"
        @input="$emit('update:streetName', $event.target.value)"
        class="input input-bordered w-full max-w-xs mb-2"
    >
    <label class="label">
      <span class="label-text-alt">Street number</span>
    </label>
    <input
        type="text"
        :value="streetNumber"
        @input="$emit('update:streetNumber', $event.target.value)"
        class="input input-bordered w-full max-w-xs mb-2"
    >
    <label class="label">
      <span class="label-text-alt">City</span>
    </label>
    <input
        type="text"
        :value="city"
        @input="$emit('update:city', $event.target.value)"
        class="input input-bordered w-full max-w-xs mb-2"
    >
    <label class="label">
      <span class="label-text-alt">Country</span>
    </label>
    <input
        type="text"
        :value="country"
        @input="$emit('update:country', $event.target.value)"
        class="input input-bordered w-full max-w-xs mb-2"
    >
    <pre>Street props: {{ props.streetName }}</pre>
  </div>

</template>

<script setup>
const props = defineProps({
  streetName: {
    type: String,
    required: true,
  },
  streetNumber: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  }
})

// defineEmits([
//   'update:streetName',
//   'update:streetNumber',
//   'update:city',
//   'update:country',
// ]);

</script>

<style scoped>

</style>