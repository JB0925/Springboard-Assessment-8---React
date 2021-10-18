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


