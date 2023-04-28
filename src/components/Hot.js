import React, { useState } from 'react';
import Mem from './Mem';
import mems from './mems';

const Hot = () => {
  const [filteredMems, setFilteredMems] = useState(mems);

  const filterMems = () => {
    const filtered = mems.filter((mem) => {
      const difference = mem.upvotes - mem.downvotes;
      return difference > 5;
    });
    setFilteredMems(filtered);
  };

  return (
    <div>
      <h1>Hot Memes</h1>
      {filteredMems.map((mem) => (
        <Mem
          key={mem.title}
          title={mem.title}
          upvotes={mem.upvotes}
          downvotes={mem.downvotes}
          img={mem.img}
          onUpvote={() => {
            mem.upvotes++;
            filterMems();
          }}
          onDownvote={() => {
            mem.downvotes++;
            filterMems();
          }}
        />
      ))}
    </div>
  );
};

export default Hot;
