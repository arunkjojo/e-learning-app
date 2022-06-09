import React, { Component } from 'react';
import { Button, Input, Switch, Row, Col, Modal } from 'antd';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            values:this.props.todo.value
        }
    }
    render() {

        return (
            <>
                <Modal
                    title='Edit Task'
                    visible={this.props.todo.isEdit}
                    okText="UPDATE"

                    onCancel={()=>this.props.fooCancel(this.props.todo.id)}
                    onOk={()=>this.props.fooUpdate(this.props.todo.id, this.state.values)}
                >
                    <Input value={this.state.values} onChange={(e)=>this.setState({values: e.target.value})}/>
                </Modal>
                <Row>
                    <Col span={3}>
                        {this.props.todo.id}
                    </Col>
                    <Col span={4}>
                        <Switch checked={this.props.todo.isDone} onChange={() => this.props.fooDoneDone(this.props.todo)} checkedChildren="Completed" unCheckedChildren="Pending" />
                    </Col>
                    <Col span={12} style={{ overflow: 'auto' }}>
                        {
                            this.renderTodo()
                        }
                    </Col>
                    <Col span={4}>
                        <Row>
                            <Col span={12}>
                                <Button onClick={() => this.props.fooDelete(this.props.todo.id)} type="link">Delete</Button>
                            </Col>
                            <Col span={12}>
                                <Button onClick={() => this.props.fooEdit(this.props.todo.id)} type="link">Edit</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }

    renderTodo() {
        if (this.props.todo.isDone)
            return <s>{this.props.todo.value}</s>;
        else
            return this.props.todo.value;
    }

}

class AddTodo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => {
        //Updating local component state
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //Clear existing value in input
        document.getElementById("todoValue").value = "";

        //Updating local component state
        this.setState({ value: "" });
    }

    addTodo = () => {
        //Call method reference in Todos component using props
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        return (
            <>
                <Input type="text" value={this.state.value} id="todoValue" placeholder="ToDo" onChange={this.handleChange} />
                <Button onClick={this.addTodo} type="primary" id="button-addon2" block>Add New ToDo</Button>
            </>
        );
    }
}

class ClassBasedCrud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addTodoValue: "",
            todos: [
                {
                    id: 1,
                    value: "todo 1",
                    isDone: false,
                    isEdit: false,
                },
                {
                    id: 2,
                    value: "todo 2",
                    isDone: true,
                    isEdit: false,
                },
                {
                    id: 3,
                    value: "todo 3",
                    isDone: false,
                    isEdit: false,
                }
            ]
        }
    }
    //Local helper method to get date
    getRandom() {
        return Math.floor(100 + Math.random() * 100);
    }

    //method called from Todo component
    handleDelete = todo => {
        const todos = this.state.todos.filter((t) => {
            return t.id !== todo
        });
        this.setState({ todos });
    }

    //method called from Todo component
    handleEdit = todo => {
        const todos = [...this.state.todos];
        todos.map((t) => {
            if (t.id === todo) {
                t.isEdit = true;
            }
            return t;
        });
        this.setState({ todos });
    }

    handleEditCancel = todo =>{
        const todos = [...this.state.todos];
        todos.map((t) => {
            if (t.id === todo) {
                t.isEdit = false;
            }
            return t;
        });
        this.setState({ todos });
    }

    handleUpdate = (todo, newValue) =>{
        const todos = [...this.state.todos];
        todos.map((t) => {
            if (t.id === todo && newValue !== '') {
                t.isEdit = false;
                t.value = newValue;
            }
            return t;
        });
        // console.log(todo, newValue, todos)
        this.setState({ todos });
    }

    handleDone = todo => {
        const todos = [...this.state.todos];
        todos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({ todos });
    }

    //method called from AddTodo component
    addNewTodo = value => {
        if (value) {
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: this.getRandom(),
                    value: value,
                    isDone: false,
                    isEdit: false,
                }
            );
            this.setState({ addTodoValue: "", todos })
        } else {
            console.log("Please Add Todo Text");
        }
    }

    render() {
        return (
            <>
                <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
                <hr />
                <div>
                    <div style={{ fontSixe: '20px', textAlign: 'center' }}>
                        <Row>
                            <Col span={3}>
                                ID
                            </Col>
                            <Col span={4}>
                                Status
                            </Col>
                            <Col span={12}>
                                Task
                            </Col>
                            <Col span={4}>
                                Actions
                            </Col>
                        </Row>
                    </div>
                    <hr />
                    {this.state.todos.map((todo, index) => (
                        <div style={{ textAlign: 'center' }} key={todo.id}>
                            <Todo index={index + 1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} fooEdit={this.handleEdit} 
                            fooUpdate={this.handleUpdate} 
                            fooCancel={this.handleEditCancel} />
                        </div>
                    ))}
                </div>

            </>
        );
    }
}

export default ClassBasedCrud;