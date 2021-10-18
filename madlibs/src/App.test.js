import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import MadLib from "./MadLib";
import MadLibForm from "./MadLibForm";
import MadLibArea from "./MadLibArea";

describe("Smoke tests for the Madlibs app - do the components render as they should?", () => {
  test('renders the App component', () => {
    render(<App />);
  });

  test('renders the MadLib component', () => {
    render(<MadLib />);
  });

  test('renders the MadLibForm component', () => {
    render(<MadLibForm />);
  });

  test('renders the MadLibArea component', () => {
    render(<MadLibArea />);
  });
});

describe('Snapshot tests - does each component match the snapshot?', () => {
  test('The App component matches the snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('The MadLib component matches the snapshot', () => {
    const { asFragment } = render(<MadLib />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('The MadLibForm component matches the snapshot', () => {
    const { asFragment } = render(<MadLibForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('The MadLibArea component matches the snapshot', () => {
    const { asFragment } = render(<MadLibArea />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Submitting the MadLibForm renders a new MadLib in browser', () => {
  test('form submission renders a new MadLib', () => {
    const { getByText, queryByText, getByLabelText } = render(<MadLibArea />);
    const nounInput = getByLabelText("Enter a Noun");
    const nounTwoInput = getByLabelText("Enter Another Noun");
    const adjInput = getByLabelText("Enter an Adjective");
    const colorInput = getByLabelText("Enter a Color");
    const submitBtn = queryByText("Submit");
    expect(document.body).not.toContainHTML('class="MadLib"');

    fireEvent.change(nounInput, {target: { value: 'bike'}});
    fireEvent.change(nounTwoInput, { target: { value: 'frog' }});
    fireEvent.change(adjInput, { target: { value: "silly" }});
    fireEvent.change(colorInput, { target: { value: "blue" }});
    fireEvent.click(submitBtn);

    // MadLibArea should now contain an instance of the MadLib component, and
    // NOT an instance of the MadLibForm
    expect(document.body).toContainHTML('class="MadLib"');
    expect(document.body).not.toContainHTML('class="MadLibForm"');

    // Click the reset button
    const resetBtn = queryByText("Reset");
    fireEvent.click(resetBtn);

    // Now, MadLibForm should be showing, and NOT a MadLib component
    expect(document.body).toContainHTML('class="MadLibForm"');
    expect(document.body).not.toContainHTML('class="MadLib"');
  });
});


