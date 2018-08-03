import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';

const Title = styled('h1', {
  fontFamily: 'Lobster',
  fontSize: '3em',
  color: 'gray',
  lineHeight: '1.2',
  marginBottom: 0
});

const Subtitle = styled('h2', {
  fontFamily: 'Montserrat',
  fontSize: '1.5em',
  color: 'lightgray',
  lineHeight: '1.2'
});

const Citation = styled('span', {
  fontSize: '0.8em',
  marginBottom: '2em'
});

const Header = () => {
  return [
    <Title key="h1">Tofu [tuh-foo]</Title>,
    <Subtitle key="h2">My first fusion-based app</Subtitle>,
    <Citation key="citation">Check it out at <a href="http://fusionjs.com" target="_blank">http://fusionjs.com</a></Citation>
  ];
};

export default Header;
