import Signup from "./Signup";

function Home() {
  return (
    <div class="text-center">      
      <h1>Welcome to MedEnRoll</h1>
      <h2>
        Making appointments just got easier. Get rid of long queues and doctor's forms 
        before you enter a doctor's. Sign up today!
      </h2>
      <Signup></Signup>
    </div>
  );
}

export default Home;
