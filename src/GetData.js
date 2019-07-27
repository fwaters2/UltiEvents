import React, { Component } from "react";
import Firestore from "./Utils/Firebase";
import Home from "./Components/Home";

export default class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kaohsiungEvents: [],
      taiwanEvents: [],
      worldEvents: []
    };
  }
  componentDidMount() {
    const db = Firestore.firestore();
    const categories = ["Kaohsiung",  "World"];
    //render Firestore Data
    var dbData = [];
    categories.forEach(category =>
      db
        .collection(category)
        .orderBy("Mo")
        .onSnapshot(snapshot => {
          snapshot.forEach(doc => {
            const dataKeys = Object.keys(doc.data());
            let eventInfo = {};
            dataKeys.forEach(key => (eventInfo[key] = doc.data()[key]));
            dbData.push(eventInfo);
          });
          const name = category.toLocaleLowerCase().concat("Events");
          this.setState({ [name]: dbData });
          dbData = [];
        })
    );
   
      db
        .collection("Taiwan")
        
        .onSnapshot(snapshot => {
          snapshot.forEach(doc => {
            const dataKeys = Object.keys(doc.data());
            let eventInfo = {};
            dataKeys.forEach(key => (eventInfo[key] = doc.data()[key]));
            dbData.push(eventInfo);
          });
          const name = "taiwanEvents"
          this.setState({ [name]: dbData });
          dbData = [];
        })
        db
        .collection("Kaohsiung")
        
        .onSnapshot(snapshot => {
          snapshot.forEach(doc => {
            const dataKeys = Object.keys(doc.data());
            let eventInfo = {};
            dataKeys.forEach(key => (eventInfo[key] = doc.data()[key]));
            dbData.push(eventInfo);
          });
          const name = "kaohsiungEvents"
          this.setState({ [name]: dbData });
          dbData = [];
        })
    
  }
  render() {
    const {kaohsiungEvents, taiwanEvents, worldEvents } = this.state
    return (
      <Home
        khEvents={kaohsiungEvents}
        taiwanEvents={taiwanEvents}
        worldEvents={worldEvents}
      />
    );
  }
}
