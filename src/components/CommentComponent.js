import { useEffect, useState } from "react";
import postService from "../services/postService";

function CommentComponent(props) {
    const postId = props.postId;
    let [Comments,setComments] = useState([])
    const [isForm,setIsform] = useState(false)
    const [CommentName,setCommentName] = useState('')
    const [Comment,setComment] = useState('')
    const fetchData = async () => {
        const result = await postService.getCommentsByPostId(postId)
        setComments(result.data)
    }
    
    useEffect(() => {
        fetchData();
    }, [postId]);

    const addComment = (e) => {
        e.preventDefault()
        let newId = Math.floor(Math.random() * 100) + 6;
        let newComment = {
            postId: postId,
            id: newId,
            name: CommentName,
            email: `anonymous${newId}@qwe.tv`,
            body: Comment
        }
        
        Comments = [
            ...Comments,
            newComment
        ]
        setComments(Comments)
        setCommentName('')
        setComment('')
    }

    const showForm = () => {
        setIsform(!isForm)
    }

    const getCommentNameValue = (event) => {
        setCommentName(event.target.value)
    }

    const getCommentValue = (event) => {
        setComment(event.target.value)
    }

    const renderComment = Comments.map((comment, idx) => {
        return (
            <div className="row my-3" key={idx}>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <b>{ comment.name }</b>
                        </div>
                        <p className="card-text">
                            { comment.body }
                        </p>
                    </div>
                    <div className="card-footer text-muted">
                        <span>
                            <p className="text-end m-0">
                                Commented by: { comment.email }
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        );
    })
    return (
        <>
        <div className="form my-3">
            <div className="row">
                <div className="col-md-4">
                    <button type="button" onClick={showForm} className={`btn ${ isForm ? "btn-secondary" : "btn-primary" } `}>{ isForm ? 'Close Form' : 'Add Comment'}</button>
                </div>
            </div>
            <form className={`${ isForm ? "d-block" : "d-none" }`}>
                <div className="row align-items-center">
                    <div className="col-md-12 my-2">
                        <div className="col-auto">
                            <label htmlFor="inputCommentName" className="col-form-label">Comment Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="inputCommentName" value={CommentName} onChange={getCommentNameValue} className="form-control" aria-describedby="passwordHelpInline" />
                        </div>
                    </div>
                    <div className="col-md-12 my-2">
                        <div className="col-auto">
                            <label htmlFor="inputComment" className="col-form-label">Comment</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="inputComment" value={Comment} onChange={getCommentValue} className="form-control" aria-describedby="passwordHelpInline" />
                        </div>
                    </div>
                    <div className="col-md-12 my-2">
                        <div className="col-auto text-end">
                            <button type="button" onClick={addComment} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        {renderComment}
        </>
    );
}

export default CommentComponent;