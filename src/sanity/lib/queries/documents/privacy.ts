import { defineQuery } from "next-sanity";
import { pageBuilder } from "../fragments/page-builder";

export const privacyPageQuery = defineQuery(`*[_type == 'privacyPage'][0] {
	_id,
	_type,
	title,
	content[],
	${pageBuilder},
	"seo": {
		"title": coalesce(seo.title, title, ""),
		"description": coalesce(seo.description,  ""),
		"noIndex": seo.noIndex == true,
		"image": seo.image,
	},
}`);
