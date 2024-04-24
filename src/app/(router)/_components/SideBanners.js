import { useEffect,useState } from 'react'
import GlobalAPI from '@/app/_utils/GlobalAPI'
import Image from 'next/image'
const SideBanners = () => {

    const [sideBannerList, setSideBannerList ] = useState([])
    const gettingSideBanners = async () =>{
        GlobalAPI.getSideBanner().then((res) =>{
            setSideBannerList(res?.sideBanners)
            console.log(sideBannerList)
        })
    }

    useEffect(() => {
        gettingSideBanners()
    }, [])

    const imageLoader = ({ src, width, quality }) => {
      // No CDN prefix needed, return the original src
      return src;
    }
  return (
    <div>
      {
        sideBannerList.map((bannerItem, index) =>(
          <div>
            <Image src={bannerItem.banner.url} width={100} 
              height={1000}
              loader={imageLoader}
                alt="banner image"
              className="rounded-xl cursor-pointer"
             onClick= {() =>{window.open(bannerItem?.url)}}
            />
          </div>
        ))
      }
    </div>
  )
}

export default SideBanners