import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const navigate = useNavigate();

  return;
  // https://qiita.com/junjis0203/items/0096963aefb70f466c27
  // https://reffect.co.jp/react/react-router-6
  // https://www.youtube.com/watch?v=XBRLVRjZ3CQ
  <Routes>
    <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
      <Route index element={<Home posts={searchResults} />} />
      <Route path="post">
        <Route
          index
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path=":id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<Missing />} />
    </Route>
  </Routes>;
}

export default App;
