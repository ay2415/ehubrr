import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css';

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };
  
return(
    <>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <img className="d-block w-100" src="https://ehubelectronics.netlify.app/assets/images/bannerimg3.png" style={{ width: "994px", height: "304px" ,transition: "opacity 0.5s ease-in-out"}} alt="First slide" />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
  <img
    className="d-block w-100"
    src="https://ehubelectronics.netlify.app/assets/images/bannerimg2.png"
    alt="Second slide"
    style={{ width: "994px", height: "304px" ,transition: "opacity 0.5s ease-in-out"}}
  />
</div>
        <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
          <img className="d-block w-100" src="https://ehubelectronics.netlify.app/assets/images/bannerimg3.png" style={{ width: "994px", height: "304px",transition: "opacity 0.5s ease-in-out" }} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={handlePrevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onClick={handleNextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  
    <div
  data-viewport='{"trackableId":"01HG4TM76A3F7YCP9SSHMME91M"}'
  className="style-0"
>
  <div className="style-1">
    <div className="style-2">
      <div className="style-3">
        <h2 className="style-4">
          <a
            href="#"
            _sp="p2481888.m4776.l9803"
            data-click='{"eventFamily":"HOMEPAGE","eventAction":"ACTN","actionKind":"NAVSRC","operationId":"2481888","flushImmediately":false,"eventProperty":{"parentrq":"09aa1ba018c0ab8c8721685effff9b82","pageci":"986838a6-8c0b-11ee-ad73-72cdb57fdf9f","linkId":"9803","moduledtl":"mi:4776|iid:1|li:9803"}}'
            className="style-5"
          ></a>
        </h2>
      </div>
      <div className="style-6">
        <a
          href=""
          _sp="p2481888.m4776.l8342"
          data-click='{"eventFamily":"HOMEPAGE","eventAction":"ACTN","actionKind":"NAVSRC","operationId":"2481888","flushImmediately":false,"eventProperty":{"parentrq":"09aa1ba018c0ab8c8721685effff9b82","pageci":"986838a6-8c0b-11ee-ad73-72cdb57fdf9f","linkId":"8342","moduledtl":"mi:4776|iid:1|li:8342"}}'
          className="style-7"
        >
          <span className="style-8">Popular Destinations</span>
          <svg className="style-9" focusable="false" aria-hidden="true">
            <use xlinkHref="#icon-arrow-right-24" className="style-10" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <ul className="style-11">
    <li
      data-viewport='{"trackableId":"01HG4TM7658ZZS22E0MPZ72AVN"}'
      className="style-12"
    >
      <a
        _sp="p2481888.m4776.l8874.c0"
        data-click='{"eventFamily":"HOMEPAGE","eventAction":"ACTN","actionKind":"NAVSRC","operationId":"2481888","flushImmediately":false,"eventProperty":{"parentrq":"09aa1ba018c0ab8c8721685effff9b82","pageci":"986838a6-8c0b-11ee-ad73-72cdb57fdf9f","linkId":"8874","moduledtl":"mi:4776|iid:1|li:8874|luid:0|c:0","trackableId":"01HG4TM7658ZZS22E0MPZ72AVN","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NThaWlMyMkUwTVBaNzJBVk40MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}}'
        data-interactions='[{"actionKind":"NAVSRC","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NThaWlMyMkUwTVBaNzJBVk40MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}]'
        className="style-13"
        href=""
      >
        <div className="style-14">
          <div className="style-15" data-size={200}>
            <div className="style-16" />
            <img
              src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-electronics-icon-png-image_428294.jpg"
              alt=""
              data-load-time={1700969196084}
              className="style-17"
            />
          </div>
          <noscript aria-hidden="true" className="style-14">
            &lt;div class="hl-image hl-popular-destinations-image"
            style="background-image:
            url('https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-electronics-icon-png-image_428294.jpg')"&gt;&lt;img
            src="" alt="" /&gt;&lt;/div&gt;
          </noscript>
        </div>
      </a>
    </li>
    <li
      data-viewport='{"trackableId":"01HG4TM765JEYW9A6CYWT8SEEM"}'
      className="style-12"
    >
      <a
        _sp="p2481888.m4776.l8874.c1"
        data-click='{"eventFamily":"HOMEPAGE","eventAction":"ACTN","actionKind":"NAVSRC","operationId":"2481888","flushImmediately":false,"eventProperty":{"parentrq":"09aa1ba018c0ab8c8721685effff9b82","pageci":"986838a6-8c0b-11ee-ad73-72cdb57fdf9f","linkId":"8874","moduledtl":"mi:4776|iid:1|li:8874|luid:1|c:1","trackableId":"01HG4TM765JEYW9A6CYWT8SEEM","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NUpFWVc5QTZDWVdUOFNFRU00MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}}'
        data-interactions='[{"actionKind":"NAVSRC","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NUpFWVc5QTZDWVdUOFNFRU00MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}]'
        className="style-13"
        href=""
      >
        <div className="style-14">
          <div className="style-15" data-size={200}>
            <div className="style-16" />
            <img
              src="https://quartzcomponents.com/cdn/shop/files/bettery_160x.png?v=1660804267"
              alt=""
              data-load-time={1700969196084}
              className="style-17"
            />
          </div>
          <noscript aria-hidden="true" className="style-14">
            &lt;div class="hl-image hl-popular-destinations-image"
            style="background-image:
            url('https://quartzcomponents.com/cdn/shop/files/bettery_160x.png?v=1660804267')"&gt;&lt;img
            src="https:" alt="" /&gt;&lt;/div&gt;
          </noscript>
        </div>
      </a>
    </li>
    <li
      data-viewport='{"trackableId":"01HG4TM765NXEKPJ2T1QTZMCTP"}'
      className="style-12"
    >
      <a
        _sp="p2481888.m4776.l8874.c2"
        data-click='{"eventFamily":"HOMEPAGE","eventAction":"ACTN","actionKind":"NAVSRC","operationId":"2481888","flushImmediately":false,"eventProperty":{"parentrq":"09aa1ba018c0ab8c8721685effff9b82","pageci":"986838a6-8c0b-11ee-ad73-72cdb57fdf9f","linkId":"8874","moduledtl":"mi:4776|iid:1|li:8874|luid:2|c:2","trackableId":"01HG4TM765NXEKPJ2T1QTZMCTP","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NU5YRUtQSjJUMVFUWk1DVFA0MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}}'
        data-interactions='[{"actionKind":"NAVSRC","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NU5YRUtQSjJUMVFUWk1DVFA0MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}]'
        className="style-13"
        href=""
      >
        <div className="style-14">
          <div className="style-15" data-size={200}>
            <div className="style-16" />
            <img
              src="https://quartzcomponents.com/cdn/shop/files/Components_160x.png?v=1660804289"
              alt=""
              data-load-time={1700969196084}
              className="style-17"
            />
          </div>
          <noscript aria-hidden="true" className="style-14">
            &lt;div class="hl-image hl-popular-destinations-image"
            style="background-image:
            url('https://i.ebayimg.com/images/g/gE4AAOSwgnJcG8vI/s-l200.webp')"&gt;&lt;img
            src="https:" alt="" /&gt;&lt;/div&gt;
          </noscript>
        </div>
      </a>
    </li>
    <li
      data-viewport='{"trackableId":"01HG4TM765P11BDZFN92F80C7A"}'
      className="style-12"
    >
      <a
        _sp="p2481888.m4776.l8874.c3"
        data-click='{"eventFamily":"HOMEPAGE","eventAction":"ACTN","actionKind":"NAVSRC","operationId":"2481888","flushImmediately":false,"eventProperty":{"parentrq":"09aa1ba018c0ab8c8721685effff9b82","pageci":"986838a6-8c0b-11ee-ad73-72cdb57fdf9f","linkId":"8874","moduledtl":"mi:4776|iid:1|li:8874|luid:3|c:3","trackableId":"01HG4TM765P11BDZFN92F80C7A","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NVAxMUJEWkZOOTJGODBDN0E0MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}}'
        data-interactions='[{"actionKind":"NAVSRC","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NVAxMUJEWkZOOTJGODBDN0E0MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}]'
        className="style-13"
        href=""
      >
        <div className="style-14">
          <div className="style-15" data-size={200}>
            <div className="style-16" />
            <img
              src="https://i.ebayimg.com/images/g/MyIAAOSwsrlcG8vM/s-l200.webp"
              alt=""
              data-load-time={1700969196084}
              className="style-17"
            />
          </div>
          <noscript aria-hidden="true" className="style-14">
            &lt;div class="hl-image hl-popular-destinations-image"
            style="background-image:
            url('https://i.ebayimg.com/images/g/MyIAAOSwsrlcG8vM/s-l200.webp')"&gt;&lt;img
            src="https:" alt="" /&gt;&lt;/div&gt;
          </noscript>
        </div>
      </a>
    </li>
    <li
      data-viewport='{"trackableId":"01HG4TM765D858T36TMP5E2FFK"}'
      className="style-12"
    >
      <a
        _sp="p2481888.m4776.l8874.c4"
        data-click='{"eventFamily":"HOMEPAGE","eventAction":"ACTN","actionKind":"NAVSRC","operationId":"2481888","flushImmediately":false,"eventProperty":{"parentrq":"09aa1ba018c0ab8c8721685effff9b82","pageci":"986838a6-8c0b-11ee-ad73-72cdb57fdf9f","linkId":"8874","moduledtl":"mi:4776|iid:1|li:8874|luid:4|c:4","trackableId":"01HG4TM765D858T36TMP5E2FFK","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NUQ4NThUMzZUTVA1RTJGRks0MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}}'
        data-interactions='[{"actionKind":"NAVSRC","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NUQ4NThUMzZUTVA1RTJGRks0MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}]'
        className="style-13"
        href=""
      >
        <div className="style-14">
          <div className="style-15" data-size={200}>
            <div className="style-16" />
            <img
              src="https://i.ebayimg.com/images/g/WREAAOSwh7tcG8vJ/s-l200.webp"
              alt=""
              data-load-time={1700969196084}
              className="style-17"
            />
          </div>
          <noscript aria-hidden="true" className="style-14">
            &lt;div class="hl-image hl-popular-destinations-image"
            style="background-image:
            url('https://i.ebayimg.com/images/g/WREAAOSwh7tcG8vJ/s-l200.webp')"&gt;&lt;img
            src="https:" alt="" /&gt;&lt;/div&gt;
          </noscript>
        </div>
      </a>
    </li>
    <li
      data-viewport='{"trackableId":"01HG4TM7658MT6QPPEVKDSFHWY"}'
      className="style-12"
    >
      <a
        _sp="p2481888.m4776.l8874.c5"
        data-click='{"eventFamily":"HOMEPAGE","eventAction":"ACTN","actionKind":"NAVSRC","operationId":"2481888","flushImmediately":false,"eventProperty":{"parentrq":"09aa1ba018c0ab8c8721685effff9b82","pageci":"986838a6-8c0b-11ee-ad73-72cdb57fdf9f","linkId":"8874","moduledtl":"mi:4776|iid:1|li:8874|luid:5|c:5","trackableId":"01HG4TM7658MT6QPPEVKDSFHWY","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NThNVDZRUFBFVktEU0ZIV1k0MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}}'
        data-interactions='[{"actionKind":"NAVSRC","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NThNVDZRUFBFVktEU0ZIV1k0MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}]'
        className="style-13"
        href=""
      >
        <div className="style-14">
          <div className="style-15" data-size={200}>
            <div className="style-16" />
            <img
              src="https://i.ebayimg.com/images/g/idwAAOSwgcdcG8vJ/s-l200.webp"
              alt=""
              data-load-time={1700969196084}
              className="style-17"
            />
          </div>
          <noscript aria-hidden="true" className="style-14">
            &lt;div class="hl-image hl-popular-destinations-image"
            style="background-image:
            url('https://i.ebayimg.com/images/g/idwAAOSwgcdcG8vJ/s-l200.webp')"&gt;&lt;img
            src="https:" alt="" /&gt;&lt;/div&gt;
          </noscript>
        </div>
      </a>
    </li>
    <li
      data-viewport='{"trackableId":"01HG4TM765HVKNVC2V4G8PTJPN"}'
      className="style-12"
    >
      <a
        _sp="p2481888.m4776.l8874.c6"
        data-click='{"eventFamily":"HOMEPAGE","eventAction":"ACTN","actionKind":"NAVSRC","operationId":"2481888","flushImmediately":false,"eventProperty":{"parentrq":"09aa1ba018c0ab8c8721685effff9b82","pageci":"986838a6-8c0b-11ee-ad73-72cdb57fdf9f","linkId":"8874","moduledtl":"mi:4776|iid:1|li:8874|luid:6|c:6","trackableId":"01HG4TM765HVKNVC2V4G8PTJPN","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NUhWS05WQzJWNEc4UFRKUE40MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}}'
        data-interactions='[{"actionKind":"NAVSRC","interaction":"wwEHJYB2WXwZRgY0MDFIRzRUTTc2NUhWS05WQzJWNEc4UFRKUE40MDFIRzRUTTc2QTNGN1lDUDlTU0hNTUU5MU00MDFIRzRUTTZaUzVRWENSWTZERkNNWEVEVjEACDg4NzQMTkFWU1JDAA=="}]'
        className="style-13"
        href=""
      >
        <div className="style-14">
          <div className="style-15" data-size={200}>
            <div className="style-16" />
            <img
              src="https://i.ebayimg.com/images/g/hIgAAOSwyTtcJkbp/s-l200.webp"
              alt=""
              data-load-time={1700969196084}
              className="style-17"
            />
          </div>
         
        </div>
      </a>
    </li>
  </ul>
</div>
<div className="style0">
  <div className="style1">
    {/* Section Title & Tab Start */}
    <div className="style2">
      <div className="style3">
        {/* Tab Start */}
        {/**/}
        <ul className="product-tab-nav nav justify-content-start align-items-center">
          <li className="nav-item">
            
             
          </li>
        </ul>
      </div>{" "}
      
      {/* Tab End */}
    </div>
  </div>{" "}
  {/* Section Title & Tab End */}
  <div className="style4">
    <div className="style5">
      <div className="style6">
        {/* 1st tab start */}
        <div className="style7">
          <div className="style8">
            <div className="style-9">
              {/* 1 Single Prodect */}
              <div className="style57">
                <span className="style58">
                  <span className="style59">New</span>{" "}
                </span>
                <div className="style60">
                  <a className="style61" href="/single-product">
                    <img
                      src="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309"
                      width={270}
                      height={274}
                      alt="Product"
                      className="style62"
                    />{" "}
                    <img
                      className="style63"
                      src="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style64">
                  <span className="style65">
                    <a href="#" className="style66">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style67">
                    <a href="PCAM.html" className="style68">
                      Digilent PCAM
                    </a>{" "}
                  </h5>{" "}
                  <span className="style69">
                    <span className="style70">₹ 250</span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="style24">
              {/* 2 Single Prodect */}
              <div className="style25">
                <span className="style26">
                  <span className="style27">-10%</span>{" "}
                  <span className="style28">New</span>{" "}
                </span>
                <div className="style29">
                  <a href="raspberry.html" className="style30">
                    <img
                      src="https://png.pngtree.com/png-clipart/20220616/original/pngtree-raspberry-pi-3-model-b-png-image_8090946.png"
                      width={270}
                      height={274}
                      alt="Product"
                      className="style31"
                    />{" "}
                    <img
                      className="style32"
                      src="https://png.pngtree.com/png-clipart/20220616/original/pngtree-raspberry-pi-3-model-b-png-image_8090946.png"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style33">
                  <span className="style34">
                    <a href="#" className="style35">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style36">
                    <a href="raspberry.html" className="style37">
                      Raspberry
                    </a>{" "}
                  </h5>{" "}
                  <span className="style38">
                    <span className="style39">₹ 3500</span>{" "}
                    <span className="style40"> ₹ 2400</span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="style41">
              {/* 3 Single Prodect */}
              <div className="style42">
                <span className="style43">
                  <span className="style44">Sale</span>{" "}
                </span>
                <div className="style45">
                  <a href="soldering.html" className="style46">
                    <img
                      src="https://cdn.pixabay.com/photo/2020/05/01/14/52/soldering-5117508_960_720.png"
                      width={270}
                      height={274}
                      alt="Product"
                      className="style47"
                    />{" "}
                    <img
                      className="style48"
                      src="https://cdn.pixabay.com/photo/2020/05/01/14/52/soldering-5117508_960_720.png"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style49">
                  <span className="style50">
                    <a href="#" className="style51">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style52">
                    <a href="soldering.html" className="style53">
                      Soldering
                    </a>{" "}
                  </h5>{" "}
                  <span className="style54">
                    <span className="style55"> ₹ 1200</span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="style56">
              {/*4  Single Prodect */}
              <div className="style57">
                <span className="style58">
                  <span className="style59">New</span>{" "}
                </span>
                <div className="style60">
                  <a className="style61" href="/single-product">
                    <img
                      src="https://www.electroncomponents.com/image/cache/catalog/MISC/solder/soldering_wire-500x500.png"
                      width={270}
                      height={274}
                      alt="Product"
                      className="style62"
                    />{" "}
                    <img
                      className="style63"
                      src="https://www.electroncomponents.com/image/cache/catalog/MISC/solder/soldering_wire-500x500.png"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style64">
                  <span className="style65">
                    <a href="#" className="style66">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style67">
                    <a href="/single-product" className="style68">
                      Soldering Wire
                    </a>{" "}
                  </h5>{" "}
                  <span className="style69">
                    <span className="style70"> ₹ 100</span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="style71">
              {/*5 Single Prodect */}
              <div className="style72">
                <span className="style73"></span>
                <div className="style74">
                  <a className="style75" href="/single-product">
                    <img
                      src="https://www.pngmart.com/files/6/Electric-Motor-PNG-Photos.png"
                      width={270}
                      height={274}
                      alt="Product"
                      className="style76"
                    />{" "}
                    <img
                      className="style77"
                      src="https://www.pngmart.com/files/6/Electric-Motor-PNG-Photos.png"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style78">
                  <span className="style79">
                    <a href="#" className="style80">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style81">
                    <a href="/single-product" className="style82">
                      Electric Motor
                    </a>{" "}
                  </h5>{" "}
                  <span className="style83">
                    <span className="style84"> ₹ 250</span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="style85">
              {/*6 Single Prodect */}
              <div className="style86">
                <span className="style87">
                  <span className="style88">-8%</span>{" "}
                  <span className="style89">Sale</span>{" "}
                </span>
                <div className="style-90">
                  <a className="style-91" href="/single-product">
                    <img
                      src="https://lipolybatteries.com/wp-content/uploads/2018/10/lipoly-battery-3-7v-lithium-polymer-batteries.png"
                      height={274}
                      width={270}
                      alt="Product"
                      className="style-92"
                    />{" "}
                    {/* <img
                      className="style-93"
                      src="https://lipolybatteries.com/wp-content/uploads/2018/10/lipoly-battery-3-7v-lithium-polymer-batteries.png"
                      alt="Product"
                    />{" "} */}
                  </a>
                </div>
                <div className="style-94">
                  <span className="style-95">
                    <a href="#" className="style-96">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style-97">
                    <a href="/single-product" className="style-98">
                      Li poly Battery
                    </a>{" "}
                  </h5>{" "}
                  <span className="style-99">
                    <span className="style100"> ₹ 120</span>{" "}
                    <span className="style101"> ₹ 83</span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="style102">
              {/*7 Single Prodect */}
              <div className="style103">
                <span className="style104">
                  <span className="style105">Sale</span>{" "}
                </span>
                <div className="style106">
                  <a className="style107" href="/single-product">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arduino-uno-perspective-transparent.png/1200px-Arduino-uno-perspective-transparent.png"
                      height={274}
                      width={270}
                      alt="Product"
                      className="style108"
                    />{" "}
                    <img
                      className="style109"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arduino-uno-perspective-transparent.png/1200px-Arduino-uno-perspective-transparent.png"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style110">
                  <span className="style111">
                    <a href="#" className="style112">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style113">
                    <a href="/single-product" className="style114">
                      Arduino
                    </a>{" "}
                  </h5>{" "}
                  <span className="style115">
                    <span className="style116"> ₹ 1800</span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="style117">
              {/*8 Single Prodect */}
              <div className="style118">
                <span className="style119">
                  <span className="style120">-5%</span>{" "}
                </span>
                <div className="style121">
                  <a className="style122" href="/single-product">
                    <img
                      src="https://ci6.googleusercontent.com/proxy/sqt79k5ozNV-G6pdk3wf-CaoJvyz02KdlqEU4c2Jwz2PEOtATZV469HpC2ZzHS4wgxqsEJ4drXyGd9EL5ZgIuYBdnxN9ifM091DeMyPAlQeQx1vtp5aVQES_HZ5ruhN1S0NVeR3U2l0LJNRcwNJbXF3lEFn0W56t=s0-d-e1-ft#https://probots.co.in/pub/media/catalog/product/cache/d8ddd0f9b0cd008b57085cd218b48832/2/n/2n3904.jpg"
                      width={270}
                      height={274}
                      alt="Product"
                      className="style123"
                    />{" "}
                    <img
                      className="style124"
                      src="https://ci6.googleusercontent.com/proxy/sqt79k5ozNV-G6pdk3wf-CaoJvyz02KdlqEU4c2Jwz2PEOtATZV469HpC2ZzHS4wgxqsEJ4drXyGd9EL5ZgIuYBdnxN9ifM091DeMyPAlQeQx1vtp5aVQES_HZ5ruhN1S0NVeR3U2l0LJNRcwNJbXF3lEFn0W56t=s0-d-e1-ft#https://probots.co.in/pub/media/catalog/product/cache/d8ddd0f9b0cd008b57085cd218b48832/2/n/2n3904.jpg"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style125">
                  <span className="style126">
                    <a href="#" className="style127">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style128">
                    <a href="/single-product" className="style129">
                      Transistor
                    </a>{" "}
                  </h5>{" "}
                  <span className="style130">
                    <span className="style131"> ₹ 70</span>{" "}
                    <span className="style132"> ₹ 55 </span>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* 1st tab end */}
        {/* 2nd tab start */}
        <div className="style133">
          <div className="style134">
            <div className="style135">
              {/* 1 Single Prodect */}
              <div className="style136">
                <span className="style137">
                  <span className="style138">New</span>{" "}
                </span>
                <div className="style139">
                  <a className="style140" href="/single-product">
                    <img
                      src="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309"
                      height={274}
                      width={270}
                      alt="Product"
                      className="style141"
                    />{" "}
                    <img
                      className="style142"
                      src="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style143">
                  <span className="style144">
                    <a href="#" className="style145">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style146">
                    <a href="/single-product" className="style147">
                      Modern Smart Phone
                    </a>{" "}
                  </h5>{" "}
                  <span className="style148">
                    <span className="style149">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style150">
                  <button
                    title="Add To Cart"
                    className="style151"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style152" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style153">
              {/* Single Prodect */}
              <div className="style154">
                <span className="style155">
                  <span className="style156">-10%</span>{" "}
                  <span className="style157">New</span>{" "}
                </span>
                <div className="style158">
                  <a className="style159" href="/single-product">
                    <img
                      src="assets/images/product-image/2.webp"
                      alt="Product"
                      className="style160"
                    />{" "}
                    <img
                      className="style161"
                      src="assets/images/product-image/2.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style162">
                  <span className="style163">
                    <a href="#" className="style164">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style165">
                    <a href="/single-product" className="style166">
                      Bluetooth Headphone
                    </a>{" "}
                  </h5>{" "}
                  <span className="style167">
                    <span className="style168">$48.50</span>{" "}
                    <span className="style169">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style170">
                  <button
                    title="Add To Cart"
                    className="style171"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style172" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style173">
              {/* Single Prodect */}
              <div className="style174">
                <span className="style175">
                  <span className="style176">Sale</span>{" "}
                </span>
                <div className="style177">
                  <a className="style178" href="/single-product">
                    <img
                      src="assets/images/product-image/3.webp"
                      alt="Product"
                      className="style179"
                    />{" "}
                    <img
                      className="style180"
                      src="assets/images/product-image/3.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style181">
                  <span className="style182">
                    <a href="#" className="style183">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style184">
                    <a href="/single-product" className="style185">
                      Smart Music Box
                    </a>{" "}
                  </h5>{" "}
                  <span className="style186">
                    <span className="style187">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style188">
                  <button
                    title="Add To Cart"
                    className="style189"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style190" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style191">
              {/* Single Prodect */}
              <div className="style192">
                <span className="style193">
                  <span className="style194">New</span>{" "}
                </span>
                <div className="style195">
                  <a className="style196" href="/single-product">
                    <img
                      src="assets/images/product-image/4.webp"
                      alt="Product"
                      className="style197"
                    />{" "}
                    <img
                      className="style198"
                      src="assets/images/product-image/1.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style199">
                  <span className="style200">
                    <a href="#" className="style201">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style202">
                    <a href="/single-product" className="style203">
                      Air Pods 25Hjkl Black
                    </a>{" "}
                  </h5>{" "}
                  <span className="style204">
                    <span className="style205">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style206">
                  <button
                    title="Add To Cart"
                    className="style207"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style208" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style209">
              {/* Single Prodect */}
              <div className="style210">
                <span className="style211"></span>
                <div className="style212">
                  <a className="style213" href="/single-product">
                    <img
                      src="assets/images/product-image/5.webp"
                      alt="Product"
                      className="style214"
                    />{" "}
                    <img
                      className="style215"
                      src="assets/images/product-image/5.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style216">
                  <span className="style217">
                    <a href="#" className="style218">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style219">
                    <a href="/single-product" className="style220">
                      Smart Hand Watch
                    </a>{" "}
                  </h5>{" "}
                  <span className="style221">
                    <span className="style222">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style223">
                  <button
                    title="Add To Cart"
                    className="style224"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style225" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style226">
              {/* Single Prodect */}
              <div className="style227">
                <span className="style228">
                  <span className="style229">-8%</span>{" "}
                  <span className="style230">Sale</span>{" "}
                </span>
                <div className="style231">
                  <a className="style232" href="/single-product">
                    <img
                      src="assets/images/product-image/6.webp"
                      alt="Product"
                      className="style233"
                    />{" "}
                    <img
                      className="style234"
                      src="assets/images/product-image/6.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style235">
                  <span className="style236">
                    <a href="#" className="style237">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style238">
                    <a href="/single-product" className="style239">
                      Smart Table Camera
                    </a>{" "}
                  </h5>{" "}
                  <span className="style240">
                    <span className="style241">$138.50</span>{" "}
                    <span className="style242">$112.50</span>{" "}
                  </span>
                </div>
                <div className="style243">
                  <button
                    title="Add To Cart"
                    className="style244"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style245" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style246">
              {/* Single Prodect */}
              <div className="style247">
                <span className="style248">
                  <span className="style249">Sale</span>{" "}
                </span>
                <div className="style250">
                  <a className="style251" href="/single-product">
                    <img
                      src="assets/images/product-image/7.webp"
                      alt="Product"
                      className="style252"
                    />{" "}
                    <img
                      className="style253"
                      src="assets/images/product-image/1.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style254">
                  <span className="style255">
                    <a href="#" className="style256">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style257">
                    <a href="/single-product" className="style258">
                      Round Pocket Router
                    </a>{" "}
                  </h5>{" "}
                  <span className="style259">
                    <span className="style260">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style261">
                  <button
                    title="Add To Cart"
                    className="style262"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style263" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style264">
              {/* Single Prodect */}
              <div className="style265">
                <span className="style266">
                  <span className="style267">-5%</span>{" "}
                </span>
                <div className="style268">
                  <a className="style269" href="/single-product">
                    <img
                      src="assets/images/product-image/8.webp"
                      alt="Product"
                      className="style270"
                    />{" "}
                    <img
                      className="style271"
                      src="assets/images/product-image/8.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style272">
                  <span className="style273">
                    <a href="#" className="style274">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style275">
                    <a href="/single-product" className="style276">
                      Power Bank 10000Mhp
                    </a>{" "}
                  </h5>{" "}
                  <span className="style277">
                    <span className="style278">$260.00</span>{" "}
                    <span className="style279">$238.50</span>{" "}
                  </span>
                </div>
                <div className="style280">
                  <button
                    title="Add To Cart"
                    className="style281"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style282" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* 2nd tab end */}
        {/* 3rd tab start */}
        <div className="style283">
          <div className="style284">
            <div className="style285">
              {/* Single Prodect */}
              <div className="style286">
                <span className="style287">
                  <span className="style288">New</span>{" "}
                </span>
                <div className="style289">
                  <a className="style290" href="/single-product">
                    <img
                      src="assets/images/product-image/1.webp"
                      alt="Product"
                      className="style291"
                    />{" "}
                    <img
                      className="style292"
                      src="assets/images/product-image/1.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style293">
                  <span className="style294">
                    <a href="#" className="style295">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style296">
                    <a href="/single-product" className="style297">
                      Modern Smart Phone
                    </a>{" "}
                  </h5>{" "}
                  <span className="style298">
                    <span className="style299">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style300">
                  <button
                    title="Add To Cart"
                    className="style301"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style302" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style303">
              {/* Single Prodect */}
              <div className="style304">
                <span className="style305">
                  <span className="style306">-10%</span>{" "}
                  <span className="style307">New</span>{" "}
                </span>
                <div className="style308">
                  <a className="style309" href="/single-product">
                    <img
                      src="assets/images/product-image/2.webp"
                      alt="Product"
                      className="style310"
                    />{" "}
                    <img
                      className="style311"
                      src="assets/images/product-image/2.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style312">
                  <span className="style313">
                    <a href="#" className="style314">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style315">
                    <a href="/single-product" className="style316">
                      Bluetooth Headphone
                    </a>{" "}
                  </h5>{" "}
                  <span className="style317">
                    <span className="style318">$48.50</span>{" "}
                    <span className="style319">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style320">
                  <button
                    title="Add To Cart"
                    className="style321"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style322" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style323">
              {/* Single Prodect */}
              <div className="style324">
                <span className="style325">
                  <span className="style326">Sale</span>{" "}
                </span>
                <div className="style327">
                  <a className="style328" href="/single-product">
                    <img
                      src="assets/images/product-image/3.webp"
                      alt="Product"
                      className="style329"
                    />{" "}
                    <img
                      className="style330"
                      src="assets/images/product-image/3.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style331">
                  <span className="style332">
                    <a href="#" className="style333">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style334">
                    <a href="/single-product" className="style335">
                      Smart Music Box
                    </a>{" "}
                  </h5>{" "}
                  <span className="style336">
                    <span className="style337">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style338">
                  <button
                    title="Add To Cart"
                    className="style339"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style340" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style341">
              {/* Single Prodect */}
              <div className="style342">
                <span className="style343">
                  <span className="style344">New</span>{" "}
                </span>
                <div className="style345">
                  <a className="style346" href="/single-product">
                    <img
                      src="assets/images/product-image/4.webp"
                      alt="Product"
                      className="style347"
                    />{" "}
                    <img
                      className="style348"
                      src="assets/images/product-image/1.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style349">
                  <span className="style350">
                    <a href="#" className="style351">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style352">
                    <a href="/single-product" className="style353">
                      Air Pods 25Hjkl Black
                    </a>{" "}
                  </h5>{" "}
                  <span className="style354">
                    <span className="style355">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style356">
                  <button
                    title="Add To Cart"
                    className="style357"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style358" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style359">
              {/* Single Prodect */}
              <div className="style360">
                <span className="style361"></span>
                <div className="style362">
                  <a className="style363" href="/single-product">
                    <img
                      src="assets/images/product-image/5.webp"
                      alt="Product"
                      className="style364"
                    />{" "}
                    <img
                      className="style365"
                      src="assets/images/product-image/5.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style366">
                  <span className="style367">
                    <a href="#" className="style368">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style369">
                    <a href="/single-product" className="style370">
                      Smart Hand Watch
                    </a>{" "}
                  </h5>{" "}
                  <span className="style371">
                    <span className="style372">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style373">
                  <button
                    title="Add To Cart"
                    className="style374"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style375" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style376">
              {/* Single Prodect */}
              <div className="style377">
                <span className="style378">
                  <span className="style379">-8%</span>{" "}
                  <span className="style380">Sale</span>{" "}
                </span>
                <div className="style381">
                  <a className="style382" href="/single-product">
                    <img
                      src="assets/images/product-image/6.webp"
                      alt="Product"
                      className="style383"
                    />{" "}
                    <img
                      className="style384"
                      src="assets/images/product-image/6.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style385">
                  <span className="style386">
                    <a href="#" className="style387">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style388">
                    <a href="/single-product" className="style389">
                      Smart Table Camera
                    </a>{" "}
                  </h5>{" "}
                  <span className="style390">
                    <span className="style391">$138.50</span>{" "}
                    <span className="style392">$112.50</span>{" "}
                  </span>
                </div>
                <div className="style393">
                  <button
                    title="Add To Cart"
                    className="style394"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style395" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style396">
              {/* Single Prodect */}
              <div className="style397">
                <span className="style398">
                  <span className="style399">Sale</span>{" "}
                </span>
                <div className="style400">
                  <a className="style401" href="/single-product">
                    <img
                      src="assets/images/product-image/7.webp"
                      alt="Product"
                      className="style402"
                    />{" "}
                    <img
                      className="style403"
                      src="assets/images/product-image/1.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style404">
                  <span className="style405">
                    <a href="#" className="style406">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style407">
                    <a href="/single-product" className="style408">
                      Round Pocket Router
                    </a>{" "}
                  </h5>{" "}
                  <span className="style409">
                    <span className="style410">$38.50</span>{" "}
                  </span>
                </div>
                <div className="style411">
                  <button
                    title="Add To Cart"
                    className="style412"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style413" />
                  </button>
                </div>
              </div>
            </div>
            <div className="style414">
              {/* Single Prodect */}
              <div className="style415">
                <span className="style416">
                  <span className="style417">-5%</span>{" "}
                </span>
                <div className="style418">
                  <a className="style419" href="/single-product">
                    <img
                      src="assets/images/product-image/8.webp"
                      alt="Product"
                      className="style420"
                    />{" "}
                    <img
                      className="style421"
                      src="assets/images/product-image/8.webp"
                      alt="Product"
                    />{" "}
                  </a>
                </div>
                <div className="style422">
                  <span className="style423">
                    <a href="#" className="style424">
                      Accessories
                    </a>
                  </span>
                  <h5 className="style425">
                    <a href="/single-product" className="style426">
                      Power Bank 10000Mhp
                    </a>{" "}
                  </h5>{" "}
                  <span className="style427">
                    <span className="style428">$260.00</span>{" "}
                    <span className="style429">$238.50</span>{" "}
                  </span>
                </div>
                <div className="style430">
                  <button
                    title="Add To Cart"
                    className="style431"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-Cart"
                  >
                    <i className="style432" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* 3rd tab end */}
      </div>
    </div>
  </div>
</div>

    </>
    );
}
export default HomePage;