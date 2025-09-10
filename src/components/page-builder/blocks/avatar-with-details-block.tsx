import { PageBuilderType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type AvatarWithDetailsProps = PageBuilderType<"avatarWithDetails">;

export default function AvatarWithDetails(props: AvatarWithDetailsProps) {
  const {
    sectionTitle,
    avatarList,
  } = props;


  return (
    <section className="w-full px-6 py-20">
      <div className="w-full max-w-[1256px] mx-auto">
        <h2 className="font-semibold text-[#363338] text-3xl md:text-[40px] leading-tight md:leading-[48px] mb-6 md:mb-10">
          {sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {avatarList?.map((avatar, index) => {

            return (
              <div key={index} className="relative bg-[#e4dbd0] rounded-[32px] overflow-hidden border-none">
                <div className="flex items-center gap-2 px-8 py-8">
                  <Image
                    src={avatar.avatar?.asset?.url || ''}
                    alt={`${avatar.name} Avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-medium text-[#363338] text-base leading-6">
                      {avatar.name}
                    </h3>
                    <span className="text-[#ff5020] font-normal text-xs leading-4">
                      {avatar.title}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start pt-0 px-8">
                  <p className="text-[#363338] text-sm leading-6">{avatar.bio}</p>
                  <div className="flex gap-3 mt-4 mb-8">
                    {avatar.socialLinks?.map((social, i) => {
                      return (
                        <Link
                          key={i}
                          href={social.url || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-5 h-5"
                          title={social.name || ''}
                        >
                          {social.icon?.asset?.url !== undefined ? (
                            <Image
                              src={social.icon?.asset?.url || ''}
                              alt={`${social.name} icon`}
                              width={20}
                              height={20}
                              className="w-5 h-5"
                            />
                          ) : (
                            <span className="w-5 h-5 bg-current rounded-full"></span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}