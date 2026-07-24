import { promises as fs } from 'fs';
import * as matter from 'gray-matter';

import { compile } from '@mdx-js/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const relativePath = './src/public/content';

export const MDXFilesPath  = {
  Courses :  `${relativePath}/courses/courses.mdx`,
  Experience: `${relativePath}/experience/experience.mdx`,
  LifeTime: `${relativePath}/lifetime/lifetime-events.mdx`,
  MainTitle: `${relativePath}/main/main-title.mdx`,
  Personal: `${relativePath}/personal/personal.mdx`,
  Technology: `${relativePath}/technology/known-technology.mdx`,
}

const loadDataFrom = async (path: string) => await compile(await fs.readFile(path), {
  jsx: true,
  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
})

export const loadFrontmatter = async (path: string) => matter(await loadDataFrom(path))

export default loadFrontmatter;