import React, { useState, useEffect } from "react";
import TopFeed from "./TopFeed/TopFeed";
import ProfileImg from "../../assets/profile.jpeg";
import Post from "./Post/Post";
import { db } from "../../firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

import "./middleFeed.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const MiddleFeed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Brian Thomas",
      title: "title test",
      message: input,
      photoURL: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <section className="middle-feed-container">
      <section className="top-feed-container">
        <div className="image-post-container">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="profile-img"
              className="profile-img"
            />
          )}
          <form>
            <input
              type="text"
              name="post"
              id="post"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Share
            </button>
          </form>
        </div>
        <TopFeed onClick={sendPost} />
      </section>

      <div className="sep-sorter">
        <hr />
        <p>
          Sort by: <span>Top </span>
        </p>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, title, message, photoURL } }) => {
          return (
            <Post
              key={id}
              name={name}
              title={title}
              message={message}
              photoURL={photoURL}
            />
          );
        })}
      </FlipMove>
    </section>
  );
};

export default MiddleFeed;
