import React from 'react';
import CommentForm from './components/CommentForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Comment Posting App:</h1>
      <CommentForm />
    </div>
  );
};

export default App;
