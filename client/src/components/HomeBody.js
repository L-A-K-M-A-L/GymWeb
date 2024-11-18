import React from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom'

const HomeBody = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 md:py-40 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs md:text-xl text-indigo-500 tracking-widest font-medium title-font mb-1">
                            WELCOME TO STAMINA FITNESS HUB
                        </h2>
                        <h1 className="sm:text-3xl md:text-6xl font-medium title-font mb-4 text-gray-900">
                            Achieve Your Best Self
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whether you're starting your fitness journey or aiming to push your limits, we're here to help you every step of the way. Get ready to challenge yourself, build strength, and improve your health with our expert trainers and state-of-the-art facilities.
                        </p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <div className="relative group">
                                <img
                                    src="/images/personaltrain.jpg"
                                    alt="Personal Training"
                                    className="w-full h-48 object-cover mb-4 rounded transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 md:text-center text-indigo-500">
                                    Personal Training
                                </h2>
                                <p className="leading-relaxed text-base mb-4 text-slate-500">
                                    Our certified personal trainers will create a customized fitness plan tailored to your goals. Whether you want to lose weight, build muscle, or improve endurance, we're here to guide you.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <div className="relative group">
                                <img
                                    src="/images/group.png"
                                    alt="Group Fitness Classes"
                                    className="w-full h-48 object-cover mb-4 rounded transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 md:text-center text-indigo-500">
                                    Group Fitness Classes
                                </h2>
                                <p className="leading-relaxed text-base mb-4 text-slate-500">
                                    Join one of our dynamic group fitness classes, from high-intensity interval training (HIIT) to yoga and pilates. Our expert instructors will keep you motivated while you burn calories and improve flexibility.
                                </p>
                            </div>
                        </div>

                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <div className="relative group">
                                <img
                                    src="/images/nutrition.jpg"
                                    alt="Nutrition Coaching"
                                    className="w-full h-48 object-cover mb-4 rounded transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 md:text-center text-indigo-500">
                                    Nutrition Coaching
                                </h2>
                                <p className="leading-relaxed text-base mb-4 text-slate-500">
                                    Fuel your body with the right nutrition. Our nutrition coaches will help you create a balanced meal plan to maximize your energy, promote recovery, and reach your fitness goals faster.
                                </p>
                            </div>
                        </div>

                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <div className="relative group">
                                <img
                                    src="/images/strength.jpg"
                                    alt="Strength & Conditioning"
                                    className="w-full h-48 object-cover mb-4 rounded transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 md:text-center text-indigo-500">
                                    Strength & Conditioning
                                </h2>
                                <p className="leading-relaxed text-base mb-4 text-slate-500">
                                    Build power, endurance, and speed with our Strength & Conditioning programs. Perfect for athletes or anyone looking to take their fitness to the next level.
                                </p>
                            </div>
                        </div>
                    </div>
                   <Link to='/Register'>
                   <button className="flex mx-auto mt-16 text-white bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-8 focus:outline-none hover:from-indigo-600 hover:to-blue-600 rounded-full text-lg shadow-md transition-all duration-300 ease-in-out">
                        Get Started Today
                    </button>
                   </Link>

                </div>
            </section>



            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto mb-10">
                    <div className="flex flex-wrap -m-4">

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="/images/t1.jpg"
                                />
                                <p className="leading-relaxed">
                                    "Since joining Stamina Gym, I've seen incredible improvements in my strength and overall fitness. The trainers are knowledgeable and always pushing me to do my best!"
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JESSICA MARTIN</h2>
                                <p className="text-gray-500">Fitness Enthusiast</p>
                            </div>
                        </div>

        
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="/images/t2.jpg"
                                />
                                <p className="leading-relaxed">
                                    "The variety of equipment and the group classes offered at Stamina Gym have helped me stay motivated. I feel stronger and more confident every day!"
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">TOM WILLIAMS</h2>
                                <p className="text-gray-500">Weightlifting Expert</p>
                            </div>
                        </div>

        
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="/images/t3.jpeg"
                                />
                                <p className="leading-relaxed">
                                    "I love the atmosphere at Stamina Gym. It's not just about working out – it's about being part of a supportive community that motivates each other to push our limits."
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">KYLE DAVIS</h2>
                                <p className="text-gray-500">Gym Member</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

   
            <Contact />
        </>
    );
};

export default HomeBody;
