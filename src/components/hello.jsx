class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    // change the state
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    // BUILD AND RETURN HTML FROM THE COMPONENT
    return (
      <div className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
      Hello
        {this.props.name}
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Taylor" />, root);
}
