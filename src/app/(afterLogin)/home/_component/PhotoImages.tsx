import { PostType } from "@/model/Post"
import Link from "next/link"

interface Props {
    post: PostType
}

export default function PhotoImages ({post}: Props) {
    if(!post.images) return null
    if(!post.images.length) return null
    if(post.images.length === 1) {
        return (
            <>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.images[0].imageId}`} className="block h-[510px]">
                    <img src={post.images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>
            </>
        )
    }
    if(post.images.length === 2) {
        return (
            <div className="flex gap-1">
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.images[0].imageId}`} className="flex-1 h-[400px]">
                    <img src={post.images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.images[1].imageId}`} className="flex-1 h-[400px]">
                    <img src={post.images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>                
            </div>
        )
    }    
    if(post.images.length === 3) {
        return (
            <div className="grid grid-flow-col grid-rows-2 gap-1 h-[300px]">
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.images[0].imageId}`} className="row-span-2">
                    <img src={post.images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.images[1].imageId}`} className="">
                    <img src={post.images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.images[2].imageId}`} className="">
                    <img src={post.images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>                                                
            </div>
        )
    }        
    if(post.images.length === 4) {
        return (
            <div className="grid grid-cols-2 gap-1">
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.images[0].imageId}`} className="h-[300px] block">
                    <img src={post.images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.images[1].imageId}`} className="h-[300px] block">
                    <img src={post.images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.images[2].imageId}`} className="h-[300px] block">
                    <img src={post.images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>                                                
                <Link href={`/${post.User.id}/status/${post.postId}/photo/${post.images[3].imageId}`} className="h-[300px] block">
                    <img src={post.images[0].link} alt="" className="object-cover w-full h-full"/>
                </Link>                                                                
            </div>
        )
    }            
}