import { MouseEvent, useState } from "react";

function ListGroup() {
  const items = [
    "18",
    "San Ramon, California",
    "Studying at Brown University",
    "Concentrating in Computer Science-Economics",
    "Curious",
  ];
  const [selectedIndex, setSelectedIndex]  = useState(-1);



  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1> Alex's Personal Website</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => { setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
