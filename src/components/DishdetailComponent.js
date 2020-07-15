import React, { Component } from 'react';
import { Card, CardImg,CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},</p>
                </li>
            )
        })
        return (

                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
        )
    }

    
    render() {

        const dish = this.props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const comments = dish.comments

        return (
            
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>

                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(comments)}
                </div>
            </div>
        )
    }
}

export default DishdetailComponent;