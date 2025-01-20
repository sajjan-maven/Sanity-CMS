import CallToAction from './components/call-to-action';
import { PortableTextComponents } from '@portabletext/react';
import { portableTextHeadings } from './components/headings';
import SingleImage from './components/single-image';


export const portableTextComponents: PortableTextComponents = {
  types: {
    callToActionObject: (data) => {
      return <CallToAction data={data.value} />
    },
    singleImageObject: (data) => {
      return <SingleImage data={data.value}/>
    }
  },
  block: {
    ...portableTextHeadings
  },
}