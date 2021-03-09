import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <div>
      <h2 className='list-head'>Repos</h2>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.id} className='list'>
              <h3>{repo.name}</h3>
              <p><a href={repo.clone_url}>{repo.description}</a></p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default List;