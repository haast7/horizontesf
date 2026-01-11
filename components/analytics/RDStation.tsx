'use client'

import Script from 'next/script'

export default function RDStation() {
  return (
    <Script
      id="rd-station"
      strategy="afterInteractive"
      src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/3c92e6a5-ab7e-48a5-bad9-3cb83405ad02-loader.js"
    />
  )
}
