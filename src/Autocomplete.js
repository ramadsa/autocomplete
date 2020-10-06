import React, { Component } from 'react';


export class Autocomplete extends Component {
  static propTypes = {};
  
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: '',
      usertwoInput: ''
    };
  }
  static defaultProperty={
    suggestions: []
  };
  
  onClick = (e) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
      usertwoInput: e.currentTarget.innerText
    });
  };

  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    const usertwoInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
     function(suggestion) {
      var name=suggestion.name.indexOf(userInput) > -1
      var address=suggestion.address.indexOf(userInput) > -1
      return address+name
     }
    )

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };
  
  render() {
    const {
        onChange,
        onClick,
        onKeyDown,
        state: {
       
          filteredSuggestions,
          showSuggestions,
          userInput
        }
      } = this;
    
    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              
              return (
                <li  key={suggestion.id} onClick={onClick}>
                  <p>{suggestion.id}</p>
                  <p>{suggestion.name}</p>
                  <p>{suggestion.address}</p>
                  <p>{suggestion.item}</p>
                  <p>{suggestion.pincode}</p>
                 
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions!</em>
          </div>
        );
      }
    }
 
    return  (<React.Fragment>
      <div className="autoComplete">
        <h4>Autocomplete</h4>
    <input
      type="text"
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={userInput}
    />
    {suggestionsListComponent}
    </div>
  </React.Fragment>)
  }
}
export default Autocomplete;