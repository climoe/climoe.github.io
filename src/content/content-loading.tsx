import {read} from 'to-vfile'
import {matter} from 'vfile-matter'


import { compile } from '@mdx-js/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const relativePath = 'src/compoenents';

export const MDXFilesPath  = {
  Courses :  `${relativePath}/courses.mdx`,
  Experience: `${relativePath}/experience.mdx`,
  Technology: `${relativePath}/known-technology.mdx`,
  LifeTime: `${relativePath}/lifetime-events.mdx`,
  MainTitle: `${relativePath}/main-title.mdx`,
  Personal: `${relativePath}/personal.mdx`,
  SocialAccounts: `${relativePath}/social-accounts.mdx`,
}

const loadDataFrom = async (path: string) => await compile(await read(path), {
  jsx: true,
  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
})

export const loadFrontmatter = async (path: string) => matter(await loadDataFrom(path))

export default loadFrontmatter;