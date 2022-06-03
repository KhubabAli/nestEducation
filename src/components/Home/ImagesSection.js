import React, { Component, useState } from "react";
import Link from "next/link";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-elastic-carousel";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const items = [
  { id: 1, title: "Video 1" },
  { id: 2, title: "Video 2" },
  { id: 3, title: "Video 3" },
  { id: 4, title: "Video 4" },
  { id: 5, title: "Video 5" },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Banner = () => {
  return (
    <div
      style={{
        paddingTop: 80,
        paddingBottom: 80,
        marginBottom: 8,
        backgroundColor: "#56B24B",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "#ffffff", marginBottom: 32 }}>IMAGE GALLERY</h3>
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          renderArrow={({ type, onClick, isEdge }) => {
            let arrow = "arrow-";
            if (type == "NEXT") arrow += "right";
            if (type == "PREV") arrow += "left";

            return (
              <button
                onClick={onClick}
                disabled={isEdge}
                style={{ backgroundColor: "#56B24B" }}
              >
                <FontAwesomeIcon
                  icon={["fas", arrow]}
                  style={{
                    marginStart: 16,
                    width: 24,
                    height: 24,
                    color: "#ffffff",
                  }}
                />
              </button>
            );
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "white",
                width: "96%",
                height: 200,
                alignItems: "center",
                justifyContent: "center",
                padding: 32,
                display: "flex",
              }}
            >
              <h1 style={{ color: "#ffffff" }}>{item.title}</h1>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

// const Banner = () => {
//   return (
//     <div style={{ backgroundColor: "orange" }}>
//       <Carousel autoPlay width={"30%"} centerMode>
//         <div>
//           <img
//             alt="Image Not foudn"
//             src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
//           />
//           <h1>Hello</h1>
//           <p className="legend">Legend 1</p>
//         </div>
//         <div>
//           <img
//             alt="Image Not foudn"
//             src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg"
//           />
//           <h1>Hello</h1>
//           <p className="legend">Legend 2</p>
//         </div>
//         <div>
//           <img
//             alt="Image Not foudn"
//             src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg"
//           />
//           <h1>Hello</h1>
//           <p className="legend">Legend 3</p>
//         </div>
//         <div>
//           <img
//             alt="Image Not foudn"
//             src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg"
//           />
//           <h1>Hello</h1>
//           <p className="legend">Legend 4</p>
//         </div>
//         <div>
//           <img
//             alt="Image Not foudn"
//             src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg"
//           />
//           <h1>Hello</h1>
//           <p className="legend">Legend 5</p>
//         </div>
//         <div>
//           <img
//             alt="Image Not foudn"
//             src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg"
//           />
//           <h1>Hello</h1>
//           <p className="legend">Legend 6</p>
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// const Banner = () => {
//   const [items, setItems] = useState(getItems);
//   const [selected, setSelected] = useState([]);
//   const [position, setPosition] = useState(0);

//   const isItemSelected = (id) => !!selected.find((el) => el === id);

//   const handleClick =
//     (id) =>
//     ({ getItemById, scrollToItem }) => {
//       const itemSelected = isItemSelected(id);

//       setSelected((currentSelected) =>
//         itemSelected
//           ? currentSelected.filter((el) => el !== id)
//           : currentSelected.concat(id)
//       );
//     };

//   return (
//     <main>
//       <section className="banner__area pb-110">
//         <div className="container">
//           <ScrollMenu
//             LeftArrow={LeftArrow}
//             RightArrow={RightArrow}
//             onWheel={() => onWheel()}
//           >
//             {items.map(({ id }) => (
//               <Card
//                 itemId={id} // NOTE: itemId is required for track items
//                 title={id}
//                 key={id}
//                 onClick={handleClick(id)}
//                 selected={isItemSelected(id)}
//               />
//             ))}
//           </ScrollMenu>
//           );
//         </div>
//       </section>
//     </main>
//   );

//   function LeftArrow() {
//     const { isFirstItemVisible, scrollPrev } =
//       React.useContext(VisibilityContext);

//     return (
//   <button onClick={() => scrollPrev} disabled={isFirstItemVisible}>
//     <FontAwesomeIcon
//       icon={["fas", "arrow-left"]}
//       style={{
//         marginStart: 16,
//         width: 24,
//         height: 24,
//         color: "#56B24B",
//       }}
//     />
//   </button>
//     );
//   }

//   function RightArrow() {
//     const { isLastItemVisible, scrollNext } =
//       React.useContext(VisibilityContext);

//     return (
//       <button disabled={isLastItemVisible} onClick={() => scrollNext}>
//         <FontAwesomeIcon
//           icon={["fas", "arrow-right"]}
//           style={{
//             marginStart: 16,
//             width: 24,
//             height: 24,
//             color: "#56B24B",
//           }}
//         />
//       </button>
//     );
//   }

//   function Card({ onClick, selected, title, itemId }) {
//     const visibility = React.useContext(VisibilityContext);

//     return (
//       <div
//         onClick={() => onClick(visibility)}
//         style={{
//           width: "160px",
//         }}
//         tabIndex={0}
//       >
//         <div className="card">
//           <div>{title}</div>
//           <div>
//             visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}
//           </div>
//           <div>selected: {JSON.stringify(!!selected)}</div>
//         </div>
//         <div
//           style={{
//             height: "200px",
//           }}
//         />
//       </div>
//     );
//   }
// };

export default Banner;
