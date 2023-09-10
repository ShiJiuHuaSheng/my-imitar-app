"use client";
import React, { useEffect, useRef,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

function ContactoLayout({ children }) {
  const pathname = usePathname();
  const AvisoLegal=useRef(null)
  const nesSomos=useRef(null)
  const moLlegar=useRef(null)
  useEffect(()=>{
    console.log(pathname);
  if (pathname == "/contacto/aviso-legal") {
    AvisoLegal.current.classList.add("current");
  } else {
    AvisoLegal.current.classList.remove("current");
  }
  if (pathname == "/contacto/qui%C3%A9nes-somos") {
    nesSomos.current.classList.add("current");
  } else {
    nesSomos.current.classList.remove("current");
  }
  if (pathname == "/contacto/c%C3%B3mo-llegar") {
    moLlegar.current.classList.add("current");
  } else {
    moLlegar.current.classList.remove("current");
  }
  },[])

  return <div className="diyfeSidebarLeft"><div className="diywebFullWidthSubmenus">
  <div className="diywebFullWidth diyfeCA diyfeCA4">
    <div className="diywebLiveArea">
      <div className="diywebNav diywebNav2 diywebHideOnSmall">
        <div className="diywebMainGutter">
          <div className="diyfeGE">
            <div className="webnavigation">
              <ul id="mainNav2" className="mainNav2">
                <li className="navTopItemGroup_0">
                  <a
                  ref={AvisoLegal}
                    data-page-id="157091"
                    href="/contacto/aviso-legal/"
                    className="level_2"
                  >
                    <span>Aviso legal</span>
                  </a>
                </li>
                <li className="navTopItemGroup_0">
                  <a
                  ref={nesSomos}
                    data-page-id="255447"
                    href="/contacto/quiénes-somos/"
                    className="level_2"
                  >
                    <span>Quiénes somos</span>
                  </a>
                </li>
                <li className="navTopItemGroup_0">
                  <a
                  ref={moLlegar}
                    data-page-id="157090"
                    href="/contacto/cómo-llegar/"
                    className="level_2"
                  >
                    <span>Cómo llegar</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="diywebFullWidth diyfeCA diyfeCA4">
    <div className="diywebLiveArea">
      <div className="diywebNav diywebNav3 diywebHideOnSmall">
        <div className="diywebMainGutter">
          <div className="diyfeGE">
            <div className="webnavigation"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="diywebContent">
  <div className="diywebLiveArea diyfeCA diyfeCA1">
    <div className="diywebMainGutter">
      <div className="diyfeGridGroup">
       {children}
        <div className="diywebSecondary diyfeGE">
          <div className="diywebSidebar">
            <div className="diyfeGE">
              <div className="diywebGutter">
                <div
                  id="matrix_399084"
                  className="sortable-matrix"
                  data-matrixId="399084"
                >
                  <div className="n module-type-header diyfeLiveArea">
                    <h2>
                      <span className="diyfeDecoration">Contacto:</span>
                    </h2>
                  </div>
                  <div className="n module-type-text diyfeLiveArea">
                    <p style={{ textAlign: "justify" }}>
                      <span
                        itemscope=""
                        itemtype="http://schema.org/Organization"
                      >
                        <span itemprop="name">
                          HEKA Automatización SL
                        </span>
                      </span>
                    </p>
                    <p>
                      <span
                        itemscope=""
                        itemtype="http://schema.org/Organization"
                      >
                        <span
                          itemprop="address"
                          itemscope=""
                          itemtype="http://schema.org/PostalAddress"
                        >
                          <span itemprop="streetAddress">C/ Jurats</span>
                        </span>
                      </span>
                      21
                    </p>
                    <p>Pol. Ind. La Clota</p>
                    <p>
                      <span
                        itemscope=""
                        itemtype="http://schema.org/Organization"
                      >
                        <span
                          itemprop="address"
                          itemscope=""
                          itemtype="http://schema.org/PostalAddress"
                        >
                          <span itemprop="postalCode">08740</span>
                        </span>
                      </span>
                      Sant Andreu de la Barca
                    </p>
                    <p> </p>
                    <p>Teléfono: 93.682.48.08</p>
                    <p>
                      Correo electrónico: info
                    </p>
                    <p> </p>
                    <p style={{ textAlign: " justify" }}>
                      También puede contactar con nosotros rellenando
                      nuestro formulario de contacto.
                    </p>
                  </div>
                  <div className="n module-type-hr diyfeLiveArea">
                    <div style={{ padding: " 0px 0px" }}>
                      <div className="hr"></div>
                    </div>
                  </div>
                  <div className="n module-type-header diyfeLiveArea">
                    <h2>
                      <span className="diyfeDecoration">
                        Redes Sociales:
                      </span>
                    </h2>
                  </div>
                  <div className="n module-type-remoteModule-twitter diyfeLiveArea">
                    <div id="modul_3025877_content">
                      <div id="NGH3025877_main">
                        <div className="twitter-container">
                          <div className="twitter-follow-button">
                            <p className="follow-text">Sígueme en:</p>
                            <a
                              target="_blank"
                              href="http://www.twitter.com/SistonAutomat"
                            >
                              <img
                                src="/twitter-b.png"
                                alt="Follow SistonAutomat on Twitter"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="n module-type-remoteModule-facebook diyfeLiveArea">
                    <div id="modul_3025878_content">
                      <div id="NGH3025878_main">
                        <div className="facebook-content"></div>
                      </div>
                    </div>
                  </div>
                  <div className="n module-type-hr diyfeLiveArea">
                    <div style={{ padding: "0px 0px" }}>
                      <div className="hr"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div></div>;
}

export default ContactoLayout;
