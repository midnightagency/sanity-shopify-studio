import { CloseIcon, ImageIcon } from '@sanity/icons'
import React, { forwardRef, useState } from 'react'

type Props = {
  isDeleted: boolean
  url: string
}

const CollectionMediaPreview = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { isDeleted, url } = props

  const [imageVisible, setImageVisible] = useState(true)

  // Hide image on error / 404
  const handleImageError = () => setImageVisible(false)

  return (
    <div
      ref={ref}
      style={{
        alignItems: 'center',
        borderRadius: 'inherit',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      {imageVisible && url ? (
        <img
          onError={handleImageError}
          src={`${url}&width=400`}
          style={{
            height: '100%',
            left: 0,
            objectFit: 'contain',
            position: 'absolute',
            top: 0,
            width: '100%'
          }}
        />
      ) : (
        <ImageIcon style={{ position: 'absolute' }} />
      )}

      {/* Item has been deleted */}
      {isDeleted && (
        <CloseIcon
          style={{
            background: 'rgba(255, 0, 0, 0.7)',
            color: 'rgba(255, 255, 255, 0.85)',
            height: '100%',
            position: 'relative',
            width: '100%'
          }}
        />
      )}
    </div>
  )
})

export default CollectionMediaPreview