import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import css from './TeamDetails.css'
import Facebook from '../../media/facebook.png'
import Twitter from '../../media/twitter.png'
import YouTube from '../../media/youtube.png'
import male from '../../media/male.png'
import female from '../../media/female.png';


const TeamDetails = () => {
    const { idLeague } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]))

    }, [idLeague])
    const { strLeague, dateFirstEvent, strCountry, strSport, strGender, strBanner, strDescriptionEN, strFacebook, strTwitter, strYoutube, strLogo } = details;
    const GenderDetails = details.strGender;
    return (
        <div style={{ backgroundColor: ' rgb(169, 238, 177)' }} className="text-center">
            <div className="BannerColor">
                <Header banner={strBanner} logo={strLogo}></Header>
            </div>
            <div>
                <div className='league-details row mt-5'>
                    <div className="col-md-6">
                        <h2>{strLeague}</h2>
                        <p>Founded: {dateFirstEvent} </p>
                        <p>Country: {strCountry}</p>
                        <p>Sport Type: {strSport}</p>
                        <p>Gender: {strGender}</p>
                    </div>
                    <div className="col-md-6 ">
                        {
                            GenderDetails === 'Mixed' ? <img className="img-fluid w-50 mt-3" src={female} alt="" />
                                : <img className="img-fluid w-50 mt-3" src={male} alt="" />
                        }
                    </div>
                </div>
                <div className="col-md-12 mt-5">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="social-media">
                    <a style={{ marginLeft: '2%' }} href={`https://${strFacebook}`}><img src={Facebook} alt="" /></a>
                    <a style={{ marginLeft: '2%' }} href={`https://${strTwitter}`}><img src={Twitter} alt="" /></a>
                    <a style={{ marginLeft: '2%' }} href={`https://${strYoutube}`}><img src={YouTube} alt="" /></a>
                </div>
            </div>
        </div >
    );
};

export default TeamDetails;