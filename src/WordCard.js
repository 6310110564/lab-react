import React from 'react';
import CharacterCart from './CharacterCard';
/*round2*/
export default function WordCard(props){

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) }
    return (
        <div>
          { 
            Array.from(props.value).map((c, i) => 
                <CharacterCart value={c} key={i} activationHandler={activationHandler}/>
            ) 
          }
        </div>
 );
}
