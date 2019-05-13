import React , {Component} from "react";


class MiniCatDetails extends Component {

  render(){

    if(this.props.Activecat != null && this.props.cat != null)
    {
    const {cat} = this.props;

    const a = 0;

    if(this.props.Activecat.CatImage == cat.CatImage)
    {
      a = 1;
    }
    
    return(

          <div className="card">
            <div className="card-image">
              <img src= {cat.CatImage} onClick = {() => {this.props.fun2(cat  , a) ; this.props.fun(cat.CatImage , a)}} className = "responsive-img myimage" />
              <span className="card-title">{cat.CatName}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">call_made</i></a>
            </div>
            <div className="card-content">
              <span>no of times clicked :</span><span> {cat.CatClicks}</span>
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
  
};

export default MiniCatDetails;