import data from "../data.json";
import Jobs from "../components/Jobs";
import { useState } from "react";
import Header from "../components/Header";
import { Button, Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [filterKeywords, setfilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const handleLogout = ()=>{
    navigate("/");
  }

  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div>
      <div className="header">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            padding: 1.5,
            color: "white",
            fontWeight: "bold",
          }}
        >
          List of Jobs
          <Button
            sx={{ marginLeft: "50%", color: "white", fontWeight: "bold" }}
            size="large"
            onClick={()=>{handleLogout()}}
          >
            LogOut
          </Button>
        </Typography>
      </div>

      {/* <Search setSearchKeyword={setSearchKeyword} /> */}

      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
}

export default Home;
