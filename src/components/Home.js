import './Home.css'
import {RiDoubleQuotesL} from 'react-icons/ri'

function Home (){
    return (
        <div className='home_master'>
            <div className='home_body'>
                <div className='size_control'>
                    <div className='div_title'>
                        <h1>Find the best <span>talent</span></h1>
                    </div>
                    <div className='div_desc'>
                        <div className='bar'></div>
                        <p>Finding the right people and building high
                            performing teams can be hard. Most companies
                            aren't tapping into the abundance of global talent.
                            We're about to change that.
                        </p>
                    </div>
                    <img className='circle1' src='assets/circle1.png'/>
                </div>
                <img className='circle2' src='assets/circle2.png'/>
            </div>
            <div className='home_body2'>
                <div className='container_2'>
                    <div className='div_title2'>
                        <div className='bar2'></div>
                        <h2>Build & manage distributed teams
                            like no one else.
                        </h2>
                    </div>
                    <div className='div_desc2'>
                        <div className='details_cont'>
                            <img className='img_details' src='/assets/person.png'/>
                            <div className='details_cont_sub'>
                                <p className='top_desc'>Experienced Individuals</p>
                                <p className='low_desc'>
                                    Our network is made up of highly experienced professionals
                                    who are passionate about what they do.
                                </p>
                            </div>
                        </div>
                        <div className='details_cont'>
                            <img className='img_details' src='/assets/gear.png'/>
                            <div className='details_cont_sub'>
                                <p className='top_desc'>Easy to Implement</p>
                                <p className='low_desc'>
                                    Our processes have been refined over years of implementation
                                    meaning our teams always deliver.
                                </p>
                            </div>
                        </div>
                        <div className='details_cont'>
                            <img className='img_details' src='/assets/graph.png'/>
                            <div className='details_cont_sub'>
                                <p className='top_desc'>Enhanced Productivity</p>
                                <p className='low_desc'>
                                    Our customized platform with in-built analytics helps you
                                    manage your distributed teams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='circle4' src='assets/circle4.png'/>
            </div>
            <div className='home_body3'>
                <div className='home_body_cont3'>
                    <h1>Delivering real results for top companies. 
                        Some of our <span>success stories.</span>
                    </h1>
                    <div className='home_testimonials'>
                        <div className='individual_test'>
                            <p className='test_desc'>
                                "The team perfectly fit the specialized skill set
                                required. They focused on the most essential 
                                features helping us launch the platform eight
                                months faster than planned"
                            <RiDoubleQuotesL className='test_qoute'/>
                            </p>
                            <p className='test_name'>Kady Baker</p>
                            <p className='test_title'>Product Manager at Bookmark</p>
                            <img className='test_face' src='assets/face.png'/>
                        </div>
                        <div className='individual_test'>
                            <p className='test_desc'>
                                "We needed to automate our entire onboarding process.
                                The team came in and built out the whole journey. Since
                                going live, user retention has gone through the roof!"
                            <RiDoubleQuotesL className='test_qoute'/>
                            </p>
                            <p className='test_name'>Aiysha Reese</p>
                            <p className='test_title'>Founder of Manage</p>
                            <img className='test_face' src='assets/face.png'/>
                        </div>
                        <div className='individual_test'>
                            <p className='test_desc'>
                                "Amazing. Our team helped us build an app that delivered
                                a new experience for hiring a physio. The launch was an
                                instant success with 100k downloads in the first month."
                            <RiDoubleQuotesL className='test_qoute'/>
                            </p>
                            <p className='test_name'>Arthur Clarke</p>
                            <p className='test_title'>Co-founder of MyPhysio</p>
                            <img className='test_face' src='assets/face.png'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home