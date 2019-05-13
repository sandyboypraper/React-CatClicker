import React, { Component } from "react";
import CatDetails from "./components/CatDetails";
//import "./App.css";
import CatForm from "./components/CatForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CatList from "./components/CatList";
import CatGallery from "./components/CatGallery";
import CatGalleryItems from "./components/CatGalleryItems";

import {Row , Col} from 'reactstrap';



import update from 'react-addons-update';


import './index.css';
  
        // <Header />
        // <CatList />
        // <CatDetails />
        // <CatForm />
        // <CatGalleryItems />
        // <CatGallery />

class App extends Component {


  constructor(props){
    super(props);

    this.state = {
      cats : [],
      Activecat : {},
      formopen : false
    }
  }



  componentDidMount = () => {


     const cats = [
        {
            "CatName" : "Akki",
            "CatClicks" : "3",
            "CatAge" : "12",
            "CatImage" : "https://drive.google.com/uc?id=18BowlpX7i2s9CAT9xWw8bABzTIWOQSX1",
            "CatNickNames" : ["Mota" , "docs" , "pussy"]
        },
         {
            "CatName" : "dukki",
            "CatClicks" : "3",
            "CatAge" : "16",
            "CatImage" : "https://drive.google.com/uc?id=17ddZN4Ca30ds1zKekV0Lv9Nc6VzHU6vW",
            "CatNickNames" : ["croks" , "mini"]
        },
         {
            "CatName" : "mentus",
            "CatClicks" : "19",
            "CatAge" : "21",
            "CatImage" : "https://drive.google.com/uc?id=1E1WK-lCl5plUlbMc_um4XEfe9pmDLEjL",
            "CatNickNames" : ["muchhit" , "cracksi" , "toxyys" , "blackyy"]
        },
         {
            "CatName" : "pikuu",
            "CatClicks" : "12",
            "CatAge" : "14",
            "CatImage" : "https://drive.google.com/uc?id=1CciUjjZKNQYAIc5M3j2Nfw_b_YjuBQ_U",
            "CatNickNames" : ["pikachoo" , "prachuu" , "poooh"]
        },
         {
            "CatName" : "puchhhuu",
            "CatClicks" : "43",
            "CatAge" : "2",
            "CatImage" : "https://drive.google.com/uc?id=17wZz7HKTmJVk_aNLbuPwrdMXXibsuT7-",
            "CatNickNames" : ["puchha" , "puchhu" , "poooo"]
        }

    ]

    if(localStorage.getItem('cats'))
    {
      this.setState({
        cats : JSON.parse(localStorage.getItem('cats')),
        Activecat : JSON.parse(localStorage.getItem('cats'))[0]
      });
    }
    else
    {
      localStorage.setItem('cats' , JSON.stringify(cats));
      this.setState({
        cats,
        Activecat : cats[0]
      });
    }

  }


  changeActiveCat = (Activecat , a) => {

    console.log("clicked");

    if(a == 0)
    {
      this.incClick(Activecat.CatImage , 1);
    }

     this.setState({
        Activecat
     });

   localStorage.setItem('cats' , JSON.stringify(this.state.cats));

  }


  incClick = (CatImage , a) => {
     let index = this.state.cats.findIndex(x => x.CatImage === CatImage);
     let clicks = this.state.cats[index].CatClicks;
     
     clicks++;
     


      let cat = this.state.cats[index];
    let age = cat.CatAge;


    if(clicks > 61)
    {
      age = "Very Old";
    }
    else if(clicks >= 41)
    {
      age = "Old";
    }
    else if(clicks >= 26)
    {
      age = "Middle-Age";
    }
    else if(clicks >= 13)
    {
      age = "Young";
    }
    else if(clicks >= 6)
    {
      age = "Child";
    }
    else
      age = "Infant";


    this.setState({
      cats: update(this.state.cats, {[index] : {
        CatClicks: {$set: clicks},
        CatAge: {$set: age}
    }})
    })

   //  this.upDateAge(index);

     if(a == 1){
     this.setState(prevState => ({
            Activecat: {
                ...prevState.Activecat,
                CatClicks: clicks,
                CatAge : age
            }
        }))
   }

   localStorage.setItem('cats' , JSON.stringify(this.state.cats));

  }


  openForm = (bull) => {

    this.setState({formopen : !bull});

    console.log()
  }


  save = (vname , vclicks , fileId , a) => {
      if(a==0)
      {
          let index = this.state.cats.findIndex(x => x.CatName === vname);

          let link = "https://drive.google.com/uc?id="+fileId;

          let Catlink = this.state.cats[index].CatImage;

           // console.log(fileId);

           this.setState({
              cats: update(this.state.cats, {[index] : {
                CatClicks: {$set: vclicks},
                CatImage : {$set: (fileId=="")?Catlink:link }
            }})
            })

            this.setState(prevState => ({
            Activecat: {
                ...prevState.Activecat,
                CatClicks: vclicks
            }
        }))
      }
      else
      {

         let link = "https://drive.google.com/uc?id="+fileId;
          let cat = {
            "CatName" : vname,
            "CatClicks" : vclicks,
            "CatAge" : "newBorn",
            "CatImage" : link,
            "CatNickNames" : ["puchha" , "puchhu" , "poooo"]
          }

          this.setState({cats : [...this.state.cats , cat]});

          this.setState({Activecat : cat});
      }

       localStorage.setItem('cats' , JSON.stringify(this.state.cats));
       this.setState({formopen : false});
  }


  render = () => {


    return (
      <div>
            <hr/>
            <Header />
            <hr/>

            <br/>

           <Row  className="myboxi">
              <Col sm="12" xs="12" md="6" lg="4" >
              <CatList cats = {this.state.cats} Activecat = {this.state.Activecat} changeActiveCat = {this.changeActiveCat}/>
              </Col>

               <Col sm = "12" xs = "12" md = "6" lg = "4">
              <CatDetails cat = {this.state.Activecat} fun = {this.incClick}/>
              </Col>

              <Col sm = "12" xs = "12" md = "6" lg = "4" className = "z-depth-1">
              <CatForm cat = {this.state.Activecat} funUpdate = {this.save} fun = {this.openForm} bull = {this.state.formopen}/>
              </Col>
           </Row>


           <br/>

           <hr/>
           <CatGalleryItems  className="myboxi"/>
           <hr/>
           <br/>
           <div className="myboxi">
           <CatGallery  cats = {this.state.cats} Activecat = {this.state.Activecat} fun = {this.incClick} fun2 = {this.changeActiveCat}/>
           </div>

      </div>
    );
  }
}

export default App;
