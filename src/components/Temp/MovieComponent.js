import React from "react";
import MovieCard from "./moviecard";


const MovieComponent = (props) => {
    const { movieInfo, handelInfiniteScroll, hasMore } = props;
    return (
        <div className="wrapper">
            <div className="container">
                <h1>List of cards</h1>
                <div className="grid grid-three-column">
                    {movieInfo.map((curVal, id) => {
                        return <MovieCard key={id} myData={curVal} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default MovieComponent;