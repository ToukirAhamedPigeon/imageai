'use client'
import React from 'react'
import { toast } from "sonner"
import { CldImage, CldUploadWidget } from 'next-cloudinary'
import { CircleCheckIcon, CircleXIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { dataUrl, getImageSize } from '@/lib/utils'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'

type MediaUploaderProps = {
    onValueChange: (value:string) => void,
    setImage: React.Dispatch<any>,
    image: any,
    publicId: string,
    type: string,
}


const MediaUploader = ({
    onValueChange,
    setImage,
    image,
    publicId,
    type,
}:MediaUploaderProps) => {
    const onUploadSuccessHandler = (result:any) => {
        setImage((prevState:any)=>({
            ...prevState,
            publicId: result?.info?.public_id,
            width: result?.info?.width,
            height: result?.info?.height,
            secureURL: result?.info?.secure_url,
        }))
        onValueChange(result?.info?.public_id)
        toast.success('Image uploaded successfully',{
            description: '1 credit was deducted from your account',
            duration: 5000,
            icon: <CircleCheckIcon className='w-4 h-4' />,
         })
    }
    const onUploadErrorHandler = () => {
        toast.error('Something went wrong while uploading image',{
           description: 'Please try again',
           duration: 5000,
           icon: <CircleXIcon className='w-4 h-4' />,
        })
    }
  return (
    <CldUploadWidget
    uploadPreset='imageai'
    options={{
        resourceType: 'image',
        multiple: false
    }}
    onSuccess={onUploadSuccessHandler}
    onError={onUploadErrorHandler}
    >
        {({open})=>(
            <div className="flex flex-col gap-4">
                <h3 className="h3-bold text-dark-600">Original</h3>
                {publicId ? (
                    <>
                        <div className="cursor-pointer overflow-hidden rounded-[10px]">
                            <CldImage
                             width={getImageSize(type,image,"width")} 
                             height={getImageSize(type,image,"height")} 
                             alt={type}
                             sizes={"(max-width:767px) 100vw, 50vw"}
                             placeholder={dataUrl as PlaceholderValue}
                             src={publicId}
                             className='media-uploader_cldImage'
                            />
                        </div>
                    </>
                ):(
                    <div className='media-uploader_cta' onClick={()=>open()}>
                           <div className="media-uploader_cta-image">
                                <Image src="/assets/icons/add.svg" alt='Add Image' width={24} height={24} />
                           </div>
                           <p className="p-14-medium">Click here to upload image</p>
                    </div>
                )}
            </div>
        )}
    </CldUploadWidget>
  )
}

export default MediaUploader
