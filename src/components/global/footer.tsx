import { SettingsType } from '@/types/settings';
import SiteLogo from '../shared/site-logo';
import Container from './container';
import Heading from '../ui/heading';

interface FooterProps {
  settings: SettingsType;
}

export default function Footer({ settings }: FooterProps) {

  const { siteTitle, logo } = settings

  return (
    <footer className='pt-20 border-t'>
      <Container>
        <div className='w-full flex items-start gap-60'>
          <div className='flex-none'>
            <SiteLogo siteTitle={siteTitle} logo={logo} location="footer" />
          </div>
          <div className='flex-1 grid grid-cols-4 gap-8'>
            <div className='w-full'>
              <Heading size="h6" className='font-semibold'>
                Features
              </Heading>
            </div>
            <div className='w-full'>
              <Heading size="h6" className='font-semibold'>
                Resources
              </Heading>
            </div>
            <div className='w-full'>
              <Heading size="h6" className='font-semibold'>
                Company
              </Heading>
            </div>
            <div className='w-full'>
              <Heading size="h6" className='font-semibold'>
                Socials
              </Heading>
            </div>
          </div>
        </div>
        <div className='mt-20 py-6 border-t border-dashed text-sm'>
          SiteEngine © 2024 - Made by <a href="" className='font-bold tracking-tight'>James Rea.</a>
        </div>
      </Container>
    </footer>
  )
}