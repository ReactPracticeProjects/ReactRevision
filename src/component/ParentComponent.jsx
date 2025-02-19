import { useState } from "react";

function ChildComponent(props) {
  return (
    <button className="bg-red-400 px-2 py-1 cursor-pointer" onClick={() => props.handleMessage("Hello from Child!")}>
      Send Message
    </button>
  );
}

function ParentComponent() {
  const [message, setMessage] = useState("");

  const receiveMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Message from Child: {message}</h1>
      <ChildComponent handleMessage={receiveMessage} />
    </div>
  );
}

export default ParentComponent;
