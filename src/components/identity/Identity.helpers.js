
export const  IDENTITY_FIELDS_PL = `fragment identityFieldsPl on MarkdownRemarkFrontmatterLanguagePl {
    contact {
      header
      mail
      phone
    }
    address {
      header
      content
    }
    about {
      header
      content
    }
    personal {
      position
      name
      country
      city
    }
    social {
      header
      accounts {
          label
        url
      }
    }
  }
`;

export const IDENTITY_FIELDS_EN = `fragment identityFieldsEn on MarkdownRemarkFrontmatterLanguageEn {
    contact {
      header
      mail
      phone
    }
    address {
      header
      content
    }
    about {
      header
      content
    }
    personal {
      position
      name
      country
      city
    }
    social {
      header
      accounts {
        label
        url
      }
    }
  }`;