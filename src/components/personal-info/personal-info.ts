import Link from "../interfaces/link";

class PersonalInfo {
  fullName: string;
  links: {
    linkedin: Link;
    github: Link;
    website: Link;
  };
  contactInfo: {
    phoneNumber: string;
    email: string;
  };

  constructor() {
    this.fullName = "";
    this.links = {
      linkedin: {
        href: "",
        text: "",
      },
      github: {
        href: "",
        text: "",
      },
      website: {
        href: "",
        text: "",
      },
    };
    this.contactInfo = {
      phoneNumber: "",
      email: "",
    };
  }
}

export default PersonalInfo;
