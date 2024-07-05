import React from "react";
import { Imagedata } from "./ImageComponent";
function Showcase() {
  return (
    <>
      <section className="showcase">
        <div className="container-fluid p-0">
          {Imagedata.map((e, i) => {
            return (
              <>
                <div className="row g-0" key={i}>
                  <div
                    className={
                      e.Rightalign
                        ? "col-lg-6 order-lg-2 text-white showcase-img"
                        : "col-lg-6 text-white showcase-img"
                    }
                    style={{ backgroundImage: `url(${e.img})` }}
                  />
                  <div
                    className={
                      e.Rightalign
                        ? "col-lg-6 order-lg-1 my-auto showcase-text"
                        : "col-lg-6 my-auto showcase-text"
                    }
                  >
                    <h2>{e.h2}</h2>
                    <p className="lead mb-0">{e.p}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Showcase;
