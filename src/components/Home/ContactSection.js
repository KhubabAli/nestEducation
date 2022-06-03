const logos = [
  {
    image: "NestLogo.png",
  },
  {
    image: "NestLogo.png",
  },
  {
    image: "NestLogo.png",
  },
  {
    image: "NestLogo.png",
  },
  {
    image: "NestLogo.png",
  },
];

export default () => {
  return (
    <div style={{ backgroundColor: "white", padding: 48 }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {logos.map(({ image }) => (
            <span
              className="rounded-circle"
              style={{
                border: "4px solid",
                borderColor: "#15375B",
                width: 120,
                margin: 8,
                height: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={"assets/img/logo/" + image}
                style={{ width: 100, height: 80 }}
              />
            </span>
          ))}
        </div>
        <h1 className="mt-20" style={{ color: "#56B24B" }}>
          CONTACT US
        </h1>
        <h5 className="mt-20" style={{ color: "#15375B" }}>
          CORPORATE OFFICE
        </h5>
        <h4 className="mt-5" style={{ color: "#56B24B" }}>
          228-B (BOR) JOHAR TOWN, LAHORE | 0333 8165540, 0345 6669223
        </h4>
      </div>
    </div>
  );
};
