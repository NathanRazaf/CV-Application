import { useState} from "react";
import emailPic from "../../assets/email-open-outline.svg";
import phonePic from "../../assets/phone-outline.svg";
import mapPic from "../../assets/map-marker-radius.svg";
function PersonalSection({personalInfos}) {

    return (
        <div className="personal-section">
            <h1>{personalInfos.fullName}</h1>
            <div className="personal-section__contact">
                <h3><img src={emailPic} alt='email'/> {personalInfos.email}</h3>
                <h3><img src={phonePic} alt='phone'/> {personalInfos.phone}</h3>
                <h3><img src={mapPic} alt='location'/> {personalInfos.location}</h3>
            </div>
        </div>
    )
}

export default PersonalSection