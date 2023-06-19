import React, { FC } from 'react';

import './style.css';
import { Table } from '../Grid';

const App: FC = () => {
  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
}


export default App;
