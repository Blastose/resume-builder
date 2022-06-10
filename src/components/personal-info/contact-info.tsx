import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactInfo(props: { phoneNumber: string; email: string }) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={["fas", "phone"]} />
        {props.phoneNumber}
      </div>
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={["fas", "envelope"]} />
        <a href={"mailto:" + props.email} className="text-blue-600">
          {props.email}
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
