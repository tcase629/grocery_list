import { Component} from 'react'

class GroceryForm extends Component {
  state = { item: '' }

  handleChange = (e) => {
    this.setState({ item: e.target.value })
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.item)
    this.setState({ item: '' })
  }

  render() {
    const { item } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        value={item}
        name="item"
        onChange={this.handleChange}
        type="text"  
        required
        placeholder="Whatcha Wanna Get"
        />   
        <button>Add Item</button>     
      </form>
    )
  }

}

export default GroceryForm;