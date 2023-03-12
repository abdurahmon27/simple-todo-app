import React from "react";
import MyButton from "../UI/button";

function Titem(props) {
  return (
    <>
      <tr>
        <td>{props.number}</td>
        <td>{props.post.title}</td>
        <td>{props.post.description}</td>
        <td>
          <MyButton
            className="btn btn-danger"
            onClick={() => props.remove(props.post)}
          >
            delete
          </MyButton>
        </td>
      </tr>
    </>
  );
}

export default Titem;
