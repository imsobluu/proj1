// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	modules: [
		"@nuxt/eslint",
		"@nuxt/ui",
		"@nuxt/fonts",
		"shadcn-nuxt",
	],
	devtools: { enabled: true },
	css: ["@/assets/css/main.css"],
	compatibilityDate: "2024-11-01",
	vite: {
		plugins: [],
	},
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
	shadcn: {
		/**
     * Prefix for all the imported component
     */
		prefix: "",
		/**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
		componentDir: "./components/ui",
	},
});
