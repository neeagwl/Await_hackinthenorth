import React,{Components} from 'react';
import Card from "./CardUI";
import img1 from './Assets/patients.jpg'
import img2 from './Assets/doctor.jpg'

class Cards extends Components {
    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Patient" text="Login as a Patient"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img2} title="Doctor" text="Login as a Doctor"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;
