import "./App.css";
import {useState} from 'react';
import React, { Component } from 'react';

const BottomRow = () => {
  const [quarter, setQuarter] = useState(1);
  const [downs, setDowns] = useState(1);
  const [toGo, setToGo]= useState(10);
  const [ballOn, setBallOn] = useState(50);


  return (
    <div className="bottomRow">
      <div className="down">
  <h3 className="down__title">Down</h3>
  <div className="down__value" onClick={()=>{
      if (downs<4){setDowns(downs+1)}else{setDowns(1)}
  }}>{downs}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
  <div className="toGo__value" onClick={()=>{
  setToGo(prompt("Distance to First Down?"));
}}>{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
  <div className="ballOn__value" onClick={()=>{
  setBallOn(prompt("Where is the Ball?"));
}}>{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
  <div className="quarter__value" onClick={()=>{
      if (quarter<4){setQuarter(quarter+1)}else{setQuarter(1)}
  }}>{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;

