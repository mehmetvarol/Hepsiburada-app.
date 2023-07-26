import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../src/App";

const Content = () => {
  const { linkData, setLinkData } = useContext(MyContext);

  const handleChange = (event) => {
    console.log()
  };

  const handleVote = (itemVote,value) => {
    const updatedDataList = [...linkData];
    updatedDataList[itemVote].points += value;
    setLinkData(updatedDataList);
  };
  const handleRemoved = (index) => {

    const updatedDataList = [...linkData];
    updatedDataList.splice(index, 1);
    setLinkData(updatedDataList);
  }
  return (
    <div className="content">
      <Link to="/add">
        <div className="submit">
          <button>
            <AddIcon className="icon" />
          </button>
          <h4>SUBMIT A LINK</h4>
        </div>
      </Link>
      <hr />
      <div className="main-product">
        <div className="select">
          <Box sx={{ maxWidth: 180 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Order by</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={"mostVoted"}>Most Voted (Z-A)</MenuItem>
                <MenuItem value={"lessVoted"}>Less Voted (A-Z)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="product">
          <ul>
            {linkData?.sort((a, b) => b.points - a.points).map((item, index) => (
              <li key={index} className="product__item">
                <div className="product__item__point">
                  <span>{item.points}</span>
                  <div>POINTS </div>
                </div>
                <div className="product__item__content">
                  <h2 className="title">{item.linkName}</h2>
                  <Link href="#" className="link">
                    ({item.linkUrl})
                  </Link>
                  <div className="buttons">
                    <div className="up" onClick={() => handleVote(index,1)}>
                      <ArrowUpwardIcon />
                      <span>Up Vote</span>
                    </div>
                    <div className="down" onClick={() => handleVote(index,-1)}>
                      <ArrowDownwardIcon />
                      <span>Down Vote</span>
                    </div>
                  </div>
                </div>
                <RemoveCircleIcon className="remove-icon" 
                onClick={() => handleRemoved(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
