import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "./SellerService";
import Constants from "../../../ultil/Constants";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const SellerPage = () => {
  //const [user, setUser] = useAtom(googleUser);

  const [user, setUser] = useState({});
  const [apiError, setApiError] = useState(false);
  // console.log(window.sessionStorage.getItem("loggedIn"));

  //store local storage after user logs in to use to updates
  //googleUser or context api
  const googleUser = JSON.parse(window.sessionStorage.getItem("user"));

  useEffect(() => {
    getUserByEmail(googleUser?.email, setUser, setApiError);

    //fetchUserById(setUser, googleUser., setApiError);
    // getGoogleUser(setUser);
    // fetchUsers(setUser, setApiError);
  }, [user]);

  const Navigate = useNavigate();

  /**
   * @name HandleCreate
   * @Description Navigates users to specified route
   */
  const HandleCreate = () => {
    Navigate("/Seller/Post");
    //{googleUser.firstName + ' ' + googleUser.lastName}
    //console.log(window.sessionStorage.getItem("loggedIn"));
    //console.log(window.sessionStorage.getItem("user"));
  };

  /**
   * @name handleProfile
   * @Description Navigates user to specified route
   */
  const handleProfile = (id) => {
    Navigate(`/Seller/Edit/${id}`);
  };

  return (
    <>
              {apiError && <p data-testid="errMsg">{Constants.API_ERROR}</p>}
      

      <div className="container m-5 p-5 ">
        <div className="card-body d-flex justify-content-center offset-2">
          <div className="card" style={{ width: "50%" }}>
            <div className="mb-5">
              <h5 class="card-title text-center">{user?.firstName}</h5>
            </div>
            <div className="my-3">
                <Button className="offset-1" colSpan="" onClick={HandleCreate}>Create Product</Button>
                <Button className="offset-2" type="button" onClick={() => handleProfile(user.id)}>
                  Edit Profile
                </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerPage;
