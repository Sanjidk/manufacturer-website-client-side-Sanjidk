import React from 'react';
import useTools from '../../../hooks/useTools';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools]=useTools();
    const newTool = tools.slice(0,6);
    return (
      <div id='tools'>
        <h1 className="text-center fw-bold mt-8 font-bold text-white bg-green-500 p-3">DSLR Tools</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          newTool.map(tool => <Tool
          key={tool._id}
          tool={tool}
          ></Tool>)
        }
        </div>
        {/* <div className='text-center'>
          <Link to='/manageTools'><button className='border-0 my-4 bg-success rounded text-white fw-bold p-2'>View All Items</button></Link>
        </div> */}
      </div>
    );
};

export default Tools;