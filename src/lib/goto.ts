// menu页面跳转

function url(key: string): string {
  if (!key) {
    return '/';
  }
  if (key.startsWith('@')) {
    return key.replace('@', '');
  }
  if (key.startsWith('#')) {
    return `/works/${key.replace('#', '')}`;
  }
  return `/${key}`
}

export default function (key: string) {
  window.location.href = url(key);
}