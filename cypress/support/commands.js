import loginPage from '../../cypress/integration/page-objects/login-page'
import homePage from '../../cypress/integration/page-objects/home-page'

Cypress.Commands.add('loginViaUI', (username, password) => {
  loginPage.open()
  loginPage.emailTxt.type(username)
  loginPage.passwordTxt.type(password)
  loginPage.submitBtn.click()
})

Cypress.Commands.add('loginViaAPI', (email, pwd) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('apiServer') + '/users/login',
    headers: {
      'content-type': 'application/json',
    },
    body: {
      user: { email: email, password: pwd },
    },
  }).then((res) => {
    expect(res.status).to.be.eq(200)
    window.localStorage.setItem('jwt', res.body.user.token)
  })
})

Cypress.Commands.add('loginViaUISession', (username, password) => {
  cy.session(
    [username, password],
    () => {
      loginPage.open()
      loginPage.emailTxt.type(username)
      loginPage.passwordTxt.type(password)
      loginPage.submitBtn.click()
      homePage.homeMenu.should('be.visible')
    },
    {
      validate() {
        cy.visit('/')
        homePage.homeMenu.should('be.enabled')
      },
    },
  )
})

Cypress.Commands.add('loginViaAPISession', (uname, pwd) => {
  cy.session(
    [uname, pwd],
    () => {
      cy.request({
        method: 'POST',
        url: Cypress.env('apiServer') + '/users/login',
        headers: {
          'content-type': 'application/json',
        },
        body: {
          user: { email: uname, password: pwd },
        },
      }).then((res) => {
        expect(res.status).to.eq(200)
        window.localStorage.setItem('jwt', res.body.user.token)
      })
    },
    {
      validate() {
        cy.visit('/')
        homePage.newPostMenu.should('be.visible')
      },
    },
  )
})
