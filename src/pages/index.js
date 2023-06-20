import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from './Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <div className="container">
        <h1>Leaderboard</h1>
        <div className="nav">
          <ul>
            <li>Today</li>
            <li>Week</li>
            <li>Month</li>
          </ul>
        </div>
        <div className="achiver-container">
          <div className="achive position-second">
            <div className="up">
              <p>2</p>
            </div>
            <Image src="./user1.jpg" height={272} width={272} alt="" className='achiver-img' />
            <div className="down">
              <p>@Prachi456</p>
              <span className="score">5678</span>
            </div>
          </div>
          <div className="achive position-first">
            <div className="up">
              <p>1</p>
            </div>
            <Image src="./user2.jpg" height={272} width={272} alt="" className='achiver-img' />
            <div className="down">
              <p>@Adam456</p>
              <span className="score">5678</span>
            </div>
          </div>
          <div className="achive position-third">
            <div className="up">
              <p>3</p>
            </div>
            <Image src="./user-3.png" height={272} width={272} alt="" className='achiver-img' />
            <div className="down">
              <p>@Harshita456</p>
              <span className="score">5678</span>
            </div>
          </div>
        </div>
        <div className="rank-list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>


      </div>
    </>
  )
}
