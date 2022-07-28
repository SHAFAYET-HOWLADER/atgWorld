import React, { useState } from 'react'
import "./DisplayPost.css"
import { FaCaretDown} from "react-icons/fa";
import { BsPeopleFill ,BsShareFill,BsThreeDots} from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import nature_img from "../images/nature_one.png";
import shatter_img from "../images/shatter.png";
import car_img from "../images/car.png";
import people_one from  "../images/people_one.png";
import people_two from  "../images/people_two.png";
import people_three from  "../images/people_three.png";
const DisplayPost = () => {
     const [threeDot, setThreeDot] = useState(false)
     const [threeDot2, setThreeDot2] = useState(false)
     const [threeDot3, setThreeDot3] = useState(false)
     const showDots = ()=>{
          if(threeDot==false){
               setThreeDot(true)
          }
          else{
               setThreeDot(false)
          }
     }
     const showDots2 = ()=>{
          if(threeDot2==false){
               setThreeDot2(true)
          }
          else{
               setThreeDot2(false)
          }
     }
     const showDots3 = ()=>{
          if(threeDot3==false){
               setThreeDot3(true)
          }
          else{
               setThreeDot3(false)
          }
     }
  return (
    <section id="display_post">
         <div className="container">
             <div className='post_route d-flex justify-content-between align-items-center'>
                       <div className='route_left'>
                           <ul className='d-flex justify-content-between align-items-center'>
                               <li>All Posts(32)</li>
                               <li>Article</li>         
                               <li>Event</li>         
                               <li>Education</li>         
                               <li>Job</li>         
                            </ul>                    
                       </div>
                       <div className='route_right_btn'>
                             <button className='border-0 post_btn'>Write A Post &nbsp;<FaCaretDown/></button>
                             <button className='border-0 post_btn_two'><BsPeopleFill/>&nbsp;&nbsp;Join Group</button>
                       </div>
              </div>
              <div className='post_one'>
                    <div className='post_one_items'>
                          <img className='post_one_img' src={nature_img} alt="nature_img" />
                          <div className='post_one_content'>
                               <div className='post_one_heading'>
                               <span>✍️ Article</span>
                                   <div className='d-flex justify-content-between'>
                                    <h4>What if famous brands had regular fonts? Meet<br/>RegulaBrands!</h4>  
                                   <div className='threeDotsArea'>
                                   <span onClick={showDots} className={threeDot?"bg-light py-2 px-3":"bg-white py-2 px-3"}><BsThreeDots/></span>
                                     {threeDot&&<div className='threeDotOptions'>
                                         <ul>
                                             <li>Edit</li>
                                             <li>report</li>
                                             <li>option 3</li>
                                         </ul>
                                      </div>}                        
                                   </div>
                                   </div>                               
                                 <p>
                                   I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                                 </p>
                               </div>
                                 <div className='post_one_review'>
                                        <div className='review_left d-flex justify-content-center align-items-center'>
                                              <img src={people_one} alt="people_png" />
                                              <span>Sarthak Kamra</span>
                                        </div>
                                        <div className='review_right d-flex justify-content-center align-items-center'>
                                             <AiOutlineEye/>
                                             <span>1.4k views</span>
                                             <div className='share_icon'>
                                             <BsShareFill/>
                                             </div>
                                        </div>
                                 </div>
                          </div>
                    </div>
              </div>
              <div className='post_one'>
                    <div className='post_one_items'>
                          <img className='post_one_img' src={shatter_img} alt="nature_img" />
                          <div className='post_one_content'>
                               <div className='post_one_heading'>
                               <span>🔬️ Education</span>
                                   <div className='d-flex justify-content-between'>
                                    <h4>Tax Benefits for Investment under National Pension<br/> Scheme launched by Government</h4>  
                                   <div className='threeDotsArea'>
                                   <span onClick={showDots2} className={threeDot2?"bg-light py-2 px-3":"bg-white py-2 px-3"}><BsThreeDots/></span>
                                     {threeDot2&&<div className='threeDotOptions'>
                                         <ul>
                                             <li>Edit</li>
                                             <li>report</li>
                                             <li>option 3</li>
                                         </ul>
                                      </div>}                        
                                   </div>
                                   </div>                               
                                 <p>
                                   I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                                 </p>
                               </div>
                                 <div className='post_one_review'>
                                        <div className='review_left d-flex justify-content-center align-items-center'>
                                              <img src={people_two} alt="people_png" />
                                              <span>Sarah West</span>
                                        </div>
                                        <div className='review_right d-flex justify-content-center align-items-center'>
                                             <AiOutlineEye/>
                                             <span>1.4k views</span>
                                             <div className='share_icon'>
                                             <BsShareFill/>
                                             </div>
                                        </div>
                                 </div>
                          </div>
                    </div>
              </div>
              <div className='post_one'>
                    <div className='post_one_items'>
                          <img className='post_one_img' src={car_img} alt="nature_img" />
                          <div className='post_one_content'>
                               <div className='post_one_heading'>
                               <span>🗓️ Meetup</span>
                                   <div className='d-flex justify-content-between'>
                                    <h4>Finance & Investment Elite Social Mixer @Lujiazui</h4>  
                                   <div className='threeDotsArea'>
                                   <span onClick={showDots3} className={threeDot3?"bg-light py-2 px-3":"bg-white py-2 px-3"}><BsThreeDots/></span>
                                     {threeDot3&&<div className='threeDotOptions'>
                                         <ul>
                                             <li>Edit</li>
                                             <li>report</li>
                                             <li>option 3</li>
                                         </ul>
                                      </div>}                        
                                   </div>
                                   </div>                               
                                <div className='meetUp d-flex align-items-center'>
                                  <div className='d-flex justify-content-center align-items-center'>
                                    <BiCalendarEvent/>
                                     <span>Fri, 12 Oct, 2018</span>
                                  </div>
                                  <div className='d-flex justify-content-center align-items-center'>
                                    <MdOutlineLocationOn/>
                                     <span>Ahmedabad, India</span>
                                  </div>
                                </div>
                                <div className='visit_now'>
                                   <button>Visit Website</button>
                                  </div>
                               </div>
                                 <div className='post_one_review'>
                                        <div className='review_left d-flex justify-content-center align-items-center'>
                                              <img src={people_three} alt="people_png" />
                                              <span>Ronal Jones</span>
                                        </div>
                                        <div className='review_right d-flex justify-content-center align-items-center'>
                                             <AiOutlineEye/>
                                             <span>1.4k views</span>
                                             <div className='share_icon'>
                                             <BsShareFill/>
                                             </div>
                                        </div>
                                 </div>
                          </div>
                    </div>
              </div>
         </div>
    </section>
  )
}

export default DisplayPost