import { useState, useEffect } from "react";

const useFetch = (url,limit=10) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data)=>setData(data.slice(0,limit)))
    //   .then((data) => setData(data));
  },);

  return [data,limit];
};


const CustomHooks = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
    return (
      <>
        {data &&
          data.map((item) => {
            return  <p key={item.id}><b>Titile:</b> {item.title} <br /><b> Completed:</b>{item.completed?"True":"False"}</p>
          })}
      </>
    );
  };

  export default CustomHooks    