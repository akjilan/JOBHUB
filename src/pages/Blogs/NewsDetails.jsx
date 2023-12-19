import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const news = useLoaderData();
  return (
    <div>
      <Card className="w-4/5 flex justify-center mt-3 container mb-5">
        <Card.Img variant="top" src={news.image_url}/>
        <Card.Body>
          <Card.Title className="text-blue-950 font-bold tracking-wide text-left text-md">{news.title}</Card.Title>
          <Card.Text className="text-sm my-3 text-justify text-blue-950 font-semibold">
            {news.details}
          </Card.Text>
          <Button className="flex items-center gap-x-3 btn btn-sm btn-primary text-blue-950 font-bold "> <FaLongArrowAltLeft className="text-xl" /><Link onClick={(()=>window.history.go(-1))}>Go Back to Portal</Link></Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsDetails;
