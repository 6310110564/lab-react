import React from 'react';
import CharacterCart from './CharacterCard';

export default function WordCard(props){
    return (
      <div>
        { 
            Array.from(props.value).map((c, i) => <CharacterCart value={c} key={i}/>) 
        }
      </div>
 );
}
