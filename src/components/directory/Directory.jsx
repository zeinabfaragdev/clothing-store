import React from "react";
import MenuItem from "../menu-item/MenuItem";
import { useSelector } from "react-redux";
import "./directory.scss";

const Directory = () => {
  const sections = useSelector((state) => state.directory);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
