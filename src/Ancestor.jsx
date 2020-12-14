import React from 'react';
import Card from './Card';
import Index from './index';

function Ancestor()
{
    {
        return  <Card
      id={item.id}
      link_1={item.link_1}
      Name={item.Name}
      Father_name={item.Father_name}
      Occupation={item.Occupation}
      Sex={item.Sex}
      Education={item.Education} />
  }
}

export default Ancestor;
