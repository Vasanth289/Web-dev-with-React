import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    /* constructor(props) {
         super(props);
     }*/

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {

        const commentArray = comments.map((cmt) => {

            var date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit' }).format(new Date(Date.parse(cmt.date)));

            return (
                <div key={cmt.id}>
                    <p>{cmt.comment}</p>
                    <p>-- {cmt.author}, {date}</p>
                </div>
            );
        })

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentArray}
                </ul>
            </div>
        );
    }

    render() {

        var selectedDish = this.props.dish;

        if (selectedDish != null) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(selectedDish)}
                        {this.renderComments(selectedDish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }

    }

}

export default DishDetail;