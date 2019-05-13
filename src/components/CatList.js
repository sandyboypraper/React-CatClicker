import React, { Component } from "react";

import M from 'materialize-css';

class CatList extends Component {


   componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }



  render = () => {

    if(this.props.Activecat != null)
    {
    var stylec = "collection-item white";

    

    const listi = this.props.cats.map(cat => {

      if(this.props.Activecat.CatImage == cat.CatImage)
    {
      stylec = "collection-item indigo lighten-5";
    }else
    {
      stylec = "collection-item white";
    }

      return(
          <a href="#" key = {cat.CatImage} onClick = {() => this.props.changeActiveCat(cat)} className={stylec}><span className="new badge">{cat.CatClicks}</span>{cat.CatName}</a>
        );

    });

    return (
       <div>
           <div className="collection mylist">
           {listi}
            </div>
       </div>
    );
     }
     else
     {
      return(
            <div>
                Loading ...
            </div>
        );
     }
  }
}
export default CatList;
