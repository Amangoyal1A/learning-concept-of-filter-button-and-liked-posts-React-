import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Filter from "./components/filter/Filter";
import Cards from "./components/cards/Cards";
import { FilterData, apiURL } from "../src/data";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "./utils/Spinner";
import "../src/App.css"


const App = () => {
  const [courses, setCourses] = useState([]);
  const[loading,setLoading]= useState(true);
  const[category,setCategory] = useState(FilterData[0].title);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios(apiURL);
        setCourses(res.data.data);
      } catch (error) {
        toast.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="background">
      <Navbar />
      <Filter FilterData={FilterData} id={FilterData.id}  category={category} setCategory={setCategory}/>
     { loading ? (<Spinner/>) :(<Cards courses={courses}  category={category}/> )}
    </div>
  );
};

export default App;
