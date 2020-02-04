import React from 'react'
import './loading.css'

const loadingHoc = (Component) =>{
    return function loadingHoc({loading,...p}) {
        return (
        (loading) ? <div className="load"></div> : <Component {...p}/>
    )
}
}
export default (loadingHoc);





// import React from 'react'

// const loadingHoc=(component)=>{
    
//     return function loadingHoc ({loading,...p}) {
//  return (loading) ?  <div className="load"></div> : < component {...p}/>
// }
// }
// export default (loadingHoc);