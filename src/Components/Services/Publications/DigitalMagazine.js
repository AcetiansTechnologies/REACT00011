import React from "react";
import { Link } from "react-router-dom";
import Angle from "./RightAngle";
import DigitalMag from "./DigitalMag.png";

const DigitalMagazine = () => {
  return (
    <div className="DigitalMagazine">
      <div
        className="carousel-1"
        style={{
          backgroundImage: `url(${DigitalMag})`,
        }}
      >
        <div className="element">
          <h1>Digital Magazine</h1>
          <div>
            <ul>
              <li className="Contact-home">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Angle />
              </li>
              <li>
                <Link>Digital Magazine</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="news-heading">
        <h1>The Rise of Digital Magazines: Shaping the Future of Publishing and Content Consumption</h1>
      </div>

      <div className="news-search">
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
      </div>

      <ul>
        
        <li>
          <ul>
            <li>
              <img src="https://assets.dochipo.com/media/companies/dochipo/templates/6075e09ede8ab673a9dc7672/screenshot.png" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <img src="https://bowlingmedia.wordpress.com/wp-content/uploads/2016/04/school-title.jpg" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <img src="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/March-2019-Cover-Page.jpg" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2022/06/HED-June-2022-10-Must-watch-Business-Schools-issue-Cover-page_424-x-569-copy-8.jpg" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <img src="https://www.learningforjustice.org/sites/default/files/styles/magazine_thumbnails_s_l/public/2017-06/TT32-cover.png?itok=yk7MFO30" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2022/12/HED-Dec-2022-10-Most-Influential-Women-Leaders-in-Indian-Education-2022-issue-Cover-page_424-x-569-copy-8.jpg" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2023/07/HED-COVER-PAGE.jpg" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2023/10/HED-October-2023-10-Must-Watch-Accounting-and-Finance-Colleges-in-2023-issue-Cover-page_424-x-569-copy-8.jpg" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2023/04/HED-March-23-Must-Watch-Education-Leaders-of-the-Year-2023-issue-Cover-page_424-x-569-copy-8.jpg" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2022/12/HED-Dec-2022-10-Most-Influential-Women-Leaders-in-Indian-Education-2022-issue-Cover-page_424-x-569-copy-8.jpg" />
            </li>

            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2022/10/HED-June-2022-10-Most-Inspiring-Women-Leaders-in-Indian-Higher-Education-issue-Cover-page_424-x-569-copy-8.jpg" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2022/07/cover.png" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <img src="https://assets.dochipo.com/media/companies/dochipo/templates/6075e09ede8ab673a9dc7672/screenshot.png" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <img src="https://bowlingmedia.wordpress.com/wp-content/uploads/2016/04/school-title.jpg" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <img src="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/March-2019-Cover-Page.jpg" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2022/06/HED-June-2022-10-Must-watch-Business-Schools-issue-Cover-page_424-x-569-copy-8.jpg" />
            </li>
            <li>
              <h2>Bharat Rites Digital magazine</h2>
            </li>
            <li>
              <h1>$:20.00</h1>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DigitalMagazine;
