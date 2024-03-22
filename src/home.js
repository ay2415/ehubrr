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
<div style={{paddingBottom: '100px', boxSizing: 'border-box'}}>
    <div style={{maxWidth: '1200px', width: '100%', paddingRight: '15px', paddingLeft: '15px', marginRight: 'auto', marginLeft: 'auto', boxSizing: 'border-box', bsGutterX: '1.5rem', bsGutterY: 0}}>
        {/* Section Title & Tab Start */}
        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
            <div style={{boxSizing: 'border-box', flex: '0 0 auto', width: '100%', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                {/* Tab Start */}
                {/**/}
                <ul className="product-tab-nav nav justify-content-start align-items-center">
                    <li className="nav-item"><button className="nav-link" databs-toggle="tab" databs-target="#newarrivals">Featured</button> </li>
                </ul>
            </div>
            {/* Tab End */}
        </div>
    </div> {/* Section Title & Tab End */}
    <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
        <div style={{boxSizing: 'border-box', flex: '1 0 0%', flexShrink: 0, width: '100%', maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
            <div style={{paddingTop: '60px', boxSizing: 'border-box'}}>
                {/* 1st tab start */}
                <div style={{height: 'auto', visibility: 'visible', opacity: 1, overflow: 'visible', display: 'block', maxWidth: '100%', boxSizing: 'border-box', transition: 'opacity 0.15s linear 0s'}}>
                    <div style={{marginBottom: '-30px', bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* 1 Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309" width="270" height="274" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="PCAM.html" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Digilent PCAM
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}>₹ 250</span> </span>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* 2 Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-10%</span> <span style={{backgroundColor: 'rgb(0, 0, 0)', marginTop: '12px', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="raspberry.html" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="https://png.pngtree.com/png-clipart/20220616/original/pngtree-raspberry-pi-3-model-b-png-image_8090946.png" width="270" height="274" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="https://png.pngtree.com/png-clipart/20220616/original/pngtree-raspberry-pi-3-model-b-png-image_8090946.png" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="raspberry.html" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Raspberry
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>₹ 3500</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}> ₹ 2400</span> </span>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* 3 Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>Sale</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="soldering.html" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="https://cdn.pixabay.com/photo/2020/05/01/14/52/soldering-5117508_960_720.png" width="270" height="274" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="https://cdn.pixabay.com/photo/2020/05/01/14/52/soldering-5117508_960_720.png" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="soldering.html" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Soldering
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}> ₹ 1200</span> </span>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/*4  Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="https://www.electroncomponents.com/image/cache/catalog/MISC/solder/soldering_wire-500x500.png" width="270" height="274" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="https://www.electroncomponents.com/image/cache/catalog/MISC/solder/soldering_wire-500x500.png" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Soldering Wire
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}> ₹ 100</span> </span>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/*5 Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="https://www.pngmart.com/files/6/Electric-Motor-PNG-Photos.png" width="270" height="274" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="https://www.pngmart.com/files/6/Electric-Motor-PNG-Photos.png" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Electric Motor
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}> ₹ 250</span> </span>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/*6 Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-8%</span> <span style={{backgroundColor: 'rgb(0, 0, 0)', marginTop: '12px', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>Sale</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="https://lipolybatteries.com/wp-content/uploads/2018/10/lipoly-battery-3-7v-lithium-polymer-batteries.png" height="274" width="270" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="https://lipolybatteries.com/wp-content/uploads/2018/10/lipoly-battery-3-7v-lithium-polymer-batteries.png" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Li poly Battery
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}> ₹ 120</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}> ₹ 83</span> </span>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/*7 Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>Sale</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arduino-uno-perspective-transparent.png/1200px-Arduino-uno-perspective-transparent.png" height="274" width="270" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arduino-uno-perspective-transparent.png/1200px-Arduino-uno-perspective-transparent.png" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Arduino
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}> ₹ 1800</span> </span>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/*8 Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-5%</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="https://ci6.googleusercontent.com/proxy/sqt79k5ozNV-G6pdk3wf-CaoJvyz02KdlqEU4c2Jwz2PEOtATZV469HpC2ZzHS4wgxqsEJ4drXyGd9EL5ZgIuYBdnxN9ifM091DeMyPAlQeQx1vtp5aVQES_HZ5ruhN1S0NVeR3U2l0LJNRcwNJbXF3lEFn0W56t=s0-d-e1-ft#https://probots.co.in/pub/media/catalog/product/cache/d8ddd0f9b0cd008b57085cd218b48832/2/n/2n3904.jpg" width="270" height="274" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="https://ci6.googleusercontent.com/proxy/sqt79k5ozNV-G6pdk3wf-CaoJvyz02KdlqEU4c2Jwz2PEOtATZV469HpC2ZzHS4wgxqsEJ4drXyGd9EL5ZgIuYBdnxN9ifM091DeMyPAlQeQx1vtp5aVQES_HZ5ruhN1S0NVeR3U2l0LJNRcwNJbXF3lEFn0W56t=s0-d-e1-ft#https://probots.co.in/pub/media/catalog/product/cache/d8ddd0f9b0cd008b57085cd218b48832/2/n/2n3904.jpg" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Transistor
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}> ₹ 70</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}> ₹ 55 </span> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* 1st tab end */}
                {/* 2nd tab start */}
                <div style={{display: 'block', overflow: 'hidden', height: '0px', visibility: 'hidden', maxWidth: '100%', opacity: 0, boxSizing: 'border-box', transition: 'opacity 0.15s linear 0s'}}>
                    <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* 1 Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309" height="274" width="270" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Modern Smart Phone
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '377.6px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-10%</span> <span style={{backgroundColor: 'rgb(0, 0, 0)', marginTop: '12px', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/2.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/2.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Bluetooth Headphone
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>$48.50</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>Sale</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/3.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/3.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Smart Music Box
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/4.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/1.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Air Pods 25Hjkl Black
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/5.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/5.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Smart Hand Watch
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-8%</span> <span style={{backgroundColor: 'rgb(0, 0, 0)', marginTop: '12px', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>Sale</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/6.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/6.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Smart Table Camera
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>$138.50</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$112.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>Sale</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/7.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/1.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Round Pocket Router
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-5%</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/8.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/8.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Power Bank 10000Mhp
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>$260.00</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$238.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* 2nd tab end */}
                {/* 3rd tab start */}
                <div style={{display: 'block', overflow: 'hidden', height: '0px', visibility: 'hidden', maxWidth: '100%', opacity: 0, boxSizing: 'border-box', transition: 'opacity 0.15s linear 0s'}}>
                    <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/1.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/1.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Modern Smart Phone
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-10%</span> <span style={{backgroundColor: 'rgb(0, 0, 0)', marginTop: '12px', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/2.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/2.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Bluetooth Headphone
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>$48.50</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>Sale</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/3.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/3.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Smart Music Box
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/4.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/1.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Air Pods 25Hjkl Black
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/5.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/5.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Smart Hand Watch
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-8%</span> <span style={{backgroundColor: 'rgb(0, 0, 0)', marginTop: '12px', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>Sale</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/6.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/6.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Smart Table Camera
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>$138.50</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$112.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>Sale</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/7.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/1.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Round Pocket Router
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: '0 0 auto', width: '25%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            {/* Single Prodect */}
                            <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                    <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-5%</span> </span>
                                <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                    <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                        <img src="assets/images/product-image/8.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/8.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a>
                                </div>
                                <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', WebkitBoxAlign: 'center', alignItems: 'center', lineHeight: '16px', backgroundColor: 'rgb(255, 255, 255)', padding: '0px 0px 30px', boxSizing: 'border-box'}}>
                                    <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                    <h5 style={{fontSize: '16px', margin: '10px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '10px', marginBottom: '15px', fontWeight: 500, lineHeight: '19.2px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Power Bank 10000Mhp
                                        </a> </h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                        <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>$260.00</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$238.50</span> </span>
                                </div>
                                <div style={{position: 'absolute', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease 0s', top: '136.812px', left: '133.4px', transform: 'matrix(1, 0, 0, 1, -135.9, 0)', WebkitBoxPack: 'center', justifyContent: 'center', height: '60px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRight: '1.6px solid rgb(225, 225, 225)', borderBottom: '1.6px solid rgb(225, 225, 225)', borderLeft: '1.6px solid rgb(225, 225, 225)', borderImage: 'none', borderTop: '0px none rgb(58, 58, 58)', zIndex: 11, borderRadius: '0px 0px 13px 13px', width: 'calc(100% + 5px)', boxSizing: 'border-box'}}>
                                    <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', width: '40px', height: '40px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', borderRadius: '5px', backgroundColor: 'rgb(112, 112, 112)', fontSize: '24px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* 3rd tab end */}
            </div>
        </div>
    </div>
</div>
<div style={{paddingBottom: '100px', paddingTop: '100px', boxSizing: 'border-box'}}>
    <div style={{maxWidth: '1200px', width: '100%', paddingRight: '15px', paddingLeft: '15px', marginRight: 'auto', marginLeft: 'auto', boxSizing: 'border-box',   bsGutterX: '1.5rem',  bsGutterY: 0}}>
        <div style={{  bsGutterX: '30px', boxSizing: 'border-box',  bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
            <div style={{boxSizing: 'border-box', flex: '0 0 auto', width: '100%', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                <div style={{lineHeight: '16px', marginBottom: '50px', boxSizing: 'border-box', textAlign: 'center'}}>
                    <h2 style={{fontSize: '48px', fontFamily: 'Poppins, sans-serif', fontWeight: 600, display: 'inline-block', color: 'rgb(0, 0, 0)', margin: '0px 0px 28px', lineHeight: '34px', boxSizing: 'border-box', marginTop: '0px', marginBottom: '28px'}}>Featured Offers</h2>
                </div>
            </div>
        </div>
        <div style={{  bsGutterX: '30px', boxSizing: 'border-box',  bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
            <div style={{flex: '0 0 auto', width: '50%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                <div style={{position: 'relative', border: '1.6px solid rgb(226, 226, 226)', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', borderRadius: '15px', padding: '5px', margin: '-5px', boxSizing: 'border-box'}}>
                    <div style={{boxSizing: 'border-box'}}>
                        <img src="https://quartzcomponents.com/cdn/shop/products/PIC18F4520_270x270.jpg?v=1642875772" height="620" width="" alt="" style={{maxWidth: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} />
                    </div>
                    <div style={{position: 'absolute', top: '50px', textAlign: 'center', left: '288.4px', transform: 'matrix(1, 0, 0, 1, -288.4, 0)', width: '100%', boxSizing: 'border-box'}}>
                        <h4 style={{fontSize: '30px', fontWeight: 600, margin: '0px 0px 20px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', marginTop: '0px', marginBottom: '20px', lineHeight: '36px'}}><a href="/single-product" style={{color: 'rgb(0, 0, 0)', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(0, 0, 0)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>MicroController</a></h4> <span style={{fontSize: '30px', fontFamily: 'Poppins, sans-serif', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                            <span style={{marginRight: '20px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}><del style={{boxSizing: 'border-box'}}> ₹ 850</del></span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}> ₹ 590</span> </span>
                    </div>
                    <div style={{position: 'absolute', bottom: '60px', textAlign: 'center', left: '288.4px', transform: 'matrix(1, 0, 0, 1, -288.4, 0)', width: '100%', boxSizing: 'border-box'}}>
                        <div style={{boxSizing: 'border-box'}}>
                        </div> <a href="single-product-variable.html" style={{width: '200px', height: '54px', backgroundColor: 'rgb(38, 107, 249)', borderColor: 'rgb(38, 107, 249)', borderWidth: '1.6px', borderStyle: 'solid', borderRadius: '18px', padding: '0px', display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', border: '1.6px solid rgb(38, 107, 249)', color: 'rgb(58, 58, 58)', fontSize: '18px', fontWeight: 600, lineHeight: '18px', transition: 'all 0.3s ease 0s', outline: 'rgb(58, 58, 58) none 0px', boxShadow: 'none', textDecoration: 'none solid rgb(58, 58, 58)', boxSizing: 'border-box', margin: 'auto !important', textAlign: 'center', verticalAlign: 'middle', cursor: 'pointer', userSelect: 'none', bsBtnColor: '#fff', bsBtnBg: '#0d6efd', bsBtnBorderColor: '#0d6efd', bsBtnHoverColor: '#fff', bsBtnHoverBg: '#0b5ed7', bsBtnHoverBorderColor: '#0a58ca', bsBtnFocusShadowRgb: '49,132,253', bsBtnActiveColor: '#fff', bsBtnActiveBg: '#0a58ca', bsBtnActiveBorderColor: '#0a53be', bsBtnActiveShadow: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)', bsBtnDisabledColor: '#fff', bsBtnDisabledBg: '#0d6efd', bsBtnDisabledBorderColor: '#0d6efd', bsBtnPaddingX: '0.75rem', bsBtnPaddingY: '0.375rem', bsBtnFontFamily: '', bsBtnFontSize: '1rem', bsBtnFontWeight: 400, bsBtnLineHeight: '1.5', bsBtnBorderWidth: '1px', bsBtnBorderRadius: '0.375rem', bsBtnBoxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075)', bsBtnDisabledOpacity: '0.65', bsBtnFocusBoxShadow: '0 0 0 0.25rem rgba(49,132,253, .5)', fontFamily: 'Poppins, sans-serif'}}> Shop
                            Now </a>
                    </div>
                </div>
            </div>
            <div style={{flex: '0 0 auto', width: '50%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                <div style={{display: 'flex', border: '1.6px solid rgb(226, 226, 226)', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', borderRadius: '15px', padding: '5px', margin: '-5px', boxSizing: 'border-box'}}>
                    <div style={{width: '270px', position: 'relative', boxSizing: 'border-box'}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arduino-uno-perspective-transparent.png/1200px-Arduino-uno-perspective-transparent.png" width="270" alt="" style={{maxWidth: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{position: 'absolute', top: '15px', right: '15px', width: '40px', height: '40px', display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', fontSize: '24px', background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', color: 'rgb(255, 255, 255)', borderRadius: '5px', fontWeight: 600, transform: 'matrix(0, 0, 0, 0, 0, 0)', transition: 'all 0.3s ease-in-out 0s', textDecoration: 'none solid rgb(255, 255, 255)', backgroundColor: 'rgb(38, 107, 249)', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                    </div>
                    <div style={{width: 'calc(100% - 270px)', paddingLeft: '30px', display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box'}}>
                        <div style={{display: 'flex', backgroundColor: 'rgb(38, 107, 249)', color: 'rgb(255, 255, 255)', width: '174px', height: '30px', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '0px 20px 20px 0px', fontWeight: 600, boxSizing: 'border-box'}}>
                            <span style={{boxSizing: 'border-box'}}>End In:</span>
                            <div data-countdown="2023/10/10" style={{boxSizing: 'border-box'}}><span style={{display: 'inline-block', boxSizing: 'border-box'}}><span style={{display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', fontSize: '16px', color: 'rgb(255, 255, 255)', fontWeight: 600, position: 'relative', margin: '0px 5px', width: '20px', height: '30px', boxSizing: 'border-box'}}>0</span>
                                    <p style={{display: 'none', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Hrs</p>
                                </span> <span style={{display: 'inline-block', boxSizing: 'border-box'}}><span style={{display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', fontSize: '16px', color: 'rgb(255, 255, 255)', fontWeight: 600, position: 'relative', margin: '0px 5px', width: '20px', height: '30px', boxSizing: 'border-box'}}>00</span>
                                    <p style={{display: 'none', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Min</p>
                                </span> <span style={{display: 'inline-block', boxSizing: 'border-box'}}><span style={{display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', fontSize: '16px', color: 'rgb(255, 255, 255)', fontWeight: 600, position: 'relative', margin: '0px 5px', width: '20px', height: '30px', boxSizing: 'border-box'}}> 00</span>
                                    <p style={{display: 'none', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Sec</p>
                                </span></div>
                        </div>
                        <div style={{padding: '20px 0px', position: 'relative', boxSizing: 'border-box'}}>
                            <h5 style={{fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '7.5px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{fontSize: '16px', color: 'rgb(0, 0, 0)', fontWeight: 600, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(0, 0, 0)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Arduino</a></h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}> ₹ 2400</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}> ₹ 1800</span> </span>
                        </div>
                        <div style={{marginTop: '30px', boxSizing: 'border-box'}}>
                            <ul style={{padding: '0px', margin: '0px', listStyle: 'outside none none', boxSizing: 'border-box', marginTop: '0px', marginBottom: '0px', paddingLeft: '0px'}}>
                                <li style={{fontSize: '16px', color: 'rgb(0, 0, 0)', fontWeight: 500, position: 'relative', paddingLeft: '15px', listStyle: 'outside none none', boxSizing: 'border-box'}}>Predecessor : <span style={{fontWeight: 400, boxSizing: 'border-box'}}>None.</span></li>
                                <li style={{fontSize: '16px', color: 'rgb(0, 0, 0)', fontWeight: 500, position: 'relative', paddingLeft: '15px', listStyle: 'outside none none', boxSizing: 'border-box'}}>Support Type : <span style={{fontWeight: 400, boxSizing: 'border-box'}}>Neutral.</span></li>
                                <li style={{fontSize: '16px', color: 'rgb(0, 0, 0)', fontWeight: 500, position: 'relative', paddingLeft: '15px', listStyle: 'outside none none', boxSizing: 'border-box'}}>Cushioning : <span style={{fontWeight: 400, boxSizing: 'border-box'}}>High Energizing.</span></li>
                                <li style={{fontSize: '16px', color: 'rgb(0, 0, 0)', fontWeight: 500, position: 'relative', paddingLeft: '15px', listStyle: 'outside none none', boxSizing: 'border-box'}}>Total Weight : <span style={{fontWeight: 400, boxSizing: 'border-box'}}> 300gm</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: '30px', display: 'flex', border: '1.6px solid rgb(226, 226, 226)', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', borderRadius: '15px', padding: '5px', boxSizing: 'border-box'}}>
                    <div style={{width: '270px', position: 'relative', boxSizing: 'border-box'}}>
                        <img src="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309" alt="" style={{maxWidth: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <button title="Add To Cart" databs-toggle="modal" databs-target="#exampleModal-Cart" style={{position: 'absolute', top: '15px', right: '15px', width: '40px', height: '40px', display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', fontSize: '24px', background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', color: 'rgb(255, 255, 255)', borderRadius: '5px', fontWeight: 600, transform: 'matrix(0, 0, 0, 0, 0, 0)', transition: 'all 0.3s ease-in-out 0s', textDecoration: 'none solid rgb(255, 255, 255)', backgroundColor: 'rgb(38, 107, 249)', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', lineHeight: '32px'}}><i style={{boxSizing: 'border-box', display: 'block', fontFamily: 'Pe-icon-7-stroke', speak: 'none', fontStyle: 'normal', fontWeight: 400, fontVariant: 'normal', textTransform: 'none', lineHeight: '24px', WebkitFontSmoothing: 'antialiased'}}></i></button>
                    </div>
                    <div style={{width: 'calc(100% - 270px)', paddingLeft: '30px', display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box'}}>
                        <div style={{display: 'flex', backgroundColor: 'rgb(38, 107, 249)', color: 'rgb(255, 255, 255)', width: '174px', height: '30px', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', flexDirection: 'row', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '0px 20px 20px 0px', fontWeight: 600, boxSizing: 'border-box'}}>
                            <span style={{boxSizing: 'border-box'}}>End In:</span>
                            <div data-countdown="2023/09/15" style={{boxSizing: 'border-box'}}><span style={{display: 'inline-block', boxSizing: 'border-box'}}><span style={{display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', fontSize: '16px', color: 'rgb(255, 255, 255)', fontWeight: 600, position: 'relative', margin: '0px 5px', width: '20px', height: '30px', boxSizing: 'border-box'}}>0</span>
                                    <p style={{display: 'none', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Hrs</p>
                                </span> <span style={{display: 'inline-block', boxSizing: 'border-box'}}><span style={{display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', fontSize: '16px', color: 'rgb(255, 255, 255)', fontWeight: 600, position: 'relative', margin: '0px 5px', width: '20px', height: '30px', boxSizing: 'border-box'}}>00</span>
                                    <p style={{display: 'none', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Min</p>
                                </span> <span style={{display: 'inline-block', boxSizing: 'border-box'}}><span style={{display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', fontSize: '16px', color: 'rgb(255, 255, 255)', fontWeight: 600, position: 'relative', margin: '0px 5px', width: '20px', height: '30px', boxSizing: 'border-box'}}> 00</span>
                                    <p style={{display: 'none', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Sec</p>
                                </span></div>
                        </div>
                        <div style={{padding: '20px 0px', position: 'relative', boxSizing: 'border-box'}}>
                            <h5 style={{fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '7.5px', fontWeight: 500, lineHeight: '22.5px'}}><a href="PCAM.html" style={{fontSize: '16px', color: 'rgb(0, 0, 0)', fontWeight: 600, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(0, 0, 0)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Digilent PCAM</a></h5> <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', fontWeight: 500, color: 'rgb(102, 102, 102)', boxSizing: 'border-box'}}>
                                <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}> ₹ 300</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}> ₹ 250</span> </span>
                        </div>
                        <div style={{marginTop: '30px', boxSizing: 'border-box'}}>
                            <ul style={{padding: '0px', margin: '0px', listStyle: 'outside none none', boxSizing: 'border-box', marginTop: '0px', marginBottom: '0px', paddingLeft: '0px'}}>
                                <li style={{fontSize: '16px', color: 'rgb(0, 0, 0)', fontWeight: 500, position: 'relative', paddingLeft: '15px', listStyle: 'outside none none', boxSizing: 'border-box'}}>Predecessor : <span style={{fontWeight: 400, boxSizing: 'border-box'}}>None.</span></li>
                                <li style={{fontSize: '16px', color: 'rgb(0, 0, 0)', fontWeight: 500, position: 'relative', paddingLeft: '15px', listStyle: 'outside none none', boxSizing: 'border-box'}}>Support Type : <span style={{fontWeight: 400, boxSizing: 'border-box'}}>Neutral.</span></li>
                                <li style={{fontSize: '16px', color: 'rgb(0, 0, 0)', fontWeight: 500, position: 'relative', paddingLeft: '15px', listStyle: 'outside none none', boxSizing: 'border-box'}}>Cushioning : <span style={{fontWeight: 400, boxSizing: 'border-box'}}>High Energizing.</span></li>
                                <li style={{fontSize: '16px', color: 'rgb(0, 0, 0)', fontWeight: 500, position: 'relative', paddingLeft: '15px', listStyle: 'outside none none', boxSizing: 'border-box'}}>Total Weight : <span style={{fontWeight: 400, boxSizing: 'border-box'}}> 300gm</span></li>
                            </ul>
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
export default HomePage;