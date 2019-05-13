import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class CatForm extends Component {


  HandelSubmit = (fun2 , name , filee , clicks , prevName) => {

      let vfilee = document.getElementById(filee).value;
      

      let fileId = "";

      if(vfilee != ""){
        let arri = vfilee.split("=")

         fileId = arri[1];
      }
      

      let vname = document.getElementById(name).value;

      let vclicks = document.getElementById(clicks).value;

       console.log(vname + " " + prevName);

      if(vname === "" || fileId === "")
      {
         fun2(prevName , vclicks , fileId , 0);
      }else
      {
        fun2(vname , vclicks , fileId , 1);
      }

  }
  
  render() {

    const {cat} = this.props;

    const {bull} = this.props;


    if(bull == true)
    {
      return (
      <Form>

        <FormGroup>
          <Label>CatName</Label>
          <Input
            bsSize="lg"
            type="name"
            name="name"
            id="exampleName"
            placeholder = {cat.CatName}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleFile">Google Drive Sharable Link</Label>
          <Input type="examplefile" name="file" id="exampleFile" bsSize="lg" />
        </FormGroup>

        <FormGroup>
          <Label for="catclicks">Catclicks</Label>
          <Input
            bsSize="lg"
            type="clicks"
            name="catclicks"
            id="clicks"
            placeholder = {cat.CatClicks}
          />
        </FormGroup>

        <Button className="btn btn-success" onClick = {() => this.HandelSubmit(this.props.funUpdate , "exampleName" , "exampleFile" , "clicks", cat.CatName)}>Submit</Button>
        <a className = "btn" onClick =  {() => this.props.fun(bull)}>Cancel</a>
      </Form>
    );
    }
    else
    {
      return(
           <div className = "center myboxi">
            <a className="btn cyan pulse" onClick = {() => this.props.fun(bull)}>Open Form</a>
            </div>
        );
        
    }

    
  }
}
export default CatForm;
