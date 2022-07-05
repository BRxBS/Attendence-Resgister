import "./styleCard.css";
import { MapPinLine, UserCircle, Bird } from "phosphor-react";

export function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.avatar} alt="your Github avatar" />
        <strong className="name">{props.name}</strong>
        <div className="bird">

        <Bird size={40} />
        </div>
        <strong className="location">
          <MapPinLine size={25} />
          {props.location}
        </strong>
        <h3 className="followers">
          <UserCircle size={25} />
          {props.followers}
        </h3>
      </div>
    </>
  );
}
