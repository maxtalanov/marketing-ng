import "./ContentBlock-1.scss";
import React, { FC } from "react";

const BLOCK_CLASS: string = "block";

const ContentBlockOne: FC = () => {
    return (
        <section className={`${BLOCK_CLASS}`}>
            <h2 className={`${BLOCK_CLASS}__title`}>Solutions for every need</h2>
            <p className={`${BLOCK_CLASS}__subTitle`}>
                Join thousands of marketers and entrepreneurs for a 2-day event at 
                the forefront of social commerce.
            </p>
            <div className={`${BLOCK_CLASS}__container`}>

            </div>
            
        </section>
    )
}

export default ContentBlockOne;