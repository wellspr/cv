import { JobType } from "../types";

export const JobComponent = (job: JobType) => {
    return (
        <div className="job">
            <h3 className="job__position">{job.position}</h3>
            <h4 className="job__company">{job.company}</h4>
            <p className="job__location">{job.location.city}, {job.location.state} - {job.location.country}</p>
            <div className="job__dates">
                <span className="date date__start date__start__month">{job.start_month}</span>
                <span className="date date__start date__start__year">{job.start_year}</span>
                <span className="date date__finish date__finish__month">{job.finish_month}</span>
                <span className="date date__finish date__finish__year">{job.finish_year}</span>
            </div>
            <p className="job__activities">{job.activities}</p>
        </div>
    );
}