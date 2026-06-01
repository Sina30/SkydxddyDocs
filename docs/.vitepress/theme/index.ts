import DefaultTheme from 'vitepress/theme'
import '@red-asuka/vitepress-plugin-tabs/dist/style.css'
import { Tab, Tabs } from "vue3-tabs-component";
import './style.css';
import ScriptGallery from './components/ScriptGallery.vue'

export default {
    extends: DefaultTheme,
    async enhanceApp({ app }: any) {
        app.component("Tab", Tab);
        app.component("Tabs", Tabs);
        app.component("ScriptGallery", ScriptGallery);
    },
}