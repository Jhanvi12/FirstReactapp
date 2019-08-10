import React from "react";
import{toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
class toastCont extends React.Component{
    notify=()=>{
        console.log('Notify called');
        toast('Its working!');
    }
    render(){
        return(
            <div>
                <button onClick={this.notify}>Notify</button>
              {/* <ToastContainer/> */}
            </div>
        )
    }
}

export default toastCont;