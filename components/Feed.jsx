'use client';

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick}) => {
  return(
    <div className="mt-16 prompt_layout">
      {
        data && data.map((log) => (
          (<PromptCard
          key={log._id}
          log={log}
          handleTagClick={handleTagClick}
          />)
          // (
          //   console.log(log)
          // )
        ))
      }
      {/* {
      // All Working here
      data ? console.log(data[0].image) : console.log('nothing')
      } */}
    </div>
  )
}

const Feed = () => {
  const [allLogs, setAllLogs] = useState();

const [searchText, setSearchText] = useState('');

const handleTagClick = (e) => {
  
}

const fetchLogs = async () => {
  const response = await fetch('/api/log');
  const data = await response.json();

  setAllLogs(data);
}

useEffect(() => {
  fetchLogs();
}, []);


  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text"
          placeholder="Search for files using file numbers, descriptions or keywords"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          // onBlur={() => {
          //   const filtered = allLogs.filter((item) => item.post && item.post.toString().includes(searchText))
          //   setAllPosts(filtered)
          // }}
          required
          className="search_input peer"
        />
      </form>
      {
        allLogs ? (
          (<PromptCardList
          data={allLogs}
          handleTagClick={handleTagClick}
          />)
        ) : (
            <h1> Loading Latest Registries... </h1>
        )
      }
    </section>
  )
}

export default Feed