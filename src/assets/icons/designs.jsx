import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faEllipsisVertical,
  faBell,
  faWallet,
  faArrowLeft,
  faEdit,
  faReceipt,
  faArrowUpFromBracket,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { faSafari } from "@fortawesome/free-brands-svg-icons";

export const Settings = () => {
  return <FontAwesomeIcon icon={faGear} cursor="pointer" />;
};

export const Toggle = () => {
  return <FontAwesomeIcon icon={faEllipsisVertical} cursor="pointer" />;
};

export const Bell = () => {
  return <FontAwesomeIcon icon={faBell} cursor="pointer" />;
};

export const Wallet = () => {
  return (
    <FontAwesomeIcon
      icon={faWallet}
      style={{ fontWeight: "900", color: "#000" }}
      cursor="pointer"
    />
  );
};

export const Safari = () => {
  return <FontAwesomeIcon icon={faSafari} cursor="pointer" />;
};

export const ArrowLeft = () => {
  return <FontAwesomeIcon icon={faArrowLeft} cursor="pointer" />;
};

export const Edit = () => {
  return <FontAwesomeIcon icon={faEdit} cursor="pointer" />;
};

export const Receipt = () => {
  return <FontAwesomeIcon icon={faReceipt} cursor="pointer" />;
};

export const Share = () => {
  return <FontAwesomeIcon icon={faArrowUpFromBracket} cursor="pointer" />;
};

export const Remove = () => {
  return (
    <FontAwesomeIcon
      icon={faCircleMinus}
      style={{ color: "red" }}
      cursor="pointer"
    />
  );
};
