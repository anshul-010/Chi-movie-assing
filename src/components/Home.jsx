import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/home.css";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const wishList = JSON.parse(localStorage.getItem("favorites")) || [];
  const [state,setState] = useState(true)


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  function fetchData(searchTerm = "kabhi") {
    setLoading(true);
    axios
      .get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=b60f577d`)
      .then((res) => {
        setData(res.data.Search);
        setFilteredData(res.data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();

  }, [state]);
  console.log(wishList)
  function handleSubmit(e){
    e.preventDefault()
    fetchData(search)

  }


  function handleFilter(e) {
    setLoading(true);
    let currentData = [...data];

    if (e.target.value === "2000") {
      let filterData = currentData.filter((ele) => ele.Year < "2000");
      setFilteredData(filterData);
    } else if (e.target.value === "2000-1000") {
      let filterData = currentData.filter(
        (ele) => ele.Year >= "2000" && ele.Year < "2010"
      );
      setFilteredData(filterData);
    } else if (e.target.value === "2010") {
      let filterData = currentData.filter((ele) => ele.Year >= "2010");
      setFilteredData(filterData);
    } else {
      setFilteredData(currentData);
    }

    setLoading(false);
  }

  function addToWishlist(data) {
    const isDuplicate = wishList.find((item) => item.imdbID === data.imdbID);

    if (!isDuplicate) {
      const updatedWishlist = [...wishList, data];
      localStorage.setItem("favorites", JSON.stringify(updatedWishlist));
      alert("Movie added to favorites list");
      setState(!state)
    } else {
      alert("Movie already in favorites list");
    }
  }
  

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <div className="navbar">
        <div className="logo">Movies</div>
          <form action="" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Search by Movie Name"
            onChange={(e) => setSearch(e.target.value)}
          />
          </form>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li className="lists">
            <Link to='/favorite' style={{textDecoration:"none"}}><p>Favorite</p></Link>  
            <Link to='/login' style={{textDecoration:"none"}}><p>Login</p></Link>
          </li>
        </ul>
      </div>
      <div id="maindiv">
        <div className="sidebar">
          <select name="" id="select" onChange={handleFilter}>
            <option value="">Filter by year</option>
            <option value="2000">before 2000</option>
            <option value="2000-1000">2000-2010</option>
            <option value="2010">After 2010</option>
          </select>
        </div>
        <div className="container">
          {filteredData?.map((ele) => (
            <div className="movies" key={ele.imdbID}>
            <Link to={`/contact/${ele.imdbID}`}><img className="posters" src={ele.Poster} alt="" /></Link>
            <p>Movie Name: {ele.Title}</p>
            <p>Year of Release: {ele.Year}</p>
            <p>Type: {ele.Type}</p>
            <button className="wishlist" onClick={()=>addToWishlist(ele)}>Add to wishlist</button>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};
