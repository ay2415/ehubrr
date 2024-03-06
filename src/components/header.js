import React from "react";

 function Header() {
  return (
    <>
      <div
        className="header-bottom d-none d-lg-block header-top"
        style={{
          boxSizing: "border-box",
          padding: "30px 0px",
          display: "block",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1200px",
          }}
        >
          <div
            className="row justify-content-between align-items-center"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "calc(0 * -1)",
              marginRight: "calc(30px * -.5)",
              marginLeft: "calc(30px * -.5)",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="col-lg-3 col"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(30px * .5)",
                paddingLeft: "calc(30px * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "25%",
              }}
            >
              <div className="header-logo" style={{ boxSizing: "border-box" }}>
                <a
                  href="https://ehubelectronics.netlify.app/"
                  style={{
                    boxSizing: "border-box",
                    transition: "all 0.3s ease 0s",
                    border: "0px",
                    backgroundColor: "transparent",
                    color: "var(--color-foreground-primary)",
                    textDecoration: "none",
                  }}
                >
                  <img
                    width={140}
                    alt="Site Logo"
                    src="https://ehubelectronics.netlify.app/assets/images/logo1.png"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  />
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 d-none d-lg-block"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(30px * .5)",
                paddingLeft: "calc(30px * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "50%",
                display: "block",
              }}
            >
              <div
                className="search-element"
                style={{
                  boxSizing: "border-box",
                  margin: "auto",
                  maxWidth: "450px",
                  
                }}
              >
         <form
                  action="#"
                  style={{ boxSizing: "border-box", position: "relative" }}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      fontFamily: "inherit",
                      background: "0px 0px",
                      outline: "0px",
                      display: "inline-block",
                      lineHeight: "50px",
                      fontSize: "15px",
                      textAlign: "left",
                      boxShadow: "none",
                      paddingLeft: "20px",
                      border: "0px",
                      borderRadius: "5px",
                      height: "44px",
                      width: "100%",
                      backgroundColor: "rgb(255, 255, 255)",
                      paddingRight: "80px",
                    }}
                  />
                  <button
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      fontFamily: "inherit",
                      lineHeight: "inherit",
                      textTransform: "none",
                      appearance: "button",
                      transition: "all 0.3s ease 0s",
                      textDecoration: "none",
                      border: "0px",
                      cursor: "pointer",
                      borderRadius: "0px 5px 5px 0px",
                      position: "absolute",
                      top: "0px",
                      right: "0px",
                      width: "65px",
                      height: "44px",
                      fontSize: "25px",
                      color: "rgb(255, 255, 255)",
                      display: "flex",
                      WebkitBoxOrient: "vertical",
                      WebkitBoxDirection: "normal",
                      flexDirection: "column",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      backgroundColor: "rgb(38, 107, 249)",
                    }}
                  >
                                    <ion-icon name="search-outline"></ion-icon>

                  </button>
                </form>
              </div>
            </div>
            <div
              className="col-lg-3 col"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(30px * .5)",
                paddingLeft: "calc(30px * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "25%",
              }}
            >
              <div
                className="header-actions"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  WebkitBoxPack: "end",
                  justifyContent: "flex-end",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                }}
              >
                <a
                  className="sell-button"
                  href="https://ehubelectronics.netlify.app/sellflow"
                  style={{
                    boxSizing: "border-box",
                    transition: "all 0.3s ease 0s",
                    padding: "5px",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "10px",
                    cursor: "pointer",
                    backgroundColor: "rgb(38, 107, 249)",
                    textDecoration: "none",
                    color: "aliceblue",
                  }}
                >
                  <b style={{ boxSizing: "border-box", fontWeight: "bolder" }}>
                    Sell Now
                  </b>
                </a>
                <a
                  className="sell-button"
                  href="https://ehubelectronics.netlify.app/login"
                  style={{
                    boxSizing: "border-box",
                    transition: "all 0.3s ease 0s",
                    padding: "5px",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "10px",
                    cursor: "pointer",
                    backgroundColor: "rgb(38, 107, 249)",
                    textDecoration: "none",
                    marginLeft: "15px",
                    color: "aliceblue",
                  }}
                >
                  <b style={{ boxSizing: "border-box", fontWeight: "bolder" }}>
                    Login
                  </b>
                </a>
                <a
                  className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none"
                  href="https://ehubelectronics.netlify.app/#offcanvas-mobile-menu"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    backgroundColor: "transparent",
                    marginLeft: "15px",
                    textDecoration: "none",
                    transition: "all 0.3s ease 0s",
                    position: "relative",
                    color: "rgb(255, 255, 255)",
                    display: "none",
                  }}
                >
                  <i
                    className="pe-7s-menu"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      display: "inline-block",
                      fontFamily: "Pe-icon-7-stroke",
                      speak: "none",
                      fontStyle: "normal",
                      fontWeight: 400,
                      textTransform: "none",
                      lineHeight: 1,
                      WebkitFontSmoothing: "antialiased",
                      transition: "all 0s ease 0s",
                      fontSize: "27px",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style

      />
    
      <div
        className="main-menu position-relative"
        style={{
          boxSizing: "border-box",
          marginRight: "-15px",
          marginLeft: "-15px",
          display: "flex",
          WebkitBoxPack: "center",
          justifyContent: "center",
          WebkitBoxAlign: "center",
          alignItems: "center",
          backgroundColor: "rgb(38, 107, 249)",
          position: "relative",
        }}
      >
        <a
          className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none"
          href="https://ehubelectronics.netlify.app/#offcanvas-mobile-menu"
          style={{
            boxSizing: "border-box",
            transition: "all 0.3s ease 0s",
            border: "0px",
            backgroundColor: "transparent",
            color: "var(--color-foreground-primary)",
            textDecoration: "none",
            display: "none",
          }}
        />
        <ul
          style={{
            boxSizing: "border-box",
            padding: "0px",
            margin: "0px",
            marginTop: "0px",
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            marginBottom: "0px",
            paddingLeft: "0px",
          }}
        >
          <a
            className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none"
            href="https://ehubelectronics.netlify.app/#offcanvas-mobile-menu"
            style={{
              boxSizing: "border-box",
              transition: "all 0.3s ease 0s",
              border: "0px",
              backgroundColor: "transparent",
              color: "var(--color-foreground-primary)",
              textDecoration: "none",
              display: "none",
            }}
          />
          <li style={{ boxSizing: "border-box", listStyle: "none" }}>
            <a
              className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none"
              href="https://ehubelectronics.netlify.app/#offcanvas-mobile-menu"
              style={{
                boxSizing: "border-box",
                transition: "all 0.3s ease 0s",
                border: "0px",
                backgroundColor: "transparent",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 400,
                textTransform: "uppercase",
                color: "rgb(255, 255, 255)",
                position: "relative",
                lineHeight: "50px",
                display: "none",
              }}
            />
            <a
              href="https://ehubelectronics.netlify.app/"
              style={{
                boxSizing: "border-box",
                transition: "all 0.3s ease 0s",
                border: "0px",
                backgroundColor: "transparent",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 400,
                textTransform: "uppercase",
                color: "rgb(255, 255, 255)",
                display: "block",
                position: "relative",
                lineHeight: "50px",
              }}
            >
              Home
            </a>
          </li>
          <li
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              marginLeft: "50px",
            }}
          >
            <a
              href="https://ehubelectronics.netlify.app/about"
              style={{
                boxSizing: "border-box",
                transition: "all 0.3s ease 0s",
                border: "0px",
                backgroundColor: "transparent",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 400,
                textTransform: "uppercase",
                color: "rgb(255, 255, 255)",
                display: "block",
                position: "relative",
                lineHeight: "50px",
              }}
            >
              About
            </a>
          </li>
          <li
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              marginLeft: "50px",
            }}
          >
            <a
              href="https://ehubelectronics.netlify.app/shop%20final.html"
              style={{
                boxSizing: "border-box",
                transition: "all 0.3s ease 0s",
                border: "0px",
                backgroundColor: "transparent",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 400,
                textTransform: "uppercase",
                color: "rgb(255, 255, 255)",
                display: "block",
                position: "relative",
                lineHeight: "50px",
              }}
            >
              Shop
            </a>
          </li>
          <li
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              marginLeft: "50px",
            }}
          >
            <a
              href="https://ehubelectronics.netlify.app/contact"
              style={{
                boxSizing: "border-box",
                transition: "all 0.3s ease 0s",
                border: "0px",
                backgroundColor: "transparent",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 400,
                textTransform: "uppercase",
                color: "rgb(255, 255, 255)",
                display: "block",
                position: "relative",
                lineHeight: "50px",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <style
       
      />

    </>
  );
}

export default Header;