import React from "react";
import ModelCard from "./ModelCard";

//filter this list based on make_id

function Models({models}){
  return (
    <div>
      <h1>Vehicle Models:</h1>
      {models.map((model) => {
        return <ModelCard key={model.id} model={model}/>
      })}
    </div>
  )
}

export default Models;