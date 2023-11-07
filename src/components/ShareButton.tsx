import { useState } from 'react';
import shareIcon from '../images/Share.svg';
import { LinkCopiedText } from '../pages/RecipeDetails/Styles';

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
      {isLinkCopied && <LinkCopiedText>Link copied!</LinkCopiedText>}
    </div>
  );
}

export default ShareButton;
