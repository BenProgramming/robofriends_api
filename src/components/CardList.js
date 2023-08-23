import React from 'react';
import Card from './Card';


// const CardList = ({ robots }) => {
//   const cardComponent = robots.map((_, i) => {
//     return (
//       <Card
//         key={i}
//         id={robots[i].id}
//         name={robots[i].name}
//         email={robots[i].email}
//         />
//     )
//   });
//   return (
//     <div>
//       { cardComponent }
//     </div>
//   );
// }

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((_, index) => {
          return (
            <Card
              key={index}
              id={robots[index].id}
              name={robots[index].name}
              email={robots[index].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;