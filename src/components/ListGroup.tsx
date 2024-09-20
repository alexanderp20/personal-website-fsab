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
  

  const openInNewTab = (url:string) => {
    window.open(url);
  }

  return (
    <>
      <h1> Alex's Personal Website</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => { setSelectedIndex(index), openInNewTab("https://www.linkedin.com/in/alexander-pak-11964b1b8/")}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
