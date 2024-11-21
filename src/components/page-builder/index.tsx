import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { BlockType } from "@/types/page-builder/block";

const blockMap: Record<BlockType["_type"], ComponentType<any>> = {
  heroBlock: dynamic(() => import('./blocks/hero-block')),
  headerBlock: dynamic(() => import('./blocks/header-block')),
  featureBlock: dynamic(() => import('./blocks/feature-block')),
  testimonialBlock: dynamic(() => import('./blocks/testimonial-block')),
  logoBlock: dynamic(() => import('./blocks/logo-block')),
}

type PageBuilderProps = { blocks: BlockType[] }

export default function PageBuilder({ blocks }: PageBuilderProps) {
  return (
    <>
      {blocks?.map((block) => {
        const PB_Block = blockMap[block._type]
        if (!PB_Block) return null
        return <PB_Block key={block._key} { ...block } />
      })}
    </>
  )
}