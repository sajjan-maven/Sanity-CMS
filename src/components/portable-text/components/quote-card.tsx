import Image from 'next/image';

export default function QuoteCard({ data }: {
    data: {
        quoteText: string;
        authorName: string;
        authorTitle: string;
        authorImage: {
            asset: {
                url: string;
            };
        };
    }
}) {
    const { quoteText, authorName, authorTitle, authorImage } = data;
    console.log('QuoteCard data:', data);
    return (
        <div className="w-full bg-white rounded-[32px] border border-solid mb-14 border-[#545058]">
            <div className="flex flex-col items-start gap-8 pt-6 p-8 md:pt-10 md:p-14">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                    <path d="M16.223 0L9.14389 23.197H16.6655V40H0V25.2788L8.84892 0H16.223ZM40.5576 0L33.4784 23.197H41V40H24.3345V25.2788L33.1835 0H40.5576Z" fill="#EB6548" />
                </svg>
                <div className="flex flex-col items-start gap-2 w-full">
                    <p className="font-normal text-lg leading-[26px]">
                        {quoteText}
                    </p>
                    <div className="flex items-center gap-4 w-full">
                        <div className="w-12 h-12 rounded-[100px] border border-solid border-[#54505833] bg-gray-300 overflow-hidden">
                            <Image
                                width={48}
                                height={48}
                                src={authorImage?.asset?.url || '/section-images/person.png'}
                                alt={authorName}
                                className='m-0'
                            />
                        </div>
                        <div className="flex flex-col items-start gap-1 flex-1">
                            <p className="font-medium text-[#7b7481] text-base leading-6 m-0">
                                {authorName}
                            </p>
                            <p className="font-normal text-[#7b7481] text-xs leading-4 m-0">
                                {authorTitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
