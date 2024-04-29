import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

const AyurvedaPackageBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/kumarkom/offers/ayurveda_package_banner.jpg')`,
        height: 460,
        backgroundSize: 'cover'
    }

    return (
        <Container className='custom-kumarkom-menu-container'>

            <Col className='text-center pb-3'>
                <h3 className='text-custom-grey'>AYURVEDA PACKAGE</h3>
            </Col>

            <Col className='p-0'
                // style={{ backgroundImage: "url(/kumarkom/room_suites_kumarkom_banner.jpg)", height: '460px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                style={BannerImg}
            >
            </Col>

            <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >

                <Link href="/"
                    className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 font12px'>Home</h6>
                </Link>

                <Link href=""
                    className='text-decoration-none mb-0'>
                    <h6 className='font12px mb-0 text-black breadcrumbs'>Offers</h6>
                </Link>
                {/* /
                <Link href=""
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta font12px mb-0'> Destination</h6>
                </Link> */}
            </Col>

        </Container >
    )
}

export default AyurvedaPackageBanner