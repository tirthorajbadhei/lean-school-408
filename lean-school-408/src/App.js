import "./App.css";
import { Box } from "@chakra-ui/layout";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "42px",
          backgroundColor: "#af2c2c",
          marginTop: "0px",
          color: "white",
        }}
      >
        <Box
          display="flex"
          gap={"45px"}
          alignItems="center"
          justifyContent={"center"}
        >
          <h4 className="div1">après all day, the Anthro way! </h4>
          <h2 className="div2">GONE SKIING</h2>
          <h4 className="div3">shop the new collection</h4>
        </Box>
      </div>
    </div>
  );
}

export default App;
