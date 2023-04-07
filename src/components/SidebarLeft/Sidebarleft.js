import React,{useRef,useEffect} from 'react'

import Card from '../Card/card'
import { useSelector } from 'react-redux';


const Sidebarleft = (props) => {
    const scrollDiv = useRef();
    const {cardinfo,setPage} = props;
    const {title} = useSelector((state)=>state.searchred);

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
            <div className="col-md-3 col-lg-4 mt-3 sidebar-offcanvas h-100 overflow-auto  pl-0" id="sidebar" role="navigation" ref={scrollDiv} style={{zIndex:"1"}}>
                <ul className="nav flex-column sticky-top pl-0" style={{ background: "#202124" }}>
                    {cardinfo.filter((Val)=>{
                        if(title === ''){
                            return Val
                        }else if(Val.title.toLowerCase().includes(title.toLowerCase())){
                            return Val
                        }
                    })
                    .map((curVal, id) => {
                        setTimeout(()=>{},50000)
                        return <Card key={id} myData={curVal} />;
                    })}
                </ul>
            </div>
        </>
    )
}

export default Sidebarleft
