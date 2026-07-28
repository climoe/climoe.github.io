'use server'
import { promises as fs } from "fs";
import path from "node:path";
import matter from "gray-matter";

import {
  CourseListProps,
  EducationProps,
  ExperienceListProps,
  IdentityProps,
  LanguageProps,
  ReturnProps,
  SkillsProps
} from '@/lib/content-loading/content-types';

const CONTENT_DIR = path.join(process.cwd(), "src", "public", "content");
const COURSES_DIR = path.join(CONTENT_DIR, "courses");
const EDUCATION_DIR = path.join(CONTENT_DIR, "education");
const EXPERIENCE_DIR = path.join(CONTENT_DIR, "experience");
const MAIN_TITLE_DIR = path.join(CONTENT_DIR, "main");
const PERSONAL_DIR = path.join(CONTENT_DIR, "personal");
const TECHNOLOGY_DIR = path.join(CONTENT_DIR, "technology");


export const getAllCourses  =  async () : Promise<ReturnProps<CourseListProps>> => {
    const raw = fs.readFile(path.join(COURSES_DIR, 'courses.mdx'), "utf-8");
    const { data, content } = matter(await raw);
    return {
      frontmatter: data as CourseListProps,
      content
    }
  }

export const getAllEducationEvents = async (): Promise<ReturnProps<EducationProps>> => {
  const raw = fs.readFile(path.join(EDUCATION_DIR, 'education.mdx'), "utf-8");
  const { data, content } = matter(await raw);
  return {
    frontmatter: data as EducationProps,
    content
  }
}

export const getAllExperiences = async (): Promise<ReturnProps<ExperienceListProps>>  => {
  const raw = fs.readFile(path.join(EXPERIENCE_DIR, 'experience.mdx'), "utf-8");
  const { data, content } = matter(await raw);
  return {
    frontmatter: data as ExperienceListProps,
    content,
  }
}

export const getMainTitleData = async (): Promise<ReturnProps<LanguageProps>> => {
  const raw = fs.readFile(path.join(MAIN_TITLE_DIR, 'main-title.mdx'), "utf-8");
  const { data, content } = matter(await raw);
  return {
    frontmatter: data as LanguageProps,
    content,
  }
}

export const getPersonalData = async (): Promise<ReturnProps<IdentityProps>> =>{
  const raw = fs.readFile(path.join(PERSONAL_DIR, 'personal.mdx'), "utf-8");
  const { data, content } = matter(await raw);
  return {
    frontmatter: data as IdentityProps,
    content,
  }
}

export const getTechnologySkills = async(): Promise<ReturnProps<SkillsProps>> => {
  const raw = fs.readFile(path.join(TECHNOLOGY_DIR, 'known-technology.mdx'), "utf-8");
  const { data, content } = matter(await raw);
  return {
    frontmatter: data as SkillsProps,
    content,
  }
}
