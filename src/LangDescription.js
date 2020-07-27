import React, {Component} from 'react';

class LangDescription extends Component{
    state = {
        langs:['java','react']
    }

    selectedLanguage = (event) => {
        alert(event.target.value)
    }

    render(){
        return(
            <div>
                Choose Language :
                <select onChange={this.selectedLanguage}>
                    {this.state.langs.map((lang,idx) =>
                    <option key={idx}>{lang}</option>
                    )}
                </select>
            </div>
        )
    }
}

export default LangDescription;