import { render, screen } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils';
import { renderHook, act } from 'react-dom/test-utils';
import App from './App';
import AddOpportunity from './components/AddOpportunity'
import OpportunityTable from './components/OpportunityTable'
import userEvent from '@testing-library/user-event'

test('check if navbar loaded in App component', () => {
  render(<App />);
  const navbarTitle = screen.getByText(/React Hooks Opportunity CRUD/i);
  expect(navbarTitle).toBeInTheDocument();
});

test('check if App component loaded', () => {
  render(<App />);
  const container = screen.getByText('Opportunities')
  expect(container).toBeInTheDocument();
});

test('check if OpportunityTable component loaded', () => {
  const fakeData = [
    { id: 1, name: 'TEST1', account: 'test', location: 'test' },
    { id: 2, name: 'TEST2', account: 'test', location: 'test' }
  ]
  render(<OpportunityTable opportunities={fakeData}/>);
  expect(document.querySelector('table')).toBeInTheDocument()
})

test('check if AddOpportunity component loaded', () => {
  render(<AddOpportunity />);
  expect(document.querySelector('#name')).toBeInTheDocument()
})