import React, {Component} from 'react';
import {Link} from 'react-router';
export default class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
              <div className="container">
                  <nav className="navbar navbar-inverse">
                      <div className="container-fluid">
                          <div className="navbar-header">
                              <a className="navbar-brand">书店</a>
                          </div>
                          <div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/">书籍列表</Link></li>
                                <li><Link to="/add">添加书籍</Link></li>
                            </ul>
                          </div>
                      </div>
                  </nav>
                  {this.props.children}
              </div>
        )
    }
}