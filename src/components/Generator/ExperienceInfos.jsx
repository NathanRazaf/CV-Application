import InputGroup from "../InputGroup.jsx";
import SubmitButton from "../SubmitButton.jsx";
import MenuToggle from "../MenuToggle.jsx";
import {useState} from "react";

function ExperienceInfos({onSubmit}) {
    const [isFormVisible, setFormVisible] = useState(true);
    const [isToggled, setIsToggled] = useState(false);

    const [experienceInfo, setExperienceInfo] = useState([
        {
            companyName: '',
            position: '',
            beginDate: '',
            endDate: '',
            location: '',
            description: ''
        }
    ]);

    function handleInputChange(e) {
        const { dataset, value } = e.target;
        setExperienceInfo(prevInfo => ({
            ...prevInfo,
            [dataset.key]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(experienceInfo);
        // Clear the form if needed
        setExperienceInfo({
            companyName: '',
            position: '',
            beginDate: '',
            endDate: '',
            location: '',
            description: ''
        });
    }


    return (
        <>
            <div className='form-top'>
                <h2>Experience</h2>
                <MenuToggle
                    toggle={() => {
                        setFormVisible(prev => !prev);
                        setIsToggled(prev => !prev);
                    }}
                    isToggled={isToggled}
                />
            </div>
            {isFormVisible && (
                <form className="experience-info" onSubmit={handleSubmit}>
                    <InputGroup
                        type="text"
                        id="companyName"
                        placeholder="DEF Company"
                        labelText="Company Name"
                        onChange={handleInputChange}
                        value={experienceInfo.companyName}
                        data-key="companyName"
                    />
                    <InputGroup
                        type="text"
                        id="position"
                        placeholder="Software Developer"
                        labelText="Position"
                        onChange={handleInputChange}
                        value={experienceInfo.position}
                        data-key="position"
                    />
                    <div className="date">
                        <InputGroup
                            type="date"
                            id="beginDate"
                            placeholder="01/01/2020"
                            labelText="Begin Date"
                            onChange={handleInputChange}
                            value={experienceInfo.beginDate}
                            data-key="beginDate"
                        />
                        <InputGroup
                            type="date"
                            id="endDate"
                            placeholder="31/12/2020"
                            labelText="End Date"
                            onChange={handleInputChange}
                            value={experienceInfo.endDate}
                            data-key="endDate"
                        />
                    </div>
                    <InputGroup
                        type="text"
                        id="location"
                        placeholder="Vancouver, Canada"
                        labelText="Location"
                        onChange={handleInputChange}
                        value={experienceInfo.location}
                        data-key="location"
                        optional
                    />
                    <InputGroup
                        type="textarea"
                        id="description"
                        placeholder="Implemented a new feature for the company's website."
                        labelText="Description"
                        onChange={handleInputChange}
                        value={experienceInfo.description}
                        data-key="description"
                        optional
                    />
                    <SubmitButton />
                </form>
            )}
        </>
    )
}

export default ExperienceInfos