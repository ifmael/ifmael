import { React } from 'react';
import { Link } from 'gatsby';


const NavigationPages = ({ previousPage, nextPage }) => {
  const buildButton = (link, text) =>{
    return (
      <Link to={ link }>
        <button> { text } </button>
      </Link>
    )
  };
  const previousButton = previousPage && buildButton(previousPage, '<<');
  const nextButton = nextPage && buildButton(nextPage, '>>');

  return (
    <div>
      { previousButton }
      { nextButton }
    </div>
  );
}

export default NavigationPages;