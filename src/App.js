import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCb0tstk_o-TLdxuuKExFOSqRt2ByR0iiA",
    authDomain: "react-firebase-d69ad.firebaseapp.com",
    databaseURL: "https://react-firebase-d69ad.firebaseio.com",
    projectId: "react-firebase-d69ad",
    storageBucket: "react-firebase-d69ad.appspot.com",
    messagingSenderId: "910031181339"
}

firebase.initializeApp(config);
var db = firebase.firestore();

class App extends Component {

  constructor(){
    super();
    this.state = {
      chartData: {},
      Car: 0
    };
  }

  componentDidMount(){
    //this.getChartData();
  }
  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    //Requires ID
    /*var BudgetRef = db.collection("Budget").doc("sCwrxLbJdCeci8HCDUd7");
    var array = new Array();
    var array2 = new Array();
    BudgetRef.get().then(function(doc) {
      if (doc.exists) {
          //console.log(docRef.id);
          array.push(doc.data().Rent);
          array.push(doc.data().Utilities);
          array.push(doc.data().Car);
          array.push(doc.data().Food);
          array.push(doc.data().Entertainment);
          array.push(doc.data().Misc);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });*/
    var array2 = new Array();

    var transArray = new Array();
    var monthTotal = 0;
    /*db.collection('Transactions').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data().month);

      })
    })*/

    db.collection('Transactions').where("month", "==" , "Jan").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });

    db.collection('Transactions').where("month", "==" , "Feb").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });

    db.collection('Transactions').where("month", "==" , "Mar").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });

    db.collection('Transactions').where("month", "==" , "Apr").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });

    db.collection('Transactions').where("month", "==" , "May").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });

    db.collection('Transactions').where("month", "==" , "Jun").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });

    db.collection('Transactions').where("month", "==" , "Jul").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });

    db.collection('Transactions').where("month", "==" , "Aug").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });

    db.collection('Transactions').where("month", "==" , "Sep").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });

    db.collection('Transactions').where("month", "==" , "Oct").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });

    db.collection('Transactions').where("month", "==" , "Nov").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });

    db.collection('Transactions').where("month", "==" , "Dec").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().amount);
        monthTotal = monthTotal + parseFloat(doc.data().amount);

      })
      console.log(monthTotal);
      transArray.push(monthTotal);
      monthTotal = 0;
    });
    //Ajax calls here
    this.setState({
    /*  chartData: {
        labels: [ 'Rent', 'Utilities', 'Car', 'Food', 'Entertainment', 'Misc'],
        datasets:[{
            label: 'Monthly Budget',
            data: array,
            backgroundColor:['rgba(255,99,132,0.6)', 'rgba(54,162,235,0.6)','rgba(255,206,86,0.6)','rgba(75,192,192,0.6)','rgba(153,102,225,0.6)','rgba(255,159,64,0.6)','rgba(255,99,132,0.6)']
          }]
      },*/
      chartData: {
        labels: ['Jan','Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[{
          label: 'Year Breakdown',
          data: transArray,
          backgroundColor:['rgba(255,99,132,0.6)', 'rgba(54,162,235,0.6)','rgba(255,206,86,0.6)','rgba(75,192,192,0.6)','rgba(153,102,225,0.6)','rgba(255,159,64,0.6)','rgba(255,99,132,0.6)']
        }]
      }

    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
        <Chart chartData={this.state.chartData} legendPosition="bottom" />
      </div>
    );
  }
}

export default App;
