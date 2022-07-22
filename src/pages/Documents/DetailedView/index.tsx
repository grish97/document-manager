import { FC } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

export const DetailedView: FC = () => {
  const { documentId } = useParams();

  return (
    <div className="detailed-view">
      <h1>Document Detailed View by ID: {documentId}</h1>
    </div>
  );
};