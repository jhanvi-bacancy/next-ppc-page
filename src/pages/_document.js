/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable @next/next/next-script-for-ga */
import { metaProperties } from "@/data/pages/python-2";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="icon" href={metaProperties.faviconIcon} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://assets.bacancytechnology.com" />
        <link rel="dns-prefetch" href="https://assets.bacancytechnology.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://static.hotjar.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta
          name="google-site-verification"
          content="Yo1jWJ-VQcq47gcnByCq029qo1Fjbsr_HpAcmCR_lm0"
        />
        <meta name="msvalidate.01" content="C214C31FCA7F9C451D032045FAEAA622" />
        <meta name="copyright" content="Bacancy" />
        <meta name="distribution" content="Global" />
        <meta name="author" content="Bacancy" />
        <meta name="Owner" content="bacancytechnology.com" />
        <meta property="twitter:account_id" content="1217499134" />
        <meta property="fb:page_id" content="487007941335374" />
        <meta name="twitter:site" content="@bacancytech" />
        <meta name="twitter:creator" content="@bacancytech" />
        <meta property="fb:admins" content="487007941335374" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bacancy" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:495581,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-KMHRSL');
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMHRSL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
