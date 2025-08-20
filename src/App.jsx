import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], // store API data
      loading: true, // loading state
      error: null
    };
  }

  // fetch API when component mounts
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        // take first 5 records only
        this.setState({ posts: data.slice(0, 5), loading: false });
      })
      .catch((err) => {
        this.setState({ error: err.message, loading: false });
      });
  }

  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>Error: {error}</h2>;
    }

    return (
      <div style={{ padding: "20px" }}>
        <h1>First 5 Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "15px" }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
