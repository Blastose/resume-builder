import React from "react";
import FullName from "./full-name";
import MiscInfo from "./misc-info";

class CVPersonalInfo extends React.Component {
  render() {
    return (
      <div className="grid grid-cols-2">
        <FullName fullname="Bob Smith" />
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
