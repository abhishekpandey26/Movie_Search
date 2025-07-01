import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const fetchSearch = data.filter((item) => {
    const searchTerm = search.toLowerCase();
    if (searchTerm === "") {
      return true;
    }
    return item.Title.toLowerCase().includes(searchTerm);
  });
  const fetchdata = async () => {
    try {
      const apiKey = "dd4ad9fd";
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
      );
      const result = await response.json();
      setData(result.Search || []);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchdata();
  }, [search]);
  console.log(search);

  return (
    <div>
      <Navbar setSearch={setSearch}></Navbar>
      <Card fetchSearch={fetchSearch}></Card>
    </div>
  );
}

export default App;
