"use client";
import React, { useRef } from "react";

function ComoLlegar() {
  return (
    <>
      <div className="diywebMain diyfeGE">
        <div className="diywebGutter">
          <div id="content_area">
            <div id="content_start"></div>

            <div
              id="matrix_399087"
              className="sortable-matrix"
              data-matrixid="399087"
            >
              <div className="n module-type-header diyfeLiveArea ">
                {" "}
                <h1>
                  <span className="diyfeDecoration">Cómo llegar:</span>
                </h1>{" "}
              </div>
              <div className="n module-type-googlemaps diyfeLiveArea ">
                <a
                  style={{display:'block'}}
                  href="https://www.google.com/maps/search/?api=1&amp;channel=mws-visit&amp;hl=es-ES&amp;query=39.927829,-74.132805"
                  target="_blank"
                >
                  <img
                    id="map_image_3025889"
                    style={{margin:'auto',maxWidth:'100%'}}
                    datasrc="https://maps.googleapis.com/maps/api/staticmap?channel=mws-visit&amp;language=es_ES&amp;center=41.458871915314%2C1.961746784449&amp;zoom=15&amp;size=646x400&amp;maptype=roadmap&amp;client=gme-11internet&amp;markers=39.927829,-74.132805&amp;markers=41.458389,1.958300&amp;signature=TRY7-5anfO7GsgceLUnhfjsD5i8="
                    src="https://maps.googleapis.com/maps/api/staticmap?channel=mws-visit&amp;language=es_ES&amp;center=41.458871915314%2C1.961746784449&amp;zoom=15&amp;size=646x400&amp;maptype=roadmap&amp;client=gme-11internet&amp;markers=39.927829,-74.132805&amp;markers=41.458389,1.958300&amp;signature=TRY7-5anfO7GsgceLUnhfjsD5i8="
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComoLlegar;
