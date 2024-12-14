import CallToAction from './components/call-to-action';
import { PortableTextComponents } from '@portabletext/react';
import { portableTextHeadings } from './components/headings';

export const portableTextComponents: PortableTextComponents = {
  types: {
    callToActionObject: (data) => {
      return <CallToAction data={data.value} />
    }
  },
  block: {
    ...portableTextHeadings
  },
}