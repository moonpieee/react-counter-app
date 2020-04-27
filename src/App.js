import React, { Component } from "react";
import "./App.css";
import MultipleCounters from "./components/multipleCounters";
import Navbar from "./components/navbar";

//React Lifecycle hooks
// const GenerallyUsedLifecycleHooks = {
//   Mount :[ "constructor","render","componentDidMount"],
//   Update :[ "render","componentDidUpdate"],
//   Unmount :[ "render","componentWillUnmount"],
// }

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 7 },
      { id: 3, value: 8 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };


  // contructor is called oncly once , when class is instantiated
  constructor(props) {
    super(props);
    /**
     * To access props inside contructor , its needs to be passed as param
     * like above to both contructor and super
     *  */

    //this.state = this.props.something;
  }


  componentDidMount() {
    //perfect place to make https/ajax calls
    this.testAPICall();
  }

  testAPICall() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then((json) =>{ 
        this.setState({posts: json})
        console.log(this.state)
      })
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = counters[index].value + 1;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = counters[index].value - 1;
    if (counters[index].value > -1) {
      this.setState({ counters });
    }
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    // const counters = [...this.state.counters];
    // const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    // counters[index].value--;
    // if (counters[index].value === 0) {
    //   return;
    // } else {
    //   this.setState({ counters });
    // }
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log('App- App.js');
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main role="main" className="container p-2">
          <MultipleCounters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
