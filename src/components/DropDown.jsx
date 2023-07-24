import "../styles/dropdown.css";

const DropDown = () => {
  return (
    <>
      <div className="dropdown-container">
        <div className="dropdown">
          <p className="edit">Edit</p>
          <p className="courier">Courier info</p>
          <p className="share">Share</p>
          <p className="remove">Remove</p>
        </div>
      </div>
    </>
  );
};

export default DropDown;
