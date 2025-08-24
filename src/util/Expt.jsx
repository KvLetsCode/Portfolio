
import React from 'react'
import { GoDotFill } from 'react-icons/go'

const Expt = ({desc}) => {
  return (
    <p className="text-gray-400 lg:text-xl font-semibold flex gap-6 items-center mt-2">
            <span>
              <GoDotFill className="size-3" />
            </span>
            {desc}
          </p>
  )
}

export default Expt