import React, { Component, useState } from "react";
import Button from "react-bootstrap/esm/Button";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import history from "../js/history.js";
import NoteService from "../services/NoteService";

import noteimg from "../assets/note.png";

import Card from "react-bootstrap/Card";
import ModalForm from "./ModalForm.jsx";



class ListNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      show: false,
      edit: false,
      noteid: "",
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleEditNote = this.handleEditNote.bind(this);
  }

  componentDidMount() {
    NoteService.getAllNotes().then((res) => this.setState({ notes: res.data }));
  }

  handleCreate = (e) => {
    this.setState({ show: true });
  };

  handleClose = (e) => {
    this.setState({ show: false });
    history.push("/");
    window.location.reload(false);
  };

handleEditNote(notesid) {
    this.setState({ edit: true });
    this.setState({ show: true });
    this.setState({noteid: notesid});
 
}


  render() {
    return (
      <>
        <div className="text-center m-4">
          <Button
            onClick={this.handleCreate}
            className="square rounded-1 m-2"
            variant="outline-dark"
          >
            {" "}
            Create Note{" "}
          </Button>
          <Button  onClick={()=> history.push("/archived")}variant="outline-dark"> Archived </Button>
        </div>
        <div >
    

            {this.state.notes.map((notes) => (
                
              !notes.isArchived ? (
                <Row key={notes.id} className="g-3 m-3" xs={1} md={2} >
                 <Col >
                    
                        <Card
                            //onClick={this.handleCreate}
                            //style={{ cursor: "pointer" }}
                        >
                            <Card.Body>
                                <Card.Title>{notes.title}</Card.Title>
                                <Card.Text>Last modified: {notes.date}</Card.Text>
                            </Card.Body>
                            <Card.Footer>


                         <Button onClick={this.handleEditNote.bind(this,notes.id)} >Edit</Button>

                                {/* <img
                                    onClick={this.handleEditNote}
                                    className="img-fluid col-1"
                                    alt=""
                                    src={noteimg} />

                                <img
                                    onClick={this.handleEditNote}
                                    className="img-fluid col-1"
                                    alt=""
                                    src={noteimg} />
                                <img
                                    onClick={this.handleEditNote}
                                    className="img-fluid col-1"
                                    alt=""
                                    src={noteimg} /> */}
                            </Card.Footer>
                        </Card>
                    </Col>
                    </Row>
              ) : null 
            
            ))}
            <ModalForm 
            noteid={this.state.noteid}
             show={this.state.show} 
             handleClose={this.handleClose} 
            edit={this.state.edit} />
             
        </div>
      </>
    );
  }
}
export default ListNotes;
