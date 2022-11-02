import {defineStore} from "pinia";

export interface BaseHead {
    title?: string;
    description?: string;
    image_seo?: string;
    url_seo?: string;
    theme?: string;
    lang?: string;
    robots?: string;

}

export const useBaseHeadStore = defineStore("BaseHeadStore", {
    state: (): BaseHead => ({
        // const route = useRoute();
        title: '',
        description: '',
        //image seo descriptiva general
        image_seo: '',
        //dominio base
        url_seo: '',
        //default theme
        theme: 'light',
        lang: '',
        robots: "index, follow",
    }),
    actions: {}

});

