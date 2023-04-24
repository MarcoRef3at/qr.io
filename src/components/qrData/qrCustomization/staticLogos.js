import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, CardImg } from 'reactstrap'
import { ImageUploadField } from '../../shared/imageUpload'

export default function StaticLogos({ handleChange }) {
  const defaultImages = [
    'https://res.cloudinary.com/pgahq/image/upload/v1645366366/Home/logos/logo_pga.png',
    'https://res.cloudinary.com/pgahq/image/upload/v1593888568/member-images/pga_logo_gybc9s.jpg',
    'https://res.cloudinary.com/pgahq/image/upload/v1634221145/dot-com-images/PGAJL-Logo_wcbxa2.jpg',
    'https://res.cloudinary.com/pgahq/image/upload/v1648054145/dot-com-images/PGA_Associate_Logo_for_Web_Use_Color_hbtmxy.png',
  ]
  const [images, setImages] = useState(defaultImages)
  const [selectedImage, setSelectedImage] = useState(null)

  const addImageToQr = () => {
    const target = { name: 'logoImage', value: images[selectedImage] }
    handleChange({ target })
  }
  useEffect(() => {
    addImageToQr()
  }, [selectedImage])

  return (
    <div className="logos">
      <ButtonGroup className="my-2" size="lg">
        {images.map((image, i) => {
          return (
            <Button outline key={i} onClick={() => setSelectedImage(i)}>
              <CardImg
                className="icon-image"
                alt="Card image cap"
                src={image}
                style={{
                  height: '100%',
                }}
                width="100%"
              />
            </Button>
          )
        })}
        <Button outline>
          <ImageUploadField
            name="logoImage"
            handleChange={({ target }) => {
              setImages([...images, target.value])
              setSelectedImage(images.length)
            }}
          />
        </Button>
      </ButtonGroup>
    </div>
  )
}
