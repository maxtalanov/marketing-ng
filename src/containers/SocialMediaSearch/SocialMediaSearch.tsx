import "./SocialMediaSearch.scss";
import {FC} from "react";


const SocialMediaSearch_CLASS: string = 'socialMediaSearch';

const SocialMediaSearch: FC = () => {

    return (
        <section className={`${SocialMediaSearch_CLASS}`}>
            <h4
                className={`${SocialMediaSearch_CLASS}__title`}
            >
                Search through more than 11 million social media profiles
            </h4>
            <p
                className={`${SocialMediaSearch_CLASS}__subTitle`}
            >
                Heepsy’s search filters help you find exactly what you’re looking for, and our influencer reports
                provide you with the metrics
            </p>

            <ul
                className={`${SocialMediaSearch_CLASS}__list`}
            >
                <li className={`${SocialMediaSearch_CLASS}__el`}>
                    <h3 className={`${SocialMediaSearch_CLASS}__el-title`}>2260</h3>
                    <p className={`${SocialMediaSearch_CLASS}__el-text`}>Satisfied Brands</p>
                </li>
                <li className={`${SocialMediaSearch_CLASS}__el`}>
                    <h3 className={`${SocialMediaSearch_CLASS}__el-title`}>1324</h3>
                    <p className={`${SocialMediaSearch_CLASS}__el-text`}>Satisfied Clients</p>
                </li>
                <li className={`${SocialMediaSearch_CLASS}__el`}>
                    <h3 className={`${SocialMediaSearch_CLASS}__el-title`}>3453</h3>
                    <p className={`${SocialMediaSearch_CLASS}__el-text`}>Sponsored</p>
                </li>
                <li className={`${SocialMediaSearch_CLASS}__el`}>
                    <h3 className={`${SocialMediaSearch_CLASS}__el-title`}>9786</h3>
                    <p className={`${SocialMediaSearch_CLASS}__el-text`}>Completed</p>
                </li>
            </ul>
        </section>
    )
}

export default SocialMediaSearch;