describe('cypress leaflet test', () => {
  it('pin moveing test', () => {

    cy.visit('http://127.0.0.1:8081/')

    // move pin
    cy.get('.leaflet-marker-draggable')
      .trigger('mousedown')
      .trigger('dragstart', {which: 1, force: true})
      .trigger('drag', {which: 1, x: 200, y: 100, force: true} )
      .trigger('dragend', {which: 1, x: 200, y: 100, force: true})
      .trigger('mouseup', {which: 1, x: 200, y: 100, force: true})
//      .trigger('mousedown')
//      .trigger('mousemove', {x: 100, y: 100, force: true})
//      .trigger('mousup', {x: 100, y: 100, force: true})
  })
})
