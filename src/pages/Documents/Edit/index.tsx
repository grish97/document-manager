import { FC } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

export const Edit: FC = () => {
  const { documentId } = useParams();

  return (
    <div className="edit-document">
      <h1> Edit Document by ID: {documentId}</h1>
    </div>
  );
};