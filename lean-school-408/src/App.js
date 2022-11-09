import "./App.css";
import { Box, Image, Input } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
        <Box display="flex">
          <Box
            className="box2"
            display={"flex"}
            marginLeft="55px"
            borderBottom={"1px solid #e5e2de"}
          >
            <Image
              borderTop={"3px solid #167a92"}
              borderRight="2px solid #e5e2de"
              w={"15%"}
              src="https://images.ctfassets.net/5de70he6op10/7q3Z6vJ6UEPFyAPKAFZZxl/1a22eec777828277571187c43306e983/Anthropologie_Holiday_Lockup__1_update.svg"
              alt="Dan Abramov"
            />
            <Image
              paddingLeft={"10px"}
              w={"15%"}
              src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
              alt="Dan Abramov"
            />
          </Box>
          <Box display={"flex"}>
            <Input
              color={"black"}
              border={"3px solid black"}
              marginTop={"60px"}
              marginRight="160px"
              placeholder="Search Anthropologie"
              size="lg"
              w={"260px"}
            />
            <HamburgerIcon
              marginTop={"70px"}
              marginRight="60px"
              w={6}
              h={6}
              color="black"
            />
          </Box>
        </Box>
      </div>
      <Box
        className="box3"
        display={"flex"}
        marginTop={"103px"}
        w={"100%"}
        h="60px"
        border={"1px solid #e5e2de"}
      >
        <h2 style={{ color: "red", marginLeft: "70px" }}>Gifts</h2>
        <h2>New!</h2>
        <h2>Dresses</h2>
        <h2>Clothing</h2>
        <h2>Shoes</h2>
        <h2>Accessories</h2>
        <h2>BHLDN Weddings</h2>
        <h2>Home & Furniture</h2>
        <h2>Beauty & Wellness</h2>
        <h2>Gardens & Outdoor</h2>
        <h2>Sale</h2>
      </Box>
      <Box className="box4" w="100%" h="140px" display="flex" gap={"15px"}>
        <Image
          marginTop={"30px"}
          marginLeft={"80px"}
          w={"22%"}
          h="45%"
          src="https://images.ctfassets.net/5de70he6op10/66gBHQY9rlKtf5IItLdMCa/eb48274717871eb64ba75900e042218f/LS_M0_Banner_a.jpg?w=630&q=80&fm=webp"
        />
        <Image
          marginTop={"30px"}
          h="45%"
          w={"22%"}
          src="https://images.ctfassets.net/5de70he6op10/7FtJ5t3fiV8RM8Q80ufmqS/4b8d59935ecd871b8f0b1055665bbe09/LS_M0_Banner_b.jpg?w=630&q=80&fm=webp"
        />
        <Image
          marginTop={"30px"}
          h="45%"
          w={"22%"}
          src="https://images.ctfassets.net/5de70he6op10/6Rg6bbVw5EcY8ZFGylD3Lt/52e96081fac4772cbd0e5aabda58219a/LS_M0_Banner_c.jpg?w=630&q=80&fm=webp"
        />
        <Image
          marginTop={"30px"}
          h="45%"
          w={"22%"}
          src="https://images.ctfassets.net/5de70he6op10/2jP2GsJVfSqC66yrxJJPOX/a4b3ecfc7c2a6de75aa10b764c9cfe9f/LS_M0_Banner_d.jpg?w=630&q=80&fm=webp"
        />
      </Box>
      <Box
        w={"100%"}
        h="auto"
        display={"flex"}
        gap="24px"
        marginLeft={"70px"}
        marginBottom="30px"
      >
        <Image
          w={"45%"}
          src="https://images.ctfassets.net/5de70he6op10/iMM14RuhLCVUGYVmrKvc9/b97a6a1d371ca72bbc1ae9aaf4a11f26/LS_M1a.jpg?w=1302&q=80&fm=webp"
        />
        <Image
          w={"45%"}
          src="https://images.ctfassets.net/5de70he6op10/6pgHrENVmjeLfmWwwGZuiG/7087546a3b3529f4de0de0ccedca384e/LS_M1b.jpg?w=1302&q=80&fm=webp"
        />
      </Box>
      <Box
        w={"100%"}
        h="auto"
        display={"flex"}
        gap="24px"
        marginLeft={"80px"}
        marginBottom="30px"
      >
        <Image
          w={"29%"}
          src="https://images.ctfassets.net/5de70he6op10/3w8rGkLqypJyMI94W5jAz6/b1a47476e9fa52841b06bcbf50e8c337/LS_M2a.jpg?w=856&q=80&fm=webp"
        />
        <Image
          w={"29%"}
          src="https://images.ctfassets.net/5de70he6op10/4dc0UZzh9jWMuJPdVGcr2v/8a7ace4023132337f5e9a81d4ac819f4/LS_M2b.jpg?w=856&q=80&fm=webp"
        />
        <Image
          w={"29%"}
          src="https://images.ctfassets.net/5de70he6op10/28WqNdcNbssmLjzWncssjE/a9ef1a745783404fb8f054796735b3b1/LS_M2c.jpg?w=856&q=80&fm=webp"
        />
      </Box>
      <Box>
        <Image
          marginLeft={"80px"}
          marginBottom="30px"
          w={"90%"}
          src="https://images.ctfassets.net/5de70he6op10/sElVOkh1LlYRV8lFchscj/3fa66885dac24294a26ad182591b8639/ALiving_HPG_LS_01-1.jpg?w=2640&q=80&fm=webp"
        />
      </Box>
      <Box>
        <Image
          w={"90%"}
          marginLeft={"85px"}
          src="https://images.ctfassets.net/5de70he6op10/6YcDf5MI12J4gw9cOaz9WP/70f858a9574c2e0ff43b2b7bdc6e61af/LS_M4.jpg?w=2641&q=80&fm=webp"
        />
      </Box>
    </div>
  );
}

export default App;
