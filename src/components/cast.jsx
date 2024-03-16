import React,{ useState } from 'react';
import '../components/cast.css';
import { castMembers } from './cast';


function Cast() {
  
   const [visibleCount, setVisibleCount] = useState(6);
  
   const handleShowMore = () => {
     setVisibleCount(prevCount => prevCount + 6);
   };
 return (
    <>
   <section className='cast-sction'>
      <div className="container">
        <h2 className='text-center cast-head pt-5 pb-5'>
          The cast
        </h2>
      </div>
      <div>
        <div className="container maincontainercast">
          <div className="grid-cast">
            {castMembers.slice(0, visibleCount).map((member, index) => (
              <div key={index} className={`container Image-div colour-${(index % 6) + 1  }`}>
                <img src={member.image} alt={member.name} />
                <div className="name-container">
                 <p className="name">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
          {castMembers.length > visibleCount && (
            <div className="text-center mt-3">
              <button className="btn btn-primary bg-warning pattern-cross-dots-sm " onClick={handleShowMore}> <span className='show-more'>Show More </span></button>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
 );
}

export default Cast;