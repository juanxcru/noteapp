import React, { Component } from 'react';
import Modal from "react-bootstrap/esm/Modal"; 
import NoteService from "../services/NoteService";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

class ModalForm extends Component {
    constructor(props){

        super(props);
        this.state = {
                id: this.props.noteid,
                content: "",
                title: "",
                isArchived: false,
                date: "",
        };
        
       

    
        this.editTitle = this.editTitle.bind(this);
        this.editContent = this.editContent.bind(this);
        this.editIsArchived = this.editIsArchived.bind(this);
        this.saveNote = this.saveNote.bind(this);
        //this.componentDidMount.bind(this);
    };

    componentDidMount() {
        console.log(this.props.edit);
        if(this.props.edit)
                            {
                    
                                NoteService.getNoteById(this.state.id).then((res) => {
                                    let note = res.data;
                                    console.log(note);
                                    this.setState({
                                        content: note.content,
                                        title: note.title,
                                        isArchived: note.isArchived,
                                        date: note.date,
                                        
                                    });
                                });}
        
               
        }
    
    editTitle = (e) => {
        
        this.setState({ title: e.target.value });
    
    };
    editContent = (e) => {
    
        this.setState({ content: e.target.value });
    
    };
    editIsArchived = () => {
        this.setState({ isArchived: true });
    
    };

   

    saveNote = (e) => {

        e.preventDefault();
        const date = new Date().toISOString().split('T')[0];
        const note = {
            title: this.state.title,
            content: this.state.content,
            isArchived: this.state.isArchived,
            date: date,
        };
        NoteService.createNote(note).then((res) => {
            
        }).catch((err) => {
            console.log(err);
        }
        );
        
        this.props.handleClose();

    };
    close = () => {

        this.props.handleClose();
    };



    render() {
      
        
        return (

            <div>

                <Modal show={this.props.show} onHide={this.close}  >
                        
                <Modal.Header>
                                <Modal.Title>Create /Edit Note
                                </Modal.Title>
                            </Modal.Header>
                          {
                            
                        }               
                                 
                          
                           
                    <Modal.Body>

                    <Row>
                            <Col >
                                <Card>
                                <Form  >
                                
                                    <Card.Body className="text-center">
                                    <Form.Group controlId="formBasicEmail" className="mb-3">
                                    
                                    <Form.Control
                                        type="text"
                                        //placeholder="Title"
                                        value={this.state.title}
                                        onChange={this.editTitle}
                                    />
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={8}
                                        //placeholder="Content"
                                        value={this.state.content}
                                        onChange={this.editContent}
                                    />
                                    
                                    </Form.Group>
                                   
                                    
                                       <Form.Check 
                                               type="switch"
                                               className="col-5"
                                               value={this.state.isArchived}
                                               label="Move to archived"
                                               onChange={this.editIsArchived}
                                               />
                                   
                                   </Card.Body>
                                   <Card.Footer>
                                   <Button
                                        variant="outline-success"
                                        type="submit"
                                        onClick={this.saveNote}
                                        
                                    >
                                        Save
                                    </Button>{" "}
                                    <Button
                                        variant="outline-danger"
                                        type="button"
                                        onClick={this.close}
                                    >
                                        Cancel
                                    </Button>
                                    </Card.Footer>
                                   </Form>
                                </Card>
                            </Col>
                        </Row>


                    </Modal.Body>
                  
                
                </Modal>
                </div>
                );
    }
}

export default ModalForm;

