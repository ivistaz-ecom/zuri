import React from 'react'

import HoneyMoonBanner from './HoneyMoonBanner'
import HoneyMoonContent from './HoneyMoonContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Honeymoon Packages in Kumarakom, Kerala - Zuri Hotels & Resorts";
const description = "Have the perfect honeymoon at Zuri's spa and resort in Kumarakom. Our resort offers and packages are customized to make your special day unforgettable.";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/honeymoon-package/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <HoneyMoonBanner />
      <HoneyMoonContent />
      <Footer />
    </>
  )
}

export default index