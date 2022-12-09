import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/BlogCard.module.css";
export function BlogCard({title, author, coverPhoto, datePublished,slug}){
    return(
        <div className={styles.card}>
            <Link href={"/posts/"+slug}>
                <div className={styles.imgContainer}>
                    <Image src={coverPhoto.url} alt="" width={376} height={190} layout="fixed"/>
                </div>
            </Link>
            <div className={styles.text}> 
                <h2>{title}</h2>
                <div className={styles.details}>
                    <div className={styles.author}>
                        <Image src = {author.avatar.url} alt="" width={20} height={20}/>
                        <h3>{author.name}</h3>
                    </div>
                    <div className={styles.date}>
                        <h4>{datePublished}</h4>
                    </div>
                </div>
            </div>
        </div>
        
    )
}