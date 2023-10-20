import React, { useState } from "react";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import OpenAI from "openai";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColorRing } from "react-loader-spinner";

const ChatQnA = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const handleQnA = async () => {
    setLoading(true);

    try {
      const res = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful assistant that answers questions." },
          { role: "user", content: question },
        ],
        model: "gpt-3.5-turbo",
      });

      setAnswer(res.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching QnA response:", error);
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">Q&A Chat</h2>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <TextArea
            name="question"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Tanyakan pertanyaan Anda..."
            className="form-control mb-3"
          />
          <Button
            text="Ask"
            onClick={handleQnA}
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
          {answer && (
            <div className="mt-4">
              <p className="fw-bold">Jawaban:</p>
              <p>{answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatQnA;