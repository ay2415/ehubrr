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




    </>
    );
}
export default HomePage;