import React , {Component} from "react";


import catimg from './images/cat1.jpg'




class CatDetails extends Component {

  render = () => {

    const {cat} = this.props;

   if(cat.CatNickNames == null)
   {
    return(
          <div className="preloader-wrapper active">
            <div className="spinner-layer spinner-red-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
      )
   }
   else{

       const nicknames = cat.CatNickNames.map(name => {
    return(
          <span key = {name}> {name} </span>
      );
   });
    
       return(

                <div className="card animated rollIn">
                 <div className="card-image">
              <img src= {cat.CatImage} onClick = {() => this.props.fun(cat.CatImage , 1)} className = "responsive-img myimage" />
              <span className="card-title">{cat.CatName}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">call_made</i></a>
            </div>
            <div className="card-content">
              <p>{nicknames}</p>
              <p>{cat.CatAge}</p>
              <span>no of times clicked :</span><span> {cat.CatClicks}</span>
            </div>
                </div>

            );


   }
   

  }
  
};

export default CatDetails;
