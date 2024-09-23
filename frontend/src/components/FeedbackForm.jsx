const FeedbackForm = ({ doctorId, onFeedbackSubmit }) => {
    const [feedbackMessage, setFeedbackMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/feedback', {
          doctorId,
          feedbackMessage
        });
        onFeedbackSubmit(response.data);
        setFeedbackMessage('');
      } catch (error) {
        console.error('Error submitting feedback:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedbackMessage}
          onChange={(e) => setFeedbackMessage(e.target.value)}
          placeholder="Write your feedback here"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Submit Feedback
        </button>
      </form>
    );
  };
  