export default function getChunkName(id: string) {
  if (id.includes('node_modules/')) {
    return 'vendors';
  }

  if (id.includes('screens/Main/index.vue')) {
    return 'home';
  }

  return 'qwerty';
}