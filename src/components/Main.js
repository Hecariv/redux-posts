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
        this.props.onFetchPosts();
        this.props.onFetchComments();
    }

    formShown = () => {
        this.setState({showForm: !this.state.showForm})
    }
    render() {
        let posts = this.props.posts.map((post) => (
            <Post
                key={post.id}
                title={post.title}
                body={post.content}
                author={post.author}
                img={post.img_url}
                date={post.createdAt}
                votes={post.votes}
                numberOfComments={this.props.comments.filter(comment => comment.post_id === post.id).length}
                comments={this.props.comments.filter(comment => comment.post_id === post.id).map(comment => <li key={comment.id}>{comment.content}</li>)}
                incrementVotes={() => this.props.onIncrementVotes(post)}
            />
        ))
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
                        <AddPostForm/>
                    </Col>
                </Row>
                }
                <Row>
                    <Col className="pr-0" sm={{size: 9, offset: 1}}>
                        {/* Below is the Post component for each post. It is up to you how you would like to iterate over them. */}
                        {posts}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsRed.posts,
        comments: state.commentsRed.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actionCreators.fetchPosts()),
        onFetchComments: () => dispatch(actionCreators.fetchComments()),
        onIncrementVotes: (post) => dispatch(actionCreators.patchIncrementVotes(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
