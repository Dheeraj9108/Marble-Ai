import React, { useState, useEffect, useRef } from 'react'
import "./style.css"
import Main from '../Main/Main'
import Sidebarleft from '../SidebarLeft/Sidebarleft'

const Search = () => {
    const [cardData, setCardData] = useState([]);
    const [page, setPage] = useState(1);
    const scrollDiv = useRef();
    const getCardData = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
        );

        const data = await res.json();
        console.log(data);
        setCardData((prev) => [...prev, ...data]);

    }

    useEffect(() => {
        getCardData();
        // eslint-disable-next-line
    }, [page])

    return (
        <>
            <div className="container-fluid" id="main" >
                <div className="row  row-offcanvas-left vh-100" style={{ background: "black" }} ref={scrollDiv}>
                    <Sidebarleft cardinfo={cardData} setPage={setPage} />
                    <Main />
                </div>
            </div>
        </>
    )
}
export default Search
