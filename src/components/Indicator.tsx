export default function Indicator({
  children,
  length,
}: {
  children: React.ReactNode;
  length: number;
}) {
  const nubmer =
    length !== 0 ? (
      <span className="indicator-item badge badge-secondary">{length} </span>
    ) : (
      <></>
    );

  return (
    <div className="indicator ">
      {children}
      {nubmer}
    </div>
  );
}
