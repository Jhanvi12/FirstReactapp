import React from "react";
import ChildComp from "../../common/ChildComp";
import globalObj from "../GlobalObj";
class FormMap extends React.Component{

  constructor(props) {
      super(props)
     
      this.state = {
       keywords: '',
       city: '',
       date: ''  ,
      
      }
 this.formSubmit=this.formSubmit.bind(this);
     }
     formSubmit=()=>{
       console.log('clicked',this.state.valueOfField,globalObj);
      
       console.log('the final state before submit is',this.state);
       const payload = {};
       payload.name = this.state.valueOfField;
       payload.id=globalObj.a_id;
       payload.app_name=globalObj.c_approver;
       if (payload) {
        fetch('https://reqres.in/api/users', {
          method: "POST",
          body: JSON.stringify(payload)
        }).then(function (response) {
          console.log(' response.json();', response.json());
          return response;
        }).then(function (result) {
    console.log('result is',result);
         
        });
      }
    //    $.ajax({
    //     url: "https://reqres.in/api/users",
    //     type: "POST",
    //     data: {
    //         name: "paul rudd",
    //         movies: ["I Love You Man", "Role Models"]
    //     },
    //     success: function(response){
    //         console.log(response);
    //     }
    // });
    
     }
     ArrayUsedformatching=(arrayget)=>{
   
     console.log(arrayget);
     
     arrayget.map((item)=>
     {
       if(item.b_name === this.state.valueOfField){
        globalObj.a_id= item.a_id;
        globalObj.c_approver=item.c_approver;
         console.log(' matched',globalObj);
       }else{
         console.log('not matched')
       }
     });
    console.log('outside the loop',globalObj);

     }
    handleInputChange(e) {
        console.log(e,e.target.name,e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        });
      
      console.log('here clicked clicktosetstate',this.state.valueOfField);
     
    }
   
    
  render(){
   
    console.log(this.state,globalObj);   
   
      return(
          <div>
          <ChildComp 
          name="valueOfField"
          value={this.state.keywords}
          handleInputChange={this.handleInputChange.bind(this)}
          ArrayUsedformatching={this.ArrayUsedformatching}/>
             <button type="button" onClick={this.formSubmit}>Click</button>
          </div>
       
      )
  }
}
export default FormMap;