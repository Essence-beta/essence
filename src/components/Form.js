import React, { useState } from 'react'
import Airdrop from "../images/airdrop.webp";
import essenceLogoMain from "../images/essenceLogoMain.png";

function Form() {
    const [submitModal, setSubmitModal] = useState(false)
    const [details, setDetails] = useState({name:"", telegram: "", twitter: "", address: "", referral: ""});
    const [submitted, setSubmitted] = useState(false);


    const submitDetails = (e) => {
        e.preventDefault();
        if (details.name ) {
          setSubmitModal(true);
          setTimeout(() => {
            setSubmitted(true);
          }, 2000);
        } else {
          setSubmitModal(false);
        }
    }


    const closeSubmit = () => {
      setSubmitModal(false)
    }

    return submitted ? (
      <div className="flex items-center justify-center text-center airdropBackground text-black font-bold text-3xl h-96">
        THANK YOU FOR YOUR PARTICIPATION <br />
        Stay tuned on the Telegram Community for more updates on the Airdrop
      </div>
    ) : (
      <div className="airdropBackground p-12 text-black" name="form">
        <h2 className="text-center text-black md:text-left font-bold headDecor text-5xl mb-7">
          AIRDROP EVENT
        </h2>
        <p className="text-xl text-center md:text-left">
          Complete tasks to stand a chance to be eligible for the airdrop
        </p>
        <div className="flex flex-col-reverse md:flex-row">
          <form className="pt-5 w-full md:w-1/2">
            <div className="w-full md:w-2/3">
              <div className="flex flex-col mb-10">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="p-5 w-full text-black"
                  value={details.name}
                  onChange={(e) => setDetails({ name: e.target.value })}
                />
              </div>
              <div className="flex flex-col mb-10">
                <label className="text-xl">Join Telegram Group</label>
                <button className="w-32 rounded text-black bg-white p-3">
                  <a href="https://t.me/Essencetoken" className="text-blue-600">
                    Telegram
                  </a>
                </button>
              </div>
              <div className="flex flex-col mb-10">
                <label>Telegram Name</label>
                <input
                  type="text"
                  placeholder="Telegram"
                  className="p-5 w-full text-black"
                  value={details.telegram}
                  onChange={(e) =>
                    setDetails({
                      telegram: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col mb-10">
                <label className="text-xl">
                  Like, follow and Retweet Pinned Post in Twitter Page <br />
                  Comment and tag 3 friends
                </label>
                <button className="w-32 rounded text-black bg-white p-3">
                  <a
                    href="https://mobile.twitter.com/essencee_token"
                    className="text-blue-600"
                  >
                    Twitter
                  </a>
                </button>
              </div>
              <div className="flex flex-col mb-10">
                <label>Twitter Retweet Link</label>
                <input
                  type="text"
                  placeholder="Twitter"
                  className="p-5 w-full text-black"
                  value={details.twitter}
                  onChange={(e) =>
                    setDetails({
                      twitter: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col mb-10">
                <label>Referral Telegram Username</label>
                <input
                  type="text"
                  placeholder="Referral"
                  className="p-5 w-full text-black"
                  value={details.referral}
                  onChange={(e) =>
                    setDetails({
                      referral: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col mb-10">
                <label>BSC Wallet Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="p-5 w-full text-black"
                  value={details.address}
                  onChange={(e) =>
                    setDetails({
                      address: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <button
              className="w-32 rounded text-black bg-green-500 p-3"
              onClick={submitDetails}
            >
              SUBMIT
            </button>
          </form>
          <div className="flex justify-center w-4/5 md:w-1/2 my-10">
            <img src={Airdrop} alt="airdrop" className="ml-12 md:ml-0" />
          </div>
        </div>
        <div
          className={submitModal ? "airdropModal shadow-lg relative" : "hidden"}
        >
          <img src={essenceLogoMain} alt="logo" className="w-8 mx-auto" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x-circle-fill absolute cursor-pointer top-0 right-0 font-bold text-purple-600 m-2"
            viewBox="0 0 16 16"
            onClick={closeSubmit}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
          <div className="mt-5">
            <h2 className="text-2xl font-bold text-black text-center">
              YOUR RESPONSE HAS BEEN RECORDED
            </h2>
          </div>
        </div>
      </div>
    );
}

export default Form
