import React from 'react'
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader'


const ItemWrapper = styled.div`
    padding:12px 10px;
    background:#fff;
    display:flex;
    align-items:center;
    justify-content: space-between;
    cursor:pointer;
    width:100%;
    box-shadow: inset 0px -1px 0px #EEEEEE;
    
    &:hover{
        background: #F4F5F7;
        box-shadow: inset 0px -1px 0px #EEEEEE;
    }
    &:last-child{
        box-shadow: none;
    }`;

    const ContentWrapper = styled.div`
        text-align:left;
        h5{
            color: #37445C;
            font-size: 16px;
            line-height: 18px;
            margin: 0 0 5px 0;
        }
        p{
            color: #6780A2;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            margin:0;
        }
    `;


function DropDownLoaders({length=5}) {

    return (
        Array(length).fill().map((item, index) => (
            <ItemWrapper key={index}>
                <ContentWrapper>
                    <h5><Skeleton duration={1} width={100} /></h5>
                    <p><Skeleton duration={1} width={50} /></p>
                </ContentWrapper>
                <div>
                <Skeleton duration={1} width={50} />
                </div>
            </ItemWrapper>
        ))
    )
}


function AccordionLoaders({length=1}) {

    return (
        Array(length).fill().map((item, index) => (
            <div key={index}>
                <ContentWrapper>
                    <h5><Skeleton duration={1} width={'100%'} height={30} /></h5>
                    <h5><Skeleton duration={1} width={'100%'} height={30} /></h5>
                </ContentWrapper>
            </div>
        ))
    )
}





const TableLoader = props => (
    <ContentLoader
    width={1200}
    height={400}
    viewBox="0 0 1200 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="27" y="139" rx="4" ry="4" width="20" height="20" />
    <rect x="67" y="140" rx="10" ry="10" width="85" height="19" />
    <rect x="188" y="141" rx="10" ry="10" width="169" height="19" />
    <rect x="402" y="140" rx="10" ry="10" width="85" height="19" />
    <rect x="523" y="141" rx="10" ry="10" width="169" height="19" />
    <rect x="731" y="139" rx="10" ry="10" width="85" height="19" />
    <rect x="852" y="138" rx="10" ry="10" width="85" height="19" />
    <rect x="1424" y="137" rx="10" ry="10" width="68" height="19" />
    <rect x="26" y="196" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="197" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="198" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="197" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="198" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="196" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="195" rx="10" ry="10" width="85" height="19" />
    <circle cx="1456" cy="203" r="12" />
    <rect x="26" y="258" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="259" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="260" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="259" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="260" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="258" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="257" rx="10" ry="10" width="85" height="19" />
    <circle cx="1456" cy="265" r="12" />
    <rect x="26" y="316" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="317" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="318" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="317" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="318" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="316" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="315" rx="10" ry="10" width="85" height="19" />
    <circle cx="1456" cy="323" r="12" />
    <rect x="26" y="379" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="380" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="381" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="380" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="381" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="379" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="378" rx="10" ry="10" width="85" height="19" />
    <circle cx="1456" cy="386" r="12" />
    <rect x="978" y="138" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="195" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="257" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="315" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="378" rx="10" ry="10" width="169" height="19" />
    <rect x="1183" y="139" rx="10" ry="10" width="85" height="19" />
    <rect x="1182" y="196" rx="10" ry="10" width="85" height="19" />
    <rect x="1182" y="258" rx="10" ry="10" width="85" height="19" />
    <rect x="1182" y="316" rx="10" ry="10" width="85" height="19" />
    <rect x="1182" y="379" rx="10" ry="10" width="85" height="19" />
    <rect x="1305" y="137" rx="10" ry="10" width="85" height="19" />
    <rect x="1304" y="194" rx="10" ry="10" width="85" height="19" />
    <rect x="1304" y="256" rx="10" ry="10" width="85" height="19" />
    <rect x="1304" y="314" rx="10" ry="10" width="85" height="19" />
    <rect x="1304" y="377" rx="10" ry="10" width="85" height="19" />
    <circle cx="37" cy="97" r="11" />
    <rect x="26" y="23" rx="5" ry="5" width="153" height="30" />
    <circle cx="1316" cy="88" r="11" />
    <rect x="1337" y="94" rx="0" ry="0" width="134" height="3" />
    <circle cx="77" cy="96" r="11" />
  </ContentLoader>
)


const PageLoader = (props) => {
    return (
      <ContentLoader viewBox="0 0 1300 650" height={650} width={"100%"} {...props}>
        <rect x="0" y="0" rx="5" ry="5" width="40%" height="20" />
        <rect x="0" y="42" rx="5" ry="5" width="100%" height="200" />
        <rect x="0" y="265" rx="5" ry="5" width="100%" height="10" />
        <rect x="0" y="285" rx="5" ry="5" width="100%" height="10" />
        <rect x="0" y="305" rx="5" ry="5" width="100%" height="10" />
        <rect x="0" y="335" rx="5" ry="5" width="65%" height="10" />
        <rect x="75%" y="335" rx="5" ry="5" width="10%" height="10" />
        <rect x="0" y="355" rx="5" ry="5" width="65%" height="10" />
        <rect x="75%" y="355" rx="5" ry="5" width="30%" height="10" />
        <rect x="0" y="375" rx="5" ry="5" width="65%" height="10" />
        <rect x="75%" y="375" rx="5" ry="5" width="30%" height="10" />
        <rect x="0" y="395" rx="5" ry="5" width="65%" height="8" />
        <rect x="75%" y="395" rx="5" ry="5" width="30%" height="8" />
        <rect x="0" y="415" rx="5" ry="5" width="65%" height="8" />
        <rect x="75%" y="415" rx="5" ry="5" width="30%" height="8" />
        <rect x="0" y="445" rx="5" ry="5" width="65%" height="8" />
        <rect x="75%" y="445" rx="5" ry="5" width="30%" height="8" />
        <rect x="0" y="465" rx="5" ry="5" width="65%" height="8" />
        <rect x="75%" y="465" rx="5" ry="5" width="30%" height="8" />
        <rect x="0" y="485" rx="5" ry="5" width="65%" height="8" />
        <rect x="75%" y="485" rx="5" ry="5" width="30%" height="8" />
        <rect x="0" y="505" rx="5" ry="5" width="65%" height="8" />
        <rect x="75%" y="505" rx="5" ry="5" width="30%" height="8" />
        <rect x="0" y="525" rx="5" ry="5" width="65%" height="8" />
        <rect x="75%" y="525" rx="5" ry="5" width="30%" height="8" />
        <rect x="75%" y="550" rx="5" ry="5" width="10%" height="10" />
        <circle cx="76.5%" cy="590" r="18" />
        <circle cx="80%" cy="590" r="18" />
        <circle cx="83.5%" cy="590" r="18" />
        <circle cx="87%" cy="590" r="18" />
        <circle cx="90.5%" cy="590" r="18" />
        <circle cx="94%" cy="590" r="18" />
      </ContentLoader>
    )
  }
export {
    TableLoader,
    DropDownLoaders,
    PageLoader,
    AccordionLoaders
}