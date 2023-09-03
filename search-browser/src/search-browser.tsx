import { LaunchProps, closeMainWindow, open, popToRoot } from "@raycast/api";

const SEARCH_ALIAS: { [key: string]: string } = {
  gpt: "https://chat.openai.com/",
  youtube: "https://www.youtube.com/",
  github: "https://github.com/chaneesong?tab=repositories&type=source",
  naver: "https://www.naver.com/",
  tving: "https://www.tving.com/",
};

export default async function Command(props: LaunchProps<{ arguments: Arguments.SearchBrowser }>) {
  const { url } = props.arguments;
  if (SEARCH_ALIAS[url]) {
    const alias = SEARCH_ALIAS[url];
    await open(alias);
  } else {
    const startsWithHttps = /^https:\/\//.test(url);
    const fullUrl = startsWithHttps ? url : `https://${url}`;
    await open(fullUrl);
  }

  await popToRoot({ clearSearchBar: true });
  await closeMainWindow({ clearRootSearch: true });

  return null;
}
