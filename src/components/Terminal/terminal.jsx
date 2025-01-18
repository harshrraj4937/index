const Terminal = () => (
  <IframeLoader/>
  );

export default Terminal;

const IframeLoader = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="https://terminal-zr4l.onrender.com/"
        title="Localhost Content"
        style={{
          margin: "0",
          width: "100vw",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1e1e1e",
          color: "#00ff00",
          fontFamily: "monospace",
          overflow: "hidden",
        }}
      ></iframe>
    </div>
  );
};