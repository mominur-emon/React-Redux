const n = new Date();
const y = n.getFullYear();
const m = n.getMonth() + 1;
const d = n.getDate();

function Card() {
  //card component create
  return (
    <div className="c1">
      <p>Consetetur no lorem at et clita eirmod magna sed vero..</p>
      <p>{m + "/" + d + "/" + y}</p>
    </div>
  );
}

export default Card;
