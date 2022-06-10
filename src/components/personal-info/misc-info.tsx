import Links from "./links";
import Link from "../interfaces/link";
import ContactInfo from "./contact-info";

function MiscInfo(props: {
  links: { linkedin: Link; github: Link; website: Link };
  contactInfo: { phoneNumber: string; email: string };
}) {
  return (
    <div className="flex gap-9 justify-self-end">
      <ContactInfo
        phoneNumber={props.contactInfo.phoneNumber}
        email={props.contactInfo.email}
      />
      <Links
        linkedin={props.links.linkedin}
        github={props.links.github}
        website={props.links.website}
      />
    </div>
  );
}

export default MiscInfo;
