import React, { useState, useEffect, useRef } from "react";
import MovieComponent from "./MovieComponent";
import "./style.css"



const Temp = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore,setHasMore] = useState(true);
  const scrollDiv = useRef();
 

  const getCardData = async () => {
    

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    const data = await res.json();
    console.log(data);
    setCard((prev)=>[...prev,...data]);
    // setLoading(false);
  };

  useEffect(() => {
    getCardData();
    // eslint-disable-next-line
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      // if (
        // window.innerHeight + document.documentElement.scrollTop + 1 >=
        // document.documentElement.scrollHeight
        // sd.scrollHeight == sd.scrollTop
      // ) {
        // setLoading(true);
        setPage((prev) => prev + 1);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handelInfiniteScroll);
  //   return () => window.removeEventListener("scroll", handelInfiniteScroll);
  // }, []);

  useEffect(()=>{
    var sd = scrollDiv.current
    sd.addEventListener("scroll",()=>{
      if(sd.scrollHeight - sd.offsetHeight === sd.scrollTop){
        setPage((prev) => prev + 1);
      }
    });
    return () => sd.removeEventListener("scroll", handelInfiniteScroll);
  },[])

  return (
    <>
    <div className="left" ref={scrollDiv}>
        <MovieComponent movieInfo={card} handelInfiniteScroll={handelInfiniteScroll} hasMore={hasMore}/>
    </div>
    </>
  )
}

export default Temp