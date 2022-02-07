// https://github.com/gitdagray/react_resources

import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    // https://qiita.com/junjis0203/items/0096963aefb70f466c27
    // https://reffect.co.jp/react/react-router-6
    // https://www.youtube.com/watch?v=XBRLVRjZ3CQ

    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />

            <Route path="edit/:id" element={<EditPost />} />

            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
