import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import MklApi from '../api';
import UserContext from '../users/UserContext';
import {VscHeart} from "react-icons/vsc";
import {VscHeartFilled} from "react-icons/vsc";
import './Users.css';


const FavoriteCard = ({id, title, description, protein, carb, fruit, vegetable, fat, sweet, favorite}) => {
    const {currentUser} = useContext(UserContext);
    const [isFavorited, setIsFavorited] = useState(favorite);
    
    console.log(title)

    const handleFavoritedChange = () => {
        let data = {favorite: !favorite};
        MklApi.updateLunch(id, data);
        setIsFavorited(isFavorited => !isFavorited);
    }

    console.log(isFavorited);

    return (
        <div className='FavoriteCard'>
            <div className='FavoriteCard-lunches'>
                <span className='FavoriteCard-title'>
                    <b>{`${title}`} </b>
                    {isFavorited ? (
                        <VscHeartFilled onClick={handleFavoritedChange} />
                    ) : (
                        <VscHeart onClick={handleFavoritedChange} />  
                    )}  
                </span>
                <p className='FavoriteCard-description'>{`${description}`}</p>    
            </div>
            <hr></hr>            
        </div>
    );
}

export default FavoriteCard;