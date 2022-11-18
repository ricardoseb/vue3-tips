<template>
  <div>
    <h2>Here are some slots</h2>
    <slot/>
    <slot name="second"/>
    <slot name="third"/>
    <div>
      <!--      cuando agregamos estilos predeterminados, agregamos un div alrededor de un slot-->
      <h2>A wrapped slot</h2>
<!--      se agrega el v-if,ya que si el componente principal no aplica contenido a esa ranura, terminaremos con un div-->
<!--      vacío representado en la página-->
      <div v-if="$slots.default" class="text-primary text-2xl">
        <slot>
          Hey! You forgot to put something in the slot!
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped>

</style>