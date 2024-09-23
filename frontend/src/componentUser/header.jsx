import React, { useState } from 'react';
import {Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo.png"




const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg sticky top-0 z-50 text-white px-16 max-sm:px-0"
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.div
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='w-10 h-10'>
                            <img src={logo} alt="Carelth Logo" className="mr-2 rounded-full" />
                        </div>
                        <div className="text-2xl font-bold">Carelth</div>
                    </motion.div>
                    <div className="hidden md:flex space-x-6">
                        {['Home', 'Services', 'Hospitals', 'About Us', 'Contact'].map((item) => (
                            <motion.a
                                key={item}
                                href="#"
                                className="hover:text-emerald-200 transition duration-300 font-semibold"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                    {false ? (
                        <Link to="/profile">
                            <motion.button
                                className="hidden md:block bg-white text-emerald-500 px-6 py-2 rounded-full hover:bg-emerald-100 transition duration-300 font-semibold shadow-md"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Profile
                            </motion.button>
                        </Link>
                    ) : (
                        <div className="hidden md:flex space-x-4">
                            <motion.button
                                className="bg-white text-emerald-500 px-6 py-2 rounded-full hover:bg-emerald-100 transition duration-300 font-semibold shadow-md"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsLoggedIn(true)}
                            >
                                Sign Up
                            </motion.button>
                            <motion.button
                                className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition duration-300 font-semibold shadow-md"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsLoggedIn(true)}
                            >
                                Log In
                            </motion.button>
                        </div>
                    )}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-emerald-600 p-4"
                    >
                        {['Home', 'Services', 'Hospitals', 'About Us', 'Contact'].map((item) => (
                            <motion.a
                                key={item}
                                href="#"
                                className="block py-2 hover:text-emerald-200 transition duration-300"
                                whileHover={{ x: 10 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                        {false ? (
                            <Link to="/profile">
                                <motion.button
                                    className="mt-4 w-full bg-white text-emerald-500 px-6 py-3 rounded-full hover:bg-emerald-100 transition duration-300 font-semibold"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Profile
                                </motion.button>
                            </Link>
                        ) : (
                            <>
                                <motion.button
                                    className="mt-4 w-full bg-white text-emerald-500 px-6 py-3 rounded-full hover:bg-emerald-100 transition duration-300 font-semibold"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsLoggedIn(true)}
                                >
                                    Sign Up
                                </motion.button>
                                <motion.button
                                    className="mt-4 w-full bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition duration-300 font-semibold"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsLoggedIn(true)}
                                >
                                    Log In
                                </motion.button>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;