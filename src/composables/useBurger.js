import { ref } from "vue";
//Los composables nos permiten extraer datos reactivos, métodos y propiedades computadas y reutilizarlos fácilmente entre múltiples componentes
export default  () => {
    const lettuce = ref(true);
    const ketchup = ref(true);
    return {
        lettuce,
        ketchup,
    };
};