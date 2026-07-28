type CourseProps = {
  name: string
  description: string
  owner: string
  realized: string
}

export type CourseListProps = {
  id: string,
  language: {
    pl: {
      label: string
      items: CourseProps[]
    },
    en: {
      label: string
      items: CourseProps[]
    }
  }
}


type EducationEventsProps = {
  time: {
    from: string
    to: string
  }
  title: string
  description: string
}

export type EducationProps = {
  id: string
  description: string
  language: {
    pl: {
      title: string
      events: EducationEventsProps[]
    },
    en: {
      title: string
      events: EducationEventsProps[]
    }
  }
}

type ExperienceTechnologyProps = {
  name: string
}

type ExperienceProjectProps = {
  name: string,
  description: string,
  position: string,
  role: string
  technology: ExperienceTechnologyProps []
}

type ExperienceProps = {
  time: {
    from: string,
    to: string,
  }
  company: string,
  projects: ExperienceProjectProps[]
}

export type ExperienceListProps = {
  id: string,
  description: string
  language: {
    pl: {
      label: string
      experience: ExperienceProps[]
    },
    en: {
      label: string
      experience: ExperienceProps[]
    },
  }
}

export type LanguageProps = {
  id: string
  language: {
    en: {
      first: string,
      second: string
    },
    pl: {
      first: string,
      second: string
    }
  }
}

export type IdentityProps = {
  id: string,
  description: string,
  language: {
    en: {
      personal: {
        name: string,
        position: string,
        city: string,
        country: string
      }
      about: {
        header: string,
        content: string
      }
      contact: {
        header: string,
        mail: string,
        phone: string
      }
      social: {
        header: string
      }
      accounts: {
        url: string
      }[]
      sentence: {
        header: string,
        content: string
      }
    }
    pl: {
      personal: {
        name: string,
        position: string,
        city: string,
        country: string
      }
      about: {
        header: string,
        content: string
      }
      contact: {
        header: string,
        mail: string,
        phone: string
      }
      social: {
        header: string
      }
      accounts: {
        url: string
      }[]
      sentence: {
        header: string,
        content: string
      }
    }
  },
}

export type SkillsProps = {
  id: string,
  language: {
    pl: {
      description: string,
      legend: string,
      skills: {
        category: string,
        items: {
          name: string,
          rate: number,
          description: string,
        }[]
      }[]
    },
    en: {
      description: string,
      legend: string,
      skills: {
        category: string,
        items: {
          name: string,
          rate: number,
          description: string,
        }[]
      }[]
    }
  }
}

type ApplicableProps =
  CourseListProps
  | EducationProps
  | ExperienceListProps
  | LanguageProps
  | IdentityProps
  | SkillsProps

export type ReturnProps<T extends ApplicableProps> = {
  frontmatter: T,
  content: string
}