import { useState } from 'react';

export default function useCopyToClipboard() {
  const [codeCopied, setCodeCopied] = useState(false);

  function handleCopy(codeTemplate) {
    navigator.clipboard.writeText(codeTemplate);
    setCodeCopied(true);
    setTimeout(() => {
      setCodeCopied(false);
    }, 3000);
  }

  return [codeCopied, handleCopy];
}
