import React, { Component } from "react";
import Firestore from "./Utils/Firebase";
import Home from "./Components/Home/Home";

//event.date1
//event.date2

//event.name
//event.link
//event.time
//event.location

export default class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kaohsiungEvents: [],
      taiwanEvents: [],
      worldEvents: [],
      tourneys: [],
      pickups: []
    };
  }
  componentDidMount() {
    this.setState({
      tourneys: [
        {posted:false,
          date: null,
          month: 9,
          name: "Run to Taiwan",
          linkEvent: "www.google.com",
          linkOther: "www.bing.com",
          country: "Taiwan",
          city: "Taichung",
          type:"Team"
        },
        { posted:true,
          date: "2019-09-28",
          month: 9,
          name: "Run to Taiwan",
          linkEvent: "www.google.com",
          linkOther: "www.bing.com",
          country: "Taiwan",
          city: "Kaohsiung",
          type:"Team"
        },
        {posted:true,
          date: "2019-09-28",
          month: 9,
          name: "Sixes",
          linkEvent: "www.google.com",
          linkOther: "www.bing.com",
          country: "Korea",
          city: "Pohang",
          type:"Hat"
        }
      ],
      pickups: [
        {
          dayOfWeek: 0,
          varies: false,
          time: "3:30",
          name: "Laid Back Sunday Pickup",
          linkPickup: "www.facebook",
          city: "Kaohsiung"
        },
        {
          dayOfWeek: null,
          varies: true,
          time: "3:30",
          name: "Laid Back Sunday Pickup",
          linkPickup: "www.facebook",
          city: "Taipei"
        },
        {
          dayOfWeek: null,
          varies: true,
          time: null,
          name: "KMU pickup",
          linkPickup: "www.facebook",
          city: "Kaohsiung"
        }
      ]
    });
    // const db = Firestore.firestore();
    // const categories = ["Kaohsiung", "Taiwan", "World"];
    // //render Firestore Data
    // var dbData = [];
    // categories.forEach(category =>
    //   db
    //     .collection(category)
    //     .orderBy("Mo")
    //     .onSnapshot(snapshot => {
    //       snapshot.forEach(doc => {
    //         const dataKeys = Object.keys(doc.data());
    //         let eventInfo = {};
    //         dataKeys.forEach(key => (eventInfo[key] = doc.data()[key]));
    //         dbData.push(eventInfo);
    //       });
    //       const name = category.toLocaleLowerCase().concat("Events");
    //       this.setState({ [name]: dbData });
    //       dbData = [];
    //     })
    // );
  }
  render() {
    const { kaohsiungEvents, taiwanEvents, worldEvents } = this.state;
    
    this.state.pickups.forEach(pickup => {
      let daysOfWeek = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
      let monthsOfYear = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","SEP","OCT","NOV","DEC"]
      let today = new Date();
      let nextDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() +
          pickup.dayOfWeek -
          (today.getDay() >= pickup.dayOfWeek
            ? today.getDay() - 7
            : today.getDay()))
      let date1 = pickup.varies
        ? "Varies"
        : (
         
          monthsOfYear[nextDay.getMonth()]+" "+nextDay.getDate()
          
          )
      let date2 = pickup.varies?null:daysOfWeek[pickup.dayOfWeek];
      let name = pickup.name;
      let link = pickup.linkPickup;
      let moreInfo=null
      let linkTwo=null
      let location= pickup.city
      let parsedEvent = {
        date1:date1,
        date2:date2,
        name:name,
        link:link,
        moreInfo:moreInfo,
        linkTwo:linkTwo,
        location:location
      }
      pickup.city==="Kaohsiung"?kaohsiungEvents.push(parsedEvent):taiwanEvents.push(parsedEvent)
    });
    this.state.tourneys.forEach(tourney => {
      let monthsOfYear = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","SEP","OCT","NOV","DEC"]
      
      

      let date1 = tourney.posted
        ? monthsOfYear[new Date(tourney.date).getMonth()]+" "+new Date(tourney.date).getDate()
        : 
monthsOfYear[tourney.month]          
          
      let date2 = tourney.posted?tourney.month+"/"+new Date(tourney.date).getDate():null;
      let name = tourney.name;
      let link = tourney.linkEvent;
      let moreInfo=tourney.posted?tourney.type : "More Info"
      let linkTwo=tourney.linkOther;
      let location= tourney.country==="Taiwan"?tourney.city:tourney.city+", "+tourney.country
      let parsedEvent = {
        date1:date1,
        date2:date2,
        name:name,
        link:link,
        moreInfo:moreInfo,
        linkTwo:linkTwo,
        location:location
      }
      tourney.country==="Taiwan"?taiwanEvents.push(parsedEvent):worldEvents.push(parsedEvent)
    });
    console.log("khevents")
    console.log(this.state.kaohsiungEvents)
    console.log("twevents")
    console.log(this.state.taiwanEvents)
    console.log("worldevents")
    console.log(this.state.worldEvents)
    return (
      <Home
        khEvents={kaohsiungEvents}
        taiwanEvents={taiwanEvents}
        worldEvents={worldEvents}
      />
    );
  }
}
