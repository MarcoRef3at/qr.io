import * as React from 'react'
import { BiImageAdd } from 'react-icons/Bi'
export const ImageUploadField = ({ name, handleChange }) => {
  const retrievePathFile = (files) => {
    const file = files[0]
    if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
      console.error('Only png and jpg/jpeg allowed.')
    } else {
      const target = {}
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = (e) => {
        target.name = name
        target.value = reader.result
        target.logoName = file.name
        handleChange({ target })
      }
    }
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '6px' }}
    >
      <input
        type="file"
        accept="image/*"
        name={name}
        id="fileInput"
        onChange={(e) => retrievePathFile(e.target.files)}
        style={{ display: 'none' }}
      />
      <label htmlFor="fileInput">
        <BiImageAdd className="addImageButton" />
      </label>
    </div>
  )
}
