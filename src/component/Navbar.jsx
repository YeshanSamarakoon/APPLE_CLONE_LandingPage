import { samImg2, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"

 const Navbar = () => {
   return (
     <header className="w-full py-5 sm:px-10 px-5 flex
     justify-between items-center bg-white">
        <nav className="flex w-full screen-max-width">
        <img src={samImg2} alt="Apple" width={150}
            height={180}/>
          <div className="flex flex-1 justify-center
          max-sm:hidden">


            {navLists.map((nav) =>
             (
                <div key={nav} className="px-5 text-sm
                cursor-pointer text-gray hover:text-black
                transition-all">
                    {nav}
                </div>
            ))} 

            </div>   

            <div className="flex items-baseline gap-7
            max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search" 
                    width={18} height={18}/>
                    <img src={bagImg} alt="search" 
                    width={18} height={18}/>
            </div>  
             
        </nav>

     </header>
   )
 }
 
 export default Navbar
 