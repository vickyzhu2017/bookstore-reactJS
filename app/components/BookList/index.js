import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import $ from 'jquery';
export default class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {books:[]};
    }
    componentDidMount(){
        $.get('http://localhost:3000/books').done((books)=>{
            this.setState({books});
        });
    }
    show(book){
        this.context.router.push(`/detail/${book._id}`);
        //hashHistory.push(`/detail/${book._id}`);
    }
    render(){
        return (
            <div className="row">
                {
                    this.state.books.map((book,index)=>{
                        return (
                            <div key={index} className="col-md-3">
                                <div className="panel panel-default">
                                    <div className="panel-heading text-center">
                                        {book.name}
                                    </div>
                                    <div className="panel-body" onClick={this.show.bind(this,book)}>
                                        <img style={{width:'100%',height:"100%"}} src={book.image} alt={book.name}/>
                                    </div>
                                    <div className="panel-footer">
                                        价格: {book.price}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
BookList.contextTypes = {
    router:React.PropTypes.object
}