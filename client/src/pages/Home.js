import './style.css';
function Home() {
  return (
    <div className="main">
    <div className="content" >      
      <h1 className="text-center animation">Welcome to MedEnRoll</h1>
      <br/>
      <h5 className="title">
        Making appointments just got easier. Get rid of long queues and doctor's forms 
        before you enter a doctor's. Sign up today!
      </h5>
      
      <img className='home-img'  src='images/home-page.jpg' alt='doctor' />
    </div>
    </div>
  );
}

export default Home;
