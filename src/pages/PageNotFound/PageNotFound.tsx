import { Link } from 'react-router-dom';
import { ContainerNotFound } from './Styles';

function PageNotFound() {
  return (
    <ContainerNotFound>
      <span>404</span>
      <h1>Page Not Found</h1>
      <Link to="/meals">Back to Home</Link>
    </ContainerNotFound>
  );
}

export default PageNotFound;
