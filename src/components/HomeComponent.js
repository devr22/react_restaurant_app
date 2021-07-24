import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

function RenderCard({item, isLoading, errMsg}) {

  if (isLoading) {
    return (
      <div className="nx-auto">
          <Loading />
      </div>
    );
  }
  else if (errMsg) {
    return(
      <div className="nx-auto">
          <h4>{errMsg}</h4>
      </div>
    );
  }
  else {
    return (
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

function Home(props) {
  return(
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} 
            isLoading={props.dishesLoading}
            errMsg={props.dishesErrMsg} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion}
            isLoading={props.promoLoading}
            errMsg={props.promoErrMsg} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;   