import React from 'react';
import useRooms from '../../Hooks/useRooms';

const About = () => {
    return (
        <div className="text-center my-10 mx-auto sm:w-full w-10/12 grid sm:grid-cols-1 grid-cols-12 gap-4 justify-center items-center">
            <div className="col-span-6">
                <h1 className="text-4xl font-bold ">About Us</h1>
                <p className="text-left mt-6 leading-8 sm:px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate itaque consequatur placeat aspernatur, quam tempora, nemo iure, accusamus assumenda deserunt sit harum illum qui voluptatem nam quae quibusdam pariatur laborum ea corporis omnis! Enim ut quo vitae beatae commodi quae nobis veritatis inventore cupiditate incidunt! Illum adipisci totam similique tempora veniam saepe, blanditiis nemo, ipsum animi nostrum aliquam, quia recusandae! Libero, beatae? Quod, cum. Nisi ut recusandae, officiis, quo voluptatem cumque, voluptates sequi laborum ratione cum dolores magni totam.</p>
            </div>
            <div className="col-span-6">
                <img width="100%" src="https://i.pinimg.com/originals/e4/b2/97/e4b297b2854e8c83136f5a52dda45cfb.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;