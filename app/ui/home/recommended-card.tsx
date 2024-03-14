export default function RecommendedCard(props: {
  name: string;
  target: string;
  bodyPart: string;
}) {
  return (
    <div className="rounded-lg w-full border-solid border-2 border-sky-950 p-3">
      <p className="text-xl">
        <strong>{props.name}</strong>
      </p>
      <p>Target: {props.target}</p>
      <p>Body Part: {props.bodyPart}</p>
    </div>
  );
}
