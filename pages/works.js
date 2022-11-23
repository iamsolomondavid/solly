// Import next components
import Image from 'next/image'

// Import stylesheets
import works from '../styles/Works.module.scss'


export default function Works() {
  return (
    <div className={works.works}>
        <div className={works.workinprogress}>
            <h4>Work in Progress..</h4>
            <p>I&apos;m currently working on improving this part of the site, will be deployed soon. check back later.</p>
            <div className={works.person} id='person'>
              <Image 
                src='/images/work.png'
                width={123}
                height={295}
                layout='fixed'
                alt=''
              />
            </div>
            
          </div>
    </div>
  )
}
