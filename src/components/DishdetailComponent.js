import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments : this.props.comments
        }
    }

    myDateFormat(dateTime) {
        var year = dateTime.substring(0, 4);
        var mon = dateTime.substring(5, 7);
        var month = "";
        
        switch(mon) {
            case "01":
                month = "Jan";
                break;
            case "02":
                month = "Feb";
                break;
            case "03":
                month = "Mar";
                break;
            case "04":
                month = "Apr";
                break;
            case "05":
                month = "May";
                break;
            case "06":
                month = "Jun";
                break;
            case "07":
                month = "Jul";
                break;
            case "08":
                month = "Aug";
                break;
            case "09":
                month = "Sep";
                break;
            case "10":
                month = "Oct";
                break;
            case "11":
                month = "N0v";
                break;
            case "12":
                month = "Dec";
                break;
            default:
                break;
        }

        var date = dateTime.substring(8, 10);


        return month + " " + date + ", " + year;
    }

    renderDish(dish) {
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

    renderComments() {
        const comment = this.props.selectedDish.comments.map((comment) => {
            if(comment != null)
                return(
                    <ul class="list-unstyled">
                        <li>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , {this.myDateFormat(comment.date)}</p>
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

    render() {
        const dish = this.props.selectedDish
        if(dish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

}

export default DishDetail;