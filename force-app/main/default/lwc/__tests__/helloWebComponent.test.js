// createElement is what we'll use to create our component under test
import { createElement } from 'lwc';

// Import module under test by convention <namespace>/<moduleName>
import helloWebComponent from 'c/helloWebComponent';

let element;
let lwcInput;

describe('helloWorld', () => {
    beforeEach(() => {
      element = createElement('c-hello-web-component', { is: helloWebComponent });
      document.body.appendChild(element);

      lwcInput = element.shadowRoot.querySelector('lightning-input');
    });

    it('displays expected header text', () => {
      const expectedText = 'Hello Trailblazer!';

      // Create an instance of the component under test
      // note the different naming scheme when referencing component...
      // const element = createElement('c-hello-web-component', { is: helloWeb });

      // Add component to DOM (jsdom) so it renders, goes through creation lifecycle
      // document.body.appendChild(element);

      // Find the header element we want to inspect
      const header = element.shadowRoot.querySelector('h2');

      // Compare the found text with the expected value
      expect(header.textContent).toEqual(expectedText);

      // Available "expect" APIs can be found here: 
      // https://facebook.github.io/jest/docs/en/expect.html
    });

    it('changes value', () => {
      lwcInput.value = 'Different Person';
      const changeEvent = new Event('change');
      lwcInput.dispatchEvent(changeEvent);

      expect(element.getGreeting()).toEqual('Hello DIFFERENT PERSON!');
    });
});