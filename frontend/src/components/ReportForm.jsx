const ReportForm = ({ feedbackId, onReportSubmit }) => {
    const [reportMessage, setReportMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/report', {
          feedbackId,
          reportMessage
        });
        onReportSubmit(response.data);
        setReportMessage('');
      } catch (error) {
        console.error('Error submitting report:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <textarea
          value={reportMessage}
          onChange={(e) => setReportMessage(e.target.value)}
          placeholder="Write your report here"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
          Submit Report
        </button>
      </form>
    );
  };
  
  export { FeedbackList, ReportList, FeedbackForm, ReportForm };
  