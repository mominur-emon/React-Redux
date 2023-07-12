const n = new Date();
const y = n.getFullYear();
const m = n.getMonth() + 1;
const d = n.getDate();

function Card(props) {
  const { p, q } = props;
  return (
    <div className="c1">
      <p>{p}</p>
      <p>{q}</p>
      <p>{m + "/" + d + "/" + y}</p>
    </div>
  );
}
export default Card;
