import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'novojs-kit',
    nav: [
      { title: 'Blog', link: '/cli/guid', activePath: '/cli' },
      { title: 'Blog1', link: '/cli/guid', activePath: '/cli' },
    ],
  },
  // nav: [{ title: 'Blog', link: '/blog' }],
});
