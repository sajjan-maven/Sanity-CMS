import Video from './components/video';
import CallToAction from './components/call-to-action';
import SingleImage from './components/single-image';
import { PortableTextComponents } from '@portabletext/react';
import { portableTextHeadings } from './components/headings';
import TableBlock from './components/content-table';
import Iframe from './components/iframe';

export const portableTextComponents: PortableTextComponents = {
  types: {
    callToActionObject: (data) => {
      return <CallToAction data={data.value} />
    },
    singleImageObject: (data) => {
      return <SingleImage data={data.value} />
    },
    videoObject: (data) => {
      return <Video data={data.value} />
    },
    table: TableBlock,
    iframe: Iframe
  },
  block: {
    ...portableTextHeadings
  },
}