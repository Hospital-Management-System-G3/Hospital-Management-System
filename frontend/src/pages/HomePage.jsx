import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Heart, Activity, Clipboard, Hospital, Calendar, Users, HeartPulse, Stethoscope, Thermometer, Pill, BriefcaseMedical, Menu, X, Facebook, Twitter, Instagram, Linkedin, MessageCircle, Send, Search } from 'lucide-react';

const floatingIcons = [Heart, Activity, Clipboard, Hospital, Calendar, Users, Stethoscope, Thermometer, Pill, BriefcaseMedical, Heart, Activity, Clipboard, Hospital, Calendar];

const FloatingIcon = ({ Icon, delay }) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            y: [0, Math.random() * 40 - 20],
            x: [0, Math.random() * 40 - 20],
            transition: {
                y: { duration: 2, repeat: Infinity, repeatType: 'reverse', delay },
                x: { duration: 2, repeat: Infinity, repeatType: 'reverse', delay: delay + 0.5 }
            }
        });
    }, [controls, delay]);

    return (
        <motion.div
            className="absolute"
            animate={controls}
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
            }}
        >
            <Icon size={24} className="text-orange-400 opacity-50" />
        </motion.div>
    );
};


const AutoSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { title: "Expert Care", description: "Our team of board-certified specialists ensures top-quality healthcare, utilizing the latest medical advancements for your well-being.", icon: Stethoscope },
        { title: "Modern Facilities", description: "Experience healthcare in our state-of-the-art facilities, equipped with cutting-edge technology for accurate diagnosis and effective treatment.", icon: Hospital },
        { title: "Patient-Centric Approach", description: "Your comfort and well-being are our top priorities. We provide personalized care tailored to your unique health needs and preferences.", icon: Heart },
        { title: "24/7 Support", description: "Our dedicated team is available round the clock to address your health concerns and provide immediate assistance whenever you need it.", icon: Calendar },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-emerald-100 py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    {(() => {
                        const Icon = slides[currentSlide].icon;
                        return <Icon size={64} className="text-emerald-600 mx-auto mb-4" />;
                    })()}
                    <h2 className="text-3xl font-bold mb-4 text-emerald-800">{slides[currentSlide].title}</h2>
                    <p className="text-xl text-emerald-700">{slides[currentSlide].description}</p>
                </motion.div>
            </div>
        </section>
    );
};

const LoadingScreen = ({ onLoadingComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadingComplete();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <div className="fixed inset-0 bg-emerald-500 flex flex-col items-center justify-center z-50">
            <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: [0, 1.2, 1], rotate: 360 }}
                transition={{ duration: 2, times: [0, 0.8, 1] }}
                className="text-white mb-4"
            >
                <HeartPulse size={100} />
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white text-3xl font-bold"
            >
                Your Health, Our Priority
            </motion.h2>
        </div>
    );
};

const AutoSliderImage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { title: "State-of-the-Art Facilities", image: "https://www.purapharm.com/wp-content/uploads/2015/04/IMG_5134-hi-res-retouch-28Mar18-resized.jpg" },
        { title: "Dedicated Healthcare Professionals", image: "https://medicolink.com/wp-content/uploads/2019/04/medical-doctor-jobs-in-denmark-with-medical-recruitment-company-2-1030x427.png" },
        { title: "Patient-Centric Care", image: "https://www.intelichart.com/hs-fs/hubfs/Patient-Centric%20Care.png?width=914&name=Patient-Centric%20Care.png" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-96 overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white text-center">{slides[currentSlide].title}</h2>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

const ChatSidebar = ({ isOpen, onClose }) => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [doctors, setDoctors] = useState([
        { id: 1, name: "Dr. Smith", specialty: "Cardiologist", avatar: "https://www.w3schools.com/howto/img_avatar.png", lastMessage: "How can I help you today?" },
        { id: 2, name: "Dr. Johnson", specialty: "Pediatrician", avatar: "https://www.w3schools.com/howto/img_avatar.png", lastMessage: "Your test results are ready." },
        { id: 3, name: "Dr. Williams", specialty: "Dermatologist", avatar: "https://www.w3schools.com/howto/img_avatar.png", lastMessage: "Don't forget your appointment tomorrow." },
    ]);
    
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);
    const [searchTerm, setSearchTerm] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const filtered = doctors.filter(doctor =>
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDoctors(filtered);
    }, [searchTerm, doctors]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            const newMessage = { sender: 'patient', text: inputMessage, time: new Date() };
            setMessages([...messages, newMessage]);
            setInputMessage('');

            // Simulate a response from the doctor
            setTimeout(() => {
                const responseMessage = { sender: 'doctor', text: "Thank you for your message. How can I assist you today?", time: new Date() };
                setMessages(prevMessages => [...prevMessages, responseMessage]);
            }, 1000);
        }
    };

    const messageVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed top-0 right-0 h-full w-full sm:w-96 bg-emerald-50 shadow-lg overflow-hidden z-50 flex flex-col"
                >
                    <div className="bg-emerald-600 p-4 text-white flex justify-between items-center">
                        <h2 className="text-xl font-bold">Chat with Doctors</h2>
                        <button onClick={onClose} className="text-white hover:text-emerald-200">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-grow overflow-hidden">
                        {selectedDoctor ? (
                            <div className="flex flex-col h-full">
                                <div className="bg-emerald-100 p-4 flex items-center space-x-3">
                                    <button onClick={() => setSelectedDoctor(null)} className="text-emerald-600 hover:text-emerald-800">
                                        &larr;
                                    </button>
                                    <img src={selectedDoctor.avatar} alt={selectedDoctor.name} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{selectedDoctor.name}</h3>
                                        <p className="text-sm text-gray-600">{selectedDoctor.specialty}</p>
                                    </div>
                                </div>
                                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                                    {messages.map((msg, index) => (
                                        <motion.div
                                            key={index}
                                            variants={messageVariants}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className={`flex ${msg.sender === 'patient' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`max-w-[70%] p-3 rounded-lg ${msg.sender === 'patient'
                                                ? 'bg-emerald-500 text-white'
                                                : 'bg-white text-emerald-800'
                                                }`}>
                                                <p className="break-words">{msg.text}</p>
                                                <p className="text-xs mt-1 opacity-75">{msg.time.toLocaleTimeString()}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>
                                <div className="bg-white p-4 border-t flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        placeholder="Type a message..."
                                        className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="bg-emerald-500 text-white p-2 rounded-r-lg hover:bg-emerald-600 transition-colors duration-300"
                                    >
                                        <Send size={20} />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="overflow-y-auto h-full">
                                <div className="p-4 space-y-2">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search doctors..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full p-2 pl-10 rounded border focus:outline-none focus:ring-2 focus:ring-emerald-300"
                                        />
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    </div>
                                </div>
                                <ul className="space-y-2 p-4">
                                    {filteredDoctors.map(doctor => (
                                        <motion.li
                                            key={doctor.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            onClick={() => {
                                                setSelectedDoctor(doctor);
                                                // Add initial messages when selecting a doctor
                                                setMessages([
                                                    { sender: 'doctor', text: `Hello! I'm ${doctor.name}. How can I assist you today?`, time: new Date() },
                                                    { sender: 'patient', text: "Hi doctor, I have a question about my recent checkup.", time: new Date() },
                                                    { sender: 'doctor', text: "Of course, I'd be happy to help. What specific concerns do you have about your checkup?", time: new Date() },
                                                ]);
                                            }}
                                            className="cursor-pointer"
                                        >
                                            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg hover:bg-emerald-100 transition-colors duration-300 border border-emerald-200">
                                                <img src={doctor.avatar} alt={doctor.name} className="w-12 h-12 rounded-full" />
                                                <div className="flex-grow">
                                                    <div className="flex justify-between items-baseline">
                                                        <p className="font-semibold text-emerald-800">{doctor.name}</p>
                                                        <p className="text-xs text-emerald-600">12:34 PM</p>
                                                    </div>
                                                    <p className="text-sm text-emerald-700">{doctor.specialty}</p>
                                                    <p className="text-sm text-emerald-600 truncate">{doctor.lastMessage}</p>
                                                </div>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    if (isLoading) {
        return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">

            <main>
                <section className="relative py-20 overflow-hidden min-h-screen flex items-center "
                    style={{
                        backgroundImage: 'url("https://i.pinimg.com/736x/72/3b/f8/723bf831b674ed3fefdcd0e9c0030644.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                    <div
                        className="container px-6 relative z-10 mx-4 sm:mx-8 md:mx-16 lg:mx-24"

                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold mb-6 text-emerald-900"
                        >
                            Your Health, Our Priority
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl mb-8 text-emerald-800"
                        >
                            Experience modern healthcare with the help of experienced doctors.
                        </motion.p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 transition duration-300 text-lg"
                        >
                            Get Started
                        </motion.button>
                    </div>


                    {floatingIcons.map((Icon, index) => (
                        <FloatingIcon
                            key={index}
                            Icon={Icon}
                            delay={index * 0.2}
                        />
                    ))}
                </section>


                <section className="py-20 bg-white relative overflow-hidden px-16 max-sm:px-1">
                    <div className="container mx-auto px-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold text-center mb-12 text-emerald-900"
                        >
                            Our Services
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'General Checkup', icon: Activity, description: 'Comprehensive health assessments for your well-being.' },
                                { title: 'Specialized Care', icon: Heart, description: 'Expert treatment for specific health conditions.' },
                                { title: 'Emergency Services', icon: Hospital, description: '24/7 rapid response for urgent medical needs.' },
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-emerald-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300"
                                >
                                    <service.icon className="text-emerald-500 w-16 h-16 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-emerald-900">{service.title}</h3>
                                    <p className="text-emerald-800">{service.description}</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition duration-300"
                                    >
                                        Learn More
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {floatingIcons.map((Icon, index) => (
                        <FloatingIcon
                            key={index}
                            Icon={Icon}
                            delay={index * 0.2}
                        />
                    ))}
                </section>

                <AutoSliderImage />

                <section className="py-20 bg-emerald-600 text-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold text-center mb-12"
                        >
                            Why Choose Us
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { value: '5000+', label: 'Patients Treated' },
                                { value: '98%', label: 'Patient Satisfaction' },
                                { value: '50+', label: 'Specialist Doctors' },
                                { value: '24/7', label: 'Patient Support' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                                    <p className="text-xl">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {floatingIcons.map((Icon, index) => (
                        <FloatingIcon
                            key={index}
                            Icon={Icon}
                            delay={index * 0.2}
                        />
                    ))}
                </section>

                <section className="py-20 bg-white relative overflow-hidden px-16 max-sm:px-1">
                    <div className="container mx-auto px-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold text-center mb-12 text-emerald-900"
                        >
                            Featured Services
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: 'Modern Technology', description: 'State-of-the-art equipment for accurate diagnosis', image: 'https://www.raconteur.net/wp-content/uploads/2021/04/Future-hospital.jpg' },
                                { title: 'Expert Care', description: 'Experienced doctors providing personalized treatment', image: 'https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/2bgqjhmw_0iifqf_p8twtq.jpg' },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-emerald-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                                >
                                    <img src={feature.image} alt={feature.title} className="w-full h-64 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold mb-2 text-emerald-900">{feature.title}</h3>
                                        <p className="text-emerald-800">{feature.description}</p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="mt-4 bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition duration-300"
                                        >
                                            Learn More
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {floatingIcons.map((Icon, index) => (
                        <FloatingIcon
                            key={index}
                            Icon={Icon}
                            delay={index * 0.2}
                        />
                    ))}
                </section>
            </main>

            <AutoSlider />

            <motion.button
                className="fixed bottom-4 right-4 bg-emerald-500 text-white p-4 rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsChatOpen(true)}
            >
                <MessageCircle size={24} />
            </motion.button>

            <ChatSidebar isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

        </div>
    );
};

export default HomePage;