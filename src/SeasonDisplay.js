import React from 'react';
import './SeasonDisplay.css'

const seasonConfig ={
    summer:{
        text:'Lets hit the beach!',
        iconName:'sun'
    },
    winter:{
        text:'Brrrr it is cold!',
        iconName:'snowflake'
    }
}

const getSeason = (lat,month)=>{
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    }
    else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) =>{

const season = getSeason(props.lat, new Date().getMonth())
const {text, iconName} = seasonConfig[season]
// const text = season === 'winter' ? 'Brrrrr, it is chilly' :'Lets hit the beach'
// const icon = season === 'winter' ? 'snowflake' : 'sun'





    return <div className={`season-display ${season}`}>
    <i className = {`${iconName} icon massive icon-left`}/>
    <h1>{text}</h1>
    <i className = {`${iconName} icon massive icon-right`}/>
    </div>
}

export default SeasonDisplay;