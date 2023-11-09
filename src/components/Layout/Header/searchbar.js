import React from 'react';
import { InputBase, IconButton, Paper } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper component="form" style={{ boxShadow: "none", backgroundColor: "#F5F5F5", borderRadius: "25px"}}>
      <IconButton style={{color: "black"}}>
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search"
        style={{textAlign:"center", fontSize: "16px",width: "140px"}}
      />
    </Paper>
  );
};

export default SearchBar;
