import InputGroup from "../InputGroup.jsx";
import MenuToggle from "../MenuToggle.jsx";
import {useState} from "react";
function PersonalInfos({onChange, fullName, email, phone, location}) {
    const [isFormVisible, setFormVisible] = useState(true);
    const [isToggled, setIsToggled] = useState(false);
    return (
        <>
            <div className='form-top'>
                <h2>Personal Details</h2>
                <MenuToggle
                    toggle={() => {
                        setFormVisible(prev => !prev);
                        setIsToggled(prev => !prev);
                    }}
                    isToggled={isToggled}
                />
            </div>
            {isFormVisible && (
                <form className="personal-info">
                    <InputGroup
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        labelText="Name"
                        onChange={onChange}
                        value={fullName}
                        data-key="fullName"
                    />
                    <InputGroup
                        type="email"
                        id="email"
                        placeholder="your.email@example.com"
                        labelText="Email"
                        onChange={onChange}
                        value={email}
                        data-key="email"
                        recommended
                    />
                    <InputGroup
                        type="tel"
                        id="phone"
                        placeholder="+1 (234) 567-8900"
                        labelText="Phone"
                        onChange={onChange}
                        value={phone}
                        data-key="phone"
                        recommended
                    />
                    <InputGroup
                        type="text"
                        id="location"
                        placeholder="Montreal, Canada"
                        labelText="Location"
                        onChange={onChange}
                        value={location}
                        data-key="location"
                        recommended
                    />
                </form>
            )}
        </>
    )
}

export default PersonalInfos