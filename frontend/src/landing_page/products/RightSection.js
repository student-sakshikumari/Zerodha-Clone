import React from 'react'

function RightSection({
     imagrURL,
     productName,
     productDescription,
     
     learnMore}) {
    return (  
        <div className='container mt-5'>
            <div className='row '>
                
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                   
                    <a href={learnMore} >Learn More</a>
                    
                </div>
                <div className='col-6'>
                    <img src={imagrURL} />
                </div>
            </div>
            
        </div>
    );
}

export default RightSection;