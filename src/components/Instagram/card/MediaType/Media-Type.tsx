import './Media-Type.scss';
import React, {FC} from "react";
import InstagramHeader from "../../Instagram-Header/Instaram-Header";

const MEDIATYPE_CLASS: string = 'media-type';

interface MediaTypeProps {}

const MediaType: FC<MediaTypeProps> = () => {

  return(
      <div className={`${MEDIATYPE_CLASS}`}>
          <InstagramHeader type={'media'} title={'Follower Growth'}/>
          <div className={`${MEDIATYPE_CLASS}__ellipse`}>
              <div className={`${MEDIATYPE_CLASS}__line`}>

              </div>
          </div>
      </div>
  )
}

export default MediaType;