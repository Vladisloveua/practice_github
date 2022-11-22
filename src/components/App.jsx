import React, { useState } from 'react';

function App() {
  const list = [
    'Banana',
    'Apple',
    'Orange',
    'Mango',
    'Pineapple',
    'Watermelon',
  ];

  const [filterList, setFilterList] = useState(list);
  console.log([setFilterList]);

  const handleSearch = event => {
    if (event.target.value === '') {
      setFilterList(list);
      return;
    }

    const filteredValues = list.filter(
      item =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div>
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
}

export default App;
