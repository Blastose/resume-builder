import React from "react";
import FullName from "./full-name";
import MiscInfo from "./misc-info";
import PersonalInfoInterface from "../interfaces/personal-info-interface";

class CVPersonalInfo extends React.Component<PersonalInfoInterface, {}> {
  render() {
    return (
      <div className="grid grid-cols-2">
        <FullName fullname={this.props.fullName} />
        <MiscInfo
          links={{
            linkedin: { href: "https://www.google.com", text: "linkedin" },
            github: { href: "https://www.google.com", text: "github" },
            website: { href: "https://www.google.com", text: "mywebsite" },
          }}
          contactInfo={{
            phoneNumber: "+1-444-444-4444",
            email: "myemail@me.com",
          }}
        />
      </div>
    );
  }
}

export default CVPersonalInfo;
