import React from "react";
import ModelCard from "./ModelCard";

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