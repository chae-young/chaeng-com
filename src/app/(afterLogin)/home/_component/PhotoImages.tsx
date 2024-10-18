import { PostType } from "@/model/Post"
import Link from "next/link"

interface Props {
    post: PostType
}

export default function PhotoImages ({post}: Props) {
    console.log(post.Images,'이미지스')
    if(!post.Images) return null
    if(!post.Images.length) return null
    if(post.Images.length === 1) {
        return (
            <>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`} className="block h-[510px]">
                    <img src={post.Images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>
            </>
        )
    }
    if(post.Images.length === 2) {
        return (
            <div className="flex gap-1">
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`} className="flex-1 h-[400px]">
                    <img src={post.Images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`} className="flex-1 h-[400px]">
                    <img src={post.Images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>                
            </div>
        )
    }    
    if(post.Images.length === 3) {
        return (
            <div className="grid grid-flow-col grid-rows-2 gap-1 h-[300px]">
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`} className="row-span-2">
                    <img src={post.Images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`} className="">
                    <img src={post.Images[1].link} alt="" className="object-cover w-full h-full"/>
                </Link>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`} className="">
                    <img src={post.Images[2].link} alt="" className="object-cover w-full h-full"/>
                </Link>                                                
            </div>
        )
    }        
    if(post.Images.length === 4) {
        return (
            <div className="grid grid-cols-2 gap-1">
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`} className="h-[300px] block">
                    <img src={post.Images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`} className="h-[300px] block">
                    <img src={post.Images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`} className="h-[300px] block">
                    <img src={post.Images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>                                                
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`} className="h-[300px] block">
                    <img src={post.Images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>                                                                
            </div>
        )
    }            
}