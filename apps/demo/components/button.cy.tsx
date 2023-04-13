import * as React from 'react';
import Button from './button';

describe(Button.name, () => {
  it('renders', () => {
    cy.mount(<Button text={'test'} />);
  });

  it('should apply tailwind', () => {
    cy.mount(<Button text={'tailwind'} />);

    cy.get('p').should('have.css', 'color', 'rgb(37, 99, 235)');
  });
});
