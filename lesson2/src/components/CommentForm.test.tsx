import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommentForm from './CommentForm';

describe('CommentForm', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<CommentForm />);
    const titleInput = getByPlaceholderText('Title') as HTMLInputElement;
    const bodyInput = getByPlaceholderText('Body') as HTMLTextAreaElement;
    expect(titleInput).toBeInTheDocument();
    expect(bodyInput).toBeInTheDocument();
  });

  it('handles input changes', () => {
    const { getByPlaceholderText } = render(<CommentForm />);
    const titleInput = getByPlaceholderText('Title') as HTMLInputElement;
    const bodyInput = getByPlaceholderText('Body') as HTMLTextAreaElement;
    
    fireEvent.change(titleInput, { target: { value: 'New Comment Title' } });
    fireEvent.change(bodyInput, { target: { value: 'This is the body of the comment.' } });

    expect(titleInput.value).toBe('New Comment Title');
    expect(bodyInput.value).toBe('This is the body of the comment.');
  });

  it('submits the form and stores comment in localStorage', () => {
    const { getByText, getByPlaceholderText } = render(<CommentForm />);
    const titleInput = getByPlaceholderText('Title') as HTMLInputElement;
    const bodyInput = getByPlaceholderText('Body') as HTMLTextAreaElement;
    const submitButton = getByText('Submit');

    fireEvent.change(titleInput, { target: { value: 'Test Comment' } });
    fireEvent.change(bodyInput, { target: { value: 'This is a test comment.' } });

    fireEvent.click(submitButton);

    const storedComment = JSON.parse(localStorage.getItem('comments') || '[]');
    expect(storedComment.length).toBe(1);
    expect(storedComment[0].title).toBe('Test Comment');
    expect(storedComment[0].body).toBe('This is a test comment.');
  });
});
