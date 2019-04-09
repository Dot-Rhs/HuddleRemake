import React from "react"
import Header from "../components/header/header"
import "./global.css"
import mockups from "../images/illustration-mockups.svg"
import usersImg from "../images/illustration-your-users.svg"
import convo from "../images/illustration-flowing-conversation.svg"
import grow from "../images/illustration-grow-together.svg"

const IndexPage = () => (
  <div className="mainCont">
    <div className="topCont">
      <Header />

      <div className="content">
        <div className="topText">
          <h1>
            Build The Community <br /> Your Fans Will Love
          </h1>
          <h3>
            Huddle re-imagines the way we build communities. you have <br /> a
            voice, but so does your audience. Create connections with <br />{" "}
            your users as you engage in genuine discussion.
          </h3>
          <button className="button">Get Started For Free</button>
        </div>
        <div>
          <img src={mockups} alt="mockups" className="mockups" height="400" />
        </div>
      </div>
      <div className="midCont">
        <div className="cards">
          <div>
            <h1>Grow Together</h1>
            <h3>
              Generate meaningul stuff here... <br />
              more text
              <br />
              and more
            </h3>
          </div>
          <img src={grow} alt="Grow Together" height="350" />
        </div>
        <div className="cards">
          <img src={convo} alt="Flowing Conversation" height="350" />
          <div>
            <h1>Flowing Conversations</h1>
            <h3>
              You Wouldn't yadadadaddada here's some text
              <br />
              and some more
              <br />
              last yada
            </h3>
          </div>
        </div>
        <div className="cards">
          <div>
            <h1>Your Users</h1>
            <h3>
              It takes no time at all to integrate Huddle with your app's <br />
              authentication solution. this means, once signed in to <br /> your
              app, your users can start chatting immediately.
            </h3>
          </div>
          <img src={usersImg} alt="Your Users" height="350" />
        </div>
      </div>
    </div>
    <div />
  </div>
)

export default IndexPage
