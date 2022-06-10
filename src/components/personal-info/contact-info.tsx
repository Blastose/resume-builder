function ContactInfo(props: { phoneNumber: string; email: string }) {
  return (
    <div className="flex flex-col">
      <div>{props.phoneNumber}</div>
      <div>{props.email}</div>
    </div>
  );
}

export default ContactInfo;
