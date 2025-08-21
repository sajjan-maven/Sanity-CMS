// components/portable-text/components/iframe-embed.tsx
export default function Iframe({value}:{value:{url:string; title?:string; height?:number; allow?:string}}) {
	const {url, title, height = 400, allow = 'fullscreen'} = value
	// optionally whitelist domains before rendering
	return (
	  <div>
		<iframe
		  src={url}
		  title={title || 'embed'}
		  height={height}
		  width="100%"
		  allow={allow}
		  loading="lazy"
		  referrerPolicy="no-referrer-when-downgrade"
		  style={{display:'block'}}
		  allowFullScreen
		/>
	  </div>
	)
}