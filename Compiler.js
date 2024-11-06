import React, { useState } from 'react';
import axios from 'axios';

const CodeSubmit = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [inputData, setInputData] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/users/compiler', new URLSearchParams({
        code: code,
        language: language,
        input_data: inputData,
      }));
      setResult(response.data);
    } catch (error) {
      setResult({ error: error.response ? error.response.data.error : 'Unknown error' });
    }
  };

  return (
    <div>
      <h1>Code Submit</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here"
        rows="10"
        cols="50"
      ></textarea>
      <br />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
      </select>
      <br />
      <textarea
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter input data"
        rows="5"
        cols="50"
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit Code</button>

      {result && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeSubmit;
