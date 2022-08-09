import React, { useState, useEffect} from "react";
import axios from "axios";

function Categories() {
  const url = "https://localhost:7218/api/Categories"

  useEffect(() => {
    axios.get(url).then((response) => {
      setCateg(response.data);
    });
  }, [url]);

  const [categ,setCateg] = useState(null);
  if(categ){
    return (    
      <>
        <div className="container col-md-6 mt-5">
          <ul class="list-group">
            {categ.map(cat=><li className="list-group-item"><a href="#">{cat.name}</a></li>)}
            
          </ul>
        </div>
      </>
    );
  }else{
    return(
      <>
      </>
    )
  }
  
}

export default Categories;
