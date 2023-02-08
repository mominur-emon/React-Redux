const n = new Date();
const y = n.getFullYear();
const m = n.getMonth() + 1;
const d = n.getDate();

function Card(props) {
  //props
  const { todoTitle, todoDescription } = props; //destructuring
  return (
    <div className="c1">
      {/* <p>{props.todoTitle}</p>
      <p>{props.todoDescription}</p> */}
      <p>{todoTitle}</p>
      <p>{todoDescription}</p>
      <p>{m + "/" + d + "/" + y}</p>
    </div>
  );
}

export default Card;
