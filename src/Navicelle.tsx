import React, { Component } from 'react'

function Navicelle() {

    const boats: any[] = [];
    
        fetch('https://api.spacexdata.com/v3/capsules')
        .then(res => res.json())
        .then((data) => {
            data({ boats: data })
          })
        .catch(console.log)
  

    return(
        <div>
            <h2>Navicelle</h2>

            {boats.map((boat) => (

            <div className="card">navicelle...
              <div className="card-body">
                <h5 className="card-title">{boat.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{boat.email}</h6>
                <p className="card-text">{boat.company.catchPhrase}</p>
              </div>
            </div>
            ))}
        </div>
    )
}
export default Navicelle;