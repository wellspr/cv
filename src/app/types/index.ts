export type LocationType = {
    city: string
    state: string
    country: string
}

export type JobType = {
    id: number
    position: string
    company: string
    location: LocationType
    start_month: string
    start_year: number
    finish_month: string
    finish_year: number
    activities: string
}

export type EducationType = {
    id: number
    course: string
    institution: string
    location: LocationType
    year_start: number
    month_start: string
    year_finish: number
    month_finish: string
}

export type SkillType = {
    id: number
    name: string
}

export type PersonalType = {
    name: {
        first: string
        last: string
    }
    title: string
    email: string
    cel: string
    homepage: string
    address: {
        city: string
        state: string
        country: string
    }
}

export type ContactType = {
    email: string
    cel: string
    homepage: string
}

export type ResumeType = {
    text: string
}

export type WorkType = {
    id: number
    position: string
    company: string
    location: {
        city: string
        state: string
        country: string
    },
    start_month: string
    start_year: number
    finish_month: string
    finish_year: number
    activities: string
}