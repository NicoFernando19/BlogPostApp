import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentComponent from "./CommentComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function PostDetailComponent() {
    let post = useSelector(state => state.postDetail)
    const { postId } = useParams()
    
    return (
        <div className="container">
            <div className="row mb-2">
                <span className="text-muted">
                    <Link to={`/`} className="text-decoration-none text-black">
                        <FontAwesomeIcon icon={faArrowLeft} /> Back
                    </Link>
                </span>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <img src={post.photo?.url} />
                    </div>
                </div>
                <div className="col-md-6">
                    <p>
                        <b>
                            {post.title}
                        </b>
                    </p>
                    <p>
                        {post.body}
                    </p>
                    <p className="text-end text-muted">
                        Posted by: <Link to={`/user/${post.user?.id}?postId=${postId}`} className="text-decoration-none"> {post.user?.name} </Link>
                    </p>
                    
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-12">
                    <span>
                        All Comments
                    </span>
                    <CommentComponent postId={postId} />
                </div>
            </div>
        </div>
    );
}

export default PostDetailComponent;