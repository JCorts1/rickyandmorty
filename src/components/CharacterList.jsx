import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(function ({ data }) {
        console.log(data.results);
        setCharacters(data.results);
      });
  }, []);

  return (
    <div>
      <div>
        {characters.map((character) => {
          return (
            <div className=" ">
              <div className="bg-[#2D2F34] w-2/5 rounded-xl flex  mb-4">
                <img src={character.image} alt="Character Image" />
                <div className="flex flex-col">
                  <h1 className="text-lg text-white">{character.name}</h1>
                  <div className="flex">
                    {character.status == "Alive" ? (
                      <div className="flex" >
                        <div className="w-2 h-2 m-1 bg-green-600 rounded-full flex"></div>
                        <p className="text-white">Alive - {character.species}</p>
                      </div>
                      
                    ) : character.status == "Dead" ? (
                      
                      <div className="flex" >
                        <div className="w-2 h-2 m-1 bg-red-500 rounded-full flex"></div>
                        <p className="text-white">Dead - {character.species}</p>
                      </div>
                    ) : (
                      <div className="flex" >
                        <div className="w-2 h-2 m-1 bg-slate-400 rounded-full flex"></div>
                        <p className="text-white">Unknow - {character.species}</p>
                      </div>
                    )}
                  </div>
                  <br />
                      <div className="text-white">
                        <h1 className="text-[#8C8C8C]">Last Know Location:</h1>
                        {character.location.name}
                      </div>
                      <br />
                      <div>
                        <h1 className="text-[#8C8C8C]">First Seen in:</h1>
                      </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
