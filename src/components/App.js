import React from 'react'

const App = () => {
  const relatives = [
    'John',
    'Emily',
    'Michael',
    'Sophia',
    'Daniel',
    'Olivia'
  ];

  return (
    <div>
      <h1>Relatives to Visit for Diwali</h1>
      <ol id="relativeList">
        {relatives.map((relative, index) => (
          <li id={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  )
}

export default App
