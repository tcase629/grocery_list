import { Component } from "react";
import GroceryForm from "./components/groceries/GroceryForm";
import GroceryList from './components/groceries/GroceryList';
class App extends Component {
  state = {
    groceries: [
      { id: 1, item: "bananas", price: 1, complete: false},
      { id: 2, item: "bread", price: 2, complete: false},
      { id: 3, item: "eggs", price: 3, complete: false}
    ]
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (item) => {
    const { groceries } = this.state;
    const grocery = { item, id: this.getUniqId(), complete: false }
    this.setState({ groceries: [grocery, ...groceries]});
  }

  render () {
    const { groceries } = this.state;

    return (
      <div>
        <GroceryForm addItem={this.addItem}/>
        <GroceryList name="Grocery List" items={groceries} />
      </div>  
    );
  }
}

export default App;
