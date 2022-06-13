class PersonalInfo {
  fullName: string;
  linkedinHref: string;
  linkedinText: string;
  githubHref: string;
  githubText: string;
  websiteHref: string;
  websiteText: string;
  phoneNumber: string;
  email: string;

  constructor() {
    this.fullName = "Full name";
    this.linkedinHref = "https://www.linkedin.com/feed/";
    this.linkedinText = "name";
    this.githubHref = "https://www.github.com";
    this.githubText = "github_name";
    this.websiteHref = "https://www.google.com";
    this.websiteText = "personalwebsite.com";
    this.phoneNumber = "+1-111-111-1111";
    this.email = "example@example.com";
  }
}

export default PersonalInfo;
