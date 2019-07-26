import React from 'react';

function Smurfs(props) {
    return(
        <div>
            {props.smurfs.map(smurf => 
                <div key={smurf.id}>
                    <h3>{smurf.name}</h3>
                    <h4>{smurf.age} years old and {smurf.height} tall </h4>
                </div>    
            )}
        </div>
    )
}

export default Smurfs