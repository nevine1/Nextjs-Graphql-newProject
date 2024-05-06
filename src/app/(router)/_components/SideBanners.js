import { useEffect,useState } from 'react'
import { sideBannerQuery} from '@/app/_utils/queries'
import Image from 'next/image'
import { setIsLoading } from '@/lib/features/courses/coursesSlice'

const SideBanners = () => {

    const [sideBannerList, setSideBannerList ] = useState([]);

    const fetchingSideBar = async () => {
      try{
        setIsLoading(true);
        const requestBody = {
          query: sideBannerQuery
        }
        const options = { 
          method: "POST", 
          headers:{'content-type': 'application/json'},
          body: JSON.stringify(requestBody)
        }
        const response = await (await fetch(process.env.NEXT_PUBLIC_COURSESLIST_ENDPOINT, options)).json();
        setSideBannerList(response?.data?.sideBanners)
      }catch(err){
        console.log(err)
      }finally{
        setIsLoading(false)
      }
    }
 
    useEffect(() => {
        fetchingSideBar();
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
            <Image src={bannerItem.banner.url} 
                width={500} 
                height={400}
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