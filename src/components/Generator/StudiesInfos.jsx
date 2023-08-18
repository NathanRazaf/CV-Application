import InputGroup from "../InputGroup.jsx";
import SubmitButton from "../SubmitButton.jsx";
import MenuToggle from "../MenuToggle.jsx";
import { useState } from "react";

function StudiesInfos({onSubmit}) {
    const [isFormVisible, setFormVisible] = useState(true);
    const [isToggled, setIsToggled] = useState(false);

    const [studyInfo, setStudyInfo] = useState({
        schoolName: '',
        studyField: '',
        beginDate: '',
        endDate: '',
        location: ''
    });

    function handleInputChange(e) {
        const { dataset, value } = e.target;
        setStudyInfo(prevInfo => ({
            ...prevInfo,
            [dataset.key]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(studyInfo);
        // Clear the form if needed
        setStudyInfo({
            schoolName: '',
            studyField: '',
            beginDate: '',
            endDate: '',
            location: ''
        });
    }

    return (
        <>
            <div className='form-top'>
                <h2>Education</h2>
                <MenuToggle
                    toggle={() => {
                    setFormVisible(prev => !prev);
                    setIsToggled(prev => !prev);
                }}
                isToggled={isToggled}
                />
            </div>
            {isFormVisible && (
                <form className="study-info" onSubmit={handleSubmit}>
                    <InputGroup
                        type="text"
                        id="schoolName"
                        placeholder="ABC University"
                        labelText="School Name"
                        onChange={handleInputChange}
                        value={studyInfo.schoolName}
                        data-key="schoolName"
                    />
                    <InputGroup
                        type="text"
                        id="studyField"
                        placeholder="Bsc. Computer Science"
                        labelText="Study Field"
                        onChange={handleInputChange}
                        value={studyInfo.studyField}
                        data-key="studyField"
                    />
                    <div className="date">
                        <InputGroup
                            type="date"
                            id="beginDate"
                            placeholder="01/01/2020"
                            labelText="Begin Date"
                            onChange={handleInputChange}
                            value={studyInfo.beginDate}
                            data-key="beginDate"
                        />
                        <InputGroup
                            type="date"
                            id="endDate"
                            placeholder="31/12/2020"
                            labelText="End Date"
                            onChange={handleInputChange}
                            value={studyInfo.endDate}
                            data-key="endDate"
                        />
                    </div>
                    <InputGroup
                        type="text"
                        id="location"
                        placeholder="Vancouver, Canada"
                        labelText="Location"
                        onChange={handleInputChange}
                        value={studyInfo.location}
                        data-key="location"
                        optional
                    />
                    <SubmitButton />
                </form>
            )}
        </>
    )
}

export default StudiesInfos