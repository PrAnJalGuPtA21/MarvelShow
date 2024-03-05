import { useEffect, useState } from 'react'
import "./Store.css"
const url = 'https://superhero-search.p.rapidapi.com/api/heroes';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd95ebbc835mshf0e63ed83513e45p18dc89jsnd4b76f017221',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
  }
};


const Store = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchbooks = async (api: never) => {
    try {
      const response = await fetch(api, options);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    fetchbooks(url);
  }, [])

  const searchItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e);
  }

  interface apidata {
    id: number;
    name: string;
    slug: never;
    images: undefined
  }
  return (
    <div className="store=-content">
      <input type="text" className="text" value={search} onChange={(e) => searchItem(e.target.value)} />
      <div className="card">
        {
          data.map((item: apidata) => (
            <div className="card-compo"
              key={item.id}>
              <div className="img-cont" >
                <img src={item.images.lg} />
                <span>{item.name}</span>
                <span>{item.slug}</span>
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Store