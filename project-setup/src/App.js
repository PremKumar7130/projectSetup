import React, { useEffect, useState } from "react";
import useAxiosCrud from "./Common/CustomHooks/useFetch";

const App = () => {
  const [postInput, setPostInput] = useState("");
  const [putInput, setPutInput] = useState("");
  const [deleteClicked, setDeleteClicked] = useState(false);

  const { data, error, loading, getRequest, postRequest, putRequest, deleteRequest } = useAxiosCrud(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const handlePostSubmit = (e) => {
    e.preventDefault();
    postRequest({ title: postInput, body: "Test post" });
    setPostInput("");
  };

  const handlePutSubmit = (e) => {
    e.preventDefault();
    putRequest({ title: putInput, body: "Test put" });
    setPutInput("");
  };

  const handleDeleteClick = () => {
    deleteRequest();
    setDeleteClicked(true);
  };

  useEffect(()=>{
    getRequest();
  },[])

  return (
    <div>
      <h1>React Axios CRUD example</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <>
          <h2>Posts</h2>
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
          <form onSubmit={handlePostSubmit}>
            <h3>Add Post</h3>
            <input type="text" value={postInput} onChange={(e) => setPostInput(e.target.value)} />
            <button type="submit">Add</button>
          </form>
          <form onSubmit={handlePutSubmit}>
            <h3>Edit Post</h3>
            <input type="text" value={putInput} onChange={(e) => setPutInput(e.target.value)} />
            <button type="submit">Update</button>
          </form>
          <button onClick={handleDeleteClick} disabled={deleteClicked}>
            Delete Post
          </button>
        </>
      )}
    </div>
  );
};

export default App;
