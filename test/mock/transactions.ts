export type Transaction = {
  id: string;
  title: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
  /** Optional status label e.g. "Pending" */
  status?: string;
};

// Sample data inspired by the provided mock-up
export const transactions: Transaction[] = [
  {
    id: '1',
    title: 'James',
    amount: -200000,
    date: 'May 28, 2024',
    type: 'expense',
    status: 'Pending',
  },
  {
    id: '2',
    title: 'James',
    amount: -200000,
    date: 'May 28, 2024',
    type: 'expense',
    status: 'Pending',
  },
  {
    id: '3',
    title: 'Susan',
    amount: 200000,
    date: 'May 28, 2024',
    type: 'income',
  },
  {
    id: '4',
    title: 'Susan',
    amount: 200000,
    date: 'May 28, 2024',
    type: 'income',
  },
];
