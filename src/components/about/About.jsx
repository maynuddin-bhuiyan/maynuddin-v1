import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div className="py-10 lg:py-20">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14">
                    <div className="relative lg:h-[430px] md:h-[450px] h-[300px]">
                        {/* Shapes */}
                        <div className="absolute -top-6 -left-5">
                            <svg className="up-down" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 72 72" fill="none">
                                <path d="M72 3.00001C72 1.34315 70.6562 -0.00652 69.0008 0.062495C60.5695 0.414 52.2575 2.2454 44.4468 5.48067C35.7114 9.09901 27.7741 14.4025 21.0883 21.0883C14.4025 27.7741 9.09901 35.7113 5.48068 44.4468C2.24539 52.2574 0.413999 60.5695 0.0624817 69.0008C-0.00653385 70.6562 1.34314 72 3 72L69 72C70.6568 72 72 70.6569 72 69L72 3.00001Z" fill="#1B38DF" />
                            </svg>
                        </div>


                        {/* Images */}
                        <div className="absolute top-0 left-0">
                            <Image
                                src="/about-01.jpg"
                                alt="Image 1"
                                className="relative rounded-md"
                                width={200}
                                height={300}
                            />
                            <div className="absolute md:-bottom-32 -bottom-20 right-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 113 113" fill="none" className="bounce-fade">
                                    <path d="M112.5 110C112.5 111.657 111.157 113.004 109.5 112.96C95.7491 112.593 82.1728 109.707 69.4481 104.436C55.799 98.7828 43.3971 90.4961 32.9505 80.0495C22.5039 69.6029 14.2172 57.201 8.56357 43.5519C3.29284 30.8272 0.40678 17.2509 0.0400038 3.49972C-0.00417051 1.84345 1.34315 0.50001 3.00001 0.50001L109.5 0.499997C111.157 0.499997 112.5 1.84314 112.5 3.5L112.5 110Z" fill="#EF1E5D" />
                                </svg>
                            </div>
                        </div>

                        <div className="absolute top-3 left-[220px]">
                            <Image
                                src="/about.png"
                                alt="Image 2"
                                className="rounded-lg up-down"
                                width={100}
                                height={100}
                            />

                        </div>
                        <div className="absolute md:bottom-20 left-[220px] bottom-0">
                            <Image
                                src="/about-02.jpg"
                                alt="Image 3"
                                className="rounded-lg relative z-50"
                                width={300}
                                height={200}
                            />
                            <div className="absolute -bottom-6 -right-6 z-10">
                                <svg className="up-down" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 72 72" fill="none">
                                    <path d="M-7.76053e-06 69C-7.68811e-06 70.6568 1.34378 72.0065 2.99919 71.9375C11.4305 71.586 19.7425 69.7546 27.5532 66.5193C36.2886 62.901 44.2259 57.5975 50.9117 50.9117C57.5975 44.2259 62.901 36.2886 66.5193 27.5532C69.7546 19.7425 71.586 11.4305 71.9375 2.99919C72.0065 1.34378 70.6569 -6.23573e-06 69 -6.16331e-06L3 -3.27835e-06C1.34314 -3.20593e-06 -3.08851e-06 1.34314 -3.01609e-06 3L-7.76053e-06 69Z" fill="#1B38DF" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="lg:text-lg font-medium text-indigo-500 lg:mb-2">Meet the Developer</h3>
                        <h2 className="lg:text-4xl text-lg font-bold text-gradient mb-5"> I specialize in website and web application development.



                        </h2>

                        <p className="text-gray-300">

                            "Responsible for front-end development with expertise in React JS and Next.js."


                        </p>


                        <div className="flex items-center gap-3 my-5">
                            <div className="w-12 h-12 border rounded-full flex justify-center items-center border-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                                    <path d="M21.2803 12.8162C21.1616 11.9825 20.5248 11.3325 19.7049 11.1388C16.5182 10.3837 15.7194 8.52875 15.5846 6.47125C15.0195 6.365 14.0142 6.25 12.3077 6.25C10.6012 6.25 9.59589 6.365 9.03077 6.47125C8.89598 8.52875 8.09715 10.3837 4.91049 11.1388C4.09064 11.3338 3.4538 11.9825 3.33509 12.8162L2.72051 17.1187C2.50411 18.6337 3.60466 20 5.13555 20H19.4799C21.0095 20 22.1113 18.6337 21.8949 17.1187L21.2803 12.8162ZM12.3077 16.865C10.5827 16.865 9.1841 15.465 9.1841 13.74C9.1841 12.015 10.5827 10.615 12.3077 10.615C14.0327 10.615 15.4313 12.015 15.4313 13.74C15.4313 15.465 14.0315 16.865 12.3077 16.865ZM24.6117 5C24.582 3.125 19.8607 0.00125 12.3077 0C4.75345 0.00125 0.0321901 3.125 0.00374879 5C-0.0246925 6.875 0.029717 9.315 3.13847 8.90875C6.77525 8.4325 6.55143 7.14875 6.55143 5.31375C6.55143 4.03375 9.50933 3.725 12.3077 3.725C15.1061 3.725 18.0627 4.03375 18.064 5.31375C18.064 7.14875 17.8402 8.4325 21.4769 8.90875C24.5844 9.315 24.6401 6.875 24.6117 5Z" fill="#EF1E5D" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-300 text-sm md:text-base">
                                    Call for Quality Services: 01618559839
                                </p>
                                <Link href="tel:01618559839" className="text-lg text-white font-medium">01618559839</Link>
                            </div>
                        </div>


                        <Link target="_blank" href={"https://calendly.com/maynuddinbhu14grm/30min"} className="theme-btn lg:text-sm bg-custom-gradient w-max text-white montserrat font-semibold">{"Arrange a Session"}</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
