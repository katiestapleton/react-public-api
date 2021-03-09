import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './App.css';
import List from './components/list';
import withListLoading from './components/withListLoading';

function App() {
  

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    axios.get(apiUrl).then((repos) => {
      console.log("hi",repos.data)
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repos</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built with {' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          by a human
        </div>
      </footer>
    </div>
  );
}
export default App;