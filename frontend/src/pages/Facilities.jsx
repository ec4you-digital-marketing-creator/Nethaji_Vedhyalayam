import React, { useState, useEffect } from 'react';
import {
    FlaskConical, BookOpen, Dumbbell, Laptop, Bus, Utensils, Heart, Shield,
    CheckCircle, Award, Wifi, Zap, Leaf, Camera, Star
} from 'lucide-react';
import { API_BASE_URL } from '../api/config';

const Facilities = () => {
    const [pageContent, setPageContent] = useState(null);
    const [facilities, setFacilities] = useState([]);
    const [stats, setStats] = useState([]);
    const [safetyFeatures, setSafetyFeatures] = useState([]);
    const [techItems, setTechItems] = useState([]);
    const [greenInitiatives, setGreenInitiatives] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const endpoints = [
                    'page-content/current/', 'facilities/', 'stats/',
                    'safety-features/', 'tech-items/', 'green-initiatives/',
                    'testimonials/', 'certifications/'
                ];
                const responses = await Promise.all(
                    endpoints.map(e => fetch(`${API_BASE_URL}/api/facilities/${e}`))
                );

                const data = await Promise.all(responses.map(res => res.ok ? res.json() : null));

                setPageContent(data[0]);
                setFacilities(data[1] || []);
                setStats(data[2] || []);
                setSafetyFeatures(data[3] || []);
                setTechItems(data[4] || []);
                setGreenInitiatives(data[5] || []);
                setTestimonials(data[6] || []);
                setCertifications(data[7] || []);
            } catch (error) {
                console.error("Error fetching facilities data:", error);
            }
        };
        fetchData();
    }, []);

    const iconMap = {
        FlaskConical: <FlaskConical size={40} />,
        Laptop: <Laptop size={40} />,
        BookOpen: <BookOpen size={40} />,
        Dumbbell: <Dumbbell size={40} />,
        Bus: <Bus size={40} />,
        Utensils: <Utensils size={40} />,
        Shield: <Shield />,
        Heart: <Heart />,
        Zap: <Zap />,
        Wifi: <Wifi />,
        Camera: <Camera />
    };

    return (
        <div className="font-sans bg-gray-50">
            {/* Hero */}
            <section className="relative h-[400px] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-secondary/90 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${pageContent?.hero_image ? (pageContent.hero_image.startsWith('http') ? pageContent.hero_image : `${API_BASE_URL}${pageContent.hero_image}`) : "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"})` }}
                ></div>
                <div className="relative z-20 container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">{pageContent?.hero_title || "Our Facilities"}</h1>
                    <p className="text-xl text-gray-200">{pageContent?.hero_description || "World-class infrastructure for holistic development"}</p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 bg-white shadow-lg -mt-16 relative z-30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-4">
                                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h4 className="text-primary font-bold uppercase tracking-widest mb-2">
                        {pageContent?.intro_badge || "Infrastructure"}
                    </h4>
                    <h2 className="text-4xl font-bold text-secondary mb-8">
                        {pageContent?.intro_title || "Where Learning Meets Excellence"}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {pageContent?.intro_description_1 || "At Nethaji Vidyalayam, we believe that a conducive learning environment is essential for academic and personal growth."}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {pageContent?.intro_description_2 || "Safety, hygiene, and accessibility are our top priorities, ensuring that every student has the resources they need to excel."}
                    </p>
                </div>
            </section>

            {/* Main Facilities Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="space-y-20">
                        {facilities.map((facility, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                                <div className="lg:w-1/2">
                                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                        <img
                                            src={facility.image ? (facility.image.startsWith('http') ? facility.image : `${API_BASE_URL}${facility.image}`) : "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                            alt={facility.title}
                                            className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-6">
                                        {iconMap[facility.icon_name] || <FlaskConical size={40} />}
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{facility.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{facility.description}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {(facility.features || []).map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety & Security */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Your Child's Safety</h4>
                        <h2 className="text-3xl font-bold text-secondary mb-4">Safety & Security Measures</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Campus-wide protocols ensuring peace of mind for every parent.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {safetyFeatures.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-primary">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 text-primary">
                                    {iconMap[item.icon_name] || <Shield />}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Integration */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <img
                                src={pageContent?.tech_image ? (pageContent.tech_image.startsWith('http') ? pageContent.tech_image : `${API_BASE_URL}${pageContent.tech_image}`) : "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                alt="Technology in Education"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h4 className="text-primary font-bold uppercase tracking-widest mb-2">
                                {pageContent?.tech_badge || "Digital Learning"}
                            </h4>
                            <h2 className="text-4xl font-bold text-secondary mb-6">
                                {pageContent?.tech_title || "Technology-Integrated Education"}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {pageContent?.tech_description || "We leverage technology to enhance learning outcomes."}
                            </p>
                            <div className="space-y-4">
                                {techItems.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                                        <div className="text-primary">{iconMap[item.icon_name] || <Wifi />}</div>
                                        <span className="font-medium text-gray-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Green Initiatives */}
            <section className="py-20 bg-secondary text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Leaf className="mx-auto mb-4 text-primary" size={48} />
                        <h2 className="text-4xl font-bold mb-4">{pageContent?.green_title || "Eco-Friendly Campus"}</h2>
                        <p className="text-gray-200 max-w-2xl mx-auto">
                            {pageContent?.green_description || "Committed to sustainability and environmental responsibility."}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {greenInitiatives.map((item, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-colors">
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-200">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Parent Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-4">What Parents Say</h2>
                        <p className="text-gray-600">Real feedback from our parent community.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8">Certified & Accredited</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full">
                                <Award className="text-primary" size={20} />
                                <span className="font-medium text-gray-700">{cert.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Virtual Tour CTA */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">{pageContent?.cta_title || "Experience Our Campus"}</h2>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        {pageContent?.cta_description || "Schedule a campus visit or take a virtual tour to see our facilities in action."}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg">
                            Schedule a Visit
                        </button>
                        <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-all">
                            Take Virtual Tour
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facilities;
