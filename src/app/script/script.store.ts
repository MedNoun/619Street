import * as a from '../../assets/nav-animations/script.js';
interface Scripts {
    name: string;
    src: string;
}
export const ScriptStore: Scripts[] = [
    { name: 'nav', src: '../../assets/nav-animations/script.js' },
    { name: 'perlin', src: '../../assets/nav-animations/perlin.js' },
    { name: 'footer', src: '../../assets/footer/script.js' }
];
