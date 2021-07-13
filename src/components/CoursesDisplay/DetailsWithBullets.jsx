import React from 'react';




const DetailsWithBullets = ({ descriptionwithbullets }) => {
    return (
        <div>

            <li className="details_withoutbullet">
                {descriptionwithbullets} </li>
            <li className="details_withoutbullet">
                {descriptionwithbullets} </li>



        </div>
    );
};

export default DetailsWithBullets;