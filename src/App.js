import React from "react";

import "./App.css";
import Header from "./components/Header.jsx";
import Feed from "./components/Feed.jsx";
import SearchResult from "./components/SearchResult.jsx";
import VideoDetails from "./components/VideoDetails.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
        <Route path="/video/:id" element={<VideoDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
