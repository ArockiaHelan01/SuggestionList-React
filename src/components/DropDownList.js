import React, { Component } from 'react';

class DropDownList extends Component {
    render() {
        return (
            <div>
                <select className="list-wrapper" size={this.props.response.items.length} onChange={this.props.update}>
                    {this.props.response.items.map((entry) =>
                        <option className="list-item" key={entry.id} >{entry.login}</option>
                    )}
                </select>
            </div>
        );
  }
}

export default DropDownList;