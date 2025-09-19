import React from "react";
import Script from "next/script";

export function CalendlyScript() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <Script id="calendly-inline-widget-setup">
        {`
          window.onload = function() {
            if (window.Calendly) {
              window.Calendly.initInlineWidget({
                url: 'https://calendly.com/americas-3/30min?hide_event_type_details=1&hide_gdpr_banner=1',
                parentElement: document.querySelector('.calendly-inline-widget'),
                prefill: {},
                utm: {}
              });
            }
          }
        `}
      </Script>
    </>
  );
}
