import { IKImage } from "imagekitio-react"

const Image = ({src, className, width, height, alt}) => {
    return (
        <IKImage urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} path={src} className={className} alt={alt} loading="lazy" lqip={{active: true, quality: 20}} width={width} height={height} transformation={[
            {
                width,
                height
            }
        ]}/>
    )
}

export default Image