import { useState } from 'react';

function useShare() {
  const [message, setMessage] = useState('');

  const handleClickShare = (recipeId: number, recipeType: string) => {
    const recipeLink = `${window.location.origin}/${recipeType}s/${recipeId}`;
    navigator.clipboard.writeText(recipeLink);
    setMessage('Link copied!');
    return message;
  };

  return { handleClickShare, message };
}

export default useShare;
