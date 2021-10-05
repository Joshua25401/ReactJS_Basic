// ! Pada React setiap kelas itu disebut sebagai "KOMPONEN"
// ! Biasanya setiap komponen dibuat di dalam kelas.
// ! Data pada kelas disebut juga props (properties)
// ! Idealnya 1 File Javascript hanya punya 1 Kelas utama
import React from "react";

// ! Komponen juga dapat berupa kelas seperti yang dibawah ini
// ! Komponen App
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header" id="header1">
          Hello, World!
        </h1>
      </div>
    );
  }
}

// ! Note : yang di export adalah Komponen Utama
export default App;
