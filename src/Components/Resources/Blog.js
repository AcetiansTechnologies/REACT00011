import React from "react";
import { Link } from "react-router-dom";
import Angle from "../SavIcon/RightAngle";
import PeopleIcon from "../News&Updates/PeopleIcon";
import Date from '../News&Updates/CalenderIcon';
import ShareIcon from "../News&Updates/ShareIcon";
import Message from "../News&Updates/Message";

const News = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/blog/01.jpg",
      title: "The Future of Remote Work",
      author: "Jane Doe",
      date: "January 10, 2023",
      excerpt: "Exploring the evolving landscape of remote work and its implications for businesses and employees."
    },
    {
      id: 2,
      image: "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/blog/02.jpg",
      title: "Top 10 Marketing Strategies for 2024",
      author: "John Smith",
      date: "February 15, 2023",
      excerpt: "An overview of the most effective marketing strategies to implement in the upcoming year."
    },
    {
      id: 3,
      image: "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/blog/03.jpg",
      title: "Understanding Artificial Intelligence",
      author: "Alice Johnson",
      date: "March 5, 2023",
      excerpt: "A deep dive into the world of AI and how it’s changing various industries."
    },
    {
      id: 4,
      image: "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/blog/04.jpg",
      title: "Healthy Eating in a Busy World",
      author: "Bob Brown",
      date: "April 12, 2023",
      excerpt: "Tips and tricks for maintaining a healthy diet despite a hectic schedule."
    },
    {
      id: 5,
      image: "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/blog/05.jpg",
      title: "Travel Trends for 2024",
      author: "Emily White",
      date: "May 20, 2023",
      excerpt: "Discover the top travel trends that will shape the way we explore the world in 2024."
    },
    {
      id: 6,
      image: "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/blog/06.jpg",
      title: "The Rise of E-commerce",
      author: "Michael Green",
      date: "June 8, 2023",
      excerpt: "An analysis of the rapid growth of e-commerce and its impact on traditional retail."
    },
    {
      id: 7,
      image: "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/blog/07.jpg",
      title: "Mental Health Awareness",
      author: "Sarah Connor",
      date: "July 22, 2023",
      excerpt: "The importance of mental health awareness and resources available for support."
    },
    {
      id: 8,
      image: "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/blog/08.jpg",
      title: "Sustainable Living: Tips for Everyone",
      author: "David Wilson",
      date: "August 30, 2023",
      excerpt: "Simple changes you can make in your daily life to live more sustainably."
    },
    {
      id: 9,
      image: "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/blog/09.jpg",
      title: "The Importance of Networking",
      author: "Laura Adams",
      date: "September 15, 2023",
      excerpt: "How networking can advance your career and open new opportunities."
    }
  ];
  

  return (
    <div className="contactus">
      <ul>
        <li>
          <div
            className="carousel-1"
            style={{ backgroundImage: `url(${"https://www.lionblogger.com/wp-content/uploads/2022/08/content-writing-copywriting.jpg.webp"})` }}
          >
            <div className="element">
              <h1>Blogs</h1>
              <div>
                <ul>
                  <li className="Contact-home">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Angle />
                  </li>
                  <li>
                    <Link>Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <div className="NewsAndUpdates">
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative flex items-center">
              <div className="absolute flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 top-2.5 ml-3 text-orange-600">
                  <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                  <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                </svg>
                <div className="h-6 border-l border-slate-200 ml-2.5"></div>
              </div>

              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-orange-500 rounded-md pr-3 pl-14 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search Blog" 
              />
              
              <button
                className="rounded-md ml-2 bg-White-800 p-2.5 border-black-2 text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff7b00" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <ul>
            {blogPosts.map((post) => (
              <li key={post.id}>
                <ul>
                  <li>
                    <img src={post.image} alt={post.title} />
                  </li>
                  <li>
                    <h2>{post.title}</h2>
                  </li>
                  <li>
                    <ul>
                      <li><PeopleIcon /> {post.author}</li>
                      <li><Date /> {post.date}</li>
                    </ul>
                  </li>
                  <li>
                    <p>{post.excerpt}</p>
                  </li>
                  <li>
                    <ul>
                      <li>Read more <ShareIcon /></li>
                      <li><Message /></li>
                    </ul>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default News;
