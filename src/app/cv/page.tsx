import React from 'react';

import { LanguageSwitch } from '@/components/button/switch/language-switch';

import CourseList  from '@/components/courses/course-list';
import Education from '@/components/education/education';
import Experience from '@/components/experience/experience';
import Identity from '@/components/identity/identity';
import Skills from '@/components/skills/skills';
import { getAllCourses, getAllEducationEvents, getAllExperiences, getPersonalData, getTechnologySkills } from '@/lib/content-loading/content-loading';
import { CVLayout } from '@/app/cv/layout';


export default async function CV() {

  const courses  =   getAllCourses()
  const experiences =   getAllExperiences()
  const educations  =  getAllEducationEvents()
  const personal  =  getPersonalData()
  const skills =  getTechnologySkills()

  return (
      <CVLayout>
        <LanguageSwitch sticky={true} />
        <Identity identity={personal}/>
        <Experience experiences={experiences} />
        <Education education={educations}/>
        <Skills skillset={skills}/>
        <CourseList courses={courses}/>
      </CVLayout>
  );
};