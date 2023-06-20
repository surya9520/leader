import Image from "next/image"
import {AiFillCaretDown } from "react-icons/ai";

function Card() {
  return (
    <>

               <div className="rank-item">
                <div className="position">
                    <p>1</p>
                    <AiFillCaretDown className="arrow" />
                  
                </div>
                <div className="rank-content">
                    <Image src="./user1.jpg" height={272}  width={272} alt=""/>
                    <div className="name">@hero852</div>
                    <div className="scores">3005</div>
                </div>
            </div>
    </>
  )
}

export default Card
