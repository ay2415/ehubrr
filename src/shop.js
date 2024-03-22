import React from "react";
import Card from "./components/card";

function Shop(){
    return(
        <>
        <div style={{paddingBottom: '100px', paddingTop: '100px', boxSizing: 'border-box'}}>
    <div style={{maxWidth: '1200px', width: '100%', paddingRight: '15px', paddingLeft: '15px', marginRight: 'auto', marginLeft: 'auto', boxSizing: 'border-box', bsGutterX: '1.5rem', bsGutterY: 0}}>
        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
            <div style={{order: 6, flex: '0 0 auto', width: '75%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                {/* Shop Top Area Start */}
                <div style={{marginBottom: '40px', alignSelf: 'center', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', fontSize: '16px', borderRadius: '10px', boxSizing: 'border-box', display: 'flex'}}>
                    {/* Left Side End */}
                    {/* Right Side Start */}
                    <div style={{width: '260px', height: '50px', border: '1.6px solid rgb(225, 225, 225)', borderRadius: '5px', padding: '0px 20px', color: 'rgb(108, 108, 108)', boxSizing: 'border-box', alignItems: 'center', display: 'flex'}}>
                        <div style={{marginRight: '5px', boxSizing: 'border-box'}}>
                            <p style={{marginBottom: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Sort By:</p>
                        </div> {/* Single Wedge End */}
                        <div style={{width: '70%', boxSizing: 'border-box', position: 'relative'}}>
                            <button databs-toggle="dropdown" style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', transition: 'all 0.3s ease 0s', border: '0px none rgb(9, 9, 9)', backgroundColor: 'rgba(0, 0, 0, 0)', padding: '0px', color: 'rgb(9, 9, 9)', width: '100%', textDecoration: 'none solid rgb(9, 9, 9)', boxSizing: 'border-box', whiteSpace: 'nowrap', cursor: 'pointer', appearance: 'button', textTransform: 'none', margin: '0px', fontFamily: 'Poppins, sans-serif', fontSize: '16px', lineHeight: '32px', borderRadius: '0px'}}>Default <i style={{fontSize: '18px', position: 'absolute', right: '0px', color: 'rgb(38, 107, 249)', boxSizing: 'border-box', display: 'block', fontStyle: 'normal', fontVariant: 'normal', fontKerning: 'auto', fontOpticalSizing: 'auto', fontFeatureSettings: 'normal', fontVariationSettings: 'normal', fontWeight: 400, fontStretch: '100%', lineHeight: '18px', fontFamily: 'FontAwesome', textRendering: 'auto', WebkitFontSmoothing: 'antialiased'}}></i></button>
                            <ul style={{margin: '0px', minWidth: '220px', overflow: 'hidden', padding: '0px 15px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRadius: '0px', border: '0px none rgb(33, 37, 41)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 3px 25.5px 4.5px', transform: 'none', inset: '40px 0px auto -45px !important', listStyle: 'outside none none', boxSizing: 'border-box', position: 'absolute', zIndex: 1000, display: 'none', fontSize: '15px', color: 'rgb(33, 37, 41)', textAlign: 'left', backgroundColor: 'rgb(255, 255, 255)', WebkitBackgroundClip: 'border-box', marginTop: '0px', marginBottom: '0px', paddingLeft: '15px', bsDropdownZindex: 1000, bsDropdownMinWidth: '10rem', bsDropdownPaddingX: 0, bsDropdownPaddingY: '0.5rem', bsDropdownSpacer: '0.125rem', bsDropdownFontSize: '1rem', bsDropdownColor: '#212529', bsDropdownBg: '#fff', bsDropdownBorderColor: 'rgba(0, 0, 0, 0.175)', bsDropdownBorderRadius: '0.375rem', bsDropdownBorderWidth: '1px', bsDropdownInnerBorderRadius: 'calc(0.375rem - 1px)', bsDropdownDividerBg: 'rgba(0, 0, 0, 0.175)', bsDropdownDividerMarginY: '0.5rem', bsDropdownBoxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)', bsDropdownLinkColor: '#212529', bsDropdownLinkHoverColor: '#1e2125', bsDropdownLinkHoverBg: '#e9ecef', bsDropdownLinkActiveColor: '#fff', bsDropdownLinkActiveBg: '#0d6efd', bsDropdownLinkDisabledColor: '#adb5bd', bsDropdownItemPaddingX: '1rem', bsDropdownItemPaddingY: '0.25rem', bsDropdownHeaderColor: '#6c757d', bsDropdownHeaderPaddingX: '1rem', bsDropdownHeaderPaddingY: '0.5rem'}}>
                                <li style={{borderBottom: '0.8px solid rgb(235, 235, 235)', listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{padding: '10px', color: 'rgb(45, 45, 45)', lineHeight: '25px', fontSize: '14px', background: 'rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(45, 45, 45)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(45, 45, 45)', boxSizing: 'border-box', display: 'block', width: '100%', clear: 'both', fontWeight: 400, textAlign: 'left', whiteSpace: 'nowrap'}}>Name, A to Z</a></li>
                                <li style={{borderBottom: '0.8px solid rgb(235, 235, 235)', listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{padding: '10px', color: 'rgb(45, 45, 45)', lineHeight: '25px', fontSize: '14px', background: 'rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(45, 45, 45)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(45, 45, 45)', boxSizing: 'border-box', display: 'block', width: '100%', clear: 'both', fontWeight: 400, textAlign: 'left', whiteSpace: 'nowrap'}}>Name, Z to A</a></li>
                                <li style={{borderBottom: '0.8px solid rgb(235, 235, 235)', listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{padding: '10px', color: 'rgb(45, 45, 45)', lineHeight: '25px', fontSize: '14px', background: 'rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(45, 45, 45)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(45, 45, 45)', boxSizing: 'border-box', display: 'block', width: '100%', clear: 'both', fontWeight: 400, textAlign: 'left', whiteSpace: 'nowrap'}}>Price, low to high</a></li>
                                <li style={{borderBottom: '0.8px solid rgb(235, 235, 235)', listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{padding: '10px', color: 'rgb(45, 45, 45)', lineHeight: '25px', fontSize: '14px', background: 'rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(45, 45, 45)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(45, 45, 45)', boxSizing: 'border-box', display: 'block', width: '100%', clear: 'both', fontWeight: 400, textAlign: 'left', whiteSpace: 'nowrap'}}>Price, high to low</a></li>
                                <li style={{borderBottom: '0.8px solid rgb(235, 235, 235)', listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{padding: '10px', color: 'rgb(45, 45, 45)', lineHeight: '25px', fontSize: '14px', background: 'rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(45, 45, 45)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(45, 45, 45)', boxSizing: 'border-box', display: 'block', width: '100%', clear: 'both', fontWeight: 400, textAlign: 'left', whiteSpace: 'nowrap'}}>Sort By new</a></li>
                                <li style={{border: '0px none rgb(33, 37, 41)', borderBottom: '0px none rgb(33, 37, 41)', listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{padding: '10px', color: 'rgb(45, 45, 45)', lineHeight: '25px', fontSize: '14px', background: 'rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(45, 45, 45)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(45, 45, 45)', boxSizing: 'border-box', display: 'block', width: '100%', clear: 'both', fontWeight: 400, textAlign: 'left', whiteSpace: 'nowrap'}}>Sort By old</a></li>
                            </ul>
                        </div> {/* Single Wedge Start */}
                    </div> {/* Right Side End */}
                </div> {/* Shop Top Area End */}
                {/* Shop Bottom Area Start */}
                <div style={{boxSizing: 'border-box'}}>
                    {/* Tab Content Area Start */}
                    <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                        <div style={{boxSizing: 'border-box', flex: '1 0 0%', flexShrink: 0, width: '100%', maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                            <div style={{boxSizing: 'border-box'}}>
                                <div style={{height: 'auto', visibility: 'visible', opacity: 1, overflow: 'visible', display: 'block', maxWidth: '100%', boxSizing: 'border-box', transition: 'opacity 0.15s linear 0s'}}>
                                    <div style={{marginBottom: '-30px', bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                        <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309"
                                                type="Cameras"
                                                name="Pi-Cam"
                                                cost="&#8377;159"
                                            />

                                        </div>
                                        <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://png.pngtree.com/png-clipart/20220616/original/pngtree-raspberry-pi-3-model-b-png-image_8090946.png"
                                                type="Chip"
                                                name="Raspberry PI"
                                                cost="&#8377;159"
                                            />

                                        </div> <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309"
                                                type="Cameras"
                                                name="Pi-Cam"
                                                cost="&#8377;159"
                                            />

                                        </div> <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://cdn.pixabay.com/photo/2020/05/01/14/52/soldering-5117508_960_720.png"
                                                type="Cameras"
                                                name="Pi-Cam"
                                                cost="&#8377;159"
                                            />

                                        </div> <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://www.electroncomponents.com/image/cache/catalog/MISC/solder/soldering_wire-500x500.png"
                                                type="Cameras"
                                                name="Pi-Cam"
                                                cost="&#8377;159"
                                            />

                                        </div> <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://www.pngmart.com/files/6/Electric-Motor-PNG-Photos.png"
                                                type="Cameras"
                                                name="Pi-Cam"
                                                cost="&#8377;159"
                                            />

                                        </div> <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://ci6.googleusercontent.com/proxy/sqt79k5ozNV-G6pdk3wf-CaoJvyz02KdlqEU4c2Jwz2PEOtATZV469HpC2ZzHS4wgxqsEJ4drXyGd9EL5ZgIuYBdnxN9ifM091DeMyPAlQeQx1vtp5aVQES_HZ5ruhN1S0NVeR3U2l0LJNRcwNJbXF3lEFn0W56t=s0-d-e1-ft#https://probots.co.in/pub/media/catalog/product/cache/d8ddd0f9b0cd008b57085cd218b48832/2/n/2n3904.jpg"
                                                type="Cameras"
                                                name="Pi-Cam"
                                                cost="&#8377;159"
                                            />

                                        </div> <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arduino-uno-perspective-transparent.png/1200px-Arduino-uno-perspective-transparent.png"
                                                type="Cameras"
                                                name="Pi-Cam"
                                                cost="&#8377;159"
                                            />

                                        </div> <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://ae01.alicdn.com/kf/HTB1VurISpXXXXajXFXXq6xXFXXXw.jpg_640x640Q90.jpg_.webp"
                                                type="Cameras"
                                                name="Pi-Cam"
                                                cost="&#8377;159"
                                            />

                                        </div> <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309"
                                                type="Cameras"
                                                name="Pi-Cam"
                                                cost="&#8377;159"
                                            />

                                        </div> <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309"
                                                type="Cameras"
                                                name="Pi-Cam"
                                                cost="&#8377;159"
                                            />

                                        </div> <div style={{flex: '0 0 auto', width: '33.3333%', marginBottom: '30px', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                            {/* Single Product */}
                                            <Card
                                                discount="SALE"
                                                image="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309"
                                                type="Cameras"
                                                name="Pi-Cam"
                                                cost="&#8377;159"
                                            />

                                        </div>
                                    </div>
                                </div>
                                <div style={{display: 'block', overflow: 'hidden', height: '0px', visibility: 'hidden', maxWidth: '100%', opacity: 0, marginBottom: '-30px', boxSizing: 'border-box', transition: 'opacity 0.15s linear 0s'}}>
                                    <div style={{marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/1.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/1.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                            <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Modern Smart Phone</a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '50px', marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/2.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/2.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                            <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-10%</span> <span style={{backgroundColor: 'rgb(0, 0, 0)', marginTop: '12px', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Bluetooth Headphone </a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>$48.50</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '50px', marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/3.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/3.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                            <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>Sale</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Smart Music Box</a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '50px', marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/4.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/4.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                            <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Air Pods 25Hjkl Black</a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '50px', marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/5.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/6.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Smart Hand Watch</a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '50px', marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/7.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/7.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                            <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-10%</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Smart Table Camera</a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>$48.50</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '50px', marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/8.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/8.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Round Pocket Router</a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '50px', marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/1.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/1.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                            <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-10%</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Power Bank 10000Mhp</a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>$48.50</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '50px', marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/2.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/1.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Power Bank 10000Mhp</a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>$58.50</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '50px', marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/3.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/3.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                            <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Modern Smart Phone</a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '50px', marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/4.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/5.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                            <span style={{backgroundColor: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>Sale</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Bluetooth Headphone </a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '50px', marginBottom: '30px', boxSizing: 'border-box'}}>
                                        <div style={{bsGutterX: '30px', boxSizing: 'border-box', bsGutterY: 0, display: 'flex', flexWrap: 'wrap', marginTop: '0px', marginRight: '-15px', marginLeft: '-15px'}}>
                                            <div style={{flex: '0 0 auto', width: '33.3333%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{position: 'relative', borderWidth: '1.6px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderColor: 'rgb(225, 225, 225)', borderStyle: 'solid', borderRadius: '13px', padding: '5px', marginBottom: '0px', transition: 'all 0.3s ease 0s', zIndex: 0, boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', overflow: 'hidden', boxSizing: 'border-box'}}>
                                                        <a href="/single-product" style={{position: 'relative', display: 'block', overflow: 'hidden', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(58, 58, 58)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(58, 58, 58)', boxSizing: 'border-box', color: 'rgb(58, 58, 58)'}}>
                                                            <img src="assets/images/product-image/6.webp" alt="Product" style={{zIndex: 1, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> <img src="assets/images/product-image/7.webp" alt="Product" style={{position: 'absolute', zIndex: 2, top: '0px', left: '0px', opacity: 0, maxWidth: '100%', transition: 'all 0.3s ease 0s', width: '100%', boxSizing: 'border-box', verticalAlign: 'middle'}} /> </a> <span style={{position: 'absolute', top: '15px', left: '15px', zIndex: 1, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', boxSizing: 'border-box'}}>
                                                            <span style={{background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>-10%</span> <span style={{backgroundColor: 'rgb(0, 0, 0)', marginTop: '12px', fontSize: '14px', lineHeight: '24.5px', display: 'block', padding: '0px 12px', textAlign: 'center', textTransform: 'uppercase', borderRadius: '5px', color: 'rgb(255, 255, 255)', fontWeight: 600, boxSizing: 'border-box'}}>New</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{flex: '0 0 auto', width: '66.6667%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                                                <div style={{boxSizing: 'border-box'}}>
                                                    <div style={{position: 'relative', zIndex: 10, display: 'flex', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', flexDirection: 'column', transition: 'all 0.3s ease 0s', backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                                                        <span style={{boxSizing: 'border-box'}}><a href="#" style={{fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 500, transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(102, 102, 102)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(102, 102, 102)', boxSizing: 'border-box'}}>Accessories</a></span>
                                                        <h5 style={{margin: '0px 0px 15px', fontFamily: 'Poppins, sans-serif', color: 'rgb(0, 0, 0)', boxSizing: 'border-box', fontSize: '18.75px', marginTop: '0px', marginBottom: '15px', fontWeight: 500, lineHeight: '22.5px'}}><a href="/single-product" style={{textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '18px', fontWeight: 600, transition: 'all 0.3s ease 0s', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 0)', boxSizing: 'border-box'}}>Smart Music Box</a></h5>
                                                        <p style={{lineHeight: '27.2px', marginBottom: '0px', margin: '0px', boxSizing: 'border-box', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                            exercitation ullamco laboris </p>
                                                    </div>
                                                    <div style={{marginTop: '10px', boxSizing: 'border-box'}}>
                                                        <span style={{fontSize: '18px', fontFamily: 'Poppins, sans-serif', lineHeight: '18px', fontWeight: 500, color: 'rgb(102, 102, 102)', marginBottom: '20px', display: 'inline-block', boxSizing: 'border-box'}}>
                                                            <span style={{marginRight: '15px', fontWeight: 300, textDecoration: 'line-through solid rgb(102, 102, 102)', position: 'relative', boxSizing: 'border-box'}}>$48.50</span> <span style={{fontWeight: 500, boxSizing: 'border-box'}}>$38.50</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* Tab Content Area End */}
                    {/*  Pagination Area Start */}
                    <div data-aos="fade-up" data-aos-delay="200" style={{textAlign: 'right', marginTop: '60px', boxSizing: 'border-box'}}>
                        <div style={{boxSizing: 'border-box'}}>
                            <ul style={{padding: '0px', margin: '0px', listStyle: 'outside none none', boxSizing: 'border-box', marginTop: '0px', marginBottom: '0px', paddingLeft: '0px'}}>
                                <li style={{display: 'inline-block', listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(134, 134, 135)', padding: '0px', height: '50px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', display: 'inline-block', width: '50px', borderRadius: '5px', textAlign: 'center', verticalAlign: 'top', fontSize: '18px', transition: 'all 0.3s ease 0s', borderColor: 'rgb(225, 225, 225)', fontWeight: 600, lineHeight: '50px', outline: 'rgb(134, 134, 135) none 0px', borderWidth: '1.6px', borderStyle: 'solid', textDecoration: 'none solid rgb(134, 134, 135)', backgroundColor: 'rgb(255, 255, 255)', border: '1.6px solid rgb(225, 225, 225)', boxSizing: 'border-box', position: 'relative'}}><i style={{boxSizing: 'border-box', display: 'inline-block', fontStyle: 'normal', fontVariant: 'normal', fontKerning: 'auto', fontOpticalSizing: 'auto', fontFeatureSettings: 'normal', fontVariationSettings: 'normal', fontWeight: 400, fontStretch: '100%', lineHeight: '18px', fontFamily: 'FontAwesome', fontSize: '18px', textRendering: 'auto', WebkitFontSmoothing: 'antialiased'}}></i></a> </li>
                                <li style={{marginLeft: '10px', display: 'inline-block', listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(38, 107, 249)', borderColor: 'rgb(38, 107, 249)', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', padding: '0px', height: '50px', display: 'inline-block', width: '50px', borderRadius: '5px', textAlign: 'center', verticalAlign: 'top', fontSize: '18px', transition: 'all 0.3s ease 0s', fontWeight: 600, lineHeight: '50px', outline: 'rgb(38, 107, 249) none 0px', borderWidth: '1.6px', borderStyle: 'solid', textDecoration: 'none solid rgb(38, 107, 249)', backgroundColor: 'rgb(255, 255, 255)', border: '1.6px solid rgb(38, 107, 249)', boxSizing: 'border-box', position: 'relative', zIndex: 3}}>1</a></li>
                                <li style={{marginLeft: '10px', display: 'inline-block', listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(134, 134, 135)', padding: '0px', height: '50px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', display: 'inline-block', width: '50px', borderRadius: '5px', textAlign: 'center', verticalAlign: 'top', fontSize: '18px', transition: 'all 0.3s ease 0s', borderColor: 'rgb(225, 225, 225)', fontWeight: 600, lineHeight: '50px', outline: 'rgb(134, 134, 135) none 0px', borderWidth: '1.6px', borderStyle: 'solid', textDecoration: 'none solid rgb(134, 134, 135)', backgroundColor: 'rgb(255, 255, 255)', border: '1.6px solid rgb(225, 225, 225)', boxSizing: 'border-box', position: 'relative'}}>2</a></li>
                                <li style={{marginLeft: '10px', display: 'inline-block', listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(134, 134, 135)', padding: '0px', height: '50px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', display: 'inline-block', width: '50px', borderRadius: '5px', textAlign: 'center', verticalAlign: 'top', fontSize: '18px', transition: 'all 0.3s ease 0s', borderColor: 'rgb(225, 225, 225)', fontWeight: 600, lineHeight: '50px', outline: 'rgb(134, 134, 135) none 0px', borderWidth: '1.6px', borderStyle: 'solid', textDecoration: 'none solid rgb(134, 134, 135)', backgroundColor: 'rgb(255, 255, 255)', border: '1.6px solid rgb(225, 225, 225)', boxSizing: 'border-box', position: 'relative'}}>3</a></li>
                                <li style={{marginLeft: '10px', display: 'inline-block', listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(134, 134, 135)', padding: '0px', height: '50px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', display: 'inline-block', width: '50px', borderRadius: '5px', textAlign: 'center', verticalAlign: 'top', fontSize: '18px', transition: 'all 0.3s ease 0s', borderColor: 'rgb(225, 225, 225)', fontWeight: 600, lineHeight: '50px', outline: 'rgb(134, 134, 135) none 0px', borderWidth: '1.6px', borderStyle: 'solid', textDecoration: 'none solid rgb(134, 134, 135)', backgroundColor: 'rgb(255, 255, 255)', border: '1.6px solid rgb(225, 225, 225)', boxSizing: 'border-box', position: 'relative'}}><i style={{boxSizing: 'border-box', display: 'inline-block', fontStyle: 'normal', fontVariant: 'normal', fontKerning: 'auto', fontOpticalSizing: 'auto', fontFeatureSettings: 'normal', fontVariationSettings: 'normal', fontWeight: 400, fontStretch: '100%', lineHeight: '18px', fontFamily: 'FontAwesome', fontSize: '18px', textRendering: 'auto', WebkitFontSmoothing: 'antialiased'}}></i></a> </li>
                            </ul>
                        </div>
                    </div> {/*  Pagination Area End */}
                </div> {/* Shop Bottom Area End */}
            </div> {/* Sidebar Area Start */}
            <div style={{order: -1, flex: '0 0 auto', width: '25%', boxSizing: 'border-box', flexShrink: 0, maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginTop: '0px'}}>
                <div style={{border: '1.6px solid rgb(225, 225, 225)', borderRadius: '5px', padding: '10px 30px 40px', boxSizing: 'border-box'}}>
                    {/* Sidebar single item */}
                    <div style={{boxSizing: 'border-box'}}>
                        <h4 style={{fontSize: '18px', display: 'block', textTransform: 'capitalize', fontWeight: 600, color: 'rgb(83, 83, 83)', position: 'relative', margin: '35px 0px 20px', padding: '0px 0px 20px', fontFamily: 'Poppins, sans-serif', boxSizing: 'border-box', marginTop: '35px', marginBottom: '20px', lineHeight: '21.6px'}}>Top Categories</h4>
                        <div style={{boxSizing: 'border-box'}}>
                            <ul style={{padding: '0px', margin: '0px', listStyle: 'outside none none', boxSizing: 'border-box', marginTop: '0px', marginBottom: '0px', paddingLeft: '0px'}}>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '0px', fontWeight: 300, lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box', margin: '0px'}}> All
                                        <span style={{boxSizing: 'border-box'}}>(65)</span> </a></li>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '10px', fontWeight: 300, lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box'}}> E Chips
                                        <span style={{boxSizing: 'border-box'}}>(12)</span> </a></li>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '10px', fontWeight: 300, lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box'}}> Dev Boards
                                        <span style={{boxSizing: 'border-box'}}>(22)</span> </a></li>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '10px', fontWeight: 300, lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box'}}> Batteries
                                        <span style={{boxSizing: 'border-box'}}>(19)</span> </a></li>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '10px', fontWeight: 300, lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box'}}> Sensors
                                        <span style={{boxSizing: 'border-box'}}>(17)</span> </a></li>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '10px', fontWeight: 300, lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box'}}> Resistors
                                        <span style={{boxSizing: 'border-box'}}>(7)</span> </a></li>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '10px', fontWeight: 300, lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box'}}> Diodes
                                        <span style={{boxSizing: 'border-box'}}>(9)</span> </a></li>
                            </ul>
                        </div>
                    </div> {/* Sidebar single item */}
                    <div style={{boxSizing: 'border-box'}}>
                        <h4 style={{fontSize: '18px', display: 'block', textTransform: 'capitalize', fontWeight: 600, color: 'rgb(83, 83, 83)', position: 'relative', margin: '35px 0px 20px', padding: '0px 0px 20px', fontFamily: 'Poppins, sans-serif', boxSizing: 'border-box', marginTop: '35px', marginBottom: '20px', lineHeight: '21.6px'}}>Price Filter</h4>
                        <div style={{margin: '0px 0px 50px', boxSizing: 'border-box'}}>
                            <div style={{boxSizing: 'border-box'}}>
                                <input type="text" name="price" placeholder="Add Your Price" style={{color: 'rgb(101, 101, 101)', fontSize: '16px', border: '0px none rgb(101, 101, 101)', display: 'inline-block', lineHeight: '16px', height: '24px', width: '100%', background: 'rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box', borderRadius: '0px', textAlign: 'left', boxShadow: 'none', paddingLeft: '0px', paddingRight: '0px', outline: 'rgb(101, 101, 101) none 0px', boxSizing: 'border-box', padding: '0px', margin: '0px', fontFamily: 'Poppins, sans-serif'}} />
                            </div>
                            <div style={{height: '3px', margin: '15px 0px 0px', border: '0px solid rgb(38, 107, 249)', backgroundColor: 'rgb(225, 225, 225)', boxSizing: 'border-box', borderBottomRightRadius: '3px', borderBottomLeftRadius: '3px', borderTopRightRadius: '3px', borderTopLeftRadius: '3px', background: 'rgb(225, 225, 225) none repeat scroll 0% 0% / auto padding-box border-box', color: 'rgb(51, 51, 51)', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '16px', position: 'relative', textAlign: 'left'}}>
                                <div style={{left: '20%', width: '60%', background: 'rgb(38, 107, 249) none repeat scroll 0% 0% / auto padding-box border-box', height: '3px', boxSizing: 'border-box', borderBottomRightRadius: '3px', borderBottomLeftRadius: '3px', borderTopRightRadius: '3px', borderTopLeftRadius: '3px', border: '0px none rgb(51, 51, 51)', color: 'rgb(51, 51, 51)', fontWeight: 700, top: '0px', position: 'absolute', zIndex: 1, fontSize: '11.2px', display: 'block', backgroundPosition: '0% 0%'}}></div><span tabIndex="0" style={{left: '20%', top: '1.5px', width: '16px', height: '16px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRadius: '100%', outline: 'rgb(69, 69, 69) none 0px', marginTop: '-8px', border: '4.8px solid rgb(38, 107, 249)', cursor: 'pointer', transition: 'all 0.3s ease 0s', boxSizing: 'border-box', borderBottomRightRadius: '100%', borderBottomLeftRadius: '100%', borderTopRightRadius: '100%', borderTopLeftRadius: '100%', fontWeight: 400, color: 'rgb(69, 69, 69)', marginLeft: '-9.48308px', position: 'absolute', zIndex: 2, touchAction: 'none'}}></span><span tabIndex="0" style={{left: '80%', top: '1.5px', width: '16px', height: '16px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRadius: '100%', outline: 'rgb(69, 69, 69) none 0px', marginTop: '-8px', border: '4.8px solid rgb(38, 107, 249)', cursor: 'pointer', transition: 'all 0.3s ease 0s', boxSizing: 'border-box', borderBottomRightRadius: '100%', borderBottomLeftRadius: '100%', borderTopRightRadius: '100%', borderTopLeftRadius: '100%', fontWeight: 400, color: 'rgb(69, 69, 69)', marginLeft: '-9.48308px', position: 'absolute', zIndex: 2, touchAction: 'none'}}></span>
                            </div>
                        </div>
                    </div> {/* Sidebar single item */}
                    <div style={{boxSizing: 'border-box'}}>
                        <h4 style={{fontSize: '18px', display: 'block', textTransform: 'capitalize', fontWeight: 600, color: 'rgb(83, 83, 83)', position: 'relative', margin: '35px 0px 20px', padding: '0px 0px 20px', fontFamily: 'Poppins, sans-serif', boxSizing: 'border-box', marginTop: '35px', marginBottom: '20px', lineHeight: '21.6px'}}>Brands</h4>
                        <div style={{boxSizing: 'border-box'}}>
                            <ul style={{padding: '0px', margin: '0px', listStyle: 'outside none none', boxSizing: 'border-box', marginTop: '0px', marginBottom: '0px', paddingLeft: '0px'}}>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{fontWeight: 500, color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '0px', lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box', margin: '0px'}}> Lakmeeto<span style={{boxSizing: 'border-box'}}>(65)</span> </a></li>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{fontWeight: 500, color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '10px', lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box'}}> Beautifill <span style={{boxSizing: 'border-box'}}>(14)</span></a></li>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{fontWeight: 500, color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '10px', lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box'}}> Made In GD <span style={{boxSizing: 'border-box'}}>(21)</span></a></li>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{fontWeight: 500, color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '10px', lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box'}}> Pecifico <span style={{boxSizing: 'border-box'}}>(16)</span></a></li>
                                <li style={{listStyle: 'outside none none', boxSizing: 'border-box'}}><a href="#" style={{fontWeight: 500, color: 'rgb(138, 138, 138)', fontSize: '16px', display: 'inline-block', marginTop: '10px', lineHeight: '16px', transition: 'all 0.3s ease 0s', textDecoration: 'none solid rgb(138, 138, 138)', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(138, 138, 138)', boxSizing: 'border-box'}}> Xlovgtir<span style={{boxSizing: 'border-box'}}>(12)</span></a></li>
                            </ul>
                        </div>
                    </div> {/* Sidebar single item */}
                </div>
            </div>
        </div>
    </div>
</div>
</>
    );
}

export default Shop;