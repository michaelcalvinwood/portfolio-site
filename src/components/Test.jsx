import React, { useEffect } from 'react'

const Test = () => {
  useEffect(() => {
    // Fixed loop: changed ++j to ++i and added proper loop body structure
    for (let i = 0; i < 10; ++i) {
      console.log(i);
    }
  }, []); // Run once on component mount

  return (
    <div className="w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4">
        <h2 className="text-4xl font-bold">Test Component</h2>
        <p className="text-xl py-6">Check the console to see numbers 0-9 logged.</p>
      </div>
    </div>
  )
}

export default Test
