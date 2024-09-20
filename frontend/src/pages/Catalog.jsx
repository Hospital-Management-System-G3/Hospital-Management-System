import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctorsAndNurses } from '../slices/catalogSlice';
import Card from "../components/card";
import { Search } from "lucide-react";

function Physiotherapy() {
  const dispatch = useDispatch();
  const { doctorsNurses, loading, error } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchDoctorsAndNurses());
  }, [dispatch]);

  const filteredDoctorsNurses = doctorsNurses.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center text-xl mt-8">Loading...</p>;
  if (error) return <p className="text-center text-xl mt-8 text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Doctors and Nurses</h1>
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border rounded shadow-sm"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDoctorsNurses.map((user) => (
          <Card key={user.username} username={user.username} profilepic={user.profilepic} />
        ))}
      </div>
    </div>
  );
}

export default Physiotherapy;