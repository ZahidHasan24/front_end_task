import { useEffect, useState } from "react";

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      setIsCopied(false);
    }
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  return {
    handleCopyClick,
    isCopied,
  };
};

export default useCopyToClipboard;
