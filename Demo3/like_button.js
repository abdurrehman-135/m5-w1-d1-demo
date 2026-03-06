class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return React.createElement('button', { onClick: () => this.setState({ liked: true }) },
      this.state.liked ? 'Unlike' : 'Like'
    );
  }
}

ReactDOM.render(React.createElement(LikeButton), document.getElementById('like-button')); 
   
