'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

const DesktopHeaderForm = ({ onClose }) => {

    const router = useRouter();
    const hotels = [
        { id: 1, name: 'The Zuri Kumarakom, Kerala Resort & Spa', value: '64786' },
        { id: 2, name: 'The Zuri White Sands, Goa Resort & Casino', value: '64787' },
        { id: 3, name: 'The Zuri Whitefield, Bengaluru', value: '27305' },
    ];

    const HotelReservationForm = () => {
        // const defaultSelectedHotel = '64786'; // Set the default selected hotel value
        const [selectedHotel, setSelectedHotel] = useState('');
        const [selectedCheckInDate, setSelectedCheckInDate] = useState(getTodayDateString());
        const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(getTodayDateString());
        const [selectedRooms, setSelectedRooms] = useState(1);
        const [selectedAdults, setSelectedAdults] = useState(1);
        const [selectedChildren, setSelectedChildren] = useState(0);
        const [selectedChain, setSelectedChain] = useState('');

        useEffect(() => {
            // Reset the form when the pathname changes
            setSelectedHotel('');
            setSelectedCheckInDate(getTodayDateString());
            setSelectedCheckOutDate(getTodayDateString());
            setSelectedRooms(1);
            setSelectedAdults(1);
            setSelectedChildren(0);
            setSelectedChain('');
            setHotelValidationError(false);
        }, [router.pathname]);

        const [hotelValidationError, setHotelValidationError] = useState(false); // Track validation error

        const handleFormSubmit = (e) => {
            e.preventDefault();

            if (!selectedHotel) {
                setHotelValidationError(true);
                return;
            }
            if (selectedHotel === '64786') {
                setSelectedChain('17869')
            }
            if (selectedHotel === '64787') {
                setSelectedChain('17869')
            }
            if (selectedHotel === '27305') {
                setSelectedChain('10237')
            }

            // Construct the URL based on form data
            const reservationURL = `https://be.synxis.com/?adult=${selectedAdults}&arrive=${selectedCheckInDate}&chain=${selectedChain}&child=${selectedChildren}&currency=INR&depart=${selectedCheckOutDate}&hotel=${selectedHotel}&level=hotel&locale=en-US&rooms=${selectedRooms}`;
            // console.log(reservationURL)
            // Navigate to the reservation URL
            router.push(reservationURL);
            setHotelValidationError(false);

            // Reset form data
            setSelectedHotel('');
            setSelectedCheckInDate(getTodayDateString());
            setSelectedCheckOutDate(getTodayDateString());
            setSelectedRooms(1);
            setSelectedAdults(1);
            setSelectedChildren(0);
            setSelectedChain('');
            setHotelValidationError(false);
        };

        function getTodayDateString() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        const [isMakeReservation, setIsMakeReservation] = useState(true);

        const handleMakeReservation = () => {
            if (onClose) {
                onClose();
            }
        };

        return (

            <Container fluid className={`pt-4 pb-5 ps-5 ms-5 desktop-header-form ${isMakeReservation ? '' : 'hidden'}`}
            >
                <Container>
                    <Col
                        className='custom-close-btn'
                        onClick={handleMakeReservation}

                    >
                        <p className='mb-0 cursor-pointer'>
                            close
                        </p>

                        <Col
                            className='dimond-shap-close'
                        >
                        </Col>
                    </Col>


                    <form onSubmit={handleFormSubmit}>
                        <div className='d-flex flex-row gap-4'>
                            <div md={3} className='d-flex flex-column gap-2'>
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
                                        className='bg-white'
                                        value={selectedHotel}
                                        onChange={(e) => setSelectedHotel(e.target.value)}
                                        required
                                        style={{ borderColor: hotelValidationError ? 'red' : '' }}

                                    >
                                        <option value="">Select a hotel</option>
                                        {hotels.map((hotel) => (
                                            <option key={hotel.id} value={hotel.value}>
                                                <div className='bg-white'>
                                                    <p className='p-4'>
                                                        {hotel.name}
                                                    </p>
                                                </div>
                                            </option>
                                        ))}
                                    </select>
                                    {!selectedHotel && hotelValidationError && (
                                        <p style={{ color: 'red', fontSize: '12px' }}>Please select a hotel</p>
                                    )}
                                </div>
                            </div>

                            <div md={2} className='d-flex flex-column gap-2'>
                                <div>
                                    <label
                                        htmlFor="checkIn"
                                        className='text-black-50'>
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

                            <div md={2} className='d-flex flex-column gap-2'>
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

                            <div md={1} className='d-flex flex-column gap-2'>
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
                                        className='bg-white'
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

                            <div md={1} className='d-flex flex-column gap-2'>
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
                                        className='bg-white'
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

                            <div md={1} className='d-flex flex-column gap-2'>
                                <div>
                                    <label
                                        htmlFor="children"
                                        className='text-black-50 bg-white'
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

                            <div className='d-flex flex-column gap-1'>
                                <div className='text-center d-flex flex-column gap-2 mt-4 pt-1'>
                                    <Button onClick={handleFormSubmit}
                                        className='text-decoration-none text-white px-2 py-2 d-inline-block border-0 rounded-0'
                                        style={{ background: 'purple' }}
                                    >
                                        Book Now
                                    </Button>
                                </div>

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
                    </form>
                </Container>
            </Container>
        );
    };

    return <HotelReservationForm />;
};

export default DesktopHeaderForm
