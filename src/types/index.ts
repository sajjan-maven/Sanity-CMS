import { PageBySlugQueryResult } from "../../sanity.types";

type PageBuilderBlock =
  NonNullable<NonNullable<PageBySlugQueryResult>["pageBuilder"]>[number] & { _type?: string };
export type PageBuilderBlockTypes = Exclude<PageBuilderBlock["_type"], undefined | null>;

export type PageBuilderType<T extends PageBuilderBlockTypes> = Extract<
  PageBuilderBlock,
  { _type: T }
>;

// export type PageBuilderBlockTypes = NonNullable<
//   NonNullable<PageBySlugQueryResult>["pageBuilder"]
// >[number]["_type"];

// export type PageBuilderType<T extends PageBuilderBlockTypes> = Extract<
//   NonNullable<NonNullable<PageBySlugQueryResult>["pageBuilder"]>[number],
//   { _type: T }
// >;

export type ButtonType = NonNullable<
  NonNullable<PageBuilderType<"heroBlock">>["buttons"]
>[number];

export type PortableTextProps = NonNullable<
  NonNullable<PageBuilderType<"heroBlock">>["content"]
>;

export type FormType = NonNullable<
  NonNullable<PageBuilderType<"formBlock">>["form"]
>;