import { Button } from "@/components/ui/button";

export default function CallToAction({ data }: {
  data: {
    callToActionTitle: string;
    callToActionParagraph: string;
  }
}) {

  const { 
    callToActionTitle: title,
    callToActionParagraph: paragrapgh
  } = data

  return (
    <div className='mt-16 w-full p-8 flex flex-col md:flex-row items-start md:items-center gap-8 border rounded-2xl pattern-bg--2'>
      <div className="space-y-3">
        <div className="font-medium text-xl text-balance">
          {title}
        </div>
        <p className="text-pretty text-gray-500">
          {paragrapgh}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button variant="primary" buttonType="internal" className="decoration-transparent">
          Get Started
        </Button>
      </div>
    </div>
  )
}