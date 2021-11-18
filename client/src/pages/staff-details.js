import React, { useState, Component } from 'react';
import validate from './validation';
import StaffData from '../controllers/staff-details';
import {Container, Row,Col} from 'react-bootstrap';
import './style.css';  

class StaffDetails extends Component {
   
    data=[
       {"name":"name1","sun":[""],"mon":["closed"],"tue":["10:30-19:00"],"wed":[""],"thu":[""],"fri":["10:30-19:00"],"sat":[""]},
       {"name":"name2","sun":["10:30-19:00"],"mon":["10:30-13:00","14:30-19:00"],"tue":["10:30-19:00"],"wed":["closed"],"thu":[""],"fri":["10:30-19:00"],"sat":[""]},
       {"name":"name3","sun":[""],"mon":["closed"],"tue":["10:30-19:00"],"wed":[""],"thu":[""],"fri":["10:30-19:00"],"sat":[""]},
       {"name":"name4","sun":["10:30-19:00"],"mon":[],"tue":["10:30-19:00"],"wed":["10:30-13:00","14:30-19:00"],"thu":["closed"],"fri":["10:30-19:00"],"sat":[""]},
       {"name":"name5","sun":["closed"],"mon":[""],"tue":["10:30-19:00"],"wed":[""],"thu":[""],"fri":["10:30-19:00"],"sat":[""]},
       {"name":"name6","sun":["10:30-19:00"],"mon":["10:30-13:00","14:30-19:00"],"tue":["10:30-19:00"],"wed":["closed"],"thu":[""],"fri":["10:30-19:00"],"sat":[""]},
       {"name":"name7","sun":["10:30-13:00","14:30-19:00"],"mon":[""],"tue":["10:30-19:00"],"wed":[""],"thu":[""],"fri":["10:30-19:00"],"sat":["closed"]},
       {"name":"name8","sun":["10:30-19:00"],"mon":["10:30-13:00","14:30-19:00"],"tue":["closed"],"wed":["10:30-13:00","14:30-19:00"],"thu":[""],"fri":["10:30-19:00"],"sat":[""]},{"name":"name1","sun":[""],"mon":["closed"],"tue":["10:30-19:00"],"wed":[""],"thu":[""],"fri":["10:30-19:00"],"sat":[""]},
       {"name":"name2","sun":["10:30-19:00"],"mon":["10:30-13:00","14:30-19:00"],"tue":["10:30-19:00"],"wed":["closed"],"thu":[""],"fri":["10:30-19:00"],"sat":[""]},
   ]
   
   componentDidMount() {
    this.setState(this.projects);
  }
  render() { 
  
        
    if (this.data) {
        var staffData = this.data.map(function (staffData) {
            
    return (
      <>
            <Container >
                <Row className="text-center padding-auto padding-top-10px">
                <div className="col" md="auto">{staffData.name}</div>
                    <div className="col" md="auto" >
                    {staffData.sun.map((i,index)=>{
                        if((staffData.sun[index]).toLowerCase()==='closed'){
                            return(
                                <div  key={index} className="time-data-leave">{staffData.sun[index]}</div>
                            
                        )
                            }else{
                        return(
                            <div  key={index} className="time-data">{staffData.sun[index]}</div>
                        )}
                    })}
                    </div>
                    <div className="col" md="auto" >
                    {staffData.mon.map((i,index)=>{
                        if((staffData.mon[index]).toLowerCase()==='closed'){
                            return(
                                <div  key={index} className="time-data-leave">{staffData.mon[index]}</div>
                            
                        )
                        }else{
                        return(
                                <div  key={index} className="time-data">{staffData.mon[index]}</div>
                            
                        )
                        }
                    })}
                    </div>
                    <div className="col" md="auto" >
                    {staffData.tue.map((i,index)=>{
                         if((staffData.tue[index]).toLowerCase()==='closed'){
                            return(
                                <div  key={index} className="time-data-leave">{staffData.tue[index]}</div>
                            
                        )
                        }else{
                        return(
                                <div  key={index} className="time-data">{staffData.tue[index]}</div>
                            
                        )
                        }
                    })}
                    </div>
                    <div className="col" md="auto" >
                    {staffData.wed.map((i,index)=>{
                         if((staffData.wed[index]).toLowerCase()==='closed'){
                            return(
                                <div  key={index} className="time-data-leave">{staffData.wed[index]}</div>
                            
                        )
                        }else{
                        return(
                                <div  key={index} className="time-data">{staffData.wed[index]}</div>
                            
                        )
                        }
                    })}
                    </div>
                    <div className="col" md="auto" >
                    {staffData.thu.map((i,index)=>{
                         if((staffData.thu[index]).toLowerCase()==='closed'){
                            return(
                                <div  key={index} className="time-data-leave">{staffData.thu[index]}</div>
                            
                        )
                        }else{
                        return(
                                <div  key={index} className="time-data">{staffData.thu[index]}</div>
                            
                        )
                        }
                    })}
                    </div>
                    <div className="col" md="auto" >
                    {staffData.fri.map((i,index)=>{
                    if((staffData.fri[index]).toLowerCase()==='closed'){
                        return(
                            <div  key={index} className="time-data-leave">{staffData.fri[index]}</div>
                        
                    )
                    }else{
                    return(
                            <div  key={index} className="time-data">{staffData.fri[index]}</div>
                        
                    )
                    }
                    })}
                    </div>
                    <div className="col" md="auto" >
                    {staffData.sat.map((i,index)=>{
                         if((staffData.sat[index]).toLowerCase()==='closed'){
                            return(
                                <div  key={index} className="time-data-leave">{staffData.sat[index]}</div>
                            
                        )
                        }else{
                        return(
                                <div  key={index} className="time-data">{staffData.sat[index]}</div>
                            
                        )
                        }
                    })}
                    </div>
                </Row>
                <hr></hr>
            </Container>
       
      </>
    );
  })
}
  
return (
    <div className='container-staff-data'>
    <Container className="container-staff">
        <Row className="text-center padding-auto padding-top-10px">
            <div className="col" md="auto">Staff</div>
            <div className="col" md="auto" >05 Sun</div>
            <div className="col" md="auto" >06 Mon</div>
            <div className="col" md="auto" >07 Tue</div>
            <div className="col" md="auto" >08 Wed</div>
            <div className="col" md="auto" >09 Thu</div>
            <div className="col" md="auto" >10 Fri</div>
            <div className="col" md="auto" >11 Sat</div>
        </Row>
    </Container>
    {staffData}
    </div>
)
}
}  
export default StaffDetails;
  