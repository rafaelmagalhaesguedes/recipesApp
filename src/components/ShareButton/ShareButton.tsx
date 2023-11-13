import { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';
import { LinkCopiedText } from '../../pages/RecipeDetails/Styles';
import { SharedButton } from './Styles';

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
    <>
      <SharedButton
        data-testid="share-btn"
        onClick={ handleClickShare }
      >
        <img src={ shareIcon } alt="shareButton" />
      </SharedButton>
      {isLinkCopied && <LinkCopiedText>Link copied!</LinkCopiedText>}
    </>
  );
}

export default ShareButton;
