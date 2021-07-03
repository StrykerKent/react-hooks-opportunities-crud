import { render, screen } from '@testing-library/react';
import App from './App';
import AddOpportunity from './components/AddOpportunity';
import OpportunityTable from './components/OpportunityTable';
import EditOpportunityForm from './components/EditOpportunityForm';

test('Navbar rendered in App component', () => {
  render(<App />);
  const navbarTitle = screen.getByText(/React Hooks Opportunity CRUD/i);
  expect(navbarTitle).toBeInTheDocument();
});

test('App component rendered', () => {
  render(<App />);
  const container = screen.getByText('Opportunities');
  expect(container).toBeInTheDocument();
});

test('OpportunityTable component rendered', () => {
  const fakeData = [
    { id: 1, name: 'TEST1', account: 'test', location: 'test' },
    { id: 2, name: 'TEST2', account: 'test', location: 'test' },
  ];
  render(<OpportunityTable opportunities={fakeData} />);
  expect(document.querySelector('table')).toBeInTheDocument();
});

test('AddOpportunity component rendered', () => {
  render(<AddOpportunity />);
  expect(document.querySelector('#name')).toBeInTheDocument();
});

test('EditOpportunityForm component rendered with data in it', () => {
  const currentOpportunity = {
    id: 1,
    name: 'Valero Expansion Project',
    account: 'Valero',
    location: 'Port Arthur, TX',
  };
  render(
    <EditOpportunityForm
      setEditing={true}
      currentOpportunity={currentOpportunity}
    />
  );
  expect(document.querySelector('#name').value).toBe(
    'Valero Expansion Project'
  );
});
