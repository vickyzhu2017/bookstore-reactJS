import React, {Component} from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
export default class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {book: {}};
    }

    componentDidMount() {
        $.get(`http://localhost:3000/books/${this.props.params._id}`).done((book)=> {
            this.setState({book});
        });
    }

    handleDelete() {
        $.ajax({
            url: `http://localhost:3000/books?_id=${this.state.book._id}`,
            method: 'DELETE',
            context: this,
            success(data){
                this.context.router.push('/');
            }
        })
    }

    handleBack() {
        this.context.router.goBack();
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading text-center">
                    {this.state.book.name}
                </div>
                <div className="panel-body text-center">
                    <img style={{width:'20%',height:"30%"}} src={this.state.book.image} alt={this.state.book.name}/>

                </div>
                <div className="panel-footer">
                    <div>
                        价格: {this.state.book.price}
                    </div>
                    <div>
                        <button onClick={this.handleBack.bind(this)} className="btn btn-default">返回</button>
                    </div>
                    <div>
                        <button onClick={this.handleDelete.bind(this)} className="btn btn-danger">删除</button>
                    </div>
                </div>
            </div>
        )
    }
}
BookDetail.contextTypes = {
    router:React.PropTypes.object
}