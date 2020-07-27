import React from 'react';
import './App.css';

function App() {
  let name ="Kirti"
  let paraStyle = {
    color: 'blue', backgroundColor:'grey'
  }
  return (
    <div>
        <p style={paraStyle}>
          Hello {name}
        </p>
    </div>

  );
}

export default App;
