import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.err}>
            {/*<h1>404 </h1>*/}
            {/*<h1>Page not found!</h1>*/}
            <div><img className={s.pic} src={'https://img.freepik.com/free-vector/404-error-page-not-found-emoticon-modern-vector-illustration_126267-5827.jpg'}/></div>
        </div>
    )
}

export default Error404
