import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const ExecutiveSuiteRoomGoaContent = () => {
    const AmitiesBg = {
        background: '#cab17b'
    }

    return (
        <>
            <Container className='p-md-0 text-center p-2'>
                <Col className='d-flex flex-column align-items-center px-md-5'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>THE ZURI EXECUTIVE SUITE</h6>
                    <p>
                        The Zuri Executive Suite Room in Goa is a 145 sq. mt. spread of luxury with two conjoining rooms, a living and a dining area with elegant furnishing and a spacious bathroom. Adjoining the pool, the Suite in our<Link href="/beach-resorts-in-goa/" className='text-decoration-none text-black'> Luxury Resort in Goa</Link> offers a breathtaking view of the impeccably manicured lawns.
                    </p>

                    <p>
                        Note: The guests can Check-in at 15:00 hrs and Check-out at 11:00 hrs based on the duration of their stay.
                    </p>
                </Col>

                <Col className='my-5 py-5' style={AmitiesBg}>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>AMENITIES</h6>

                    <p className='text-black'>
                        Complimentary broadband access | LCD TV | Satellite/cable TV | Daily newspaper | Executive writing desk |
                        <br />
                        IDD Telephone | Electronic safe | Daily com,plimentary water | Tea and coffee making facilities |
                        <br />
                        Complimentary breakfast | Mini-bar | Premium toiletries | Hair dryer | Complimentary shoeshine service |
                        <br />
                        Bath tub (Executive suite and Zuri suite)
                    </p>

                    <Link
                        href="https://be.synxis.com/?_ga=2.56530732.62180047.1693482265-2038087003.1664255723&_gac=1.161572430.1690453396.CjwKCAjwq4imBhBQEiwA9Nx1Bi6aiGcfgk-uDDRypiK5UqXgtik--oBXV3gga2OF4WXNJFxRCRxuCRoCl0wQAvD_BwE&adult=1&arrive=2023-09-02&chain=17869&child=0&currency=INR&depart=2023-09-03&hotel=64786&level=hotel&locale=en-US&rooms=1"
                        target='_blank'
                        className='text-decoration-none'
                    >
                        <p className='text-white d-inline-block px-3 py-2 bg-purple' >
                            Book Now
                        </p>

                    </Link>
                </Col>
            </Container>
        </>
    )
}

export default ExecutiveSuiteRoomGoaContent
