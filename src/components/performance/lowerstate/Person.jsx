import {useEffect} from 'react'

const Person = ({name}) => {
  console.log('render');
  useEffect(() => {
     console.log('unfortunately does not resolve the issue');
  }, [])
  // const {id, name} = person
  return (
    <div>
        <h4>{name}</h4>
    </div>
  )
}

export default Person