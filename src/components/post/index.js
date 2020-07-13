import React, {Component} from 'react'
import styles from './index.module.css'

const Post = ({ description, author }) => {
    return (
        <div className={styles.container}>
        <p className={styles.description}>
        {description}
        </p>
        <div>
            <small>Author:</small>
        <span className={styles.user}>{ author.username }</span>
        </div>
        </div>
    )
}

export default Post