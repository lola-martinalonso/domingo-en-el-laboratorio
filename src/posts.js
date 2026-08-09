// Lee todos los .md de src/content/<idioma>/ y los ordena por fecha.
const modules = import.meta.glob('./content/*/*.md', { eager: true });

export function allPosts(lang) {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const parts = path.split('/');
      const file = parts[parts.length - 1];
      return {
        lang: parts[parts.length - 2],
        slug: file.replace(/\.md$/, ''),
        data: mod.frontmatter,
        Content: mod.Content
      };
    })
    .filter(p => !lang || p.lang === lang)
    .filter(p => p.data.draft !== true)
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
}

export function postUrl(p) {
  return '/' + p.lang + '/blog/' + p.slug + '/';
}
