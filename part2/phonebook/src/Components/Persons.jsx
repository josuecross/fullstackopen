const Persons = ({ persons, handleDelete }) =>{
    return persons.map(person => <PersonItem 
        key={person.name} 
        id={person.id}
        name={person.name}
        number={person.number} 
        handleDelete={handleDelete} 
    />)
}
const PersonItem = ( { id, name, number, handleDelete } ) => {
    return <p>{name}: {number} <button onClick={() => handleDelete(id, name)}> Delete </button></p>
}

export default Persons;