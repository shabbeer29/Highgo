import React, { Component} from 'react'
import { CFormInput, CInputGroup, CListGroup, CListGroupItem, CButton, CRow,CCol} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilPencil,cilPlus,cilX} from '@coreui/icons'



class ReduxStore extends Component {
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

    render() {
        return (
            <>
                <CRow>
                    TODO LIST
                </CRow>

                <hr />
                <CRow>
                    <CCol>                        
                        <CInputGroup className="mb-3">
                            <CFormInput placeholder="add item . . . "
                                size="lg"
                                value={this.state.userInput}
                                onChange={(item) =>
                                    this.updateInput(item.target.value)
                                }
                                aria-label="add something"
                                aria-describedby="basic-addon2"/>
                            <CButton color="primary" variant="outline" onClick={() => this.addItem()}><CIcon icon={cilPlus} />{' '}ADD</CButton>
                        </CInputGroup>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <CListGroup>
                            {this.state.list.map((item, index) => {
                                return (
                                  <div key = {index} > 
                                    <CListGroupItem variant="dark" className='d-flex align-items-center justify-content-between mt-2'>
                                        {item.value}
                                        <span>
                                        <CButton color="danger" variant="outline" onClick={() => this.deleteItem(item.id)}>
                                            <CIcon icon={cilX}/>{' '}Delete
                                        </CButton>{' '}
                                        <CButton color="info" variant="outline" onClick={() => this.editItem(index)}>
                                            <CIcon icon={cilPencil} />{' '}Edit
                                        </CButton>
                                        </span>
                                    </CListGroupItem>
                                  </div>
                                );
                            })}
                        </CListGroup>
                    </CCol>
                </CRow>
            </>
        );
    }
}

export default ReduxStore;
