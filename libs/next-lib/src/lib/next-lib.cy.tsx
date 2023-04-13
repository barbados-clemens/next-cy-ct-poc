import * as React from 'react'
import NextLib, { NextLibProps } from './next-lib'


describe(NextLib.name, () => {
  let props: NextLibProps;

  beforeEach(() => {
    props = {
    }
  })

  it('renders', () => {
    cy.mount(<NextLib {...props}/>)
  })
})

