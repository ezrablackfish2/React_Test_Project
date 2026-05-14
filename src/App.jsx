import './App.css'
import partyWittyLogo from './assets/partywitty-logo.svg'
import dashboardButton from './assets/dashboard-button.svg'
import plan from './assets/plan.svg'
import bell from './assets/bell.svg'
import bookmark from './assets/bookmark.svg'
import chat from './assets/chat.svg'
import justiceHammer from './assets/justice-hammer.svg'
import reload from './assets/reload.svg'
import search from './assets/search.svg'
import wallet from './assets/wallet.svg'
import zoeMiller from './assets/zoe-miller.jpg'
import tickmark from './assets/tickmark.svg'
import cross from './assets/cross.svg'
import heart from './assets/heart.svg'
import fire from './assets/fire.svg'
import profile from './assets/profile.png'
import content from './assets/content.jpg'
import eye from './assets/eye.svg'
import tick from './assets/tick.svg'
import more from './assets/more.svg'
import king from './assets/king.svg'
import user from './assets/user.png'

function App() {

  return (
    <>
      <div className='feed-bids'>
        <div className='hambergar'>
          <div className='side-bar-container'>
            <div className="top-row"> 
            <div className='top-side-bar-container'>
              <img
                src={partyWittyLogo}
                alt="PartyWitty"
                className="party-witty-logo"
              />
              
              </div>
            <div className="top-right-side-bar-container">
              <img src={dashboardButton} 
              alt="Dashboard Button"
              className="dashboard-button"/>
            </div>
            </div>
          <div className="side-bar-contents">
            <div className="side-list">
              <img src={plan}
              alt="plan"
              className="side-image"/>
              <div className="inner-list">My Plan</div>
            </div>
            <div className="side-list">
              <img src={justiceHammer}
              alt="Justic Hammer"
              className="side-image"/>
              <div className="inner-list">My Bids</div>
            </div>
            <div className="side-list">
              <img src={reload}
              alt="reload"
              className="side-image"/>
              <div className="inner-list">My Booking</div>
            </div>
            <div className="side-list">
              <img src={search}
              alt="search"
              className="side-image"/>
              <div className="inner-list">Search</div>
            </div>
            <div className="side-list">
              <img src={chat}
              alt="chat"
              className="side-image"/>
              <div className="inner-list">Chat Room</div>
            </div>
            <div className="side-list">
              <img src={bell}
              alt="bell"
              className="side-image"/>
              <div className="inner-list">Notifications</div>
            </div>
            <div className="side-list">
              <img src={bookmark}
              alt="bookmark"
              className="side-image"/>
              <div className="inner-list">Save & Like</div>
            </div>
            <div className="side-list">
              <img src={wallet}
              alt="wallet"
              className="side-image"/>
              <div className="inner-list">Rewards</div>
            </div>
          </div>
          </div>

          <div className='bottom-side-bar'>
            <div className='more-container'>
                <img className="more-image" src={more}/>
                <div className='more-text'>More</div>
                </div>
            <img className="king-image" src={king}/>
            <div className="user-container">
                <img className="user-image" src={user} />
                <div className='user-info'>
                    <div className='user-title'>Zeeshan Ahmad</div>
                    <div className="user-content">Indus Global Pvt Ltd Admin</div>
                </div>
            </div>
          </div>
          
        </div>
        <div className='middle-container'>
          <div className='explore-button'>EXPLORE FEED</div>
          <div className='feed-container'>
          <div className='feed-image-wrapper'>
            <div className='tag-box-one-container'>
                <div className='tag-box-one'></div>
                <div className='tag-box-one-grey'></div>
                <div className='tag-box-one-grey'></div>
                <div className='tag-box-one-grey'></div>
                <div className='tag-box-one-grey'></div>
                <div className='tag-box-one-grey'></div>
            </div>
            
            <img src={zoeMiller}
              alt="zoe miller 1"
              className="feed-image-one"/>
            
             <div className='tag-box-two-container'>
                <div className='tag-box-one'></div>
                <div className='tag-box-one-grey'></div>
                <div className='tag-box-one-grey'></div>
                <div className='tag-box-one-grey'></div>
                <div className='tag-box-one-grey'></div>
                <div className='tag-box-one-grey'></div>
            </div>

            <div className='match-container'> <img className='top-fire-logo'src={fire} /> <div> Matches Your Vibe</div></div>
            <img src={zoeMiller}
            alt="zoe miller 1"
            className="feed-image-two"/>
            <div className="image-description-container">
              <div className="top-description-container">
                <div className="name-and-age-container">Zoe Miller, 22 </div>
                <img className="tickmark-image" src={tickmark}/>
                <div className="mate-container">+ Mate </div>
                
              </div>
                <div className="middle-description-container">4 Mutual Mates</div>
                <div className="tag-container">
                    <div className="tag">Bollywood Nights</div>
                    <div className="tag">Chill Crowds</div>
                    <div className="tag">Party Regular</div>
                </div>
               
            </div>
            
            </div>
            <div className="background-white-container">
                <img src={cross} className="bottom-button-one" />
                <div className="bottom-button-two"> <img className='fire-logo' src={fire} /> <div>Go Tonight</div></div>
                <button className="button-button-three">
                    <img src={heart} className="heart-icon" />
                </button>
            </div>
          </div>
        </div>

        <div className='right-container'>
            <div className='top-right-container'>
                <div className='profile-container'> <img className='profile-image' src={profile}/></div>
                <div className='profile-title'>Make Your First Move</div>
                 <div className='profile-content'>Verify your profile to start sending invites and offering drinks.</div>
            </div>

            <div className='middle-right-container'>
                <div className='middle-top-right-container'>How It Works</div>
                <div className='content-list'>
                <img className="content-image" src={content} />
                <div className="right-contents">
                    <div className="content-details-one"><div className='button-two'>2 </div> <img src={eye}/></div>
                    <div className="content-details-two">Spot Your Person</div>
                    <div className="content-details-three">Pick someone you'd genuinely enjoy going out with.</div>
                </div>
                </div>
                <div className='content-list'>
                    <img className="content-image" src={content} />
                    <div className="right-contents">
                        <div className="content-details-one"><div className='button-two'>2 </div> <img src={eye}/></div>
                        <div className="content-details-two">Send a Drink</div>
                        <div className="content-details-three">Offer their first drink your way of saying let's go out.</div>
                    </div>
                    
                </div>
                <div className='content-list'>
                    <img className="content-image" src={content} />
                    <div className="right-contents">
                        <div className="content-details-one"><div className='button-two'>2 </div> <img src={eye}/></div>
                        <div className="content-details-two">They Accept → You're Set</div>
                        <div className="content-details-three">Once accepted, it's a confirmed plan. No endless chatting.</div>
                    </div>
                </div>
            </div>

            <div className='note-content'>
                <div className='note-detail'> <img className="tick-image" src={tick}/> <div className="note-text">Get noticed faster</div></div>
                <div className='note-detail'> <img className="tick-image" src={tick}/> <div className="note-text">Higher chances your invite gets accepted</div></div>
                <div className='note-detail'> <img className="tick-image" src={tick}/> <div className="note-text">Unlock drink invites & premium interactions</div></div>
                <div className='note-detail'> <img className="tick-image" src={tick}/> <div className="note-text">Build trust with every profile visit</div></div>
                </div>
            <div className='verify-button'> Get Verified</div>
        </div>
         
       
      </div>
    </>
  )
}

export default App
