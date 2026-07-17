import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], error: null };
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("Error occurred: " + error);
    this.setState({ error });
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data.slice(0,10) }))
      .catch(err => this.setState({ error: err }));
  }

  render() {
    if (this.state.error) return <div>Error loading posts</div>;
    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
