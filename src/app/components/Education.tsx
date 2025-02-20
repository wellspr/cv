import { EducationType } from "../types";

export const EducationComponent = (prop: EducationType) => {
    return (
        <div className="education">
            <h3 className="education__course">{prop.course}</h3>
            <h4 className="education__institution">{prop.institution}</h4>
            <p className="education__location">{prop.location.city}, {prop.location.state} - {prop.location.country}</p>
            <div className="education__dates">
                <span className="date date__start date__start__month">{prop.month_start}</span>
                <span className="date date__start date__start__year">{prop.year_start}</span>
                <span className="date date__finish date__finish__month">{prop.month_finish}</span>
                <span className="date date__finish date__finish__year">{prop.year_finish}</span>
            </div>
        </div>
    );
}