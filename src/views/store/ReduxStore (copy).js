import React, { useState} from 'react'
import { CForm, CFormInput, CInputGroup, CListGroup, CListGroupItem, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilX} from '@coreui/icons'
{/*const ReduxStore = () => {*/ }
    {/*let [inputTodo, updateInputTodo] = useState("")
    let [todoList, updateTodos] = useState(
        [
            {
                id: 1,
                task:'Learn React'
            },
            {
                id: 2,
                task:'Learn Angular'
            },
        ]
    )
    let nextId = 3;
    function addNewTodo() {
        if (inputTodo == '') {
            alert("add some task");
        }
        else {
            let newTodo = [
                ...todoList,
                {
                    id: nextId++,
                    task:inputTodo
                }
            ]
            updateTodos(newTodo);
        }      
    }
    function deleteTodo(id) {
       let updatedTodos= todoList.filter(
            (todo) => {
                return todo.id!=id
            }
       )
        updateTodos(updateTodos);
    }*/}
function ReduxStore() {
 constructor(props) {
        super(props);

        // Setting up state
        this.state = {
            userInput: "",
            list: [],
        };
    }

    // Set a user input value
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    // Add item if user input in not empty
    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                // Add a random id which is used to delete
                id: Math.random(),

                // Add a user value to list
                value: this.state.userInput,
            };

            // Update list
            const list = [...this.state.list];
            list.push(userInput);

            // reset state
            this.setState({
                list,
                userInput: "",
            });
        }
    }

    // Function to delete item from list use id to delete
    deleteItem(key) {
        const list = [...this.state.list];

        // Filter values and leave value which we need to delete
        const updateList = list.filter((item) => item.id !== key);

        // Update list in state
        this.setState({
            list: updateList,
        });
    }

    editItem = (index) => {
      const todos = [...this.state.list];
      const editedTodo = prompt('Edit the todo:');
      if (editedTodo !== null && editedTodo.trim() !== '') {
        let updatedTodos = [...todos]
        updatedTodos[index].value= editedTodo
        this.setState({
          list: updatedTodos,
      });
      }
    }

    
    return (
        <>
           {/*<CForm>
                <CInputGroup className="mb-3">
                    <CFormInput
                        value={inputTodo}
                        onChange={(e) => {
                            let task = e.target.value;
                            updateInputTodo(task)
                        }}
                        placeholder="Add Input" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <CButton onClick={() => {
                        addNewTodo()
                    }} type="button" color="primary" variant="outline" id="button-addon2">Add</CButton>
                </CInputGroup>
                <CListGroup>
                    {
                        todoList.map(
                            (todo) => {
                                return (
                                    <CListGroupItem key={todo.id} className='d-flex justify-content-between align-items-center'>
                                        <div>{todo.task}</div>
                                        <div>
                                            <CButton onClick={() => {
                                                deleteTodo(todo.id)
                                            }} type="button" color="danger" variant="outline">
                                                <CIcon icon={cilX} size="sm" style={{ '--ci-primary-color': 'red' }} />
                                            </CButton>
                                        </div>
                                    </CListGroupItem>
                                )
                            }
                        )
                    }
                </CListGroup>
            </CForm>*/}
            <hr />
            <hr />
            <hr />
             <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                    }}
                >
                    TODO LIST
                </Row>

                <hr />
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="add item . . . "
                                size="lg"
                                value={this.state.userInput}
                                onChange={(item) =>
                                    this.updateInput(item.target.value)
                                }
                                aria-label="add something"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup>
                                <Button
                                    variant="dark"
                                    className="mt-2"
                                    onClick={() => this.addItem()}
                                >
                                    ADD
                                </Button>
                            </InputGroup>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <ListGroup>
                            {/* map over and print items */}
                            {this.state.list.map((item, index) => {
                                return (
                                  <div key = {index} > 
                                    <ListGroup.Item
                                        variant="dark"
                                        action
                                        style={{display:"flex",
                                                justifyContent:'space-between'
                                      }}
                                    >
                                        {item.value}
                                        <span>
                                        <Button style={{marginRight:"10px"}}
                                        variant = "light"
                                        onClick={() => this.deleteItem(item.id)}>
                                          Delete
                                        </Button>
                                        <Button variant = "light"
                                        onClick={() => this.editItem(index)}>
                                          Edit
                                        </Button>
                                        </span>
                                    </ListGroup.Item>
                                  </div>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
        </>
    )
    
}
export default ReduxStore