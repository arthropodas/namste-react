import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompilerAdmin = () => {
  const [codingTests, setCodingTests] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [language, setLanguage] = useState('python');
  const [codeTemplate, setCodeTemplate] = useState('');
  const [expectedOutput, setExpectedOutput] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Fetch all coding tests on component mount
  useEffect(() => {
    fetchCodingTests();
  }, []);

  const fetchCodingTests = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/users/coding-tests/');
      setCodingTests(response.data);
    } catch (error) {
      console.error("Error fetching coding tests:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTest = { question_text: questionText, language, code_template: codeTemplate, expected_output: expectedOutput };

    try {
      if (editingId) {
        // Update existing test
        await axios.put(`http://127.0.0.1:8000/users/coding-tests/${editingId}/`, newTest);
      } else {
        // Create new test
        await axios.post('http://127.0.0.1:8000/users/coding-tests/', newTest);
      }
      fetchCodingTests();
      resetForm();
    } catch (error) {
      console.error("Error saving coding test:", error);
    }
  };

  const resetForm = () => {
    setQuestionText('');
    setLanguage('python');
    setCodeTemplate('');
    setExpectedOutput('');
    setEditingId(null);
  };

  const handleEdit = (codingTest) => {
    setQuestionText(codingTest.question_text);
    setLanguage(codingTest.language);
    setCodeTemplate(codingTest.code_template);
    setExpectedOutput(codingTest.expected_output);
    setEditingId(codingTest.id);
  };

  return (
    <div>
      <h1>Manage Coding Tests</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Question Text:</label>
          <textarea value={questionText} onChange={(e) => setQuestionText(e.target.value)} required />
        </div>
        <div>
          <label>Language:</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>
        <div>
          <label>Code Template:</label>
          <textarea value={codeTemplate} onChange={(e) => setCodeTemplate(e.target.value)} required />
        </div>
        <div>
          <label>Expected Output:</label>
          <textarea value={expectedOutput} onChange={(e) => setExpectedOutput(e.target.value)} required />
        </div>
        <button type="submit">{editingId ? 'Update Test' : 'Add Test'}</button>
        <button type="button" onClick={resetForm}>Clear</button>
      </form>

      <h2>Existing Coding Tests</h2>
      <ul>
        {codingTests.map((test) => (
          <li key={test.id}>
            <strong>Language:</strong> {test.language} <br />
            <strong>Question:</strong> {test.question_text} <br />
            <strong>Expected Output:</strong> {test.expected_output}
            <button onClick={() => handleEdit(test)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompilerAdmin;
