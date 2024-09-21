import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../thunks/doctorThunk';

import { Phone, Mail, Award, User } from 'lucide-react';

function DoctorData() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.doctorData);
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Check if items is an array
  // const doctors = Array.isArray(items) ? items : [items];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-12  ">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            className="w-32 h-32 rounded-full border-4 border-green-500 object-cover"
            src={items.profilepic || '/api/placeholder/150/150'}
            alt={`Dr. ${items.username}`}
          />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h2 className="font-bold text-3xl text-green-700 mb-2">Dr. {items.username}</h2>
          <p className="font-semibold text-xl text-gray-700 mb-4">Specializes in treating cancer</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem icon={<Award className="w-5 h-5" />} label="Experience" value="10 years" />
            <InfoItem icon={<User className="w-5 h-5" />} label="Your ID" value={items.user_id} />
            <InfoItem icon={<Mail className="w-5 h-5" />} label="Email" value={items.email} />
            <InfoItem icon={<Phone className="w-5 h-5" />} label="Phone" value="+123 456 7890" />
          </div>
        </div>
      </div>
    </div>
  );
}

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-2">
    {icon}
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);


export default DoctorData;
