function FullName(props: { fullname: string }) {
  return (
    <div className="text-6xl bg-sky-200 font-semibold">{props.fullname}</div>
  );
}

export default FullName;
