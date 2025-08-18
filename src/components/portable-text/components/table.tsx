"use client"
import ReactPlayer from "react-player";
// Dummy file for test
export default function Table({ data }: {
    data: { videoUrl: string; };
}) {
    return (
        <div className='mt-12 p-4 md:p-4 border border-dashed rounded-3xl aspect-video'>
            <div className="h-full w-full rounded-2xl overflow-hidden">
                <ReactPlayer
                    url={data.videoUrl}
                    width="100%"
                    height="100%"
                    playing={false}
                    controls={true}
                />
            </div>
        </div>
    )
}