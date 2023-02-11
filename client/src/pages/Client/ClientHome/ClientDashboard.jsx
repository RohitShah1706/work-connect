import './ClientDashboard.scss'
import Hero from "../../../components/Hero/Hero";
import CategoryCards from '../../../components/CategoryCards/CategoryCards'
import Features from '../../../components/Features/Features'
import JobListing from '../../../components/JobListing'

import { ClientContext } from '../../../context/clientContext'
import { useContext, useState, useEffect } from 'react';

import Clock from '../../../assets/clock.gif';
import Auction from '../../../assets/auction.gif';

const PendingTaskCard = (title, desc, bid) => {
    return <div className="PendingTaskCard container-fluid">
        <div className="row titlerow text-center">
            {title}
        </div>
        <div className="row descrow text-center">
            {desc}
        </div>
        <div className="row bidrow text-center">
            Current bid : {bid}
        </div>
        <div className="row actions d-flex justify-content-center">
            <button className="btn btn-danger btn-sm">
                Delete
            </button>
            <button className="btn btn-success btn-sm">
                Mark as done
            </button>
        </div>
    </div>
}

const ListingCard = (title, desc, bid) => {
    return <div className="PendingTaskCard container-fluid">
        <div className="row titlerow text-center">
            {title}
        </div>
        <div className="row descrow text-center">
            {desc}
        </div>
        <div className="row bidrow text-center">
            Current bid : {bid}
        </div>
        <div className="row actions d-flex justify-content-center">
            <button className="btn btn-danger btn-sm">
                Delete
            </button>
        </div>
    </div>
}


const ClientDashboard = () => {
    const { uid, name, email, phone } = useContext(ClientContext);
    const [showListing, setShowListing] = useState(false);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (uid == null || uid == undefined) {
            setLoggedIn(false);
        } else setLoggedIn(true);
    }, [uid]);

    const [pending, setPending] = useState(
        [
            {
                "title": "Plumbing in Bhaskara",
                "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nulla minima. Maxime explicabo repellat nam corrupti quis consequatur provident architecto enim alias nihil voluptates blanditiis saepe, nesciunt ipsa natus corporis adipisci quam dolore exercitationem temporibus expedita. Cum consectetur incidunt ut.",
                "bid": "676",
                "id": "8dijfdkjfkd"
            }
        ]
    )

    const pendingList = []
    const listings = []
    for (var i = 0; i < pending.length; i++) {
        pendingList.push(
            PendingTaskCard(pending[i].title, pending[i].desc, pending[i].bid)
        )
        listings.push(
            ListingCard(pending[i].title, pending[i].desc, pending[i].bid)
        )
    }

    return <div className="Dash">
        <div className="dummy">Hi</div>
        {
            !loggedIn ?
                <>
                    <Hero />
                    <CategoryCards />
                    <Features />
                </>
                :
                <div className="ClientDashboard">
                    <div className="row pt-5">
                        <div className="col-12 col-md-6">
                            <div className="Welcome">
                                Welcome {uid}
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center">
                            <div className='m-5'>
                                <p style={{ "color": "white" }}>
                                    Looking to find workers to get your job done?
                                </p>
                                <button className="btn btn-light btn-lg">
                                    List Job Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5 pendingrow">
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                            <div>
                                <img src={Clock}></img>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pb-5">
                            <div className="listheading text-center">
                                Pending Tasks
                            </div>
                            <div className="taskcol">
                                {
                                    pendingList
                                }
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5 listedrow">
                        <div className="col-12 col-md-6 pb-5">
                            <div className="listheading text-center">
                                Listed Tasks
                            </div>
                            <div className="taskcol">
                                {
                                    listings
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                            <div>
                                <img src={Auction}></img>
                            </div>
                        </div>
                    </div>
                </div>
        }
    </div>
}

export default ClientDashboard;