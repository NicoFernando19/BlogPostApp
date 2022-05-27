import React, { useEffect, useMemo, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import userService from "../services/userService";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function UserDetailComponent() {
    const useQuery = () => {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }

    const { userId } = useParams();
    const query = useQuery();
    const postId = query.get('postId');
    const [User, setUser] = useState({});
    const fetchData = async () => {
        let result = await userService.getUserDetail(userId)
        setUser(result.data)
    }


    useEffect(() => {
        fetchData()
    }, [userId])
    const { name, email, username, phone, website } = User;
    return (
        <div className="container">
            <div className="row mb-2">
                <span className="text-muted">
                    <Link to={`/post/${postId}`} className="text-decoration-none text-black">
                        <FontAwesomeIcon icon={faArrowLeft} /> Back
                    </Link>
                </span>
            </div>
            <div className="row text-center">
                <div className="col-md-6">
                <iframe 
                    style={{width: '100%'}} 
                    className="h-100" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0" 
                    src={`https://maps.google.com/maps?q=${User.address?.geo.lat},${User.address?.geo.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    >
                </iframe>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    Name:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    {name}
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    Email:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    {email}
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    Username:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    {username}
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    City:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    {User.address?.city}
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    Street:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    {User.address?.street}
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    Suite:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    {User.address?.suite}
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    Zip Code:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    {User.address?.zipcode}
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    Phone:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    {phone}
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    Website:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    <a href={website} className="text-decoration-none" >{website}</a>
                                </p>
                            </span>
                        </div>
                        
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    Company Name:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    {User.company?.name}
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    Company Catch Phrase:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    {User.company?.catchPhrase}
                                </p>
                            </span>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>
                                <p>
                                    Company Bs:
                                </p>
                            </span>
                        </div>
                        <div className="col-md-8 text-start">
                            <span>
                                <p>
                                    {User.company?.bs}
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetailComponent;