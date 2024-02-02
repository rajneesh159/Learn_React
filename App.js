const heading = React.createElement("h1", { id: "heading" }, "Where is you?");

const root = ReactDOM.createRoot(document.getElementById("root"));

// Pass the 'heading' element to the render function
root.render(heading);