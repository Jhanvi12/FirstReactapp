import React,{Component} from "react";
class ChildComp extends Component{

    state={
        valueofField:""
        }
      
   render(){
    const ArrayUsed=[
        {
        a_id:"001",
        b_name:"jhanvi",
        c_approver:"Harishpi",
        },
        {
           a_id:"002",
           b_name:"ritika",
           c_approver:"Ankit",
        },
        {
           a_id:"003",
           b_name:"mansi",
           c_approver:"Dipanjan",
        },
        {
           a_id:"004",
           b_name:"shruti",
           c_approver:"Abhinav",
        }
       ];  
    this.props.ArrayUsedformatching(ArrayUsed);
    const {handleInputChange,name} = this.props;   
       return(
           <div>
              <input type ="text" name={name} onChange={handleInputChange} />        
           </div>
       )
   }
}
export default ChildComp;