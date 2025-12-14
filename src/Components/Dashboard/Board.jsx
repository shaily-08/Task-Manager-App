import React from 'react'
import Column from '../Column'

//Status function 
function Board() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <Column title="To-Do">
      </Column>

      <Column title="In-Progress">
      </Column>

      <Column title="Completed">
      </Column>
      <Column/>
    </div>
  );
}

export default Board;
