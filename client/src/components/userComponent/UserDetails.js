import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const UserDetails = () => {
    useEffect(() => {
        const email = localStorage.getItem('userEmail');
    }, []);
    
    
    return (
        <div className="md:p-4">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]} 
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="p-6 rounded-xl  transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-4xl font-bold text-center text-slate-600">
                            Your Details
                        </h3>
                        <ul className="list-none space-y-3 text-slate-700 ">
                            <li>
                                <strong className="font-medium">Name:</strong> John Doe
                            </li>
                            <li>
                                <strong className="font-medium">Contact Number:</strong> +94 123 456 789
                            </li>
                            <li>
                                <strong className="font-medium">Email:</strong> john.doe@example.com
                            </li>
                            <li>
                                <strong className="font-medium">Membership:</strong> Monthly
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="border p-6 transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-4xl font-bold mb-4 text-center text-slate-600">
                            Instructor Details
                        </h3>
                        <ul className="list-none space-y-3 text-slate-700">
                            <li>
                                <strong className="font-medium">Name:</strong> John Doe
                            </li>
                            <li>
                                <strong className="font-medium">Contact Number:</strong> +94 123 456 789
                            </li>
                            <li>
                                <strong className="font-medium">Email:</strong> john.doe@example.com
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default UserDetails;
