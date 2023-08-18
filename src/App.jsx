import './styles/App.css'
import './styles/Generator.css'
import './styles/Resume.css'
import { useState } from 'react'
import PersonalInfos from "./components/Generator/PersonalInfos.jsx";
import StudiesInfos from "./components/Generator/StudiesInfos.jsx";
import ExperienceInfos from "./components/Generator/ExperienceInfos.jsx";
import GenHeader from "./components/Generator/Header.jsx";
import PersonalSection from "./components/Resume/PersonalSection.jsx";
import StudiesSection from "./components/Resume/StudiesSection.jsx";
import ExperienceSection from "./components/Resume/ExperienceSection.jsx";
import StudiesBoxes from "./components/Generator/StudiesBoxes.jsx";
import ExperienceBoxes from "./components/Generator/ExperienceBoxes.jsx";

function App() {
    const [personalInfos, setPersonalInfos] = useState({
        fullName: 'John Doe',
        email: 'your.email@example.com',
        phone: '+1 (234) 567-8900',
        location: 'Montreal, Canada'
    });
    const [studies, setStudies] = useState([
        {
            schoolName: 'University of Life',
            studyField: 'Bachelor of Science',
            beginDate: '2010-01-01',
            endDate: '2014-12-31',
            location: 'Montreal, Canada'
        }
    ]);
    const [experiences, setExperiences] = useState([
        {
            companyName: 'Company Inc.',
            position: 'Senior Developer',
            beginDate: '2015-01-01',
            endDate: '2020-12-31',
            location: 'Montreal, Canada',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies aliquam, nunc nibh aliquet nisi, vi auctor magna nisl eu elit. Donec auctor, nisl eu ultricies aliquam, nunc nibh aliquet nisi, vi auctor magna nisl eu elit.'
        }
    ]);

    function handlePersonalInfosChange(e) {
        setPersonalInfos({
            ...personalInfos,
            [e.target.dataset.key]: e.target.value
        });
    }

    function addStudies(newStudy) {
        setStudies(prevStudies => [...prevStudies, newStudy]);
    }

    function deleteStudies(index) {
        setStudies(prevStudies => prevStudies.filter((study, i) => i !== index));
    }

    function addExperience(newExperience) {
        setExperiences(prevExperiences => [...prevExperiences, newExperience]);
    }

    function deleteExperience(index) {
        setExperiences(prevExperiences => prevExperiences.filter((experience, i) => i !== index));
    }

  return (
    <>
      <div className="generator">
          <GenHeader link="https://github.com/NathanRazaf/CV-Application" />
            <PersonalInfos onChange={handlePersonalInfosChange} {...personalInfos} />
            <StudiesInfos onSubmit={addStudies} />
            <StudiesBoxes studies={studies} deleteStudy={deleteStudies}/>
            <ExperienceInfos onSubmit={addExperience}/>
            <ExperienceBoxes experiences={experiences} deleteExperience={deleteExperience}/>
      </div>
        <div className="resume">
            <PersonalSection personalInfos={personalInfos} />
            <StudiesSection studies={studies} />
            <ExperienceSection experiences={experiences} />
        </div>
    </>
  )
}

export default App
