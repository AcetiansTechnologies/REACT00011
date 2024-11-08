import React from "react";
import { Link } from "react-router-dom";
import Angle from "./RightAngle";
import hard from './Hardcopymag.jpg'

const DigitalMagazine = () => {
  return (
    <div className="DigitalMagazine">

      <div
        className="carousel-1"
        style={{
          backgroundImage: `url(${hard})`,
        }}
      >
        <div className="element">
          <h1>Hard Copy Magazine</h1>
          <div>
            <ul>
              <li className="Contact-home">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Angle />
              </li>
              <li>
                <Link>Hard Copy Magazine</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul>
        <li>
          <ul>
            <li>
              <img src="https://assets.dochipo.com/media/companies/dochipo/templates/6075e09ede8ab673a9dc7672/screenshot.png"/>
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
              <img src="https://bowlingmedia.wordpress.com/wp-content/uploads/2016/04/school-title.jpg"/>
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
              <img src="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/March-2019-Cover-Page.jpg"/>
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
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2022/06/HED-June-2022-10-Must-watch-Business-Schools-issue-Cover-page_424-x-569-copy-8.jpg"/>
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
              <img src="https://www.learningforjustice.org/sites/default/files/styles/magazine_thumbnails_s_l/public/2017-06/TT32-cover.png?itok=yk7MFO30"/>
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
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2022/12/HED-Dec-2022-10-Most-Influential-Women-Leaders-in-Indian-Education-2022-issue-Cover-page_424-x-569-copy-8.jpg"/>
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
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2023/07/HED-COVER-PAGE.jpg"/>
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
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2023/10/HED-October-2023-10-Must-Watch-Accounting-and-Finance-Colleges-in-2023-issue-Cover-page_424-x-569-copy-8.jpg"/>
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
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2023/04/HED-March-23-Must-Watch-Education-Leaders-of-the-Year-2023-issue-Cover-page_424-x-569-copy-8.jpg"/>
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
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2022/12/HED-Dec-2022-10-Most-Influential-Women-Leaders-in-Indian-Education-2022-issue-Cover-page_424-x-569-copy-8.jpg"/>
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
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2022/10/HED-June-2022-10-Most-Inspiring-Women-Leaders-in-Indian-Higher-Education-issue-Cover-page_424-x-569-copy-8.jpg"/>
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
              <img src="https://www.highereducationdigest.com/wp-content/uploads/2022/07/cover.png"/>
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
