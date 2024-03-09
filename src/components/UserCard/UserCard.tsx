import { IUser } from "../../types";
import "./style.css";

export function UserCard(props: IUser) {
  const { image, lastName, firstName, address } = props;
  return (
    <div className="userCard">
      <img className="userPic" src={image} />
      <div className="userInfo">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{address.city}</div>
      </div>
    </div>
  );
}
