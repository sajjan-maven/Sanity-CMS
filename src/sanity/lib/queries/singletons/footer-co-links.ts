import { defineQuery} from "next-sanity";

export const footerCoLinksQuery = defineQuery(`*[_type == "footer"][0] {
  footerCoLinks {
    companyNameMark {
      asset->{
        url,
      }
    },
    copyright,
    coLinks[] {
      label,
      url
    },
    businessEmail,
  }
}`);