import React, { useState, useEffect } from "react";
import axios from "axios";

const Compiler = () => {
  const [codingTest, setCodingTest] = useState(null); // Store question and template
  const [code, setCode] = useState(""); // User's code input
  const [language, setLanguage] = useState("python"); // Default language
  const [feedback, setFeedback] = useState(""); // Feedback from backend
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch the coding test question and code template on component mount
  useEffect(() => {
    fetchCodingTest();
  }, [language]);

  // Function to fetch the coding test question and code template
  const fetchCodingTest = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/users/compiler`, { params: { language } });
      setCodingTest(response.data);
      setCode(response.data.template); // Prefill with the fetched template
    } catch (error) {
      console.error("Error fetching coding test:", error);
    }
  };

  // Function to handle the code submission
  const submitCode = async () => {
    if (!code) {
      alert("Please enter some code.");
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await axios.post(`http://127.0.0.1:8000/users/compiler`, { code, language });
      setFeedback(response.data.feedback); // Set the feedback from the server
    } catch (error) {
      console.error("Error submitting code:", error);
      setFeedback("There was an error while submitting the code.");
    }
    
    setLoading(false);
  };

  return (
    <div>
      <h1>Coding Test</h1>

      {/* Display the question */}
      {codingTest ? (
        <div>
          <h2>Question: {codingTest.question_text}</h2>
        </div>
      ) : (
        <p>Loading question...</p>
      )}

      {/* Code input field */}
      <div>
        <textarea
          className="outline"
          rows="10"
          cols="50"
          placeholder="Write your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      {/* Language Selector */}
      <div>
        <label>Language: </label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
          {/* Add more languages as needed */}
        </select>
      </div>

      {/* Submit Button */}
      <button onClick={submitCode} disabled={loading} className="search m-4 p-4 items-center rounded-2xl bg-blue-500 text-white">
        {loading ? "Submitting..." : "Submit Code"}
      </button>

      {/* Feedback Section */}
      {feedback && (
        <div>
          <h3>Feedback:</h3>
          <pre>{feedback}</pre>
        </div>
      )}
    </div>
  );
};

export default Compiler;
