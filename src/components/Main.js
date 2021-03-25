import React, {Component} from 'react'
import AddPostForm from './AddPostForm'
import Post from './Post'
import FilterPosts from './FilterPosts'
import {Container, Row, Col, Button} from 'reactstrap'
import {connect} from "react-redux";
import * as actionCreators from "../store/actions/index";


class Main extends Component {
    state = {
        showForm: false
    }

    async componentDidMount() {

    }

    formShown = () => {
        this.setState({showForm: !this.state.showForm})
    }

    render() {

        return (
            <Container className="mt-4">
                <Row>
                    <Col sm={{size: 8, offset: 1}}>
                        <FilterPosts/>
                    </Col>
                    <Col sm="2">
                        <Button onClick={this.formShown} color="secondary">Add Post</Button>
                    </Col>
                </Row>
                {this.state.showForm &&
                <Row className="mt-4">
                    <Col sm={{size: 11, offset: 1}}>
                        <AddPostForm
                            postAdded={this.props.onPostNewPost}/>
                    </Col>
                </Row>
                }
                <Row>
                    <Col className="pr-0" sm={{size: 9, offset: 1}}>
                        {/* Below is the Post component for each post. It is up to you how you would like to iterate over them. */}
                        {this.props.posts.map(post => (
                            <Post title={post.title} body={post.body} author={post.author} img={post.image}/>
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsRed.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPostNewPost: (title, body, author, image) => dispatch({
            type: "POST",
            payload: {
                title: title,
                body: body,
                author: author,
                image: image,
            }
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
