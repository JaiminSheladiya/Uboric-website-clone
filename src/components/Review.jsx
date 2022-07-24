import React from "react";
import {AiFillStar} from 'react-icons/ai'

export default function Review() {
  return (
    <div className=" mt-32">
      <div className="flex w-5/6 gap-16 m-auto font-medium">
        <div className=" w-1/3">
          <p>
            I have been suffering from horrible hormonal acne around my chin/jaw
            since November 2017. I've tried everything I can get my hands on
            with no avail.
          </p>
          <h2 className=" mt-8 mb-4">Harshal Patel</h2>

          <div className="flex text-sm text-yellow-400 justify-center"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          <p> - customer</p>
        </div>
        <div className=" w-1/3">
          <p>
            The product I received was sealed with plastic around the cap and
            the entire bottle.
          </p>
          <h2 className=" mt-8 mb-4">Jagat Jadeja</h2>

<div className="flex text-sm text-yellow-400 justify-center"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
<p> - customer</p>
        </div>
        <div className=" w-1/3">
          <p>
            Perfect budget phone. Do not expect flagship features. I use iPhone
            12 Pro Max and got this to have a second device as I need Android
            for work.
          </p>
          <h2 className=" mt-8 mb-4">Jaimin Sheladiya</h2>

<div className="flex text-sm text-yellow-400 justify-center"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
<p> - customer</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
