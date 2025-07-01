import React from "react";

function Card({ fetchSearch }) {
  return (
    <>
      {fetchSearch.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 place-items-center">
          {fetchSearch.map((item, i) => {
            return (
              <div
                key={i}
                className="w-80 h-80 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105"
              >
                <div className="h-1/2 w-full">
                  <img
                    src={item.Poster}
                    alt={item.Title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-1/2 px-4 py-3 text-sm text-gray-800 flex flex-col justify-center gap-1">
                  <p>
                    <span className="font-semibold">🎬 Title:</span>{" "}
                    {item.Title}
                  </p>
                  <p>
                    <span className="font-semibold">🎞 Type:</span> {item.Type}
                  </p>
                  <p>
                    <span className="font-semibold">📅 Year:</span> {item.Year}
                  </p>
                  <p>
                    <span className="font-semibold">🔎 IMDB_ID:</span>{" "}
                    {item.imdbID}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-white mt-10">No Movies Found</p>
      )}
    </>
  );
}

export default Card;
