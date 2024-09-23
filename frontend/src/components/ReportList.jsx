const ReportList = ({ feedbackId }) => {
    const [reports, setReports] = useState([]);
    const [showReports, setShowReports] = useState(false);
  
    useEffect(() => {
      if (showReports) {
        const fetchReports = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/api/report/feedback/${feedbackId}`);
            setReports(response.data);
          } catch (error) {
            console.error('Error fetching reports:', error);
          }
        };
  
        fetchReports();
      }
    }, [feedbackId, showReports]);
  
    return (
      <div>
        <button onClick={() => setShowReports(!showReports)}>
          {showReports ? 'Hide Reports' : 'Show Reports'}
        </button>
        {showReports && (
          <div>
            {reports.map((report) => (
              <div key={report.report_id} className="ml-4 mt-2 p-2 bg-gray-100 rounded">
                <p>{report.report_messege}</p>
                <p className="text-sm text-gray-500">By: {report.username}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  