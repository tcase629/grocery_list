import { Component } from "react";
import GroceryList from './components/groceries/GroceryList';
class App extends Component {
  state = {
    groceries: [
      { id: 1, item: "bananas", price: 1, complete: false},
      { id: 2, item: "bread", price: 2, complete: false},
      { id: 3, item: "eggs", price: 3, complete: false}
    ]
  }

  render () {
    const { groceries } = this.state;

    return (
      <GroceryList name="Grocery List" items={groceries} />
    );
  }
}

export default App;
