"use client";
import React, { Children, useRef } from "react";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";

function Contacto() {
  const myDalog = useRef(null);
  const myForm = useRef(null);
  const legal = useRef(null);
  const myClick = (e) => {
    e.preventDefault();

    let formData = new FormData(myForm.current);
    let username = formData.get("mod-form-3025887-text-661713");
    let guojia = formData.get("mod-form-3025887-text-661716");
    let text = formData.get("mod-form-3025887-textarea-661721");
    let legal = formData.get("legal");
    !username
      ? document
          .getElementById("mod-form-3025887-text-661713")
          .classList.add("error")
      : document
          .getElementById("mod-form-3025887-text-661713")
          .classList.remove("error");
    !guojia
      ? document
          .getElementById("mod-form-3025887-text-661716")
          .classList.add("error")
      : document
          .getElementById("mod-form-3025887-text-661716")
          .classList.remove("error");
    !text
      ? document
          .getElementById("mod-form-3025887-textarea-661721")
          .classList.add("error")
      : document
          .getElementById("mod-form-3025887-textarea-661721")
          .classList.remove("error");
    !legal
      ? document.getElementById("legal").classList.add("error")
      : document.getElementById("legal").classList.remove("error");
    console.log(username, guojia, text, legal);
    if (username && guojia && text && legal === "on") {
      console.log(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.exec(guojia));
      if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.exec(guojia)) {
        myDalog.current.style.display = "inline-block";
      } else {
        document
          .getElementById("mod-form-3025887-text-661716")
          .classList.add("error");
        myDalog.current.style.display = "none";
      }
    } else {
      myDalog.current.style.display = "none";
    }

    return false;
  };
  return (
    <>
      <div className="diywebMain diyfeGE">
        <div className="diywebGutter">
          <div id="content_area">
            <div id="content_start"></div>
            <div
              id="matrix_399086"
              className="sortable-matrix"
              data-matrixId="399086"
            >
              <div className="n module-type-header diyfeLiveArea">
                <h1>
                  <span className="diyfeDecoration">Contacto</span>
                </h1>
              </div>
              <div className="n module-type-hr diyfeLiveArea">
                <div style={{ padding: "0px 0px" }}>
                  <div className="hr"></div>
                </div>
              </div>
              <div className="n module-type-text diyfeLiveArea">
                <p>¿Podemos ayudarle? Póngase en contacto con nosotros.</p>
              </div>
              <div className="n module-type-remoteModule-form diyfeLiveArea">
                <div id="modul_3025887_content">
                  <div id="NGH3025887__main">
                    {/* <div className="form-success">
                              <div className="h1">
                                Su mensaje del formulario se ha enviado
                                correctamente.
                              </div>
                              <div className="form-success-text">
                                Ha introducido los siguientes datos:
                              </div>
                              <br />
                              <div className="form-success-content"></div>
                            </div> */}

                    <div className="form-headline">
                      <strong>Formulario de contacto</strong>
                      <br />
                      <br />
                    </div>
                    {/* 
                            <div
                              className="form-errors"
                              id="form-errors-title1"
                            >
                              <div className="form-errors-title">
                                Por favor, corrija los datos introducidos en los
                                campos siguientes:
                              </div>
                              <ul></ul>
                            </div> */}

                    {/* <div className="form-error-send error">
                              <div className="form-errors-title">
                                Al enviar el formulario se ha producido un
                                error. Inténtelo de nuevo más tarde.
                              </div>
                            </div> */}

                    <form
                      className="nform"
                      data-form-id="3025887"
                      onSubmit={(e) => mySubmithandle(e)}
                      ref={myForm}
                      onClick={(e) => myClick(e)}
                    >
                      <div className="form-item-zone form-item-zone-text">
                        <div className="form-item form-item-first form-item-text">
                          <label for="mod-form-3025887-text-661713">
                            <span>Nombre:</span> *
                          </label>
                          <input
                            className="single"
                            data-field-required="true"
                            data-field-id="661713"
                            type="text"
                            id="mod-form-3025887-text-661713"
                            name="mod-form-3025887-text-661713"
                          />
                        </div>

                        <div className="form-item form-item-text">
                          <label for="mod-form-3025887-text-661716">
                            <span>Dirección de correo electrónico:</span>*
                          </label>
                          <input
                            className="single"
                            data-field-email="true"
                            data-field-required="true"
                            data-field-id="661716"
                            type="text"
                            id="mod-form-3025887-text-661716"
                            name="mod-form-3025887-text-661716"
                          />
                        </div>
                      </div>
                      <div className="form-item-zone form-item-zone-checkbox"></div>
                      <div className="form-item-zone form-item-zone-textarea">
                        <div className="form-item form-item-first form-item-textarea">
                          <label for="mod-form-3025887-textarea-661721">
                            <span>Mensaje:</span> *
                          </label>
                          <textarea
                            data-field-required="true"
                            data-field-id="661721"
                            id="mod-form-3025887-textarea-661721"
                            name="mod-form-3025887-textarea-661721"
                          ></textarea>
                        </div>
                      </div>

                      <div id="cap-container-dc5e164dffb0439fa87174c58f0adb1d"></div>

                      <br />

                      <div
                        id="legal-container"
                        className="form-item-zone form-item-zone-checkbox"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          paddingBottom: "30px",
                        }}
                      >
                        <label
                          style={{
                            display: "inline-block",
                            textAlign: "right",
                            width: "29%",
                            paddingRight: "2%",
                          }}
                        ></label>
                        <div style={{ display: "table", width: "68%" }}>
                          <input
                            type="checkbox"
                            name="legal"
                            id="legal"
                            ref={legal}
                            // style={{ display: "table-cell" }}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          />
                          <b
                            style={{
                              display: "table-cell",
                              padding: "0 8px 0 4px",
                            }}
                          >
                            *
                          </b>
                          <div style={{ display: " table-cell" }}>
                            Acepto que mis datos facilitados en el formulario de
                            contacto sean tratados electrónicamente y sean
                            utilizados con el propósito de contactar conmigo.
                            Soy consciente de que puedo revocar mi
                            consentimiento en cualquier momento.
                          </div>
                        </div>
                      </div>

                      <p className="note">
                        <strong className="alert">Atención</strong>: Los
                        espacios marcados con <em>*</em> son obligatorios.
                      </p>

                      <input
                        type="submit"
                        name="mod-form-submit"
                        value="Enviar formulario"
                        id="myInput"
                      />
                      <div
                        style={{
                          marginLeft: "3%",
                          marginBottom: "14px",
                          display: "inline-block",
                          display: "none",
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "green",
                        }}
                        id="myDalog"
                        ref={myDalog}
                      >
                        Hemos recibido su carta!
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
