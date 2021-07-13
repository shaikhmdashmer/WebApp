import React from 'react';



const Banner = ({image,title}) => {
    return (
        <>
            <h1 className="headerclass">{title}</h1>

            <img src={image} className="cseimage"></img>

        </>
    );
};

export default Banner;