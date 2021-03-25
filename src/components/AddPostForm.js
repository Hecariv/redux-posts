import React, {Component} from 'react'
import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'

class AddPostForm extends Component {

    state = {
        title: "",
        body: "",
        author: "",
        image: "",
    }

    titleChangedHandler = (e) => {
        this.setState({title: e.target.value})
    }

    bodyChangedHandler = (e) => {
        this.setState({body: e.target.value})
    }

    authorChangedHandler = (e) => {
        this.setState({author: e.target.value})
    }

    imageChangedHandler = (e) => {
        this.setState({image: e.target.value})
    }

    render() {
        const {title, body, author, image} = this.state
        const REGEX_URL = "[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)"
        const enable = (title.length > 0 &&
                body.length > 0 &&
                author.length > 0 &&
            (image.length > 0 &&
                image.match(REGEX_URL)))
        return (
            <Row>
                <Col sm="10">
                    <Form>
                        <FormGroup>
                            <Label htmlFor="title-field">Title</Label>
                            <Input type="text" onChange={this.titleChangedHandler} name="title" id="title-field" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="body-field">Body</Label>
                            <Input type="text" onChange={this.bodyChangedHandler} name="body" id="body-field" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="author-field">Author</Label>
                            <Input type="text" onChange={this.authorChangedHandler} name="author" id="author-field" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="image-field">Image URL</Label>
                            <Input htmlFor={"ulr"} type="url" onChange={this.imageChangedHandler} placeholder="https://example.com"  name="image" id="image-field" required/>
                        </FormGroup>
                        <Button disabled={!enable} onClick={(e) => {
                            e.preventDefault()
                            this.props.postAdded(
                                this.state.title,
                                this.state.body,
                                this.state.author,
                                this.state.image)
                        }} type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default AddPostForm
