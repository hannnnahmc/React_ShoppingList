import React, { Component } from "react";
import ShoppingItems from "./ShoppingItems";
 
class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = {
            items: []
        };
    }
    
    addItem(e) {
        if (this._inputElement.value !== "") {
        var newItem = {
          text: this._inputElement.value,
          key: Date.now()
        };
     
        this.setState((prevState) => {
          return { 
            items: prevState.items.concat(newItem) 
          };
        });
       
        this._inputElement.value = "";
      }
      console.log(this.state.items);
         
      e.preventDefault();
    }

    render() {
        return (
            <div className="ShoppingListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} 
                            placeholder="Item Name">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <ShoppingItems entries={this.state.items}/>
            </div>
        );
    }
}

export default ShoppingList;