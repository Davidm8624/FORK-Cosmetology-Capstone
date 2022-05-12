import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import StudentDrop from "./StudentDrop";
import {
  Search,
  Grid,
  Table,
  Form,
  Container,
  Button,
  Divider,
  Segment,
  Image,
  Modal,
  Icon,
} from "semantic-ui-react";
import ClientDrop from "./ClientDrop";
import ClientProfile from "./ClientProfile";

const StudentProfile = () => {

  // const [isActive, setIsActive] = useState(false);
  // const [outOfFocus, setOutOfFocus] = useState(true);
  const [fullscreen, setFullscreen] = useState(false)
  return (
    <>
      {/* <Segment
            textAlign="center"
            // style={{ borderTop: "solid 3rem #f3941c" }}
          > */}
      {/* <div className="header">
        <h2>Student Profile</h2>
      </div> */}
      <div className="profile-container">

        <div className="content">
          <div className="form-container">
            <div className="profile-header">
              <Image
                avatar
                src={"/bigChung.webp"}
                alt="logo"
                style={{
                  height: "180px",
                  width: "180px",
                  border: "solid 6px #cccddd",
                }}
              />
              <h1 style={{ margin: "auto", fontSize: "4rem" }}>Student Name</h1>
            </div>
            <Divider />

            <Form>
              <Form.Group widths="equal" style={{ margin: "auto" }}>
                <Form.Field
                  style={{ display: "flex", justifyContent: "center" }}
                  label="Email"
                  placeholder="Email"
                />
                <Form.Field
                  style={{ display: "flex", justifyContent: "center" }}
                  label="Teacher"
                  placeholder="Teacher"
                />
                <Form.Field
                  style={{ display: "flex", justifyContent: "center" }}
                  label="Hours"
                  placeholder="Hours"
                />
              </Form.Group>
            </Form>

            <Divider />

            {/* Temporary buttons, subject to change */}


            {!fullscreen ?
              <div className="fullscreen-container">
                <div className="make-fullscreen">
                  <Button icon="magnify" floated="right" onClick={() => {
                    setFullscreen(!fullscreen)
                  }}></Button>
                </div>

                <Grid>

                  <Grid.Column width="3" textAlign="center">
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 1</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 2</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                    <div className="clientName" style={{ marginBottom: "2em" }}>Client 3</div>
                    <br />
                  </Grid.Column>
                  <Grid.Column floated="right" width="13">
                    <ClientProfile />
                  </Grid.Column>
                </Grid>
              </div> :
              <div className="fullscreen-container slide" style={{ zIndex: "2" }}

                // onClick={() => {
                //   setFullscreen(!fullscreen)
                // }}
              >
                <div id="center-on-screen" style={{width: "75vw !important"}}>
                  <div className="make-fullscreen">
                    
                  </div>

                  <Grid>
                    <Grid.Column   floated="right" width="16">
                      <Grid.Row style={{display: "flex" ,padding: "10px"}}>
                        <Search></Search>
                    <Button icon="close orange large" 
                    style={{position: "absolute", right: "10px"}}
                    onClick={() => {
                      setFullscreen(!fullscreen)
                    }}>
                    </Button>
                      </Grid.Row>
                      <ClientProfile  />
                    </Grid.Column>
                  </Grid>
                </div>
              </div>
            }
            <Button
              content="Next"
              labelPosition="right"
              icon="arrow right"
              // onClick={() => setOutOfFocus(false)}
              positive
            />
          </div>
          <Divider />
        </div>
      </div>
      {/* </Segment> */}
    </>
  );
};



export default StudentProfile;
