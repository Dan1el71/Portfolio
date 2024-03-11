import InfiniteLoop from '../Layout/InfiniteLoop'
import TAGS from '../../consts/tags'

const Skills = () => {
  return (
    <InfiniteLoop
      direction="left"
      speed={25}
      className="flex max-w-80 sm:max-w-lg shadow-2xl rounded-xl my-3"
    >
      {Object.entries(TAGS).map(([key, value]) => (
        <>
          <div
            key={key}
            id={value.name}
            className={`m-2 px-2 py-2 text-5xl ${value.color}`}
          >
            <value.component />
          </div>
        </>
      ))}
    </InfiniteLoop>
  )
}
export default Skills
