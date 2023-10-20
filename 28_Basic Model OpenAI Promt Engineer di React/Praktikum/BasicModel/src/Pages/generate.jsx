import React, { useState } from "react";
import Button from "../components/Button";
import OpenAI from "openai";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColorRing } from "react-loader-spinner";

const GenerateName = () => {
  const [inputName, setInputName] = useState(''); 
  const [generatedName, setGeneratedName] = useState('');
  const [loading, setLoading] = useState(false);

  const openai = new OpenAI({
    apiKey: "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", 
    dangerouslyAllowBrowser: true,
  });

  const handleGenerateName = async () => {
    setLoading(true);

    try {
      const res = await openai.completions.create({
        prompt: `Generate a name similar to ${inputName}`, 
        max_tokens: 20, 
        n: 1, 
        model: "text-davinci-002",
      });

      setGeneratedName(res.choices[0].text);
    } catch (error) {
      console.error("Error generating name:", error);
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">Name Generator</h2>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">Enter a Name:</label>
            <input
              type="text"
              id="inputName"
              className="form-control"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Enter a name"
            />
          </div>
          <Button
            text="Generate Name"
            onClick={handleGenerateName}
            className="btn btn-primary"
            disabled={loading}
          />
          {loading && 
          <div className="text-center">
          <ColorRing
            visible={true}
            height={80}
            width={80}
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
          </div>}
          {generatedName && (
            <div className="mt-4">
              <p className="fw-bold">Generated Name:</p>
              <p>{generatedName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateName;
