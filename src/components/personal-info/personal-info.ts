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
    this.fullName = "Bob Smith";
    this.linkedinHref = "https://www.linkedin.com/feed/";
    this.linkedinText = "bobsmith";
    this.githubHref = "https://www.github.com";
    this.githubText = "bob_smith12";
    this.websiteHref = "https://www.google.com";
    this.websiteText = "mywebsite.com";
    this.phoneNumber = "+1-111-111-1111";
    this.email = "example@example.com";
  }
}

export default PersonalInfo;
