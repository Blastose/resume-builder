import Link from "./link";

interface PersonalInfoInterface {
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
}

export default PersonalInfoInterface;
