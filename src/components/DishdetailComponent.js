import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
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
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null) {

            const commentArray = comments.map((cmt) => {

                var new_date = new Date(cmt.date);
                var dateList = new_date.toDateString().split(" ");

                return (
                    <div key={cmt.id}>
                        <li>{cmt.comment}</li>
                        <br></br>
                        <li>-- {cmt.author}, {dateList[1]} {dateList[2]}, {dateList[3]}</li>
                        <br></br>
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
        else {
            return (
                <div></div>
            );
        }
    }

    render() {

        const selectedDish = this.props.selectedDish;

        if (selectedDish != null) {
            return (
                <div className="row">
                    {this.renderDish(selectedDish)}
                    {this.renderComments(selectedDish.comments)}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }

    }

}

export default DishDetail;