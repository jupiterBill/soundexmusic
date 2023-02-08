import React,{} from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Style from "./signup.module.css";

import Image from "next/image";
const Signup = ()=>{
return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>
            Subcribe to our super-exclusive drop list and be the first to know
            abour upcoming drops
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image
            className={Style.image}
            src={"https://soundex.infura-ipfs.io/ipfs/QmSLYAnmiswCjeehP7SME5VrgB5nW3YqwNDUWDXzyyzUgG"}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
)
}
export default Signup