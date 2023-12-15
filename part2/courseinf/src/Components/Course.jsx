const Course = ({ course }) => {

    return <>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <Total exercises={course.parts.map(part => part.exercises)} />
    </>
}


const Header = ({ courseName }) => {
    console.log("Course Name", courseName)
    return <h1>{courseName}</h1>
}

const Content = ({ parts }) => {
    console.log("Course parts", parts)

    return (
        <>
            {
                parts.map((part) => 
                    <Part key={part.id} part={part.name} exercises={part.exercises} />)
            } 
        </>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Total = ( { exercises }) => {
    console.log(exercises)
    const total = exercises.reduce((s, p) => s+=p)
    console.log(total)
    return <p><b> Number of exercises {total}</b></p>
}

export default Course;