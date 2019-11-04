import React from "react"
import PropTypes from "prop-types"
import Highlighter from "react-highlight-words";

class InputString extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.items.map( item =>  item.content),
      count: props.items.map( item =>  item.num_of_vowels),
      textvalue : "",
      test:""
    }
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      textvalue:e.target.value
    })
  }

  handleAddTodoItem() {
     $.ajax({
      type: 'POST',
      url: 'input_texts',
      data: { "input_text": this.state.textvalue },
      success:function(data){
          this.state.value.push(data['value'])
          this.state.count.push(data['count'])
          this.setState(this.state)
      }.bind(this)
    });

  }

  render() {
    let header;
    if (this.state.value.length > 0){
      header = this.state.value.map((v, index) => {
                return (<div key={index}>
                  <Highlighter
                    highlightClassName="HighlightClass"
                    searchWords={["a", "e", "i", "o", "u","A","E","I","O","U"]}
                    autoEscape={true}
                    textToHighlight={v}
                    style={{ fontSize: 24}}
                  /> <span style={{ fontSize: 18, marginLeft: 20}}>Vowels: {this.state.count[index]} </span>
                  </div>)
              })
    }else{
      header = ''
    }
    return (
      <div>
        {header}
        <textarea rows="4" cols="50" placeholder="Input Text.." className="text" onChange={ this.handleChange } style={{ marginTop: 20}}/>
        <button className="addbutton" onClick={this.handleAddTodoItem}>Submit</button>
      </div>
    )
  }
}

InputString.propTypes = {
  items: PropTypes.array,
};

export default InputString
