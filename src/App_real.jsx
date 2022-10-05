import logo from './assets/LB_Logo.png';
import logotop from './assets/LevelBlack-top.png';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
       <nav className='headerfooterbackg p-8' >
       <span className='text-1xl cursor-pointer'>
       <div class="flex mb-4">
  <div class="w-1/3 bg-black-400 h-12">
  <ul className='md:flex md:items-start'>
        <li className='customgradient2 mx-4 pt-6'>
          <a href="#">OUR CARS</a>
        </li>
        <li className='customgradient2 mx-4 pt-6'>
          <a href="#">GET A QUOTE</a>
        </li>
        </ul>
  </div>
  <div class="w-1/3 bg-black-500 h-12">
  <div class="flex flex-wrap justify-center">
        <img src={logotop} alt="..." class="shadow rounded w-36 h-auto align-middle border-none" />
    </div>
  </div>
  <div class="w-1/3 bg-black-400 h-12">
  <ul className='md:flex flex justify-end'>
        <li className='customgradient2 mx-4 pt-6'>
          <a href="#">ABOUT US</a>
        </li>
        <li className='customgradient2 mx-4 pt-6'>
          <a href="#">CONTACT US</a>
        </li>
       </ul>
  </div>
</div>
</span>
       </nav>


      <main className="container mx-auto px-6 pt-16 flex-1 text-center">      
        <div className='customtextpad3  uppercase'>
        <p className='customgradient2'>luxury, sports, suvs and more<br />available to hire</p>
        </div>


        <div className='customtextpad'>
        <div className='customgradient2'>GET IN TOUCH TODAY</div>
        </div>

        <div className=''>
        <div className='customgradient'>FOLLOW US ON INSTAGRAM</div>
        </div>

        <div className=''>
        <div className='customgradient'>
        <a href="https://www.instagram.com/levelblackhire/">@LLEVELBLACKHIRE</a>
        </div>
        </div>
      </main>
      

      
      <footer className="headerfooterbackg p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6" >
      <img src={logo} />
      <div className="flex -mx-6">
        <a href="mailto:sales@levelblack.com" className="customgradient2 mx-3 hover:opacity-80 duration-150">sales@levelblack.com</a>
        <a href="mailto:info@levelblack.com" className="customgradient2 mx-3 hover:opacity-80 duration-150">info@levelblack.com</a>
      </div>
      </footer>
    </div>
  );
};

export default App
