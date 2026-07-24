declare module '*.mdx' {
  import { MDXProps } from 'mdx/types'
  import {} from 'remark-mdx-frontmatter'
  import { JSX } from 'react';
  const MDXComponent: (props: MDXProps) => JSX.Element
  export const frontMatter: { [key: string]: any }
  export default  MDXComponent
}