import React from "react";

import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Voorlegan")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
