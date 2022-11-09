import './Profile.scss'
import LikedVideos from '../LikedVideos/index';
import img from '../../assets/images/profille.png'
import { Link } from 'react-router-dom';
const Profile =()=>{

  return(
      <div id="profile">
          <section className="h-100 gradient-custom-2">
<div className="container">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-12">
      <div className="card">
        <div className="rounded-top text-white d-flex flex-row b-cover" >
          <div className="ms-4 mt-5 d-flex flex-column  p-img " >
            <img src={img}
              alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2 h-100 "
              />
            <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
              >
              Edit profile
            </button>
          </div>
          <div className="ms-3 p-name" >
            <h5 className=''>Child Name</h5>
           
          </div>
        </div>
        
        <div className="card-body p-4 text-black mt-5 pt-5">
          <div className="mb-5">
            <p className="lead fw-normal mb-1">About</p>
            <div className="p-4 p-about" >
              <p className="font-italic mb-1">age:</p>
              <p className="font-italic mb-1">Parent:</p>
              <p className="font-italic mb-0">Hobby:</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="lead fw-normal mb-0">Liked videos</p>
            <p className="mb-0"><Link to={'.gi./liked'} className="text-muted">Show all</Link></p>
          </div>
        <div className='row container'>
        <LikedVideos className='col-6'></LikedVideos>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

      </div>
  )
}
export default Profile