import React, { useEffect, useState } from "react";
import "./scss/wall.css";
import frontImage from "../../images/frontImage.jpg";
import { motion } from "framer-motion";
import axios from "axios";

const Wallpaper = () => {
  const [explore, setExplore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orientation, setOrientation] = useState("Orientation");
  const [search, setSearch] = useState("");
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [index, setIndex] = useState(0);
  const [srcVar, setSrcVar] = useState("medium");

  //--------- Function for search ------------------

  const submitSearch = async (e) => {
    e.preventDefault();
    if (search !== "") {
      setLoading(true)
      let tempImages = [];
      let tempCol1 = [];
      let tempCol2 = [];
      let tempCol3 = [];
      let res;
      let a = 0;
      setIndex(0);
      try {
        res = await axios.get(
          `https://api.pexels.com/v1/search?query=${search}`,
          {
            headers: {
              Authorization:
                "563492ad6f91700001000001b95306afab8144cc8103dab3aef11e08",
            },
          }
        );
        console.log(res.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }

      tempImages = res.data.photos;
      setNextPage(res.data.next_page);

      // console.log(tempImages)
      for (let i = 0; i < tempImages.length; i = i + 3) {
        tempCol1[a] = tempImages[i];
        tempCol2[a] = tempImages[i + 1];
        tempCol3[a] = tempImages[i + 2];
        a++;
      }
      setIndex(index + 5);
      setCol1(tempCol1);
      setCol2(tempCol2);
      setCol3(tempCol3);
      setSearch("");
    }
  };

  //--------- Function for search ------------------

  const callNextPage = async (e) => {
    e.preventDefault();
    setLoading(true)
    console.log("Calling next page");
    let tempImages = [];
    let tempCol1 = col1;
    let tempCol2 = col2;
    let tempCol3 = col3;
    let res;
    let a = index;
    console.log("a:" + a);
    try {
      res = await axios.get(`${nextPage}`, {
        headers: {
          Authorization:
            "563492ad6f91700001000001b95306afab8144cc8103dab3aef11e08",
        },
      });
      // console.log(res.data)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
    
    tempImages = res.data.photos;
    setNextPage(res.data.next_page);
    
    // console.log(tempImages)
    for (let i = 0; i < tempImages.length; i = i + 3) {
      tempCol1[a] = tempImages[i];
      tempCol2[a] = tempImages[i + 1];
      tempCol3[a] = tempImages[i + 2];
      a++;
    }
    console.log(index);
    setIndex(index + 5);
    setCol1(tempCol1);
    setCol2(tempCol2);
    setCol3(tempCol3);
  };

  useEffect(() => {
    console.log("Index :" + index);
  }, [index]);

  return (
    <div className="wallpaper">
      {/* ------------------- LOGO -------------------- */}
      <div
        className="pixelLogo"
        style={{ justifyContent: explore ? "" : "end" }}
      >
        <a>
          WALL-M<a style={{ color: "red" }}>A</a>NIA
        </a>{" "}
        <a href="https://www.pexels.com">
          Photos <a style={{ color: "red" }}>Provided</a> By Pexels{" "}
        </a>
      </div>

      {/* ------------------- Front -------------------- */}

      <div
        className="front"
        style={{
          backgroundImage: `url(${frontImage})`,
          top: explore ? "-110vh" : "0",
        }}
      >
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => setExplore(!explore)}
          className="frontButton"
        >
          EXPLORE
        </motion.button>
        <a className="frontText">ROYALTY FREE IMAGES</a>
        <a className="frontText">USING PEXELS API</a>
      </div>

      {/* ------------------- Main -------------------- */}

      <div className="wallMain">
        {/* --------------- Top ---------------- */}
        <div className="wallTop">
          <form className="searchBox" onSubmit={submitSearch}>
            <input
              className="searchInput"
              required
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              type="text"
              placeholder="Search Here"
              disabled={loading? true:false}
            />
            <button type="submit" className="searchIcon"></button>
          </form>
        </div>

        {/* --------------- Middle ---------------- */}
        <div className="wallMid">
          {/* --------------- orientation ------------------ */}
          <div className="orientation">
            <a href="">{orientation}</a>
            <div className="orientationIcons">
              <div
                className="orienIcon"
                style={{
                  backgroundColor: `${
                    orientation === "Landscape" ? "white" : ""
                  }`,
                }}
                onClick={() => {
                  setOrientation("Landscape");
                  setSrcVar("landscape");
                }}
              >
                <div
                  className="orienIconInner"
                  style={{
                    border: `${
                      orientation === "Landscape" ? "black 3px solid" : ""
                    }`,
                  }}
                ></div>
              </div>
              <div
                className="orienIcon"
                style={{
                  backgroundColor: `${
                    orientation === "Portrait" ? "white" : ""
                  }`,
                }}
                onClick={() => {
                  setOrientation("Portrait");
                  setSrcVar("portrait");
                }}
              >
                <div
                  className="orienIconInner"
                  style={{
                    border: `${
                      orientation === "Portrait" ? "black 3px solid" : ""
                    }`,
                  }}
                ></div>
              </div>
              <div
                className="orienIcon"
                style={{
                  backgroundColor: `${orientation === "Normal" ? "white" : ""}`,
                }}
                onClick={() => {
                  setOrientation("Normal");
                  setSrcVar("medium");
                }}
              >
                <div
                  className="orienIconInner"
                  style={{
                    border: `${
                      orientation === "Normal" ? "black 3px solid" : ""
                    }`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------- Bottom ---------------- */}
        <div className="wallBottom">
          <div style={{display: loading? '':'none' }} className="loadingScreen">
            <div className="loadingCircle1"></div>
            <div className="loadingCircle2"></div>
            <div  className="loadingCircle3"></div>
          </div>

          <a style={{display: nextPage? 'none': '' }} className="loadingText"> Your Result Will Be Here </a>
          <div className="imageGrid">
            <div className="col1">
              {col1.map((a) => (
                <div style={{position: 'relative'}} >
                <img className="gridImage" onClick={()=>{window.open(`${a.src[srcVar]}`) }} src={`${a.src[srcVar]}`} alt="" />
                <div className="gridImageDetail" >
                  <a href={`${a.photographer_url}`} className="gridImageOwener">Owener: {a.photographer}</a> <br />
                  <a className="gridImageText">{a.alt}</a>
                </div>
              </div>
              ))}
            </div>
            <div className="col1">
              {col2.map((a) => (
                <div style={{position: 'relative'}} >
                  <img className="gridImage" onClick={()=>{window.open(`${a.src[srcVar]}`) }} src={`${a.src[srcVar]}`} alt="" />
                  <div className="gridImageDetail" >
                    <a href={`${a.photographer_url}`} className="gridImageOwener">Owener: {a.photographer}</a> <br />
                    <a className="gridImageText">{a.alt}</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="col1">
              {col3.map((a) => (
                <div style={{position: 'relative'}} >
                <img className="gridImage" onClick={()=>{window.open(`${a.src[srcVar]}`) }} src={`${a.src[srcVar]}`} alt="" />
                <div className="gridImageDetail" >
                  <a href={`${a.photographer_url}`} className="gridImageOwener">Owener: {a.photographer}</a> <br />
                  <a className="gridImageText">{a.alt}</a>
                </div>
              </div>
              ))}
            </div>
          </div>
          {nextPage && (
            <button className="nextPageButton" onClick={callNextPage}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;
