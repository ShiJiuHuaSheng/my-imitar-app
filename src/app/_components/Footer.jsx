"use client";
import React from "react";

function Footer() {
  return (
    <>
      <div className="diywebFooter diyfeCA diyfeCA4">
        <div className="diywebLiveArea">
          <div className="diywebMainGutter">
            <div className="diyfeGE">
              <div className="diywebGutter">
                <div className="webnavigation"></div>
                <div id="contentfooter">
                  <div className="leftrow">
                    <a rel="nofollow" href="javascript:window.print();">
                      <img
                        className="inline"
                        height="14"
                        width="18"
                        src="//cdn.website-start.de/s/img/cc/printer.gif"
                        alt=""
                      />
                      Versión para imprimir
                    </a>
                    <span className="footer-separator">|</span>
                    <a href="/sitemap/">Mapa del sitio</a>
                    <br />© HEKA Automatizacion SL
                  </div>

                  <div className="rightrow">
                    <span className="loggedout">
                      <a
                        rel="nofollow"
                        id="login"
                        href="https://login.1and1-editor.com/"
                      >
                        Iniciar sesión
                      </a>
                    </span>
                    <p>
                      <a
                        className="diyw switchViewWeb"
                        href="javascript:switchView('desktop');"
                      >
                        Vista Web
                      </a>
                      <a
                        className="diyw switchViewMobile"
                        href="javascript:switchView('mobile');"
                      >
                        Vista Móvil
                      </a>
                    </p>
                    <span className="loggedin">
                      <a
                        rel="nofollow"
                        id="logout"
                        href="https://125.sb.mywebsite-editor.com/app/cms/logout.php"
                      >
                        Cerrar sesión
                      </a>
                      <span className="footer-separator">|</span>
                      <a
                        rel="nofollow"
                        id="edit"
                        href="https://125.sb.mywebsite-editor.com/app/440059756/157088/"
                      >
                        Editar página
                      </a>
                    </span>
                  </div>
                </div>
                <div id="loginbox" className="hidden">
                  <img
                    className="logo"
                    src="//cdn.website-start.de/s/img/logo.gif"
                    alt="IONOS"
                    title="IONOS"
                  />

                  <div id="loginboxOuter"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
