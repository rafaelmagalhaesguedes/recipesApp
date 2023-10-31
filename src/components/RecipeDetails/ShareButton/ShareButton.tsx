import { useState } from 'react';
import shareIcon from '../../../images/shareIcon.svg';

function ShareButton() {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  // Get recipe link
  const recipeLink = window.location.href;

  // Copy link to clipboard
  const handleClickShare = () => {
    navigator.clipboard.writeText(recipeLink);
    setIsLinkCopied(true);
  };

  return (
    <div>
      <button
        data-testid="share-btn"
        onClick={ handleClickShare }
      >
        <img src={ shareIcon } alt="shareButton" />
      </button>
      {isLinkCopied && <p>Link copied!</p>}
    </div>
  );
}

export default ShareButton;
