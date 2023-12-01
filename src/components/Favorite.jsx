import React, { useEffect, useState } from 'react'
import "../styles/home.css";
import { Link } from 'react-router-dom';


export const Favorite = () => {
    const [state,setState] = useState(true)
    const wishList = JSON.parse(localStorage.getItem("favorites")) || [];

    function DeleteWishlist(data){
        const newWishlist = wishList.filter((item)=>item.imdbID !== data.imdbID)
        // const updatedWishlist = [...wishList, data];
        localStorage.setItem("favorites", JSON.stringify(newWishlist));
        alert("Movie Removed");
        setState(!state)
        // window.location.reload()
    }

    useEffect(()=>{

    },[state]);

  return (
    <div>
        <p className='Fav-Movie'>Your Favorite Movies</p>
        <div className="container" style={{margin:"auto"}}>
          {wishList?.map((ele) => (
            <div className="movies" key={ele.imdbID}>
            <Link to={`/contact/${ele.imdbID}`}><img className="posters" src={ele.Poster} alt="" /></Link>
            <p>Movie Name: {ele.Title}</p>
            <p>Year of Release: {ele.Year}</p>
            <p>Type: {ele.Type}</p>
            <button className="wishlist" onClick={()=>DeleteWishlist(ele)}>Remove</button>
          </div>
          ))}
        </div>
    </div>
  )
}
