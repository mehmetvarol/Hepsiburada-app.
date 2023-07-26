import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import "./Add.scss";

const Add = () => {
  const { linkData, setLinkData } = useContext(MyContext);
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLinkData([...linkData, { linkName, linkUrl, points: 0 }]);
    
    setLinkName("")
    setLinkUrl("")
  };

  return (
    <div className="add">
      <Link to="/">
        <div className="return">
          <ArrowBackIcon />
          <span>Return to List</span>
        </div>
      </Link>
      <h2>Add New Link</h2>
      
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="link-name">
          <div>Link Name:</div>
          <TextField
            id="name"
            label="Link Name"
            variant="outlined"
            size="small"
            onChange={(e) => setLinkName(e.target.value)}
            value={linkName}
          />
        </div>
        <div className="link-url">
          <div>Link URL:</div>
          <TextField
            id="url"
            label="Link Url"
            variant="outlined"
            size="small"
            onChange={(e) => setLinkUrl(e.target.value)}
            value={linkUrl}
          />
        </div>
        <button className="add-button" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
