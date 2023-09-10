"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
function Nav() {
  const pathname = usePathname();
  const mycurrent=useRef(null)
  const mycurrentcontacto=useRef(null)
  useEffect(()=>{
    console.log(pathname);
  if (pathname == "/") {
    console.log(mycurrent.current);
    mycurrent.current.classList.add("current");
  } else {
    mycurrent.current.classList.remove("current");
  }
  if (pathname.includes("/contacto")) {
    mycurrentcontacto.current.classList.add("current");
  } else {
    mycurrentcontacto.current.classList.remove("current");
  }
  },[])
  return (
    <div>
      <div className="diyweb" >
        <div className="diywebMobileNav">
          <div className="diywebGutter">
            <nav
              id="diyfeMobileNav"
              className="diyfeCA diyfeCA4"
              role="navigation"
            >
              <a title="Abrir/cerrar la navegación">
                Abrir/cerrar la navegación
              </a>
              <ul className="mainNav1">
                <li className="current hasSubNavigation">
                  <a
                    ref={mycurrent}
                    data-page-id="157088"
                    href="/"
                    className="level_1"
                  >
                    <span>Inicio</span>
                  </a>
                </li>
                <li className="hasSubNavigation">
                  <a data-page-id="157089" href="/contacto" className="level_1">
                    <span>Contacto</span>
                  </a>
                  <span className="diyfeDropDownSubOpener">&nbsp;</span>
                  <div className="diyfeDropDownSubList diyfeCA diyfeCA0">
                    <ul className="mainNav2">
                      <li className="hasSubNavigation">
                        <a
                          data-page-id="157091"
                          href="/contacto/aviso-legal/"
                          className="level_2"
                        >
                          <span>Aviso legal</span>
                        </a>
                      </li>
                      <li className="hasSubNavigation">
                        <a
                          data-page-id="255447"
                          href="/contacto/quiénes-somos/"
                          className="level_2"
                        >
                          <span>Quiénes somos</span>
                        </a>
                      </li>
                      <li className="hasSubNavigation">
                        <a
                          data-page-id="157090"
                          href="/contacto/cómo-llegar/"
                          className="level_2"
                        >
                          <span>Cómo llegar</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="diywebNav diywebNavMain diywebNav1 diywebNavHorizontal diyfeCA diyfeCA2">
          <div className="diywebLiveArea">
            <div id="diywebAppContainer1st"></div>
            <div className="diywebMainGutter clearfix">
              <div className="diywebLogo">
                <div id="website-logo">
                  <a href="/">
                    <img
                      className="website-logo-image"
                      width="974"
                      src="/logo.jpg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="diywebLiveArea">
              <div className="diywebGutter">
                <div className="webnavigation">
                  <ul id="mainNav1" className="mainNav1">
                    <li className="navTopItemGroup_1">
                      <a
                      ref={mycurrent}
                        data-page-id="157088"
                        href="/"
                        className="level_1"
                      >
                        <span>Inicio</span>
                      </a>
                    </li>
                    <li className="navTopItemGroup_2">
                      <a
                      ref={mycurrentcontacto}
                        data-page-id="157089"
                        href="/contacto/"
                        className="level_1"
                      >
                        <span>Contacto</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="diywebFullWidth">
          <div className="diywebEmotionHeader">
            <div className="diywebMainGutter">
              <div className="diyfeGE">
                <div className="diywebGutter">
                  {/* <style type="text/css" media="all">
                  .diyw div#emotion-header {
                    max-width: 1180;
                    max-height: 400px;
                    background: #eeeeee;
                  }

                  .diyw div#emotion-header-title-bg {
                    left: 0%;
                    top: 20%;
                    width: 100%;
                    height: 17%;

                    background-color: #ffffff;
                    opacity: 0.5;
                    filter: alpha(opacity = 50);
                  }

                  .diyw div#emotion-header strong#emotion-header-title {
                    left: 5%;
                    top: 20%;
                    color: #000000;
                    font: normal bold 55px/120% Helvetica, "Helvetica Neue",
                      "Trebuchet MS", sans-serif;
                  }

                  .diyw div#emotion-no-bg-container {
                    max-height: 400px;
                  }

                  .diyw div#emotion-no-bg-container .emotion-no-bg-height {
                    margin-top: 33.9%;
                  }
                </style> */}
                  <div
                    id="emotion-header"
                    data-action="loadView"
                    data-params="active"
                    data-imagescount="1"
                  >
                    <img
                      src="/emotionheader.jpg"
                      id="emotion-header-img"
                      alt=""
                    />

                    <div id="ehSlideshowPlaceholder">
                      <div id="ehSlideShow">
                        <div className="slide-container">
                          <div style={{ backgroundColor: "#eeeeee" }}>
                            <img src="/emotionheader.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="emotion-header-title-bg"></div>

                    <strong
                      id="emotion-header-title"
                      style={{ textAlign: "center" }}
                    >
                      HEKA Automatización SL
                    </strong>
                    <div className="notranslate">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        id="emotion-header-title-svg"
                        viewBox="0 0 1180 400"
                        preserveAspectRatio="xMinYMin meet"
                      >
                        <text
                          style={{
                            fontFamily:
                              "Helvetica, Helvetica Neue,Trebuchet MS, sans-serif",
                            fontSize: " 55px",
                            fontStyle: "normal",
                            fontWeight: " bold",
                            fill: "#000000",
                            lineHeight: " 1.2em",
                          }}
                        >
                          <tspan
                            x="50%"
                            style={{ textAnchor: "middle" }}
                            dy="0.95em"
                          >
                            Siston Automatización SL
                          </tspan>
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
