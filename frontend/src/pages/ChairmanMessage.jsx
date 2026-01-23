import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaQuoteLeft, FaGraduationCap, FaHandHoldingHeart, FaLightbulb, FaArrowLeft } from 'react-icons/fa';
import SEO from '../components/SEO';
import correspondentImage from '../images/Correspontent.jpg';

// Import school visit images
import visit1 from '../images/About/Chairman msg 1.jpeg';
import visit2 from '../images/About/Chairman msg 2.jpeg';
import visit3 from '../images/About/Chairman msg 3.jpeg';
import visit4 from '../images/About/Chairman msg 4.jpeg';
import visit5 from '../images/About/Chairman msg 5.jpeg';
import visit6 from '../images/About/Chairman msg 6.JPG';
import heroimg from '../images/About/DSC07104.JPG'

const ChairmanMessage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans">
            <SEO
                title="Chairman's Message | Leadership at Nethaji Vidyalayam"
                description="Read the vision and message from our Correspondent, Dr. M. B. Kannabiran. Learn about our commitment to value-based education and institutional excellence."
                keywords="chairman message, correspondent message, school leadership, Nethaji Vidyalayam vision, Dr. M. B. Kannabiran"
                url="/about/chairman-message"
            />

            {/* Hero Section */}
            <section className="relative h-[350px] md:h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-secondary/80 z-10" />
                <img
                    src={heroimg}
                    alt="Education Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Chairman's Message</h1>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto font-light">
                        "Igniting young minds with values and wisdom since 2001."
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                        {/* Left: Image & Profile Card */}
                        <div className="lg:w-2/5 w-full lg:sticky lg:top-32">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all" />
                                <div className="relative bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                                    <div className="aspect-4/5 overflow-hidden rounded-xl mb-6">
                                        <img
                                            src={correspondentImage}
                                            alt="Dr. M. B. Kannabiran"
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-2xl font-bold text-secondary mb-1">Dr. M. B. Kannabiran</h2>
                                        <p className="text-primary font-bold tracking-widest uppercase text-sm">Chairman & Correspondent</p>
                                    </div>
                                </div>
                            </div>

                            {/* Key Philosophies */}
                            <div className="mt-12 grid grid-cols-1 gap-4">
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                        <FaGraduationCap size={20} />
                                    </div>
                                    <p className="font-semibold text-secondary">Academic Rigor</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                        <FaHandHoldingHeart size={20} />
                                    </div>
                                    <p className="font-semibold text-secondary">Character Building</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                        <FaLightbulb size={20} />
                                    </div>
                                    <p className="font-semibold text-secondary">Holistic Growth</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Message Content */}
                        <div className="lg:w-3/5">
                            <div className="relative">
                                <FaQuoteLeft className="text-primary/10 text-6xl md:text-8xl absolute -top-6 -left-4 md:-top-10 md:-left-10" />
                                <div className="relative z-10 space-y-8 text-gray-700 text-lg leading-relaxed">
                                    <p className="text-2xl font-serif text-secondary leading-snug font-medium">
                                        "Education in our school aims to build confident learners and responsible citizens."
                                    </p>

                                    <p>
                                        Our school is a centre of learning where education goes beyond classrooms and textbooks. In a safe and value-based environment, every child is encouraged to learn, explore, and grow with confidence.
                                    </p>
                                    <p>
                                        At our school, equal importance is given to academics, character building, and co-curricular activities. We believe true education shapes intelligence, attitude, and responsibility, and our dedicated teachers guide every child by understanding their individual strengths.
                                    </p>

                                    <div className="bg-primary/5 p-8 rounded-2xl border-l-[6px] border-primary">
                                        <h4 className="text-xl font-bold text-secondary mb-4">Our Vision for Future</h4>
                                        <p>
                                            We focus on holistic development by blending traditional values with modern teaching practices, preparing students to face future challenges with knowledge, integrity, and self-belief.
                                        </p>
                                    </div>

                                    <p>
                                        Our school takes pride in being a strong foundation for lifelong learning, shaping responsible citizens and confident individuals who will contribute positively to society.
                                    </p>

                                    <div className="pt-10 border-t border-gray-100">
                                        <p className="font-bold text-secondary text-xl">Dr. M. B. Kannabiran</p>
                                        <p className="text-primary font-bold">Correspondent & Chairman</p>
                                        <p className="text-gray-400 text-sm mt-1">Nethaji Vidhyalayam</p>
                                    </div>

                                    {/* Video Section */}
                                    {/* <div className="mt-12 bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                                        <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                                            Institutional Vision & Growth
                                        </h3>
                                        <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-xl border-4 border-white">
                                            <iframe
                                                className="absolute top-0 left-0 w-full h-full"
                                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video
                                                title="Chairman's Message Video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div> */}

                                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                                        <a href="/contact" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2 text-center">
                                            Partner with Us <FaArrowRight />
                                        </a>
                                        <a href="/admissions" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2 text-center">
                                            Admissions 2026
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Polaroid Fan Stack Gallery */}
            <section className="py-20 md:py-32 bg-gray-100 overflow-hidden relative">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16 md:mb-24">
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Personal Glimpses</h4>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary">A Legacy of Engagement</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                        <p className="text-gray-500 mt-6 max-w-xl mx-auto">
                            Moments and memories from over 20 years of leadership journey at Nethaji Vidyalayam.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                        {[
                            { img: visit1, title: "Yoga and Wellness Camp", rotation: "-rotate-6", z: "z-10" },
                            { img: visit2, title: "Vidyarambham Pooja", rotation: "rotate-3", z: "z-20" },
                            { img: visit3, title: "Annual Day", rotation: "-rotate-2", z: "z-30" },
                            { img: visit4, title: "Independence Day ", rotation: "rotate-6", z: "z-10" },
                            { img: visit5, title: "Science Exhibition", rotation: "-rotate-3", z: "z-20" },
                            { img: visit6, title: "Class Visits", rotation: "rotate-2", z: "z-30" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`group relative bg-white p-3 pb-12 shadow-2xl transition-all duration-500 hover:scale-105 md:hover:scale-110 hover:z-50 ${item.rotation} ${item.z} w-full sm:w-64 md:w-72 lg:w-80 max-w-[280px] sm:max-w-none`}
                            >
                                <div className="aspect-square overflow-hidden bg-gray-100">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute bottom-3 left-0 right-0 text-center">
                                    <p className="font-serif text-gray-500 italic text-lg">{item.title}</p>
                                </div>
                                {/* Subtle tape effect */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 backdrop-blur-xs -rotate-2 border border-white/20 shadow-xs" />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-24">
                        <p className="text-gray-400 font-light italic max-w-lg mx-auto">
                            "Every picture tells a story of growth, values, and our commitment to every child's future."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChairmanMessage;
