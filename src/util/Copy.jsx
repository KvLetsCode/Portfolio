import { useState } from "react";
import { FiCopy } from "react-icons/fi";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "chaudharykeshu9@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  return (
    <div className=" px-3 py-2 rounded-lg ">
      <button onClick={copyToClipboard} className="hover:text-white text-gray-400 cursor-pointer flex items-center  font-semibold lg:text-xl gap-2 text-lg">
        <FiCopy className={`w-5 h-5 ${copied && "text-white"}`} />
        {copied ? <span className=" text-white text-lg lg:text-xl">Copied!</span>: <span>{email}</span>}
              
        </button>
    </div>
  );
}
