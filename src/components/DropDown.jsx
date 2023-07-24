import { Edit, Receipt, Remove, Share } from "../assets/icons/designs";
import "../styles/dropdown.css";

const DropDown = () => {
  return (
    <>
      <div className="dropdown-container">
        <div className="dropdown">
          <p className="edit">
            Edit
            <Edit />
          </p>
          <p className="courier">
            Courier info
            <Receipt />
          </p>
          <p className="share">
            Share
            <Share />
          </p>
          <p className="remove">
            Remove
            <Remove />
          </p>
        </div>
      </div>
    </>
  );
};

export default DropDown;
