import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Add({handleAdd}) {
    
    const [newMovie, setNewmovie] = useState({
        
      "Genre": {
        "Name": "",
      },
      "Title": "",
      "Description": "",
      "ImageURL": "",
      "Rating" : 0, 
    },);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button variant="primary" onClick={handleShow}>
Add Movie      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >title</Form.Label>
              <Form.Control
                type="text"
                placeholder="add title name"
                autoFocus
                onChange = {(e)=>setNewmovie ({...newMovie,Title:e.target.value})}
              />

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >src img</Form.Label>
              <Form.Control
                type="text"
                placeholder="add src img"
                onChange = {(e)=>setNewmovie ({...newMovie,ImageURL:e.target.value})}


              />

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="add Rating"
                onChange = {(e)=>setNewmovie ({...newMovie,Rating:+e.target.value})}

              />

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="add  genre name"
                onChange = {(e)=>setNewmovie ({...newMovie,Genre:{...newMovie.Genre,Name:e.target.value}})}

              />

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" 
              type="text"
              placeholder="Add Description"
              onChange = {(e)=>setNewmovie ({...newMovie,Description:e.target.value})}

              />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {handleClose();handleAdd(newMovie)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add ;