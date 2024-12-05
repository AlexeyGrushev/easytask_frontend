import React from "react";
import { Link } from "react-router-dom";

const listComponent = (listsDict) => {
  return (
    listsDict.lists.map(list => (
      <Link className="silent-link" id={list.list_id} to={"/tasks/" + list.list_id}>
        <li>
          <span>{list.list_name}</span>
        </li>
      </Link>
    )));
};

export default listComponent;
