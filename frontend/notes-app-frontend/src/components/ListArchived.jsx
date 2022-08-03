import React, { Component, useState } from "react";
import Button from "react-bootstrap/esm/Button";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import history from "../js/history.js";
import NoteService from "../services/NoteService";

import noteimg from "../assets/note.png";

import Card from "react-bootstrap/Card";
import ModalForm from "./ModalForm.jsx";



class ListArchived extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],

    };

  }

  componentDidMount() {
    NoteService.getAllNotes().then((res) => this.setState({ notes: res.data }));
  }

 

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
      <div className="container g-3">
          <>

          {this.state.notes.map((notes) => (
              notes.isArchived ? (
              <Row key={notes.id} className="container g-3" xs={1} md={2}>
              <Col>
                  
                      <Card
                          //onClick={this.handleCreate}
                          
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
          
            </>
      </div>
    </>
  );
}
}
export default ListArchived;
