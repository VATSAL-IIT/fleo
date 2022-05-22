import React from 'react'
import { Card, Button ,ProgressBar} from 'boostrap'
const Card = (props) => {
    const percentageSales=(props.sales/props.target)*100;
    var progressClass; var progressText;
    if(percentageSales<=33)
    {
    progressClass="redProgress";
    progressText="At risk";
    }
    else if(percentageSales<=66 && percentageSales>33 )
    {
    progressClass="yellowProgress";
    progressText="off track";
    }
    else
    {
    progressClass="greenProgress";
    progressText="on track";
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        <h3>Total Sales : {props.sales}</h3>
                        <h3>Target Sales : {props.target}</h3>
                    </Card.Text>
                    <ProgressBar now={percentageSales} className={progressClass}/>
                    <div className="status">{progressText}</div>
                    <Button variant="primary">View More</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Card