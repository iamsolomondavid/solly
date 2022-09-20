// Import next components
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Import stylesheets
import home from '../styles/Home.module.scss'

// Import my fontawesome library
import '../components/Fontawesome'

// Import fontawesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Home() {
  return (
    <div className={home.home}>
      <Head>
        <title>Solly - Evolving Creative</title>
        <meta name="author" content="Chukwubudo Ikechukwu Solomon David"/>
        <meta name="description" content="Professional Portfolio website for Chukwubudo Ikechukwu" />
        <link rel="icon" href="/favicon.ico" type='image/x-icon' />
      </Head>
      {/* OVERLAP */}
      <div className={home.overlap} id='overlap'>
        <div className={home.animateOne} id="overlap-animate-one">
          <Image 
            src="/images/solly-overlap.webp"
            width={150}
            height={200}
            layout="fixed"
          />
        </div>
        <div className={home.animateTwo} id="overlap-animate-two">
          <Image 
            src="/images/sd-overlap.webp"
            width={250}
            height={44}
            layout="fixed"
          />
        </div>
        <div className={home.overlapFooter}>
          <p>- <FontAwesomeIcon icon="fa-regular fa-copyright" /> 2022 -</p>
        </div>
      </div>
      {/* HEADER */}
      <header>
        <div className={home.headerHeader}>
          <div></div>
          <h1>HELLO. <br/> I&apos;M SOLOMON<br/> DAVID</h1>
        </div>
        <div className={home.headerBody}>
          <p>a Frontend Web Developer, UI designer
            and Visual(Brand) Identity Designer 
            in Lagos, Nigeria.</p>
          <p>
          I believe in Minimalistic - yet creative - designs;  <span>My creative design process involves abstracting the ambiguity in ideas and converting them into designs (websites, UI designs or Visual Identity Designs) that are both functional and aesthetically pleasing. Giving users a seamless digital experience.</span>
          </p>
        </div>
        <div id='scrollDirection'>
          <div></div>
        </div>
      </header>
      {/* MAIN */}
      <main>
        {/* RESUME */}
        <section className={home.resume}>
          <div className={home.resumeWrapper}>
            <div className={home.resumeHeader}>
              <div></div>
              <h2>RESUME&apos;</h2>
            </div>
            <div className={home.resumeBody}>
              <div className={home.education}>
                <p className={home.educationHeader}><b>x</b> &nbsp; <span>EDUCATION HISTORY</span></p>
                <div className={home.educationBody}>
                  <div>
                    <li>University of Portharcourt</li>
                    <p>Mathematics and Computer Science</p>
                  </div>
                  <div>
                    <li>Aptech College</li>
                    <p>Software Engineering</p>
                    <i>Degree: Advanced Diploma</i>
                  </div>
                </div>
              </div>
              <div className={home.frontend}>
                <p className={home.frontendHeader}><b>x</b> &nbsp; <span>FRONTEND SKILLS</span></p>
                <small>Languages/Technologies</small>
                <div className={home.frontendBody}>
                  <li>HTML & CSS</li>
                  <li>SASS</li>
                  <li>JavaScript</li>
                  <li>ReactJs - (NextJs)</li>
                  <li>Firebase</li>
                  <li>Git</li>
                  <li>NodeJs</li>
                </div>
              </div>
              <div className={home.tools}>
                <p className={home.toolsHeader}><b>x</b> &nbsp; <span>TOOLS EXPERTISE</span></p>
                <small>Tools/Softwares</small>
                <div className={home.toolsBody}>
                  <li>VSCODE</li>
                  <li>FIGMA</li>
                  <li>ADOBE XD</li>
                  <li>Canva</li>
                  <li>Framer / Framer motion</li>
                  <li>Adobe Illustrator</li>
                </div>
              </div>
              <div className={home.workexp}>
                <p className={home.workexpHeader}><b>x</b> &nbsp; <span>WORK EXPERIENCE</span></p>
                <div className={home.workexpBody}>
                  <div className={home.workdets}>
                    <div>
                      <p>Web Developer and Visual Designer</p><span>2020</span>
                    </div>
                    <h3>Firstchoiceshoes nigeria</h3>
                  </div>
                  <div className={home.workdets}>
                    <div>
                      <p>FRONTEND WEB DEVELOPER</p><span>FEB - APR <br/> 2022</span>
                    </div>
                    <h3>OVERWOOD INVESTMENT NIGERIA | OVERWOOD.NG</h3>
                  </div>
                  <div className={home.workdets}>
                    <div>
                      <p>WEB DEVELOPER & WEB DEVELOPMENT TUTOR</p><span>2022</span>
                    </div>
                    <h3>INCOGNITO NIGERIA | INCOGNITO-ZETA.VERCEL.APP</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={home.resumeDownload}>DOWNLOAD RESUME&apos; <FontAwesomeIcon className={home.arrowLong} icon="fa-solid fa-right-long" /></div>
          </div>
        </section>
        {/* WORKS */}
        <section></section>
        {/* ABOUT */}
        <section className={home.about}>
          <div className={home.aboutWrapper}>
            <div className={home.aboutHeader}>
              <div></div>
              <h2>ABOUT ME</h2>
            </div>
            <div className={home.aboutBody}>
              <div className={home.who}>
                <p className={home.whoHeader}><b>x</b> &nbsp; <span>WHO?</span></p>
                <div className={home.whoImage}></div>
                <div className={home.whoBody}>
                  <p>My name is Chukwubudo Ikechukwu Solomon David, i&apos;m from Anambra State, Nigeria. Born and Raised in Lagos, Nigeria and currently resides there. </p>
                  <p>I&apos;m a Christian who believes in the power of Love and it&apos;s ability to positively transform Individuals, societies and ultimately the World. <br/> <span>Matt. 7:12 ; Matt. 22:39-40; 1 John 4:16</span>
                  </p>
                  <p>
                  I consider myself a constantly Evolving Creative, i&apos;m always looking for new and innovative ways to express creativity in solving problems (through design and development) - thus i&apos;m constantly improving my skills..
                  </p>
                </div>
              </div>
              <div className={home.passion}>
                <p className={home.passionHeader}><b>x</b> &nbsp; <span>PASSION?</span></p>
                <div className={home.passionBody}>
                  <p>I&apos;m passionate about design, i believe design is very influential in the psychology + outcomes of individuals and society at large. I always want to improve the lives and livelihood of individuals through the power of good design - i&apos;m currently doing this through tech - but i see myself evolving into other arts of design. </p>
                </div>
              </div>
              <div className={home.more}>
                <p className={home.moreHeader}><b>+</b> &nbsp; <span>WHAT MORE?</span></p>
                <div className={home.moreBody}>
                  <p>Minimalistic; I love Dogs (I want to have a Tibetan Mastiff someday); Spaghetti is King!; I don&apos;t understand the coffee craze: I love conversational podcasts; working out is therapy; cooking is therapy; progress isn&apos;t linear; everything is perspective “half-full or half-empty.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT */}
        <section className={home.contact}>
          <div className={home.contactWrapper}>
            <div className={home.contactHeader}>
              <div></div>
              <h2>CONTACT ME</h2>
            </div>
            <div className={home.contactBody}>
              <h4><b>x</b> &nbsp; <span>LET'S TALK</span></h4>
              <p>
              Job offers? You have an idea and  you think i&apos;d be a good part of it? Or you just want to connect? Let&apos;s talk! I&apos;m at a stage in my life where i&apos;m really looking to build my network, build new connections and help build a community (or communities). 
              </p>
              <div className={home.handles}>
                <h6><b>x</b> &nbsp;dm me via:</h6>
                <span>
                  <Link href="#">
                    <a><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                  </Link>
                  <Link href="#">
                    <a><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a>
                  </Link>
                  <Link href="#">
                    <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
                  </Link>
                </span>
              </div>
              <div className={home.message}>
                <h6><b>x</b> &nbsp;or send me a line here</h6>
                <div className={home.messageBox}>
                  <input type="text" placeholder='Your Name'/>
                  <input type="text" placeholder='Your Email or Whatsapp'/>
                  <textarea name="user message" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
                  <button>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}
