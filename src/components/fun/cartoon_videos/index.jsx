import { useState, useEffect } from 'react'
import { fetch } from '../../../middleware/fetch'
import './CaVideosList.scss'
const CaVideosList = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos()
  }, [])
  const getVideos = () => {
    fetch().then((data) => setVideos(data.data))
  }
  console.log(videos)
  return (
    <div className="container row mx-auto gy-3 .justify-content-center  position-relative align-items-center">
      {videos.map((video) => {
        return (
          <div className="col-xl-4">
            <div className="card  ">
              <div className="image">
                <img src={video.thumbnail[0].url} />
              </div>

              <div className="content">
                <p>{video.description}</p>
              </div>
            </div>
          </div>
          // <div  className="col-xl-4 shadow-lg " key={video.videoId}>
          //   <div className="card ">
          //     <img src={video.thumbnail[0].url} className="card-img-top" alt="..." />
          //     <div className="card-body ">
          //       <p className="card-text">
          //        {video.description}
          //       </p>
          //     </div>
          //   </div>
          // </div>
        )
      })}
    </div>
  )
}

export default CaVideosList
