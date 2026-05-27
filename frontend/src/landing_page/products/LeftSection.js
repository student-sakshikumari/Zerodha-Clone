import React from 'react'

function LeftSection({
    imagrURL,
     productName,
     productDescription,
     tryDemo,
     learnMore, 
      googlePlay, 
      appStore,
    }) {
    return ( 
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-6'>
                    <img src={imagrURL} />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={tryDemo}>Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                    <div className='mt-3'>
                        <a href={googlePlay } style={{marginLeft:"50px"}}>
                            <img src="media/images/googlePlayBadge.svg"/></a>
                         <a href={appStore}><img src="media/images/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;