import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import './Store.css';

const url = 'https://superhero-search.p.rapidapi.com/api/heroes';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd95ebbc835mshf0e63ed83513e45p18dc89jsnd4b76f017221',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
  },
};

interface Hero {
  id: number;
  name: string;
  slug: string;
  images: { lg: string };
}

const Store = () => {
  const [data, setData] = useState<Hero[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((hero) =>
    hero.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="store-content">
      <form className="search">
        <input
          type="text"
          className="text"
          placeholder="Search here"
          value={search}
          onChange={handleSearch}
        />
        <button className="button-search">
          <IoSearch />
        </button>
      </form>
      <div className="card">
        {filteredData.map((hero) => (
          <div className="card-compo" key={hero.id}>
            <div className="img-cont">
              <img src={hero.images.lg} alt={hero.name} />
              <span className="card-span" style={{ padding: '15px' }}>
                {hero.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
