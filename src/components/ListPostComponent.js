import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import albumService from "../services/albumService";
import photoService from "../services/photoService";
import postService from "../services/postService";
import userService from "../services/userService";
import { addPost, getPosts } from "../store/features/postFeatures";
import { getUsers } from "../store/features/userFeature";
import { getAlbums } from "../store/features/albumFeatures";
import { getPhotos } from "../store/features/photoFeatures";
import PostComponent from "./PostComponent";
import { Modal, Button, Form, Toast, ToastContainer } from "react-bootstrap";

function ListPostComponent() {
    const posts = useSelector((state) => state);
    const dispatch = useDispatch();
    const [ModalShow,setModalShow] = useState(false);
    const [Title,setTitle] = useState('');
    const [Content,setContent] = useState('');
    const [ToastShow,setToastShow] = useState(false);
    const [DisableButton,setDisableButton] = useState(false);
    
    const fetchData = async () => {
        let result = await postService.getPosts();
        let userDatas = await userService.getUsers();
        let albumDatas = await albumService.getAlbums();
        let photoDatas = await photoService.getPhotos();
        dispatch(getPosts(result.data));
        dispatch(getUsers(userDatas.data));
        dispatch(getAlbums(albumDatas.data));
        dispatch(getPhotos(photoDatas.data));
    }

    const CloseModal = () => {
        setModalShow(false) 
    }

    const OpenModal = () => {
        setModalShow(true);
        setDisableButton(false);
    }

    const titleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const contentOnChange = (e) => {
        setContent(e.target.value)
    }

    const addNewPost = async (e) => {
        e.preventDefault();
        setDisableButton(true);
        let newPost = {
            userId: 1,
            title: Title,
            body: Content
        }
        let result = await postService.postPost(newPost)
        newPost = result.data;
        dispatch(addPost(newPost));
        setTitle('')
        setContent('')
        setModalShow(false);
        setToastShow(true);
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="container">
            <div className="row text-end">
                <div className="col-md-12">
                    <button className="btn btn-primary" type="button" onClick={OpenModal}>
                        New Post
                    </button>
                </div>
            </div>
            <div className="row">
                <PostComponent />
            </div>
            <Modal show={ModalShow} onHide={CloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Post</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" value={Title} onChange={titleOnChange} disabled={DisableButton} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} value={Content} onChange={contentOnChange} disabled={DisableButton} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={CloseModal}>Close</Button>
                    <Button variant="primary" onClick={addNewPost}  disabled={DisableButton}>Post</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setToastShow(false)} show={ToastShow} delay={3000} autohide>
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                        />
                        <strong className="me-auto">Post</strong>
                    </Toast.Header>
                    <Toast.Body>New Post Added!</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}

export default ListPostComponent;