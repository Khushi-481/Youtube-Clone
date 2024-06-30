import React from 'react'
import  "./Playvideo.css"
import video1 from "../../assets/video.mp4"
import like  from "../../assets/like.png"
import dislike from '../../assets/dislike.png'
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import user_profile from "../../assets/user_profile.jpg"


const Playvideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoplay muted></video>
        <h3>Best Yotube Channel to learn DSA</h3>
        <div className="play-video-info">
            <p>14567 views &bull; 2 days ago</p>

            <div>
            <span><img src={like} alt=''/>125  </span>
            <span><img src={dislike} alt=''/>25  </span>
            <span><img src={share} alt=''/>Share</span>
            <span><img src={save} alt=''/>Save  </span>
            </div>
       </div>
       <hr/>
       <div className="publisher">
            <img src={jack} alt=''/>
            <div>
                <p>Striver</p>
                <span>1M Subscibers</span>
            </div>
            <button>Subscribe</button>
       </div>
       <div className="vid-desciption">
       <p>Channel that makes learning easy</p>
       <p>Subscribe to watch more tutorials on Web development</p>
       <hr/>
       <h4>130 Comments</h4>
       <div className="comment">
        <img src={user_profile} alt=''/>
        <div>
            <h3>Jack Nicholsan <span>1 day ago</span></h3>
            <p>Understood! Super fantastic explanation as always, thank you so so much for your effort!!</p>
            <div className="comment-action">
                <img src={like} alt=''/>
                <span>244</span>
                <img src={dislike} alt=''/>
                <span>130</span>
            </div>
        </div>
       </div>
       <div className="comment">
        <img src={user_profile} alt=''/>
        <div>
            <h3>Jack Nicholsan <span>1 day ago</span></h3>
            <p>Understood! Super fantastic explanation as always, thank you so so much for your effort!!</p>
            <div className="comment-action">
                <img src={like} alt=''/>
                <span>244</span>
                <img src={dislike} alt=''/>
                <span>130</span>
            </div>
        </div>
       </div>
       <div className="comment">
        <img src={user_profile} alt=''/>
        <div>
            <h3>Jack Nicholsan <span>1 day ago</span></h3>
            <p>Understood! Super fantastic explanation as always, thank you so so much for your effort!!</p>
            <div className="comment-action">
                <img src={like} alt=''/>
                <span>244</span>
                <img src={dislike} alt=''/>
                <span>130</span>
            </div>
        </div>
       </div>
       <div className="comment">
        <img src={user_profile} alt=''/>
        <div>
            <h3>Jack Nicholsan <span>1 day ago</span></h3>
            <p>Understood! Super fantastic explanation as always, thank you so so much for your effort!!</p>
            <div className="comment-action">
                <img src={like} alt=''/>
                <span>244</span>
                <img src={dislike} alt=''/>
                <span>130</span>
            </div>
        </div>
       </div>
       </div>
       
    </div>
  )
}

export default Playvideo
