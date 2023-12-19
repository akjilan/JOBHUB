import React from "react";
import { Card } from "react-bootstrap";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import TruncatedText from "../../components/Utils/TruncatedText";
import Rating from "../../components/Utils/ShowRating";
import moment from "moment/moment";
import { Link, useParams } from "react-router-dom";
const CatagoryNewsCard = ({ news }) => {
  const {id} = useParams();
  console.log(id);
  return ( 
    <div className="">
      <Card className="text-teal flex flex-col">
        <Card.Header className=" grid md:grid-cols-2 grid-cols-1 py-1 px-3 bg-gray-300 font-bold tracking-wide">
          <section className="flex gap-x-2">
            <div>
              <img
                className="w-10 h-10 rounded-full"
                src={news.author.img}
                alt=""
              />
            </div>

            <div className="flex-col my-auto">
              <h3 className="text-blue-950 text-xs text-left">
                {news.author.name}
              </h3>
              <h3 className="text-blue-950 text-xs">
                {moment(news.author.published_date).format("YYYY-MMM-D")}
              </h3>
            </div>
          </section>
          <section className="flex justify-end pe-3 gap-x-3">
            <button>
              <CiBookmark />
            </button>
            <button>
              <CiShare2 />
            </button>
          </section>
        </Card.Header>
        <Card.Header className="text-blue-950 font-bold tracking-wide text-left text-base">
          {news.title}
        </Card.Header>
        <Card.Body className="">
          <section>
            <img src={news.image_url} alt="" />
          </section>

          <Card.Text className="text-sm my-3 text-justify text-blue-950 font-semibold">
            {<TruncatedText text={news.details} limit={500} />}
          </Card.Text>
          <section className="flex justify-end my-auto">
            <button className="btn btn-primary btn-sm"><Link to={`/catagory/${news._id}`}>
            See Full News
            </Link></button>
          </section>
        </Card.Body>
        <Card.Footer className=" grid md:grid-cols-2 grid-cols-1 py-1 px-3 bg-gray-300 font-bold tracking-wide">
          <section className="flex gap-x-2">
            <div>
              <Rating value={news.rating.number} max={5}></Rating>
            </div>
          </section>
          <section className="flex justify-end pe-3 gap-x-3 items-center text-sm">
            <IoEyeOutline ></IoEyeOutline>
            {news.total_view}
          </section>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CatagoryNewsCard;
