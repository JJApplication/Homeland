/**
 * vite支持md引入
 */

const mdRE = /\.md$/;
export default function markdownPlugin(): { transform(code, id, opt): void; name: string } {
  return {
    // 插件名称
    name: 'vite:markdown',
    enforce: 'pre',

    // 代码转译，这个函数的功能类似于 `webpack` 的 `loader`
    transform(code, id, opt) {
      if (mdRE.test(id)) {
        console.log(code)
      }
      return code;
    }
  }
}

markdownPlugin['default'] = markdownPlugin