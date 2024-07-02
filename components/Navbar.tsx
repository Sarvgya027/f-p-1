// import { IoIosMenu } from "react-icons/io";

// function Navbar() {
//   const navLinks = [
//     {
//       name: "Features",
//     },
//     {
//       name: "Pricing",
//     },
//     {
//       name: "About Us",
//     },
//   ]
//   return (
//     <div className="w-100 pt-[20px] px-[40px]   ">
//       {/* mobile device */}
//       <nav className="flex items-center justify-between md:hidden ">
//         <div>
//           <h1 className="text-md font-semibold uppercase">Circle</h1>
//         </div>

//         <div>
//           <IoIosMenu className="text-2xl" />
//         </div>
//       </nav>

//       {/* bigger device */}
      
//       <nav className="hidden md:flex items-center justify-between ml-auto   ">
//         <div>
//           <h1 className="text-md font-semibold uppercase">Circle</h1>
//         </div>

//         <div className="flex items-center justify-center space-x-16"  >
//           {navLinks.map((link) => (
//             <p key={link.name}>{link.name}</p>
//           ))}

//         </div>

//         <div className="flex justify-center "> 
//           <button>Customer Login</button>
//           <button className="bg-black text-white px-3 py-2 rounded-md text-sm">Sign Up</button>
//         </div>


//       </nav> 



//     </div>
//   )
// }

// export default Navbar






import { IoIosMenu } from "react-icons/io";

function Navbar() {
  const navLinks = [
    { name: "Features" },
    { name: "Pricing" },
    { name: "About Us" },
  ];

  return (
    <div className="w-full pt-5 px-10 text-sm">
      {/* mobile device */}
      <nav className="flex items-center justify-between lg:hidden">
        <div>
          <h1 className="text-md font-semibold uppercase">Circle</h1>
        </div>

        <div>
          <IoIosMenu className="text-2xl" />
        </div>
      </nav>

      {/* bigger device */}
      <nav className="hidden lg:flex items-center justify-between">
        <div>
          <h1 className="text-md font-semibold uppercase">Circle</h1>
        </div>

        <div className="flex-grow flex justify-center space-x-16 ml-28">
          {navLinks.map((link) => (
            <p key={link.name}>{link.name}</p>
          ))}
        </div>

        <div className="flex space-x-8">
          <button>Customer Login</button>
          <button className="bg-black text-white px-3 py-2 rounded-md text-sm">Sign Up</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
