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
            linkedin: {
              href: this.props.links.linkedin.href,
              text: this.props.links.linkedin.text,
            },
            github: {
              href: this.props.links.github.href,
              text: this.props.links.github.text,
            },
            website: {
              href: this.props.links.website.href,
              text: this.props.links.website.text,
            },
          }}
          contactInfo={{
            phoneNumber: this.props.contactInfo.phoneNumber,
            email: this.props.contactInfo.email,
          }}
        />
      </div>
    );
  }
}

export default CVPersonalInfo;
