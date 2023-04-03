import React,{useRef,useEffect} from 'react'

import Card from '../Card/card'



const Sidebarleft = (props) => {
    const scrollDiv = useRef();
    const {cardinfo,setPage} = props;

    useEffect(()=>{
        var sd = scrollDiv.current;
        sd.addEventListener("scroll",()=>{
            if(sd.scrollHeight - sd.offsetHeight === sd.scrollTop ){
                setPage((prev)=> prev+1);
            }
        })
    },[])

    return (
        <>
            <div className="col-md-3 col-lg-4 mt-3 sidebar-offcanvas h-100 overflow-auto  pl-0" id="sidebar" role="navigation" ref={scrollDiv}>
                <ul className="nav flex-column sticky-top pl-0" style={{ background: "#202124" }}>
                    {cardinfo.map((curVal, id) => {
                        return <Card key={id} myData={curVal} />;
                    })}
                </ul>
            </div>
        </>
    )
}

export default Sidebarleft
