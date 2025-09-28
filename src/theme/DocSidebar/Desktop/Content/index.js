import React from 'react';
import {useLocation} from '@docusaurus/router';
import Content from '@theme-original/DocSidebar/Desktop/Content';
import AdsComponent from "@site/src/components/AdsComponent";

function SidebarAd() {
  return (
    // eslint-disable-next-line @docusaurus/no-untranslated-text
    <div style={{border: 'solid thin gray', padding: 10, textAlign: 'center', marginTop: 10}}>
      <AdsComponent />
    </div>
  );
}

export default function ContentWrapper(props) {
  const {pathname} = useLocation();
  const shouldShowSidebarAd = pathname.includes('/');
  return (
    <>
      {/* {shouldShowSidebarAd && <SidebarAd />} */}
      <Content {...props} />
      {shouldShowSidebarAd && <SidebarAd />}
    </>
  );
}