
import { MdOutlinePerson } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import { SlMagnifier } from "react-icons/sl";
import { MdOutlineFileUpload } from "react-icons/md";


import Image from "next/image";

export default function Navbar() {
  return (
    <div className="p-4 flex items-center shado px-8 justify-between bg-gray-100">
      
   
      <div>
        <Image alt="next" src="/next.svg" width={120} height={40} />
      </div>

    
      <div className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1">
        <SlMagnifier className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-64"
        />
      </div>

    
      <div className="flex items-center gap-3">
        <span className="outline px-3 gap-1 outline-gray-300  hover:bg-blue-100 flex text-center items-center rounded py-1">
        <MdOutlineFileUpload />

        <button className="text-sm  font-medium">Shop Setting</button>
        </span>


        <span  className="hover:bg-blue-100 rounded p-2">
        <button className="text-2xl">
          <MdOutlinePerson />
        </button>
        </span>


        <span className="hover:bg-blue-100 rounded p-2">
          
        <button className="text-2xl relative">
          <FiBell />
        
        </button>
        </span>
       
      </div>
    </div>
  );
}
