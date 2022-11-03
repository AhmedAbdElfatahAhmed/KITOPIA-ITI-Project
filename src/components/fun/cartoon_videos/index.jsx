import { Link } from 'react-router-dom'
import './CaVideosList.scss'
import { cartoons } from '../../../middleware/data'
import spoongebob from '../../../assets/images/cartoons/spongebob.png'
const CaVideosList = () => {
  return (
    <div>
      <main className="site-wrapper">
        <div className="pt-table desktop-768">
          <div className="pt-tablecell page-home relative">
            <div className="overlay"></div>

            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 row g-5">
                  {cartoons.map((cartoon) => {
                    return (
                      <Link to={'../music'} className="col-3">
                      <div className="hexagon-menu clear ">
                        <div className="hexagon-item">
                          <div className="hex-item">
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          <div className="hex-item">
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          <a className="hex-content">
                            <span className="hex-content-inner">
                              <span className="icon">
                                <img
                                  className="w-100"
                                  src={spoongebob}
                                  alt=""
                                />
                                <span className="title">{cartoon.name}</span>
                              </span>
                            </span>
                            <svg
                              viewBox="0 0 173.20508075688772 200"
                              height="200"
                              width="174"
                            >
                              <path
                                d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                                fill="#ec9600"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      </Link>
                      
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CaVideosList
