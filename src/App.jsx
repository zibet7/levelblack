import logo from './assets/LB_Logo.png';


function App() {
  return (
      <div>
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

export default App;
