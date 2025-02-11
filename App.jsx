import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Header from './Header';
import Button from './Button';


function Home() {
  return (<div>
      <Header TITLE ="สวัสดี React!" />
      <h2>หน้าหลัก</h2>
      <p>ยินดีต้อนรับสู่การพัฒนาเว็บแอปด้วย React</p>
    </div>
  );
}

function About() {
  const handleClick = () => {
    alert('It is here!');
  };

  return (<div>
      <Header title="React Workshop" />
      <p>เรียนรู้พื้นฐานของ React ผ่านการปฏิบัติจริง</p>
      <Button label="คลิกตรงนี้" onClick={handleClick} />
    </div>);
}

function Greeting() {
  const user = {
    name: 'John Doe',
    age: 25,
  };

  return (
    <div>
      <Header title="React Workshop" />
      <p>ชื่อ: {user.name}, อายุ: {user.age}</p>
      <Button label="ตกลง" onClick={() => alert('สวัสดี ' + user.name)} />
    </div>
  );
}

function App() {
  return (
    <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/greeting">Greeting</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </Router>
  );
}
export default App;
