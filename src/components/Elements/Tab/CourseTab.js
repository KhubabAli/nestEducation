import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
); // disable ssr
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";

const courses = [
  {
    image: "fsc.jpg",
    title: "F.Sc",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
  {
    image: "ics.jpg",
    title: "ICS",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
  {
    image: "matric.jpg",
    title: "MATRIC",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
  {
    image: "ecat.jpg",
    title: "ECAT",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
  {
    image: "nust.jpg",
    title: "NUST",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
  {
    image: "fast.jpg",
    title: "FAST",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
  {
    image: "giki.jpg",
    title: "GIKI",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
  {
    image: "pieas.jpg",
    title: "PIEAS",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
  {
    image: "nts.jpg",
    title: "NTS",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
  {
    image: "mdCat.jpg",
    title: "NMDCAT",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
  {
    image: "nums.jpg",
    title: "NUMS",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
  {
    image: "aghaKhan.jpg",
    title: "AGHA KHAN",
    description:
      "Lorem ipsum is simpy dummy text of the printing and typesetting industry.",
  },
];

export default () => (
  <section className="course__area pt-115 pb-120 grey-bg">
    <Tabs variant="enclosed" id="react-tabs-276">
      <div className="container">
        <TabPanel>
          <div className="row">
            {courses.map((course) => (
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item white-bg mb-30 fix">
                  <div className="course__thumb w-img p-relative fix">
                    <Link href="/course-details">
                      <a>
                        <img
                          src={"assets/img/course/" + course.image}
                          alt="img not found"
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="col">
                    {/* Course Information title and description */}
                    <div style={{ padding: 32 }}>
                      <div>
                        <h3>
                          <Link href="/course-details">
                            <a>{course.title}</a>
                          </Link>
                        </h3>
                      </div>
                      <div>
                        <p>{course.description}</p>
                      </div>
                    </div>

                    {/* { // Course Know Details Button } */}
                    <div
                      style={{
                        borderTop: "1px solid ",
                        //  borderTopWidth: 1,
                        borderTopColor: "lightGray",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingRight: 16,
                      }}
                    >
                      <Link href="/course-grid">
                        <button
                          style={{
                            backgroundColor: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            Know Details
                          </span>
                          <FontAwesomeIcon
                            icon={["fas", "arrow-right"]}
                            style={{
                              marginLeft: 8,
                              width: 16,
                              height: 16,
                              color: "#000000",
                            }}
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  </section>
);
