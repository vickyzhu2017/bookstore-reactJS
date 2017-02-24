import React, {Component} from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
export default class BookAdd extends Component {
    handleSubmit(event){
        event.preventDefault();
        var name = this.refs.name.value;
        var price = this.refs.price.value;
        var image = this.refs.image.value;
        var book = {name,price,image};
        $.post('http://localhost:3000/books',book).done((book)=>{
            this.context.router.push('/');
        });
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="name" className="control-label">书名</label>
                            <input ref="name" type="text" className="form-control" id="name" name="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price" className="control-label">价格</label>
                            <input ref="price"  type="text" className="form-control" id="price" name="price"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image" className="control-label">图片</label>
                            <input ref="image"  type="text" className="form-control" id="image" name="image"/>
                        </div>
                        <div className="form-group">
                            <button onClick={this.handleSubmit.bind(this)} className="btn btn-primary">添加</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
BookAdd.contextTypes = {
    router:React.PropTypes.object
}