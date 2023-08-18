function ExperienceSection({experiences}) {
    //Sort experiences in chronological order by beginDate
    experiences.sort((a, b) => {
        return new Date(a.beginDate) - new Date(b.beginDate);
    })

    return (
        <>
            <h2>Experience</h2>
            {
                experiences && experiences.map((experience, index) => (
                    <div className="experience-section" key={index}>
                        <div className="experience-section__left">
                            <p>From {experience.beginDate} to {experience.endDate}</p>
                            <p>{experience.location}</p>
                        </div>
                        <div className="experience-section__right">
                            <h3>{experience.companyName}</h3>
                            <h4>{experience.position}</h4>
                            <p>{experience.description}</p>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default ExperienceSection