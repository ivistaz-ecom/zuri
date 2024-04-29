'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../../app/globals.css'

const MobileHeader = () => {

    const [isFormShow, setIsFormShow] = useState(false);

    const [isShow, setIsShow] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleOnClickShow = () => {
        setIsShow(!isShow);
        setIsFormShow(false); // Ensure isFormShow is hidden when isShow is clicked
        setActiveSubMenu(null);
    };

    const handleMakeReservation = () => {
        setIsFormShow(!isFormShow);
        setIsShow(false); // Ensure isShow is hidden when isFormShow is clicked
        setActiveSubMenu(null); // Close any active sub-menu
    }

    const handleSubMenuClick = (submenu) => {
        if (activeSubMenu === submenu) {
            // If the same sub-menu is clicked again, close it
            setActiveSubMenu(null);
        } else {
            setActiveSubMenu(submenu);
        }
    };

    const hotels = [
        { id: 1, name: 'The Zuri Kumarakom, Kerala Resort & Spa' },
        { id: 2, name: 'The Zuri White Sands, Goa Resort & Casino' },
        { id: 3, name: 'The Zuri Whitefield, Bengaluru' },
    ];

    const HotelReservationForm = () => {
        const [selectedHotel, setSelectedHotel] = useState('');
        const [selectedCheckInDate, setSelectedCheckInDate] = useState(getTodayDateString());
        const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(getTodayDateString());
        const [selectedRooms, setSelectedRooms] = useState(1);
        const [selectedAdults, setSelectedAdults] = useState(1);
        const [selectedChildren, setSelectedChildren] = useState(0);

        const handleFormSubmit = (e) => {
            e.preventDefault();
            // Handle form submission logic here, e.g., send data to backend
            console.log('Form submitted:', {
                selectedHotel,
                selectedCheckInDate,
                selectedCheckOutDate,
                selectedRooms,
                selectedAdults,
                selectedChildren,
            });
        };

        function getTodayDateString() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        return (
            <>
                <Container fluid className='d-flex d-md-none position-sticky sticky-top flex-column bg-white z-3 shadow-sm p-0'>
                    <Row className='d-flex flex-row flex-wrap justify-content-center align-items-center m-0'>
                        <Col xs={1}>
                            <i
                                class="bi bi-list"
                                style={{ fontSize: '30px' }}
                                onClick={handleOnClickShow}
                            >
                            </i>
                        </Col>

                        <Col xs={4}>
                            <Link
                                href="/"
                                className='text-decoration-none'>
                                <Image src='/zuri_logo.png' alt='' fluid />
                            </Link>
                        </Col>

                        <Col className='d-flex flex-column justify-content-end align-items-end' xs={6}>
                            <Col className='d-inline-block'>
                                <p className='font11px mb-2'>
                                    <Image src='/header/phone_final.svg' alt='' />
                                    +91 806 665 7272
                                </p>
                            </Col>
                            <Col
                                className='cusrom-make-reservation-btn'
                            >
                                <Col
                                    className='dimond-shap-purple'
                                >
                                </Col>
                                <h6
                                    className='mb-0 font11px text-center'
                                    onClick={handleMakeReservation}
                                >
                                    MAKE A RESERVATION
                                </h6>
                            </Col>
                        </Col>
                    </Row>

                    {isShow && (
                        <Col className='d-flex flex-column justify-content-center align-items-center p-1'>
                            <Col className='text-center p-0 w-100 mt-3'>
                                <p
                                    className='font11px text-black'
                                    onClick={() => handleSubMenuClick('hotel')}
                                >
                                    Hotel
                                </p>
                                <hr />

                                {activeSubMenu === 'hotel' && (
                                    <Col className='d-flex gap-3 flex-column'>
                                        <Link
                                            href="/lake-resorts-in-kumarakom/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6
                                                className='font11px'
                                            >
                                                The Zuri Kumarakom, Kerala Resort & Spa
                                            </h6>
                                        </Link>

                                        <Link
                                            href="/beach-resorts-in-goa/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri White Sands, Goa Resort & Casino</h6>
                                        </Link>

                                        <Link
                                            href="/hotels-in-bengaluru/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri Whitefield, Bengaluru</h6>
                                        </Link>
                                    </Col>
                                )}
                            </Col>

                            <Col className='text-center p-0 w-100 mt-3'>
                                <p
                                    className='font11px text-black'
                                    onClick={() => handleSubMenuClick('events')}
                                >
                                    Events
                                </p>

                                <hr />

                                {activeSubMenu === 'events' && (
                                    <Col className='d-flex gap-3 flex-column'>
                                        <Link
                                            href="/lake-resorts-in-kumarakom/events/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri Kumarakom, Kerala Resort & Spa</h6>
                                        </Link>

                                        <Link
                                            href="/beach-resorts-in-goa/events/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri White Sands, Goa Resort & Casino</h6>
                                        </Link>

                                        <Link
                                            href="/hotels-in-bengaluru/events/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri Whitefield, Bengaluru</h6>
                                        </Link>
                                    </Col>
                                )}
                            </Col>


                            <Col className='text-center p-0 w-100 mt-3'>
                                <p
                                    className='font11px text-black'
                                    onClick={() => handleSubMenuClick('maya-spa')}
                                >
                                    Maya Spa
                                </p>

                                <hr />
                                {activeSubMenu === 'maya-spa' && (
                                    <Col className='d-flex gap-3 flex-column'>
                                        <Link
                                            href="/lake-resorts-in-kumarakom/maya-spa/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri Kumarakom, Kerala Resort & Spa</h6>
                                        </Link>

                                        <Link
                                            href="/beach-resorts-in-goa/maya-spa/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri White Sands, Goa Resort & Casino</h6>
                                        </Link>

                                        <Link
                                            href="/hotels-in-bengaluru/maya-spa/"
                                            className='text-decoration-none text-black'
                                        >
                                            <h6 className='font11px'>The Zuri Whitefield, Bengaluru</h6>
                                        </Link>
                                    </Col>
                                )}
                            </Col>

                            <Col className='text-center p-0 w-100 mt-3'>
                                <Link
                                    href="/contact-us"
                                    className='text-decoration-none text-black'
                                >
                                    <h6 className='mb-0 font11px'>
                                        Contact Us
                                    </h6>
                                </Link>
                                <hr />
                            </Col>

                            <Col className='text-center p-0 w-100 mt-3'>
                                <Link
                                    href="/blog"
                                    target='_blank'
                                    className='text-decoration-none text-black'
                                >
                                    <h6 className='mb-0 font11px'>
                                        Blog
                                    </h6>
                                </Link>
                            </Col>
                        </Col>
                    )}

                    {/* Booking Form */}
                    {isFormShow && (
                        <Container className='d-flex flex-column d-md-none bg-white shadow-sm mt-3 z-3'>
                            <form onSubmit={handleFormSubmit}>
                                <div className='d-flex flex-column gap-4'>
                                    <div className='d-flex flex-column gap-2'>
                                        <div>
                                            <label
                                                htmlFor="hotel"
                                                className='text-black-50'
                                            >
                                                Hotels, City:
                                            </label>
                                        </div>
                                        <div>
                                            <select
                                                id="hotel"
                                                value={selectedHotel}
                                                onChange={(e) => setSelectedHotel(e.target.value)}
                                            >
                                                <option value="">Select a hotel</option>
                                                {hotels.map((hotel) => (
                                                    <option key={hotel.id} value={hotel.name}>
                                                        {hotel.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className='d-flex flex-column gap-2'>
                                        <div>
                                            <label
                                                htmlFor="checkIn"
                                                className='text-black-50'
                                            >
                                                Check-In:
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                id="checkIn"
                                                type="date"
                                                value={selectedCheckInDate}
                                                onChange={(e) => setSelectedCheckInDate(e.target.value)}
                                                min={getTodayDateString()}
                                            />
                                        </div>
                                    </div>

                                    <div className='d-flex flex-column gap-2'>
                                        <div>
                                            <label
                                                htmlFor="checkOut"
                                                className='text-black-50'
                                            >
                                                Check-Out:
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                id="checkOut"
                                                type="date"
                                                value={selectedCheckOutDate}
                                                onChange={(e) => setSelectedCheckOutDate(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className='d-flex flex-row gap-4'>
                                        <div className='d-flex flex-column gap-2'>
                                            <div>
                                                <label
                                                    htmlFor="rooms"
                                                    className='text-black-50'
                                                >
                                                    Rooms:
                                                </label>
                                            </div>
                                            <div>
                                                <select
                                                    id="rooms"
                                                    value={selectedRooms}
                                                    onChange={(e) => setSelectedRooms(parseInt(e.target.value, 10))}
                                                >
                                                    {[1, 2, 3].map((count) => (
                                                        <option key={count} value={count}>
                                                            {count}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className='d-flex flex-column gap-2'>
                                            <div>
                                                <label
                                                    htmlFor="adults"
                                                    className='text-black-50'
                                                >
                                                    Adults:
                                                </label>
                                            </div>
                                            <div>
                                                <select
                                                    id="adults"
                                                    value={selectedAdults}
                                                    onChange={(e) => setSelectedAdults(parseInt(e.target.value, 10))}
                                                >
                                                    {[1, 2, 3, 4].map((count) => (
                                                        <option key={count} value={count}>
                                                            {count}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className='d-flex flex-column gap-2'>
                                            <div>
                                                <label
                                                    htmlFor="children"
                                                    className='text-black-50'
                                                >
                                                    Children:
                                                </label>
                                            </div>
                                            <div>
                                                <select
                                                    id="children"
                                                    value={selectedChildren}
                                                    onChange={(e) => setSelectedChildren(parseInt(e.target.value, 10))}
                                                >
                                                    {[0, 1, 2, 3].map((count) => (
                                                        <option key={count} value={count}>
                                                            {count}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex flex-column gap-4'>
                                        <div className='text-center d-flex flex-column gap-2'>
                                            <Link
                                                href="https://be.synxis.com/?adult=1&arrive=2023-12-20&chain=17869&child=0&currency=INR&depart=2023-12-21&hotel=64787&level=hotel&locale=en-US&rooms=1"
                                                className='text-decoration-none text-white px-2 py-2 d-inline-block'
                                                style={{ background: 'purple' }}
                                            >
                                                BOOK NOW
                                            </Link>

                                            <Link
                                                href="https://be.synxis.com/?_ga=2.164956023.936920120.1702967799-2038087003.1664255723&adult=1&arrive=2023-12-20&chain=17869&child=0&currency=INR&depart=2023-12-21&hotel=64786&level=hotel&locale=en-US&rooms=1&shell=GCF&start=searchres&template=GCF"
                                                className="text-deocoration-black"
                                                target='_blank'
                                            >
                                                <p
                                                    className='text-black font12px'
                                                >
                                                    Modify / Cancel Reservation
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <Col
                                className='text-center d-flex flex-column justify-content-center align-items-center'
                                onClick={handleMakeReservation}
                            >
                                <p className='mb-0'>
                                    close
                                </p>
                                <Col className='text-center'>
                                    <Col
                                        className='dimond-shap-close'
                                    >
                                    </Col>
                                </Col>
                            </Col>
                        </Container>
                    )}
                </Container>
            </>
        )
    }
    return <HotelReservationForm />;
};

export default MobileHeader