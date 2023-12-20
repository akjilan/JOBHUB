import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CatagoryNewsCard from "./CatagoryNewsCard";
import { apiKey } from "../../firebase/firebase.init";
const Blogs = () => {
  console.log("API Key:", apiKey);
  const [catagories, setCatagories] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [filterednews, setFilterednews] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState();

  useEffect(() => {
    fetch(
      "https://ocr-server-7ncn59jyf-jilannnaj-gmailcom.vercel.app/catagories"
    )
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.log(error.message));
  }, []);
  useEffect(() => {
    fetch("https://ocr-server-7ncn59jyf-jilannnaj-gmailcom.vercel.app/news")
      .then((res) => res.json())
      .then((data) => setAllNews(data))
      .catch((error) => console.log(error.message));
  }, []);
  // console.log(allNews);
  const handleCategoryClick = (catagory) => {
    setSelectedCatagory(catagory);
    setFilterednews(allNews.filter((news) => news.category_id == catagory.id));
  };

  return (
    <div className="flex container md:px-20  px-5 mb-12">
      <section className="w-1/4 md:my-20  gap-y-3  flex flex-col">
        <h4 className="text-center mb-3 text-2xl font-bold tracking-wider text-blue-950">
          Our Catagories{" "}
        </h4>
        {catagories.map((catagory) => (
          <h3
            key={catagory.id}
            className={`py-2   text-blue-950 font-bold text-base border p-3 ${
              selectedCatagory && selectedCatagory.id == catagory.id
                ? "bg-gray-200"
                : ""
            }`}
            onClick={() => handleCategoryClick(catagory)}
          >
            {/* <Link to={`/catagory/${catagory.id}`}> */}
            <Link>{catagory.categoryName}</Link>
          </h3>
        ))}
      </section>
      <section className="w-3/4 mt-20 ps-10 tracking-wide grid md:grid-cols-2 grid-cols-1 gap-4 md:p-5 p-2 text-center justify-between   text-blue-950  ">
        {selectedCatagory ? (
          filterednews.map((news) => (
            <CatagoryNewsCard news={news}></CatagoryNewsCard>
          ))
        ) : allNews ? (
          allNews.map((news) => (
            <CatagoryNewsCard news={news}></CatagoryNewsCard>
          ))
        ) : (
          <h3>Select A catagory please . </h3>
        )}
      </section>
    </div>
  );
};

export default Blogs;
