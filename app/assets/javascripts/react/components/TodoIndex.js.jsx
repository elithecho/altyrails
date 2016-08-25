class TodoIndex extends React.Component {

  constructor(props) {
    super(props)
    todos: []
  }

  componentWillMount() {
    this.setState({todos: this.props.todos})
  }

  render() {

    return(
      <div>
        <h2>Todo List</h2>
        <TodoForm />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }

}
