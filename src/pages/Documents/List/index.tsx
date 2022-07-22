import { FC } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const List: FC = () => {
  return (
    <div className="dashboard">
      <h1>Documents List</h1>

      <p>This is demo page of documents and not any functional part related documents</p>

      <h2>Document routes</h2>

      <ul>
        <li>
          <Link to="/documents/create">Create Document</Link>
        </li>
        <li>
          <Link to="/documents/edit/1005">Edit Document by Id</Link>
        </li>
        <li>
          <Link to="/documents/1005">Document Detailed View</Link>
        </li>
      </ul>
    </div>
  );
};