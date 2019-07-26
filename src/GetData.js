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
    //render Firestore Data
    var stuff2 = [];
    db.collection("Kaohsiung").onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        stuff2.push({
          date: doc.data().date,
          description: doc.data().description,
          location: doc.data().location,
          title: doc.data().title,
          eventId: doc.id
        });
      });
      this.setState({ kaohsiungEvents: stuff2 });
      stuff2 = [];
    });
    db.collection("Taiwan").onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        stuff2.push({
          date: doc.data().date,
          description: doc.data().description,
          location: doc.data().location,
          title: doc.data().title,
          eventId: doc.id
        });
      });
      this.setState({ taiwanEvents: stuff2 });
      stuff2 = [];
    });
    db.collection("World").onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        stuff2.push({
          date: doc.data().date,
          description: doc.data().description,
          location: doc.data().location,
          title: doc.data().title,
          eventId: doc.id
        });
      });
      this.setState({ worldEvents: stuff2 });
      stuff2 = [];
    });
  }
  render() {
    return (
      <Home
        khEvents={this.state.kaohsiungEvents}
        taiwanEvents={this.state.taiwanEvents}
        worldEvents={this.state.worldEvents}
      />
    );
  }
}
