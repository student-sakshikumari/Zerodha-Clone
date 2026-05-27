import React from 'react'

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                
                <div className='col-4 P-3 mt-5'>
                    <img src="media/images/smallcaseLogo.png" />
                    <p className='text-small text-muted'style={{lineHeight:"60px"}}>Thematic investment platform</p>
                </div>
                 <div className='col-4 P-3 mt-5'>
                   <img src="media/images/streakLogo.png" style={{width:"170px"}}/>
                    <p className='text-small text-muted'style={{lineHeight:"60px"}}>Algo & strategy platform</p>
                </div>
                 <div className='col-4 P-3 mt-5 ' >
                    <img src="media/images/sensibullLogo.svg"  style={{width:"180px"}}/>
                    <p className='text-small text-muted ' style={{lineHeight:"60px"}}> Options trading platform</p>
                </div>

                <div className='col-4 P-3 mt-5'>
                    <img src="media/images/zerodhafundhouse.png" style={{width:"220px"}}/>
                    <p className='text-small text-muted'style={{lineHeight:"60px"}}>Asset management</p>
                </div>
                 <div className='col-4 P-3 mt-5'>
                   <img src="media/images/goldenpiLogo.png"  style={{width:"190px"}} />
                    <p className='text-small text-muted'style={{lineHeight:"60px"}}>Bonds trading platform</p>
                </div>
                 <div className='col-4 P-3 mt-5'>
                    <img src="media/images/dittoLogo.png" style={{width:"150px"}} />
                    <p className='text-small text-muted'style={{lineHeight:"60px"}}>Insurance</p>
                </div>
                 <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>SignUp Now</button>
            </div>
            
        </div>
     );
}

export default Universe;