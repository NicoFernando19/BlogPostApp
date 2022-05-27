import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostDetail } from "../store/features/postFeatures"

function PostComponent() {
    let posts = useSelector(state => state.posts.posts)
    let users = useSelector(state => state.allUsers.users)
    let albums = useSelector(state => state.allAlbums.albums)
    let photos = useSelector(state => state.allPhotos.photos)
    posts = posts.map((post, idx) => {
        let user = users.find(user => {
            return user.id == post.userId
        });
        let album = albums.find(album => {
            return album.userId == user.id
        });
        let photo = photos.find(photo => {
            return photo.albumId == album.id
        })
        post = {
            ...post,
            user: user,
            album: album,
            photo: photo
        }
        return post
    })
    
    const dispatch = useDispatch();


    const render = posts.map((post, idx) => {
        const {userId, id, title, body, user: { name }, photo: { thumbnailUrl }} = post;
        return (
            <div className="col-md-3 p-3" key={idx}>
                <Link to={`/post/${id}`} className="text-decoration-none text-dark">
                    <div className="card" style={{width: '18rem'}} onClick={() => dispatch(getPostDetail(post))}>
                        <img src={thumbnailUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{ title.length > 15 ? `${title.substring(0, 15)}...` : title }</h5>
                            <p className="card-text">{ body.length > 15 ? `${body.substring(0, 30)}...` : body }</p>
                        </div>
                        <div className="card-footer text-end">
                            <span>
                                <p className="text-muted m-0">
                                    Author's: {name}
                                </p>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return (
        <>
        {render}
        </>
    );
}

export default PostComponent;