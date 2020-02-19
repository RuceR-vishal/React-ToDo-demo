import './App.css';
import React, { Component } from 'react'
import ListItem from './ListItem';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)
export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }

  handleInput = (event) => {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Date.now()
      }
    })
  }

  deleteItem = (key) => {
    debugger
    const filteredItems = this.state.items.filter(item =>
      item.key !== key)
    this.setState({
      items: filteredItems
    })

  }

  updateItem = (text, key) => {
    const item = this.state.items
    item.map(x => { 
      if(x.key === key){
        x.text = text
      }
    })
    this.setState({
      items:item
    })
  }
  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem
    debugger
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder='Enter Text'
              value={this.state.currentItem.text} onChange={this.handleInput} />
            <button type='submit'>Add</button>
          </form>
        </header>
        <ListItem items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.updateItem}></ListItem>
      </div>
    )
  }
}

export default App


