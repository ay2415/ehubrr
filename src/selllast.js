import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
 function SellLast(){
     return(
        <>
      <form
        id="post_form"
        name="myform"
        action="https://freead1.net/adbi.php"
        encType="multipart/form-data"
        method="post"
        noValidate="novalidate"
        style={{ boxSizing: "border-box" }}
      >
        <div
          id="post-box"
          style={{
            boxSizing: "border-box",
            margin: "20px auto",
            padding: "20px",
            border: "1px solid rgb(204, 204, 204)",
            maxWidth: "600px",
            backgroundColor: "rgb(249, 249, 249)",
          }}
        >
          <div
            className="overflow"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              marginBottom: "15px",
            }}
          >
            <div
              style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}
            >
              {" "}
              <label
                htmlFor="post-title"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Title
              </label>{" "}
              <input
                id="post-title"
                name="title"
                maxLength="200"
                style={{
                  fontFamily: "inherit",
                  background: "0px 0px",
                  outline: "0px",
                  display: "inline-block",
                  lineHeight: "50px",
                  height: "50px",
                  fontSize: "15px",
                  textAlign: "left",
                  boxShadow: "none",
                  margin: "0px",
                  boxSizing: "border-box",
                  padding: "8px",
                  border: "1px solid rgb(204, 204, 204)",
                  borderRadius: "4px",
                  width: "100%",
                  paddingRight: "8px",
                  paddingLeft: "8px",
                  marginBottom: "10px",
                }}
              />{" "}
            </div>
            <div
              className="error_wrapper"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                color: "red",
                marginTop: "5px",
              }}
            >
              {" "}
            </div>
          </div>
          <div
            className="overflow"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              marginBottom: "15px",
            }}
          >
            <div
              style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}
            >
              {" "}
              <label
                htmlFor="post-desc"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                {" "}
                Description
              </label>{" "}
              <textarea
                id="post-desc"
                name="text"
                cols={10}
                rows={10}
                style={{
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  resize: "vertical",
                  outline: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  padding: "8px",
                  border: "1px solid rgb(204, 204, 204)",
                  borderRadius: "4px",
                  width: "100%",
                  paddingTop: "8px",
                  paddingLeft: "8px",
                  marginBottom: "10px",
                }}
              />{" "}
            </div>
            <div
              className="error_wrapper"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                color: "red",
                marginTop: "5px",
              }}
            >
              {" "}
            </div>
          </div>
          <div
            className="clear"
            style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}
          />
          <div
            className="overflow"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              marginBottom: "15px",
            }}
          >
            <div
              className="error_wrapper"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                color: "red",
                marginTop: "5px",
              }}
            >
              {" "}
            </div>
          </div>
          <div
            className="overflow"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              marginBottom: "15px",
            }}
          >
            <div
              style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}
            >
              {" "}
              <label
                className="additional"
                htmlFor="CountryID"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "5px",
                  fontStyle: "italic",
                  marginTop: "5px",
                }}
              >
                Country *
              </label>
              <div
                className="select-post-box"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  padding: "8px",
                  border: "1px solid rgb(204, 204, 204)",
                  borderRadius: "4px",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                {" "}
                <select
                  id="CountryID"
                  name="country"
                  style={{
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    textTransform: "none",
                    overflowWrap: "normal",
                    margin: "0px",
                    boxSizing: "border-box",
                    padding: "8px",
                    border: "1px solid rgb(204, 204, 204)",
                    borderRadius: "4px",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  <option style={{ boxSizing: "border-box" }}>
                    -- choose --
                  </option>{" "}
                  <option value="78" style={{ boxSizing: "border-box" }}>
                    Afghanistan
                  </option>{" "}
                  <option value="139" style={{ boxSizing: "border-box" }}>
                    Albania
                  </option>{" "}
                  <option value="59" style={{ boxSizing: "border-box" }}>
                    Algeria
                  </option>{" "}
                  <option value="181" style={{ boxSizing: "border-box" }}>
                    Andorra
                  </option>{" "}
                  <option value="88" style={{ boxSizing: "border-box" }}>
                    Angola
                  </option>{" "}
                  <option value="1" style={{ boxSizing: "border-box" }}>
                    Argentina
                  </option>{" "}
                  <option value="137" style={{ boxSizing: "border-box" }}>
                    Armenia
                  </option>{" "}
                  <option value="2" style={{ boxSizing: "border-box" }}>
                    Australia
                  </option>{" "}
                  <option value="3" style={{ boxSizing: "border-box" }}>
                    Austria
                  </option>{" "}
                  <option value="70" style={{ boxSizing: "border-box" }}>
                    Azerbaijan
                  </option>{" "}
                  <option value="173" style={{ boxSizing: "border-box" }}>
                    Bahamas
                  </option>{" "}
                  <option value="72" style={{ boxSizing: "border-box" }}>
                    Bahrain
                  </option>{" "}
                  <option value="73" style={{ boxSizing: "border-box" }}>
                    Bangladesh
                  </option>{" "}
                  <option value="177" style={{ boxSizing: "border-box" }}>
                    Barbados
                  </option>{" "}
                  <option value="68" style={{ boxSizing: "border-box" }}>
                    Belarus
                  </option>{" "}
                  <option value="4" style={{ boxSizing: "border-box" }}>
                    Belgium
                  </option>{" "}
                  <option value="174" style={{ boxSizing: "border-box" }}>
                    Belize
                  </option>{" "}
                  <option value="106" style={{ boxSizing: "border-box" }}>
                    Benin
                  </option>{" "}
                  <option value="163" style={{ boxSizing: "border-box" }}>
                    Bhutan
                  </option>{" "}
                  <option value="64" style={{ boxSizing: "border-box" }}>
                    Bolivia
                  </option>{" "}
                  <option value="131" style={{ boxSizing: "border-box" }}>
                    Bosnia and Herzegovina
                  </option>{" "}
                  <option value="149" style={{ boxSizing: "border-box" }}>
                    Botswana
                  </option>{" "}
                  <option value="5" style={{ boxSizing: "border-box" }}>
                    Brazil
                  </option>{" "}
                  <option value="172" style={{ boxSizing: "border-box" }}>
                    Brunei
                  </option>{" "}
                  <option value="6" style={{ boxSizing: "border-box" }}>
                    Bulgaria
                  </option>{" "}
                  <option value="89" style={{ boxSizing: "border-box" }}>
                    Burkina Faso
                  </option>{" "}
                  <option value="76" style={{ boxSizing: "border-box" }}>
                    Burma
                  </option>{" "}
                  <option value="107" style={{ boxSizing: "border-box" }}>
                    Burundi
                  </option>{" "}
                  <option value="92" style={{ boxSizing: "border-box" }}>
                    Cambodia
                  </option>{" "}
                  <option value="71" style={{ boxSizing: "border-box" }}>
                    Cameroon
                  </option>{" "}
                  <option value="7" style={{ boxSizing: "border-box" }}>
                    Canada
                  </option>{" "}
                  <option value="170" style={{ boxSizing: "border-box" }}>
                    Cape Verde
                  </option>{" "}
                  <option value="125" style={{ boxSizing: "border-box" }}>
                    Central African Rep.
                  </option>{" "}
                  <option value="97" style={{ boxSizing: "border-box" }}>
                    Chad
                  </option>{" "}
                  <option value="8" style={{ boxSizing: "border-box" }}>
                    Chile
                  </option>{" "}
                  <option value="9" style={{ boxSizing: "border-box" }}>
                    China
                  </option>{" "}
                  <option value="60" style={{ boxSizing: "border-box" }}>
                    Colombia
                  </option>{" "}
                  <option value="165" style={{ boxSizing: "border-box" }}>
                    Comoros
                  </option>{" "}
                  <option value="124" style={{ boxSizing: "border-box" }}>
                    Costa Rica
                  </option>{" "}
                  <option value="84" style={{ boxSizing: "border-box" }}>
                    Cote dIvoire
                  </option>{" "}
                  <option value="127" style={{ boxSizing: "border-box" }}>
                    Croatia
                  </option>{" "}
                  <option value="44" style={{ boxSizing: "border-box" }}>
                    Cuba
                  </option>{" "}
                  <option value="161" style={{ boxSizing: "border-box" }}>
                    Cyprus
                  </option>{" "}
                  <option value="98" style={{ boxSizing: "border-box" }}>
                    Czech Republic
                  </option>{" "}
                  <option value="101" style={{ boxSizing: "border-box" }}>
                    Dem. Rep. of Congo
                  </option>{" "}
                  <option value="10" style={{ boxSizing: "border-box" }}>
                    Denmark
                  </option>{" "}
                  <option value="159" style={{ boxSizing: "border-box" }}>
                    Djibouti
                  </option>{" "}
                  <option value="63" style={{ boxSizing: "border-box" }}>
                    Dominican Republic
                  </option>{" "}
                  <option value="158" style={{ boxSizing: "border-box" }}>
                    East Timor
                  </option>{" "}
                  <option value="52" style={{ boxSizing: "border-box" }}>
                    Ecuador
                  </option>{" "}
                  <option value="11" style={{ boxSizing: "border-box" }}>
                    Egypt
                  </option>{" "}
                  <option value="117" style={{ boxSizing: "border-box" }}>
                    El Salvador
                  </option>{" "}
                  <option value="164" style={{ boxSizing: "border-box" }}>
                    Equatorial Guinea
                  </option>{" "}
                  <option value="122" style={{ boxSizing: "border-box" }}>
                    Eritrea
                  </option>{" "}
                  <option value="154" style={{ boxSizing: "border-box" }}>
                    Estonia
                  </option>{" "}
                  <option value="47" style={{ boxSizing: "border-box" }}>
                    Ethiopia
                  </option>{" "}
                  <option value="160" style={{ boxSizing: "border-box" }}>
                    Fiji
                  </option>{" "}
                  <option value="12" style={{ boxSizing: "border-box" }}>
                    Finland
                  </option>{" "}
                  <option value="13" style={{ boxSizing: "border-box" }}>
                    France
                  </option>{" "}
                  <option value="153" style={{ boxSizing: "border-box" }}>
                    Gabon
                  </option>{" "}
                  <option value="150" style={{ boxSizing: "border-box" }}>
                    Gambia
                  </option>{" "}
                  <option value="126" style={{ boxSizing: "border-box" }}>
                    Georgia
                  </option>{" "}
                  <option value="14" style={{ boxSizing: "border-box" }}>
                    Germany
                  </option>{" "}
                  <option value="62" style={{ boxSizing: "border-box" }}>
                    Ghana
                  </option>{" "}
                  <option value="15" style={{ boxSizing: "border-box" }}>
                    Greece
                  </option>{" "}
                  <option value="180" style={{ boxSizing: "border-box" }}>
                    Guam
                  </option>{" "}
                  <option value="45" style={{ boxSizing: "border-box" }}>
                    Guatemala
                  </option>{" "}
                  <option value="100" style={{ boxSizing: "border-box" }}>
                    Guinea
                  </option>{" "}
                  <option value="152" style={{ boxSizing: "border-box" }}>
                    Guinea-Bissau
                  </option>{" "}
                  <option value="162" style={{ boxSizing: "border-box" }}>
                    Guyana
                  </option>{" "}
                  <option value="104" style={{ boxSizing: "border-box" }}>
                    Haiti
                  </option>{" "}
                  <option value="108" style={{ boxSizing: "border-box" }}>
                    Honduras
                  </option>{" "}
                  <option value="111" style={{ boxSizing: "border-box" }}>
                    Hong Kong
                  </option>{" "}
                  <option value="16" style={{ boxSizing: "border-box" }}>
                    Hungary
                  </option>{" "}
                  <option value="175" style={{ boxSizing: "border-box" }}>
                    Iceland
                  </option>{" "}
                  <option value="17" style={{ boxSizing: "border-box" }}>
                    India
                  </option>{" "}
                  <option value="53" style={{ boxSizing: "border-box" }}>
                    Indonesia
                  </option>{" "}
                  <option value="75" style={{ boxSizing: "border-box" }}>
                    Iran
                  </option>{" "}
                  <option value="77" style={{ boxSizing: "border-box" }}>
                    Iraq
                  </option>{" "}
                  <option value="18" style={{ boxSizing: "border-box" }}>
                    Ireland
                  </option>{" "}
                  <option value="19" style={{ boxSizing: "border-box" }}>
                    Israel
                  </option>{" "}
                  <option value="20" style={{ boxSizing: "border-box" }}>
                    Italy
                  </option>{" "}
                  <option value="142" style={{ boxSizing: "border-box" }}>
                    Jamaica
                  </option>{" "}
                  <option value="21" style={{ boxSizing: "border-box" }}>
                    Japan
                  </option>{" "}
                  <option value="115" style={{ boxSizing: "border-box" }}>
                    Jordan
                  </option>{" "}
                  <option value="69" style={{ boxSizing: "border-box" }}>
                    Kazakhstan
                  </option>{" "}
                  <option value="57" style={{ boxSizing: "border-box" }}>
                    Kenya
                  </option>{" "}
                  <option value="140" style={{ boxSizing: "border-box" }}>
                    Kuwait
                  </option>{" "}
                  <option value="121" style={{ boxSizing: "border-box" }}>
                    Kyrgyzstan
                  </option>{" "}
                  <option value="116" style={{ boxSizing: "border-box" }}>
                    Laos
                  </option>{" "}
                  <option value="144" style={{ boxSizing: "border-box" }}>
                    Latvia
                  </option>{" "}
                  <option value="128" style={{ boxSizing: "border-box" }}>
                    Lebanon
                  </option>{" "}
                  <option value="146" style={{ boxSizing: "border-box" }}>
                    Lesotho
                  </option>{" "}
                  <option value="129" style={{ boxSizing: "border-box" }}>
                    Liberia
                  </option>{" "}
                  <option value="114" style={{ boxSizing: "border-box" }}>
                    Libya
                  </option>{" "}
                  <option value="138" style={{ boxSizing: "border-box" }}>
                    Lithuania
                  </option>{" "}
                  <option value="56" style={{ boxSizing: "border-box" }}>
                    Luxembourg
                  </option>{" "}
                  <option value="147" style={{ boxSizing: "border-box" }}>
                    Macedonia
                  </option>{" "}
                  <option value="87" style={{ boxSizing: "border-box" }}>
                    Madagascar
                  </option>{" "}
                  <option value="91" style={{ boxSizing: "border-box" }}>
                    Malawi
                  </option>{" "}
                  <option value="23" style={{ boxSizing: "border-box" }}>
                    Malaysia
                  </option>{" "}
                  <option value="176" style={{ boxSizing: "border-box" }}>
                    Maldives
                  </option>{" "}
                  <option value="93" style={{ boxSizing: "border-box" }}>
                    Mali
                  </option>{" "}
                  <option value="171" style={{ boxSizing: "border-box" }}>
                    Malta
                  </option>{" "}
                  <option value="135" style={{ boxSizing: "border-box" }}>
                    Mauritania
                  </option>{" "}
                  <option value="156" style={{ boxSizing: "border-box" }}>
                    Mauritius
                  </option>{" "}
                  <option value="24" style={{ boxSizing: "border-box" }}>
                    Mexico
                  </option>{" "}
                  <option value="133" style={{ boxSizing: "border-box" }}>
                    Moldova
                  </option>{" "}
                  <option value="141" style={{ boxSizing: "border-box" }}>
                    Mongolia
                  </option>{" "}
                  <option value="166" style={{ boxSizing: "border-box" }}>
                    Montenegro
                  </option>{" "}
                  <option value="58" style={{ boxSizing: "border-box" }}>
                    Morocco
                  </option>{" "}
                  <option value="86" style={{ boxSizing: "border-box" }}>
                    Mozambique
                  </option>{" "}
                  <option value="145" style={{ boxSizing: "border-box" }}>
                    Namibia
                  </option>{" "}
                  <option value="79" style={{ boxSizing: "border-box" }}>
                    Nepal
                  </option>{" "}
                  <option value="25" style={{ boxSizing: "border-box" }}>
                    Netherlands
                  </option>{" "}
                  <option value="26" style={{ boxSizing: "border-box" }}>
                    New Zealand
                  </option>{" "}
                  <option value="119" style={{ boxSizing: "border-box" }}>
                    Nicaragua
                  </option>{" "}
                  <option value="90" style={{ boxSizing: "border-box" }}>
                    Niger
                  </option>{" "}
                  <option value="46" style={{ boxSizing: "border-box" }}>
                    Nigeria
                  </option>{" "}
                  <option value="102" style={{ boxSizing: "border-box" }}>
                    North Korea
                  </option>{" "}
                  <option value="27" style={{ boxSizing: "border-box" }}>
                    Norway
                  </option>{" "}
                  <option value="143" style={{ boxSizing: "border-box" }}>
                    Oman
                  </option>{" "}
                  <option value="28" style={{ boxSizing: "border-box" }}>
                    Pakistan
                  </option>{" "}
                  <option value="130" style={{ boxSizing: "border-box" }}>
                    Palestine
                  </option>{" "}
                  <option value="134" style={{ boxSizing: "border-box" }}>
                    Panama
                  </option>{" "}
                  <option value="112" style={{ boxSizing: "border-box" }}>
                    Papua New Guinea
                  </option>{" "}
                  <option value="67" style={{ boxSizing: "border-box" }}>
                    Paraguay
                  </option>{" "}
                  <option value="29" style={{ boxSizing: "border-box" }}>
                    Peru
                  </option>{" "}
                  <option value="54" style={{ boxSizing: "border-box" }}>
                    Philippines
                  </option>{" "}
                  <option value="30" style={{ boxSizing: "border-box" }}>
                    Poland
                  </option>{" "}
                  <option value="31" style={{ boxSizing: "border-box" }}>
                    Portugal
                  </option>{" "}
                  <option value="132" style={{ boxSizing: "border-box" }}>
                    Puerto Rico
                  </option>{" "}
                  <option value="151" style={{ boxSizing: "border-box" }}>
                    Qatar
                  </option>{" "}
                  <option value="48" style={{ boxSizing: "border-box" }}>
                    Rep. of the Congo
                  </option>{" "}
                  <option value="65" style={{ boxSizing: "border-box" }}>
                    Romania
                  </option>{" "}
                  <option value="32" style={{ boxSizing: "border-box" }}>
                    Russia
                  </option>{" "}
                  <option value="103" style={{ boxSizing: "border-box" }}>
                    Rwanda
                  </option>{" "}
                  <option value="179" style={{ boxSizing: "border-box" }}>
                    Samoa
                  </option>{" "}
                  <option value="81" style={{ boxSizing: "border-box" }}>
                    Saudi Arabia
                  </option>{" "}
                  <option value="95" style={{ boxSizing: "border-box" }}>
                    Senegal
                  </option>{" "}
                  <option value="109" style={{ boxSizing: "border-box" }}>
                    Serbia
                  </option>{" "}
                  <option value="118" style={{ boxSizing: "border-box" }}>
                    Sierra Leone
                  </option>{" "}
                  <option value="33" style={{ boxSizing: "border-box" }}>
                    Singapore
                  </option>{" "}
                  <option value="120" style={{ boxSizing: "border-box" }}>
                    Slovakia
                  </option>{" "}
                  <option value="148" style={{ boxSizing: "border-box" }}>
                    Slovenia
                  </option>{" "}
                  <option value="167" style={{ boxSizing: "border-box" }}>
                    Solomon Islands
                  </option>{" "}
                  <option value="105" style={{ boxSizing: "border-box" }}>
                    Somalia
                  </option>{" "}
                  <option value="49" style={{ boxSizing: "border-box" }}>
                    South Africa
                  </option>{" "}
                  <option value="22" style={{ boxSizing: "border-box" }}>
                    South Korea
                  </option>{" "}
                  <option value="34" style={{ boxSizing: "border-box" }}>
                    Spain
                  </option>{" "}
                  <option value="85" style={{ boxSizing: "border-box" }}>
                    Sri Lanka
                  </option>{" "}
                  <option value="50" style={{ boxSizing: "border-box" }}>
                    Sudan
                  </option>{" "}
                  <option value="169" style={{ boxSizing: "border-box" }}>
                    Suriname
                  </option>{" "}
                  <option value="157" style={{ boxSizing: "border-box" }}>
                    Swaziland
                  </option>{" "}
                  <option value="35" style={{ boxSizing: "border-box" }}>
                    Sweden
                  </option>{" "}
                  <option value="36" style={{ boxSizing: "border-box" }}>
                    Switzerland
                  </option>{" "}
                  <option value="83" style={{ boxSizing: "border-box" }}>
                    Syria
                  </option>{" "}
                  <option value="37" style={{ boxSizing: "border-box" }}>
                    Taiwan
                  </option>{" "}
                  <option value="110" style={{ boxSizing: "border-box" }}>
                    Tajikistan
                  </option>{" "}
                  <option value="51" style={{ boxSizing: "border-box" }}>
                    Tanzania
                  </option>{" "}
                  <option value="38" style={{ boxSizing: "border-box" }}>
                    Thailand
                  </option>{" "}
                  <option value="113" style={{ boxSizing: "border-box" }}>
                    Togo
                  </option>{" "}
                  <option value="155" style={{ boxSizing: "border-box" }}>
                    Trinidad and Tobago
                  </option>{" "}
                  <option value="99" style={{ boxSizing: "border-box" }}>
                    Tunisia
                  </option>{" "}
                  <option value="39" style={{ boxSizing: "border-box" }}>
                    Turkey
                  </option>{" "}
                  <option value="123" style={{ boxSizing: "border-box" }}>
                    Turkmenistan
                  </option>{" "}
                  <option value="40" style={{ boxSizing: "border-box" }}>
                    UAE
                  </option>{" "}
                  <option value="61" style={{ boxSizing: "border-box" }}>
                    Uganda
                  </option>{" "}
                  <option value="41" style={{ boxSizing: "border-box" }}>
                    UK
                  </option>{" "}
                  <option value="66" style={{ boxSizing: "border-box" }}>
                    Ukraine
                  </option>{" "}
                  <option value="136" style={{ boxSizing: "border-box" }}>
                    Uruguay
                  </option>{" "}
                  <option value="42" style={{ boxSizing: "border-box" }}>
                    USA
                  </option>{" "}
                  <option value="80" style={{ boxSizing: "border-box" }}>
                    Uzbekistan
                  </option>{" "}
                  <option value="178" style={{ boxSizing: "border-box" }}>
                    Vanuatu
                  </option>{" "}
                  <option value="55" style={{ boxSizing: "border-box" }}>
                    Venezuela
                  </option>{" "}
                  <option value="74" style={{ boxSizing: "border-box" }}>
                    Vietnam
                  </option>{" "}
                  <option value="168" style={{ boxSizing: "border-box" }}>
                    Western Sahara
                  </option>{" "}
                  <option value="82" style={{ boxSizing: "border-box" }}>
                    Yemen
                  </option>{" "}
                  <option value="94" style={{ boxSizing: "border-box" }}>
                    Zambia
                  </option>{" "}
                  <option value="96" style={{ boxSizing: "border-box" }}>
                    Zimbabwe
                  </option>{" "}
                </select>{" "}
              </div>
              <div
                className="error_wrapper"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  color: "red",
                  marginTop: "5px",
                }}
              >
                {" "}
              </div>
            </div>
          </div>
          <div
            className="overflow"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              marginBottom: "15px",
            }}
          >
            <div
              style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}
            >
              {" "}
              <label
                className="additional"
                htmlFor="StateID"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "5px",
                  fontStyle: "italic",
                  marginTop: "5px",
                }}
              >
                State
              </label>
              <div
                id="divStates"
                className="select-post-box"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  padding: "8px",
                  border: "1px solid rgb(204, 204, 204)",
                  borderRadius: "4px",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                {" "}
                <select
                  id="StateID"
                  name="state"
                  style={{
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    textTransform: "none",
                    overflowWrap: "normal",
                    margin: "0px",
                    boxSizing: "border-box",
                    padding: "8px",
                    border: "1px solid rgb(204, 204, 204)",
                    borderRadius: "4px",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                </select>{" "}
              </div>
              <div
                className="error_wrapper"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  color: "red",
                  marginTop: "5px",
                }}
              >
                {" "}
              </div>
            </div>
          </div>
          <div
            className="overflow"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              marginBottom: "15px",
            }}
          >
            {" "}
            <label
              className="additional"
              htmlFor="CityID"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
                fontStyle: "italic",
                marginTop: "5px",
              }}
            >
              City
            </label>
            <div
              id="divCities"
              className="select-post-box"
              style={{
                margin: "0px",
                boxSizing: "border-box",
                padding: "8px",
                border: "1px solid rgb(204, 204, 204)",
                borderRadius: "4px",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              {" "}
              <select
                id="CityID"
                name="city"
                size={1}
                style={{
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  textTransform: "none",
                  overflowWrap: "normal",
                  margin: "0px",
                  boxSizing: "border-box",
                  padding: "8px",
                  border: "1px solid rgb(204, 204, 204)",
                  borderRadius: "4px",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                <option value="3700" style={{ boxSizing: "border-box" }}>
                  --- All Cities ---
                </option>
              </select>{" "}
            </div>
            <div
              id="LoadingCities"
              className="hidden"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "none",
              }}
            >
              <img
                alt="loader"
                src="https://freead1.net/inc/images/ajax-loader.gif"
                style={{ boxSizing: "border-box", verticalAlign: "middle" }}
              />
            </div>
          </div>
          <div
            id="upload_pictures"
            style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}
          >
            <h4
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                marginBottom: "0.5rem",
                fontWeight: 500,
                lineHeight: 1.2,
                fontSize: "1.5rem",
                fontFamily: "Poppins, sans-serif",
                color: "rgb(0, 0, 0)",
              }}
            >
              upload pictures
            </h4>
            <div
              className="overflow"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                marginBottom: "15px",
              }}
            >
              <div
                id="file_1_exceeded"
                className="error_wrapper hidden"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  color: "red",
                  marginTop: "5px",
                }}
              >
                {" "}
                <span className="error" style={{ boxSizing: "border-box" }}>
                  {" "}
                  Allowed file size exceeded for Picture 1. (Max. 5 MB){" "}
                </span>{" "}
              </div>{" "}
              <label
                className="additional"
                htmlFor="file_1"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "5px",
                  fontStyle: "italic",
                  marginTop: "5px",
                }}
              >
                Picture 1
              </label>{" "}
              <input
                id="file_1"
                className="media_file"
                name="pic1"
                type="file"
                style={{
                  fontFamily: "inherit",
                  background: "0px 0px",
                  borderRadius: "0px",
                  outline: "0px",
                  display: "inline-block",
                  lineHeight: "50px",
                  height: "50px",
                  fontSize: "15px",
                  width: "100%",
                  textAlign: "left",
                  boxShadow: "none",
                  margin: "0px",
                  padding: "0px",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                  boxSizing: "border-box",
                  marginTop: "5px",
                }}
              />{" "}
            </div>
            <div
              className="overflow"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                marginBottom: "15px",
              }}
            >
              <div
                id="file_2_exceeded"
                className="error_wrapper hidden"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  color: "red",
                  marginTop: "5px",
                }}
              >
                {" "}
                <span className="error" style={{ boxSizing: "border-box" }}>
                  {" "}
                  Allowed file size exceeded for Picture 2. (Max. 5 MB){" "}
                </span>{" "}
              </div>{" "}
              <label
                className="additional"
                htmlFor="file_2"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "5px",
                  fontStyle: "italic",
                  marginTop: "5px",
                }}
              >
                Picture 2
              </label>{" "}
              <input
                id="file_2"
                className="media_file"
                name="pic2"
                type="file"
                style={{
                  fontFamily: "inherit",
                  background: "0px 0px",
                  borderRadius: "0px",
                  outline: "0px",
                  display: "inline-block",
                  lineHeight: "50px",
                  height: "50px",
                  fontSize: "15px",
                  width: "100%",
                  textAlign: "left",
                  boxShadow: "none",
                  margin: "0px",
                  padding: "0px",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                  boxSizing: "border-box",
                  marginTop: "5px",
                }}
              />{" "}
            </div>
            <div
              className="overflow"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                marginBottom: "15px",
              }}
            >
              <div
                id="file_3_exceeded"
                className="error_wrapper hidden"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  color: "red",
                  marginTop: "5px",
                }}
              >
                {" "}
                <span className="error" style={{ boxSizing: "border-box" }}>
                  {" "}
                  Allowed file size exceeded for Picture 3. (Max. 5 MB){" "}
                </span>{" "}
              </div>{" "}
              <label
                className="additional"
                htmlFor="file_3"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "5px",
                  fontStyle: "italic",
                  marginTop: "5px",
                }}
              >
                Picture 3
              </label>{" "}
              <input
                id="file_3"
                className="media_file"
                name="pic3"
                type="file"
                style={{
                  fontFamily: "inherit",
                  background: "0px 0px",
                  borderRadius: "0px",
                  outline: "0px",
                  display: "inline-block",
                  lineHeight: "50px",
                  height: "50px",
                  fontSize: "15px",
                  width: "100%",
                  textAlign: "left",
                  boxShadow: "none",
                  margin: "0px",
                  padding: "0px",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                  boxSizing: "border-box",
                  marginTop: "5px",
                }}
              />{" "}
            </div>
            <p
              className="max-size"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                fontStyle: "italic",
                marginTop: "5px",
                marginBottom: "0px",
              }}
            >
              Max size per picture 5 MB
            </p>
          </div>
          <div
            id="add_button"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <a
              id="postButton"
              href="https://ehubelectronics.netlify.app/sell#"
              style={{
                boxSizing: "border-box",
                transition: "all 0.3s ease 0s",
                border: "0px",
                padding: "10px 20px",
                textDecoration: "none",
                borderRadius: "4px",
                display: "inline-block",
                backgroundColor: "rgb(76, 175, 80)",
                color: "rgb(255, 255, 255)",
              }}
            >
              POST YOUR AD
            </a>
          </div>
        </div>
      </form>
        </>
     )
 };
 export default SellLast();