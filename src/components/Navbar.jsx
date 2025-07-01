import React, { useState } from "react";


function Navbar({ setSearch}) {
 
  return (
    <div className="bg-gray-800 p-4 text-center">
      <h1 className="text-4xl text-white font-bold mb-4">Movie Search</h1>
      <form  className="flex justify-center">
        <input
          type="text"
          placeholder="Search movies..."
          className="px-6 py-2 bg-white rounded-l-xl w-96"
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-xl"
        >
        Search...
        </button>
      </form>
    </div>
  );
}

export default Navbar;
