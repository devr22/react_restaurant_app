import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({comments}) {
        const comment = comments.map((comment) => {
            if(comment != null)
                return(
                    <ul class="list-unstyled">
                        <li>
                            <p>{comment.comment}</p>
                            <p>
                            -- {comment.author} , 
                                {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'})
                                    .format(new Date(Date.parse(comment.date)))}
                            </p>
                        </li>
                    </ul>
                );
            else
                return (
                    <div>
                    </div>
                );
        });

        return(
            <div>
                <h4>Comments</h4>
                {comment}
            </div>
        );
    }

    const DishDetail = (props) => {
        const dish = props.dish
        if(dish != null)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish = {dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments = {dish.comments} />
                        </div>
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

export default DishDetail;