import React, { useState } from "react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopyClick}
        className="absolute top-2 right-2 p-2 bg-gray-700 text-white text-sm rounded hover:bg-gray-600"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre className="bg-gray-800 p-4 rounded-lg text-black overflow-auto">
        <code className="block whitespace-pre-wrap text-left text-gray-200">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;

