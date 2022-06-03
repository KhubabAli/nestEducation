import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const greenText = {
  color: "#56B24B",
};

const whiteText = {
  color: "#ffffff",
};

const itemSeperator = {
  backgroundColor: "#ffffff",
  height: 4,
  width: "50%",
  borderRadius: 100,
  marginBottom: 40,
  marginTop: 20,
};

class Category extends Component {
  render() {
    return (
      <main>
        <section className="category__area">
          <div className="pt-40 pb-30" style={{ backgroundColor: "#56B24B" }}>
            <div className="container">
              <div className="row align-items-end">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
                  <div className="section__title-wrapper mb-45">
                    <h1
                      style={{
                        color: "#ffffff",
                        fontSize: 60,
                        lineHeight: 1,
                      }}
                    >
                      EXPLORE <br />
                      <span style={{ color: "#15375B" }}>US </span>
                    </h1>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
                  <div className="category__more mb-50 float-md-end fix">
                    <Link href="/course-grid">
                      <a className="link-btn" style={{ color: "#ffffff" }}>
                        View all Category
                        <FontAwesomeIcon
                          icon={["fas", "arrow-right"]}
                          style={{
                            marginLeft: 12,
                            width: 24,
                            height: 24,
                            color: "#ffffff",
                          }}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-60 pb-30" style={{ backgroundColor: "#15375B" }}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3 style={greenText}>F.SC</h3>
                  <div style={itemSeperator} />
                  <h3 style={greenText}>ICS</h3>
                  <div style={itemSeperator} />
                  <h3 style={greenText}>MATRIC</h3>
                </div>

                <div className="col">
                  <h3 style={greenText} className="mb-30">
                    ENGINEERING TESTS
                  </h3>
                  <h4 style={whiteText}>ECAT</h4>
                  <h4 style={whiteText}>NUST</h4>
                  <h4 style={whiteText}>FAST</h4>
                  <h4 style={whiteText}>GIKI</h4>
                  <h4 style={whiteText}>PIEAS</h4>
                  <h4 style={whiteText}>NTS</h4>
                </div>

                <div className="col">
                  <div
                    style={{
                      display: "flex",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: 3,
                        backgroundColor: "white",
                        marginLeft: -50,
                        marginTop: 16,
                        marginBottom: 16,
                      }}
                    ></div>
                    <div
                      style={{
                        display: "flex",
                        marginLeft: 50,
                        flexDirection: "column",
                      }}
                    >
                      <h3 style={greenText} className="mb-30">
                        MEDICAL TESTS
                      </h3>
                      <h4 style={whiteText}>NMDCAT</h4>
                      <h4 style={whiteText}>AGA KHAN</h4>
                      <h4 style={whiteText}>FMDC</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Category;
