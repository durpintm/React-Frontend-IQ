import { useState } from "react";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Hello 1",
    },
    {
      id: 2,
      text: "Hello 2",
    },
  ]);

  return (
    <>
      <div>
        <Notes notes={notes} setNotes={setNotes} />
      </div>
    </>
  );
}

export default App;
