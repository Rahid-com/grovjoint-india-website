import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { petrol: '#071B2B', charcoal: '#111820', graphite: '#202A34', metal: '#D4A044', signal: '#D62828' } } }, plugins: [] };
export default config;
