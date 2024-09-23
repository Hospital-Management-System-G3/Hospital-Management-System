import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackList = ({ doctorId }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/feedback/doctor/${doctorId}`);
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, [doctorId]);

  return (
    <div>
      <h3>Feedbacks</h3>
      {feedbacks.map((feedback) => (
        <div key={feedback.feedback_id} className="mb-4 p-4 border rounded">
          <p>{feedback.feedback_message}</p>
          <p className="text-sm text-gray-500">By: {feedback.username}</p>
          <ReportList feedbackId={feedback.feedback_id} />
        </div>
      ))}
    </div>
  );
};