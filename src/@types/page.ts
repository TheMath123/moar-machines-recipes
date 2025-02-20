export type Params = Promise<{
  [key: string]: string | string[] | undefined;
}>;
export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export interface ServerComponentPageProps {
  params: Params;
  searchParams: SearchParams;
}

export interface ClientComponentPageProps {
  params: Record<string, string | string[] | undefined>;
  searchParams: Record<string, string | string[] | undefined>;
}
