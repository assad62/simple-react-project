import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return <div>
    <h1>Home</h1>
    <button onClick={ ()=> navigate("/blogs")}>Delete Row</button>
  </div>;
};

export default Home;