import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaComment from 'react-icons/lib/fa/comment'
import Moment from "react-moment";

const Post = props => {

  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src={props.img}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle> {props.title} | <FaArrowUp onClick={props.incrementVotes} /> {props.votes} <FaArrowDown /></CardTitle>
            <CardSubtitle>{props.author}</CardSubtitle>
            <CardText>
              {props.body}
            </CardText>
              <hr />

              <Moment fromNow>{props.date}</Moment>

              {props.numberOfComments === 1 ?
                  <p><FaComment /> {props.numberOfComments} Comment</p> :
                  <p><FaComment /> {props.numberOfComments} Comments</p>
              }
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here" />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
              <ul className="mt-2">
                  {props.comments}
              </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Post
