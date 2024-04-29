import Link from 'next/link'
import React from 'react'
import { Container, Col } from 'react-bootstrap'

const ClubRoomBengalurBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/bengaluru/room-suites/club_room_banner.jpg')`,
        height: 466,
        backgroundSize: 'cover'
    }
    return (
        <Container className='p-0' style={{}}>
            <Col className='p-0'
                style={BannerImg}
            >
            </Col>
            <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >
                <Link href="/"
                    className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 font12px'>Home</h6>
                </Link>

                /

                <Link href="/hotels-in-bengaluru"
                    className='text-decoration-none mb-0'>
                    <h6 className=' font12px m-0 text-black'>Bengaluru</h6>
                </Link>
                /
                <Link href="/hotels-in-bengaluru/rooms-suites/"
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta font12px m-0'>Rooms & Suites</h6>
                </Link>
            </Col>
        </Container>
    )
}

export default ClubRoomBengalurBanner