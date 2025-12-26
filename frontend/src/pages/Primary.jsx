import React from 'react';
import { BookOpen, Globe, FlaskConical, Calculator, CheckCircle, Award, Target } from 'lucide-react';

const Primary = () => {
    const subjects = [
        {
            icon: <BookOpen size={32} />,
            title: "Languages",
            subjects: ["English", "Hindi", "Tamil (Regional)"],
            color: "bg-blue-500"
        },
        {
            icon: <Calculator size={32} />,
            title: "Mathematics",
            subjects: ["Numbers", "Operations", "Geometry", "Problem Solving"],
            color: "bg-green-500"
        },
        {
            icon: <FlaskConical size={32} />,
            title: "Science",
            subjects: ["Environmental Science", "Basic Physics", "Life Science"],
            color: "bg-purple-500"
        },
        {
            icon: <Globe size={32} />,
            title: "Social Studies",
            subjects: ["History", "Geography", "Civics"],
            color: "bg-orange-500"
        }
    ];

    const achievements = [
        { label: "100% Pass Rate", value: "5 Years Running" },
        { label: "State Level Winners", value: "12 Students (2024)" },
        { label: "Reading Program", value: "500+ Books Read" }
    ];

    return (
        <div className="font-sans bg-gray-50">
            {/* Hero */}
            <section className="relative h-[400px] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-secondary/90 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
                ></div>
                <div className="relative z-20 container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Primary School (Grade 1 - 5)</h1>
                    <p className="text-xl text-gray-200">Building Strong Academic Foundations</p>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2">
                            <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Primary Education</h4>
                            <h2 className="text-4xl font-bold text-secondary mb-6">Academic Excellence with Character Building</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                The Primary School years (Grades 1-5) are pivotal in shaping a child's academic journey. Our curriculum is designed to build strong foundational skills in reading, writing, mathematics, and critical thinking while nurturing curiosity and a love for learning.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                We follow a student-centered approach that emphasizes experiential learning, project-based activities, and collaborative teamwork. Our dedicated teachers ensure that each child receives the support they need to thrive academically and personally.
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                                {achievements.map((item, index) => (
                                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg border-b-4 border-primary">
                                        <Award className="mx-auto mb-2 text-primary" size={24} />
                                        <span className="block font-bold text-lg text-gray-800">{item.label}</span>
                                        <span className="text-sm text-gray-500">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Primary Classroom"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Subject Areas */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-4">Core Subject Areas</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">A balanced curriculum covering essential disciplines.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {subjects.map((subject, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform">
                                <div className={`${subject.color} text-white p-6 text-center`}>
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                        {subject.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold">{subject.title}</h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        {subject.subjects.map((item, idx) => (
                                            <li key={idx} className="flex items-center text-gray-700">
                                                <CheckCircle size={16} className="text-green-500 mr-2 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Teaching Methodology */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-secondary mb-4">Our Teaching Approach</h2>
                        <p className="text-gray-600">Modern pedagogy for 21st-century learners.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Experiential Learning",
                                desc: "Hands-on activities, field trips, and real-world projects to make learning meaningful.",
                                icon: <Target size={32} />
                            },
                            {
                                title: "Technology Integration",
                                desc: "Smart classrooms with digital boards, educational apps, and computer literacy.",
                                icon: <Globe size={32} />
                            },
                            {
                                title: "Continuous Assessment",
                                desc: "Regular formative assessments to track progress and provide timely feedback.",
                                icon: <Award size={32} />
                            }
                        ].map((method, index) => (
                            <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors border border-gray-100">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 text-primary">
                                    {method.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{method.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{method.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Co-Curricular */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Beyond the Classroom</h2>
                        <p className="text-gray-200">Diverse co-curricular activities for holistic development.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {["Sports & Athletics", "Music & Dance", "Art & Craft", "Debate & Elocution", "Science Club", "Drama & Theatre", "Yoga & Meditation", "Community Service"].map((activity, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-colors">
                                <span className="font-medium">{activity}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Primary;
