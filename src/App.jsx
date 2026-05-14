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
        </div>
        <div className='middle-container'>
          <div className='explore-button'>Explore Feed</div>
          <div className='feed-container'>
          <div className='feed-image-wrapper'>

            <img src={zoeMiller}
              alt="zoe miller 1"
              className="feed-image-one"/>
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
                <div className="bottom-button-two">Go Tonight</div>
                <button className="button-button-three">
                    <img src={heart} className="heart-icon" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
