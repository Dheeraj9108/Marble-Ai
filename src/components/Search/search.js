import React, { useState, useEffect, useRef } from 'react'
import "./style.css"
import Main from '../Main/Main'
import Sidebarleft from '../SidebarLeft/Sidebarleft'
import { useSelector } from 'react-redux'

const Search = () => {
    const [cardData, setCardData] = useState([]);
    const [page, setPage] = useState(1);
    const scrollDiv = useRef();
    const {title} = useSelector((state)=>state.searchred)
    const getCardData = async () => {
        const res = await fetch(
            `https://shreyas186.github.io/SampleApi/db.json`
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
